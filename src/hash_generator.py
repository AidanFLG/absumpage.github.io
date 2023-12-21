-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

-- Insert user credentials with actual hashed passwords
INSERT INTO users (username, password_hash) VALUES ('ALG', '$2b$12$NYTfGBte52SkwpvUmMIABeHEXjXgskEAi94n.aoTMIJ0d9RWumTdy');
INSERT INTO users (username, password_hash) VALUES ('Bd', '$2b$12$cEYrNCcluzkWMXl6GwLdqO66E.S6y2iJ7bLMoINdmM8QRY39.1Bd.');