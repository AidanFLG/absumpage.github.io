/*
This is the Custom Blocks File. The purpose of this file is to house all the blocks that are being used in our code. 
Each block that gets created("Blockly.Blocks"), must have its own javascript("Blockly.JavaScript"). After creating a block,
you must add it to the library of blocks that are displayed in the index file. All of the provided blocks are meant to build 
a block in the UI and create some sort of code when used and code is either downloaded or generated.
*/

// Import SwiftUI and create ContentView block
Blockly.Blocks['import_swiftui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import SwiftUI")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates import in swift
Blockly.JavaScript['import_swiftui'] = function(block) {
  var code = "import SwiftUI\n";
  return code;
};

Blockly.Blocks['on_tap_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Tap Gesture");
    this.appendStatementInput("ACTION")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_tap_gesture'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
  var code = ".onTapGesture {\n" + statements_action + "}\n";
  return code;
};

Blockly.Blocks['struct'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("struct")
        .appendField(new Blockly.FieldTextInput("struct name"), "STRUCTNAME");
    this.appendStatementInput("FUNCTION")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.JavaScript['struct'] = function(block) {
  var name = block.getFieldValue('STRUCTNAME');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'FUNCTION');
  var code = "struct " + name + ": View {\n" + statements_action + "\n}\n";
  return code;
};

Blockly.Blocks['var_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var body")
        .appendField(new Blockly.FieldTextInput("view type"), "VIEWTYPE");
    this.appendStatementInput("VIEW")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.JavaScript['var_body'] = function(block) {
  var view = block.getFieldValue('VIEWTYPE');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'VIEW');
  var code = "\nvar body: " + view + " {\n" + statements_action + "\n}\n";
  return code;
};


// Import SwiftUI and create ContentView block
Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import")
        .appendField(new Blockly.FieldTextInput("Enter import name"), "IMPORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates import in swift
Blockly.JavaScript['import'] = function(block) {
  var var_import = block.getFieldValue('IMPORT');
  var code = "import " + var_import + "\n";
  return code;
};

// Create Content View
Blockly.Blocks['create_contentview'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create ContentView")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates content view in swift
Blockly.JavaScript['create_contentview'] = function(block) {
  var code = "struct ContentView: View {\n";
  return code;
};

// Create Content View
Blockly.Blocks['contentview_preview'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Content Preview")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates content view in swift
Blockly.JavaScript['contentview_preview'] = function(block) {
  var code = "struct ContentView_Previews: PreviewProvider {\nstatic var previews: some View {\nContentView()\n}\n}";
  return code;
};

Blockly.Blocks['content_closer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close Content")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Closes out content
Blockly.JavaScript['content_closer'] = function(block) {
  var code = "\n\n";
  code += "}";
  return code;
};


// Create a variable block
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput("VAR_NAME")
        .appendField("variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['variable'] = function(block) {
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var var_value = block.getFieldValue('VALUE'); // Get the variable value
  var code = "\n";
  code += "var " + var_name + " = " + var_value;
  return code; // Return the code as a string directly, no need for an array
};

// Create a state variable block
Blockly.Blocks['state_variable'] = {
  init: function() {
    this.appendDummyInput("VAR_STATE")
        .appendField("Public or Private:")
        .appendField(new Blockly.FieldTextInput("public or private or "), "STATE");
    this.appendDummyInput("VAR_NAME")
        .appendField("state variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['state_variable'] = function(block) {
  var var_state = block.getFieldValue('STATE'); // Get the state value
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var var_value = block.getFieldValue('VALUE'); // Get the variable value
  var code = "\n";
  code += "@state " + var_state + " " + var_name + " = " + var_value;
  return code; // Return the code as a string directly, no need for an array
};

Blockly.Blocks['foreground_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".foregroundColor(");
    this.appendValueInput("TERNARY_OPERATOR")
        .setCheck(null)
        .appendField("Condition");
    this.appendDummyInput()
        .appendField(")");
    this.appendValueInput('Action')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Set foreground color based on a condition");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['foreground_color'] = function(block) {
  var ternaryOperator = Blockly.JavaScript.valueToCode(block, 'TERNARY_OPERATOR', Blockly.JavaScript.ORDER_NONE);
  
  var code = ".foregroundColor" + ternaryOperator;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['ternary_operator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ternary Operator");
    this.appendDummyInput()
        .appendField("Condition")
        .appendField(new Blockly.FieldTextInput(""), "CONDITION");
    this.appendDummyInput()
        .appendField("?")
    this.appendDummyInput()
        .appendField("True Value")
        .appendField(new Blockly.FieldTextInput(""), "TRUE_VALUE");
    this.appendDummyInput()
        .appendField(":");
    this.appendDummyInput()
        .appendField("False Value")
        .appendField(new Blockly.FieldTextInput(""), "FALSE_VALUE");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Ternary operator");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['ternary_operator'] = function(block) {
  var condition = block.getFieldValue('CONDITION');
  var trueValue = block.getFieldValue('TRUE_VALUE');
  var falseValue = block.getFieldValue('FALSE_VALUE');
  
  var code = "(" + condition + " ? " + trueValue + " : " + falseValue + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['variable_toggle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Toggle state variable named:")
        .appendField(new Blockly.FieldTextInput("stateVariable"), "VAR_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Toggle the state variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['variable_toggle'] = function(block) {
  var var_name = block.getFieldValue('VAR_NAME');
  var code = var_name + ".toggle();\n";
  return code;
};

// Create a variable block
Blockly.Blocks['user_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.setOutput(true, "Variable");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['user_variable'] = function(block) {
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var code = var_name
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a text block
Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE");
    this.setOutput(true, "String");
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_input'] = function(block) {
  var var_value = block.getFieldValue('TEXT_VALUE'); // Get the variable value
  var code = var_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a variable block
Blockly.Blocks['user_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAMES");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['user_single'] = function(block) {
  var var_name = block.getFieldValue('NAMES'); // Get the variable name value
  var code = var_name
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a text block
Blockly.Blocks['text_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE_S");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_single'] = function(block) {
  var var_value = block.getFieldValue('TEXT_VALUE_S'); // Get the variable value
  var code = var_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a list block
Blockly.Blocks['list_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput('none'), 'STATE'); // Provide a default value
    this.appendDummyInput()
      .appendField('public, private, or none:')
      .appendField(new Blockly.FieldTextInput('none'), 'PPN'); // Provide a default value
    this.appendDummyInput()
      .appendField('var or let:')
      .appendField(new Blockly.FieldTextInput('var'), 'VORL'); // Provide a default value
    this.appendDummyInput()
      .appendField('list name:')
      .appendField(new Blockly.FieldTextInput('Enter name'), 'NAME'); // Provide a placeholder
    this.appendDummyInput()
      .appendField(': or =')
      .appendField(new Blockly.FieldTextInput(':'), 'EQUALS'); // Provide a default value
    // Create an input for group name only if EQUALS is ":"
    if (this.getFieldValue('EQUALS') === ':') {
      this.appendDummyInput()
        .appendField('group name:')
        .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME'); // Provide a placeholder
    }
    this.appendStatementInput('ITEMS')
      .setCheck('List_Item')
      .appendField('insert blocks as items in list');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, 'List');
    this.setColour(230);
    this.setTooltip('Create a List');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['list_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('List Item:');
    this.appendValueInput('ITEM')
      .setCheck(null);
    this.setPreviousStatement(true, 'List_Item');
    this.setNextStatement(true, 'List_Item');
    this.setColour(430);
    this.setTooltip('List item');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['list_input'] = function (block) {
  var var_state = block.getFieldValue('STATE');
  var var_ppn = block.getFieldValue('PPN');
  var var_vorl = block.getFieldValue('VORL');
  var var_name = block.getFieldValue('NAME');
  var var_equals = block.getFieldValue('EQUALS');
  var var_group_name = block.getFieldValue('GROUP_NAME');
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  var code = '';
  if (var_state) {
    code += var_state + ' ';
  }
  if (var_ppn) {
    code += var_ppn + ' ';
  }
  code += var_vorl + ' ' + var_name + ' ' + var_equals + ' ';

  if (var_equals === ':') {
    code += var_group_name + ' ';
  }
  
  code += '[' + items + ']';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};

// Create an array item block
Blockly.Blocks['array_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Array Item: ");
    this.appendValueInput("ITEM")
      .setCheck(null);
    this.setPreviousStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setNextStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setColour(430);
    this.setTooltip("Array item");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['array_item'] = function(block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item + ', ';  // Make sure to return the code in a way that is compatible with your 'array_input' block
};

// Create an array block
Blockly.Blocks['array_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput('none'), 'STATE'); // Provide a default value
    this.appendDummyInput()
      .appendField('public, private, or none:')
      .appendField(new Blockly.FieldTextInput('none'), 'PPN'); // Provide a default value
    this.appendDummyInput()
      .appendField('var or let:')
      .appendField(new Blockly.FieldTextInput('var'), 'VORL'); // Provide a default value
    this.appendDummyInput()
      .appendField('array name:')
      .appendField(new Blockly.FieldTextInput('Enter name'), 'NAME'); // Provide a placeholder
    this.appendDummyInput()
      .appendField(': or =')
      .appendField(new Blockly.FieldTextInput(':'), 'EQUALS'); // Provide a default value
    // Create an input for group name only if EQUALS is ":"
    if (this.getFieldValue('EQUALS') === ':') {
      this.appendDummyInput()
        .appendField('group name:')
        .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME'); // Provide a placeholder
    }
    this.appendStatementInput('ITEMS')
      .setCheck('Array_Item')
      .appendField('insert blocks as items in array');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, 'Array');
    this.setColour(230);
    this.setTooltip('Create an Array');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['array_input'] = function (block) {
  var var_state = block.getFieldValue('STATE');
  var var_ppn = block.getFieldValue('PPN');
  var var_vorl = block.getFieldValue('VORL');
  var var_name = block.getFieldValue('NAME');
  var var_equals = block.getFieldValue('EQUALS');
  var var_group_name = block.getFieldValue('GROUP_NAME');
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  var code = '';
  if (var_state) {
    code += var_state + ' ';
  }
  if (var_ppn) {
    code += var_ppn + ' ';
  }
  code += var_vorl + ' ' + var_name + ' ' + var_equals + ' ';

  if (var_equals === ':') {
    code += var_group_name + ' ';
  }
  
  code += '[' + items + ']';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['array_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};

/*button block: This block allows the user to create a Button with a title and an action. 
The action is a set of statements that will be executed when the button is tapped.*/
Blockly.Blocks['button'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Button");
	  this.appendValueInput("TITLE")
		  .setCheck("String")
		  .appendField("title");
	  this.appendStatementInput("ACTION")
		  .setCheck(null)
		  .appendField("action");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(260);
	  this.setTooltip("Creates a Button with an action.");
	  this.setHelpUrl("");
	}
  };
  
Blockly.JavaScript['button'] = function(block) {
  var title = Blockly.JavaScript.valueToCode(block, 'TITLE', Blockly.JavaScript.ORDER_ATOMIC);
  // Default action for the button if none is provided
  var action = Blockly.JavaScript.statementToCode(block, 'ACTION') || 'print("Button was tapped")\n';
  var code = 'Button("' + title + '") {\n' + action + '}\n';
  return code;
};



  /*
  This block creates a TextField with a placeholder text. 
  The 'text' field is expected to be a variable that will be updated with the text entered by the user.
  */
  Blockly.Blocks['textfield'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("TextField");
	  this.appendValueInput("PLACEHOLDER")
		  .setCheck("String")
		  .appendField("placeholder");
	  this.appendValueInput("TEXT")
		  .setCheck("Variable")
		  .appendField("text");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(100);
	  this.setTooltip("Creates a TextField with a placeholder.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['textfield'] = function(block) {
	var placeholder = Blockly.JavaScript.valueToCode(block, 'PLACEHOLDER', Blockly.JavaScript.ORDER_ATOMIC);
	var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'TextField(' + placeholder + ', text: ' + text + ')\n';
	return code;
  };

  /*Image Block
  The Image block simply creates an Image view with the specified image name. 
  It's important that the image name corresponds to an image asset in the user's project.
  */
  Blockly.Blocks['image'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Image");
	  this.appendDummyInput("NAME")
		  .appendField("name:")
		  .appendField(new Blockly.FieldTextInput("image_name"), "NAME");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(100);
	  this.setTooltip("Creates an Image view.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['image'] = function(block) {
	var imageName = block.getFieldValue('NAME');
	var code = 'Image("' + imageName + '")\n';
	return code;
  };


  /*Slider Block: This block represents a Slider view in SwiftUI, 
  allowing users to specify a value, minimum and maximum range, and a step value.
  */
  Blockly.Blocks['slider'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Slider");
	  this.appendValueInput("VALUE")
		  .setCheck("Number")
		  .appendField("value");
	  this.appendDummyInput()
		  .appendField("in range")
		  .appendField(new Blockly.FieldNumber(0), "MIN")
		  .appendField("to")
		  .appendField(new Blockly.FieldNumber(1), "MAX");
	  this.appendValueInput("STEP")
		  .setCheck("Number")
		  .appendField("step");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(260);
	  this.setTooltip("Creates a Slider with a specific range and step.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['slider'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
	var min = block.getFieldValue('MIN');
	var max = block.getFieldValue('MAX');
	var step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'Slider(value: ' + value + ', in: ' + min + '...' + max + ', step: ' + step + ')\n';
	return code;
  };

  //Hstack Block: This block creates a horizontal stack (HStack) with alignment and spacing.
  Blockly.Blocks['hstack'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("HStack alignment")
		  .appendField(new Blockly.FieldDropdown([
			["center", "center"], 
			["leading", "leading"], 
			["trailing", "trailing"]
		  ]), "ALIGNMENT");
	  this.appendDummyInput()
		  .appendField("spacing")
		  .appendField(new Blockly.FieldNumber(0, 0), "SPACING");
	  this.appendStatementInput("CONTENT")
		  .setCheck(null)
		  .appendField("content");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(190);
	  this.setTooltip("Creates a horizontal stack (HStack) with alignment and spacing.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['hstack'] = function(block) {
	var alignment = block.getFieldValue('ALIGNMENT');
	var spacing = block.getFieldValue('SPACING');
	var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
	var code = `HStack(alignment: .${alignment}, spacing: ${spacing}) {\n${content}}\n`;
	return code;
  };
  
  //Vstack Block: This block creates a vertical stack (VStack) with alignment and spacing.
  Blockly.Blocks['vstack'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("VStack alignment")
		  .appendField(new Blockly.FieldDropdown([
			["center", "center"], 
			["leading", "leading"], 
			["trailing", "trailing"]
		  ]), "ALIGNMENT");
	  this.appendDummyInput()
		  .appendField("spacing")
		  .appendField(new Blockly.FieldNumber(0, 0), "SPACING");
	  this.appendStatementInput("CONTENT")
		  .setCheck(null)
		  .appendField("content");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(190);
	  this.setTooltip("Creates a vertical stack (VStack) with alignment and spacing.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['vstack'] = function(block) {
	var alignment = block.getFieldValue('ALIGNMENT');
	var spacing = block.getFieldValue('SPACING');
	var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
	var code = `VStack(alignment: .${alignment}, spacing: ${spacing}) {\n${content}}\n`;
	return code;
  };
  
  //Zstack Block: This block creates a stack that layers its children, aligning them in both axes (ZStack).
  Blockly.Blocks['zstack'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("ZStack alignment")
		  .appendField(new Blockly.FieldDropdown([
			["center", "center"], 
			["top", "top"], 
			["bottom", "bottom"]
		  ]), "ALIGNMENT");
	  this.appendStatementInput("CONTENT")
		  .setCheck(null)
		  .appendField("content");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(190);
	  this.setTooltip("Creates a stack that layers its children, aligning them in both axes (ZStack).");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['zstack'] = function(block) {
	var alignment = block.getFieldValue('ALIGNMENT');
	var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
	var code = `ZStack(alignment: .${alignment}) {\n${content}}\n`;
	return code;
  };
  
  // Control Flow Blocks - If Statement Block
  Blockly.Blocks['swiftui_if'] = {
	init: function() {
	  this.appendValueInput("CONDITION")
		  .setCheck("Boolean")
		  .appendField("if");
	  this.appendStatementInput("DO")
		  .appendField("do");
	  this.appendStatementInput("ELSE")
		  .appendField("else");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
	  this.setTooltip("If-Else statement for SwiftUI conditional content.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['swiftui_if'] = function(block) {
	var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
	var doBranch = Blockly.JavaScript.statementToCode(block, 'DO');
	var elseBranch = Blockly.JavaScript.statementToCode(block, 'ELSE');
	var code = `if ${condition} {\n${doBranch}} else {\n${elseBranch}}\n`;
	return code;
  };
  
  //Modifiers Block - Padding
  Blockly.Blocks['modifier_padding'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(".padding(")
		  .appendField(new Blockly.FieldNumber(0), "VALUE")
		  .appendField(")");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(100);
	  this.setTooltip("Adds padding around the content.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['modifier_padding'] = function(block) {
	var paddingValue = block.getFieldValue('VALUE');
	var code = `.padding(${paddingValue})\n`;
	return code;
  };

  // Animation Block - Basic Animation
  Blockly.Blocks['modifier_animation'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(".animation(")
		  .appendField(new Blockly.FieldDropdown([
			["default", ".default"], 
			["easeInOut", ".easeInOut"], 
			["easeIn", ".easeIn"], 
			["easeOut", ".easeOut"]
		  ]), "TYPE")
		  .appendField(")");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(260);
	  this.setTooltip("Adds an animation modifier to the view.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['modifier_animation'] = function(block) {
	var animationType = block.getFieldValue('TYPE');
	var code = `.animation(${animationType})\n`;
	return code;
  };

  // Function Block - Define Function
  Blockly.Blocks['swiftui_function'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("func")
		  .appendField(new Blockly.FieldTextInput("myFunction"), "NAME");
	  this.appendDummyInput()
		  .appendField("(")
		  .appendField(new Blockly.FieldTextInput("parameters"), "PARAMS")
		  .appendField(")");
	  this.appendStatementInput("DO")
		  .appendField("do");
	  this.setColour(160);
	  this.setTooltip("Define a function with specified parameters and content.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['swiftui_function'] = function(block) {
	var functionName = block.getFieldValue('NAME');
	var params = block.getFieldValue('PARAMS');
	var doBranch = Blockly.JavaScript.statementToCode(block, 'DO');
	var code = `func ${functionName}(${params}) {\n${doBranch}}\n`;
	return code;
  };

  // Comment Block
  Blockly.Blocks['swiftui_comment'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("//")
		  .appendField(new Blockly.FieldTextInput("Type your comment here"), "COMMENT");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
	  this.setTooltip("Add a comment to the code.");
	  this.setHelpUrl("");
	}
  };
  
  Blockly.JavaScript['swiftui_comment'] = function(block) {
	var commentText = block.getFieldValue('COMMENT');
	var code = `// ${commentText}\n`;
	return code;
  };

// Ensure that the Blockly.Swift namespace is defined
Blockly.Swift = Blockly.Swift || {};

// Define the Blockly block for a @State variable in Swift
Blockly.Blocks['state_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("@State private var")
        .appendField(new Blockly.FieldTextInput("variableName"), "VAR_NAME")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("String"), "VAR_TYPE")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("\"\""), "VAR_VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Creates a @State variable");
    this.setHelpUrl("");
  }
};

// Generate the Swift code for the @State variable from the Blockly block
Blockly.Swift['state_variable'] = function(block) {
  var varName = block.getFieldValue('VAR_NAME');
  var varType = block.getFieldValue('VAR_TYPE');
  var varValue = block.getFieldValue('VAR_VALUE');
  
  // Check if any of the required values are missing and return an error or default code
  if (!varName || !varType || !varValue) {
    console.error('Missing values for state variable block');
    return '// Error: Missing values for state variable\n';
  }
  
  var code = '@State private var ' + varName + ': ' + varType + ' = ' + varValue + '\n';
  return code;
};
