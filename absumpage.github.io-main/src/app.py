from flask import Flask, render_template, request, session, redirect, g
import sqlite3
import bcrypt

app = Flask(__name__)

# Database configuration
DATABASE = 'users.db'
app.config['DATABASE'] = DATABASE

# Function to get the database connection
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
    return db

# Function to close the database connection
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

# Register a user (hashed password)
def register_user(username, password):
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    db = get_db()
    cursor = db.cursor()
    cursor.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', (username, hashed_password))
    db.commit()

# Function to verify user
def verify_user(username, password):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT password_hash FROM users WHERE username = ?', (username,))
    hashed_password = cursor.fetchone()
    if hashed_password:
        return bcrypt.checkpw(password.encode(), hashed_password[0].encode())
    return False

# Login route
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if verify_user(username, password):
            session['username'] = username
            return redirect('/tool')
        else:
            return "Invalid credentials. Please try again."

    return render_template('index.html')

# Tool page route
@app.route('/tool')
def tool():
    if 'username' in session:
        return render_template('tool.html', username=session['username'])
    return redirect('/')

# Logout route
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)