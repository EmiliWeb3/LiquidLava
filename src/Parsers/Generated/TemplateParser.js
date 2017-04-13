/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
Lava.TemplateParser = (function(){
var parser = {trace: function trace(){},
yy: {},
symbols_: {"error":2,"root":3,"EOF":4,"blocks":5,"block":6,"CONTENT":7,"INCLUDE":8,"EXPRESSION_BLOCK_N":9,"EXPRESSION_BLOCK_E":10,"blockStart":11,"BLOCK_END":12,"elsePart":13,"selfClosingTag":14,"tagStart":15,"TAG_END":16,"SCRIPT_CONTENT":17,"SWITCH_ON":18,"SWITCH_OFF":19,"OPEN_BLOCK":20,"blockInit":21,"BLOCK_CLOSE":22,"blockHash":23,"DYNAMIC_BLOCK_INIT":24,"EMPTY_ARGS":25,"EXPORT_ARGUMENTS":26,"BLOCK_INIT":27,"blockHashSegment":28,"IDENTIFIER":29,"HASH_ASSIGN":30,"STRING":31,"elseifChain":32,"BLOCK_ELSE":33,"blockElseif":34,"OPEN_ELSEIF":35,"TAG_OPEN":36,"TAG_END_CLOSE":37,"htmlHash":38,"TAG_CLOSE":39,"htmlHashSegment":40,"HASH_ATTRIBUTE":41,"UNESCAPED_HASH_ASSIGN":42,"$accept":0,"$end":1},
terminals_: {2:"error",4:"EOF",7:"CONTENT",8:"INCLUDE",9:"EXPRESSION_BLOCK_N",10:"EXPRESSION_BLOCK_E",12:"BLOCK_END",16:"TAG_END",17:"SCRIPT_CONTENT",18:"SWITCH_ON",19:"SWITCH_OFF",20:"OPEN_BLOCK",22:"BLOCK_CLOSE",24:"DYNAMIC_BLOCK_INIT",25:"EMPTY_ARGS",26:"EXPORT_ARGUMENTS",27:"BLOCK_INIT",29:"IDENTIFIER",30:"HASH_ASSIGN",31:"STRING",33:"BLOCK_ELSE",35:"OPEN_ELSEIF",36:"TAG_OPEN",37:"TAG_END_CLOSE",39:"TAG_CLOSE",41:"HASH_ATTRIBUTE",42:"UNESCAPED_HASH_ASSIGN"},
productions_: [0,[3,1],[3,2],[5,2],[5,1],[6,1],[6,1],[6,1],[6,1],[6,2],[6,3],[6,3],[6,4],[6,1],[6,2],[6,2],[6,3],[6,1],[6,1],[11,3],[11,4],[21,2],[21,2],[21,2],[21,2],[23,2],[23,1],[28,1],[28,2],[28,2],[13,3],[13,2],[13,1],[13,2],[13,1],[32,3],[32,2],[32,2],[32,1],[34,3],[14,2],[14,3],[15,2],[15,3],[38,2],[38,1],[40,1],[40,1],[40,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
/*``*/) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return [];
break;
case 2: return $$[$0-1];
break;
case 3:
			this.$ = $$[$0-1];
			if ($$[$0]) {
				// inline fragments
				if ($$[$0].name == 'script' && $$[$0].type == 'tag' && $$[$0].attributes && $$[$0].attributes.type == 'lava/fragment') {
					this.$ = $$[$0].content ? $$[$0-1].concat($$[$0].content) : $$[$0-1];
				} else if (typeof($$[$0]) == 'string' && this.$.length && typeof(this.$[this.$.length-1]) == 'string') {
					this.$[this.$.length-1] += $$[$0];
				} else {
					this.$.push($$[$0]);
				}
			}

break;
case 4:
			if ($$[$0]) {
				if ($$[$0].name == 'script' && $$[$0].type == 'tag' && $$[$0].attributes && $$[$0].attributes.type == 'lava/fragment') {
					this.$ = $$[$0].content || [];
				} else {
					this.$ = [$$[$0]];
				}
			} else {
				this.$ = [];
			}

break;
case 5:
			//this.$ = yy.preserve_whitespace ? $$[$0] : $$[$0].trim();
			this.$ = $$[$0];

break;
case 6:
			var evaluators = Lava.ExpressionParser.parse($$[$0]);
			if (evaluators.length != 1) Lava.t("Malformed include");
			evaluators[0].type = 'include';
			this.$ = evaluators[0];

break;
case 7:
			this.$ = {
				type: 'expression',
				prefix: $$[$0][1],
				arguments: Lava.ExpressionParser.parse(yytext.substr(3, yyleng - 4))
			};

break;
case 8:
			this.$ = {
				type: 'expression',
				prefix: $$[$0][1],
				arguments: Lava.ExpressionParser.parse(yytext.substr(6, yyleng - 7))
			};

break;
case 9:
			if ($$[$0-1].name != $$[$0]) Lava.t('End block ("' + $$[$0] + '") does not match the start block ("' + $$[$0-1].name + '") (1)');
			this.$ = $$[$0-1];

break;
case 10:
			if ($$[$0-2].name != $$[$0]) Lava.t('End block ("' + $$[$0] + '") does not match the start block ("' + $$[$0-2].name + '") (2)');
			$$[$0-2].content = $$[$0-1];
			this.$ = $$[$0-2];

break;
case 11:
			if ($$[$0-2].name != $$[$0]) Lava.t('End block ("' + $$[$0] + '") does not match the start block ("' + $$[$0-2].name + '") (3)');
			if ('elseif_arguments' in $$[$0-1]) {
				$$[$0-2].elseif_arguments = $$[$0-1].elseif_arguments;
				$$[$0-2].elseif_content = $$[$0-1].elseif_content;
			}
			if ('else_content' in $$[$0-1]) $$[$0-2].else_content = $$[$0-1].else_content;
			this.$ = $$[$0-2];

break;
case 12:
			if ($$[$0-3].name != $$[$0]) Lava.t('End block ("' + $$[$0] + '") does not match the start block ("' + $$[$0-3].name + '") (4)');
			$$[$0-3].content = $$[$0-2];
			if ('elseif_arguments' in $$[$0-1]) {
				$$[$0-3].elseif_arguments = $$[$0-1].elseif_arguments;
				$$[$0-3].elseif_content = $$[$0-1].elseif_content;
			}
			if ('else_content' in $$[$0-1]) $$[$0-3].else_content = $$[$0-1].else_content;
			this.$ = $$[$0-3];

break;
case 13:
			this.$ = $$[$0];

break;
case 14:
			yy.validateTagEnd($$[$0-1], $$[$0]);
			this.$ = $$[$0-1];

break;
case 15:
			this.$ = $$[$0-1];
			if ($$[$0-1].name == 'script' && $$[$0-1].x && ('equiv' in $$[$0-1].x)) {
				if (!$$[$0-1].x.equiv) Lava.t('empty x:equiv');
				this.$ = yy.parseRawTag($$[$0-1].x.equiv); // sets name and type (it may be directive)
				delete $$[$0-1].x.equiv;
				if (!Firestorm.Object.isEmpty($$[$0-1].x)) {
					this.$.x = Firestorm.Object.copy($$[$0-1].x);
				}
				if ('attributes' in $$[$0-1]) this.$.attributes = $$[$0-1].attributes;
			}
			this.$.content = [$$[$0]];

break;
case 16:
			yy.validateTagEnd($$[$0-2], $$[$0]);
			$$[$0-2].content = $$[$0-1];
			this.$ = $$[$0-2];
			if (Lava.isVoidTag(this.$.name)) Lava.t("Void tag with content: " + this.$.name);

break;
case 17:
			if ($$[$0] == 'preserve_whitespace') {
				if (yy.preserve_whitespace) Lava.t("Switch {pre:} is already active");
				yy.preserve_whitespace = true;
			} else {
				Lava.t("Parser error: lexer returned unknown switch: " + $$[$0]);
			}
			this.$ = null;

break;
case 18:
			if ($$[$0] == 'preserve_whitespace') {
				if (!yy.preserve_whitespace) Lava.t("Trying to turn off inactive switch: {:pre}");
				yy.preserve_whitespace = false;
			} else {
				Lava.t("Parser error: lexer returned unknown switch: " + $$[$0]);
			}
			this.$ = null;

break;
case 19:
			this.$ = $$[$0-1];
			this.$.prefix = $$[$0-2][1]; // '$' or '#'

break;
case 20:
			this.$ = $$[$0-2];
			this.$.prefix = $$[$0-3][1]; // '$' or '#'
			this.$.hash = $$[$0-1];

break;
case 21:
			this.$ = {type:'block'};
			yy.parseDynamicBlockInit(this.$, $$[$0-1].substr(1)); // substr to cut the colon before locator

break;
case 22:
			this.$ = {type:'block'};
			yy.parseDynamicBlockInit(this.$, $$[$0-1].substr(1)); // substr to cut the colon before locator
			this.$.arguments = yy.lexer.x_export_arguments;
			yy.lexer.x_export_arguments = null;

break;
case 23:
			this.$ = {
				type:'block',
				name: $$[$0-1]
			};

break;
case 24:
			this.$ = {
				type:'block',
				name: $$[$0-1]
			};
			this.$.arguments = yy.lexer.x_export_arguments;
			yy.lexer.x_export_arguments = null;

break;
case 25:
			if ($$[$0].name in $$[$0-1]) Lava.t('Duplicate attribute in block definition: ' + $$[$0].name);
			$$[$0-1][$$[$0].name] = $$[$0].value;
			this.$ = $$[$0-1];

break;
case 26: this.$ = {}; this.$[$$[$0].name] = $$[$0].value;
break;
case 27: this.$ = {name:$$[$0], value:true};
break;
case 28:
			var literals = Lava.parsers.Common.LITERALS;
			if ($$[$0] in literals) {
				$$[$0] = literals[$$[$0]];
			}
			this.$ = {name:$$[$0-1], value:$$[$0]};

break;
case 29: this.$ = {name:$$[$0-1], value:$$[$0]};
break;
case 30:
			$$[$0-2].else_content = $$[$0];
			this.$ = $$[$0-2];

break;
case 31:
			$$[$0-1].else_content = [];
			this.$ = $$[$0-1];

break;
case 32:
			this.$ = $$[$0];

break;
case 33:
			this.$ = {else_content: $$[$0]};

break;
case 34:
			this.$ = {else_content: []};

break;
case 35:
			$$[$0-2].elseif_arguments.push($$[$0-1]);
			$$[$0-2].elseif_content.push($$[$0]);
			this.$ = $$[$0-2];

break;
case 36:
			$$[$0-1].elseif_arguments.push($$[$0]);
			$$[$0-1].elseif_content.push([]);
			this.$ = $$[$0-1];

break;
case 37:
			this.$ = {
				elseif_arguments: [$$[$0-1]],
				elseif_content: [$$[$0]]
			};

break;
case 38:
			this.$ = {
				elseif_arguments: [$$[$0]],
				elseif_content: [[]]
			};

break;
case 39:
			var args = yy.lexer.x_export_arguments;
			if (args.length != 1) Lava.t('Elseif block requires exactly one argument');
			this.$ = args[0];
			yy.lexer.x_export_arguments = null;

break;
case 40:
			if ($$[$0-1] != $$[$0-1].toLowerCase()) Lava.t("Tag names must be lower case: " + $$[$0-1]);
			this.$ = yy.parseRawTag($$[$0-1]);

break;
case 41:
			if ($$[$0-2] != $$[$0-2].toLowerCase()) Lava.t("Tag names must be lower case: " + $$[$0-2]);
			this.$ = yy.parseRawTag($$[$0-2], $$[$0-1]);

break;
case 42:
			if ($$[$0-1] != $$[$0-1].toLowerCase()) Lava.t("Tag names must be lower case: " + $$[$0-1]);
			this.$ = yy.parseRawTag($$[$0-1]);

break;
case 43:
			if ($$[$0-2] != $$[$0-2].toLowerCase()) Lava.t("Tag names must be lower case: " + $$[$0-2]);
			this.$ = yy.parseRawTag($$[$0-2], $$[$0-1]);

break;
case 44: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 45: this.$ = [$$[$0]];
break;
case 46: this.$ = {name:$$[$0], value: ''}; // behaviour of innerHTML
break;
case 47:
			var parts = $$[$0].split('=');
			if (Lava.schema.DEBUG && parts[0].toLowerCase() == 'type' && parts[0] != 'type') Lava.t("The 'type' attribute must be lower case: " + yytext);
			this.$ = {name:parts[0], value:parts[1]};

break;
case 48: this.$ = {name:$$[$0-1], value:$$[$0]};
break;
}
},
table: [{3:1,4:[1,2],5:3,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{1:[3]},{1:[2,1]},{4:[1,16],6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{4:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[2,4],12:[2,4],16:[2,4],18:[2,4],19:[2,4],20:[2,4],33:[2,4],35:[2,4],36:[2,4]},{4:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],12:[2,5],16:[2,5],18:[2,5],19:[2,5],20:[2,5],33:[2,5],35:[2,5],36:[2,5]},{4:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],12:[2,6],16:[2,6],18:[2,6],19:[2,6],20:[2,6],33:[2,6],35:[2,6],36:[2,6]},{4:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],12:[2,7],16:[2,7],18:[2,7],19:[2,7],20:[2,7],33:[2,7],35:[2,7],36:[2,7]},{4:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],12:[2,8],16:[2,8],18:[2,8],19:[2,8],20:[2,8],33:[2,8],35:[2,8],36:[2,8]},{5:19,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[1,18],13:20,14:10,15:11,18:[1,12],19:[1,13],20:[1,14],32:21,33:[1,22],34:23,35:[1,24],36:[1,15]},{4:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],12:[2,13],16:[2,13],18:[2,13],19:[2,13],20:[2,13],33:[2,13],35:[2,13],36:[2,13]},{5:27,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,14:10,15:11,16:[1,25],17:[1,26],18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{4:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],12:[2,17],16:[2,17],18:[2,17],19:[2,17],20:[2,17],33:[2,17],35:[2,17],36:[2,17]},{4:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],12:[2,18],16:[2,18],18:[2,18],19:[2,18],20:[2,18],33:[2,18],35:[2,18],36:[2,18]},{21:28,24:[1,29],27:[1,30]},{30:[1,37],37:[1,31],38:32,39:[1,33],40:34,41:[1,35],42:[1,36]},{1:[2,2]},{4:[2,3],7:[2,3],8:[2,3],9:[2,3],10:[2,3],12:[2,3],16:[2,3],18:[2,3],19:[2,3],20:[2,3],33:[2,3],35:[2,3],36:[2,3]},{4:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],12:[2,9],16:[2,9],18:[2,9],19:[2,9],20:[2,9],33:[2,9],35:[2,9],36:[2,9]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[1,38],13:39,14:10,15:11,18:[1,12],19:[1,13],20:[1,14],32:21,33:[1,22],34:23,35:[1,24],36:[1,15]},{12:[1,40]},{12:[2,32],33:[1,41],34:42,35:[1,24]},{5:43,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,34],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{5:44,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,38],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],33:[2,38],35:[2,38],36:[1,15]},{26:[1,45]},{4:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],12:[2,14],16:[2,14],18:[2,14],19:[2,14],20:[2,14],33:[2,14],35:[2,14],36:[2,14]},{4:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],12:[2,15],16:[2,15],18:[2,15],19:[2,15],20:[2,15],33:[2,15],35:[2,15],36:[2,15]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,14:10,15:11,16:[1,46],18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{22:[1,47],23:48,28:49,29:[1,50],30:[1,51]},{25:[1,52],26:[1,53]},{25:[1,54],26:[1,55]},{4:[2,40],7:[2,40],8:[2,40],9:[2,40],10:[2,40],12:[2,40],16:[2,40],18:[2,40],19:[2,40],20:[2,40],33:[2,40],35:[2,40],36:[2,40]},{30:[1,37],37:[1,56],39:[1,57],40:58,41:[1,35],42:[1,36]},{7:[2,42],8:[2,42],9:[2,42],10:[2,42],16:[2,42],17:[2,42],18:[2,42],19:[2,42],20:[2,42],36:[2,42]},{30:[2,45],37:[2,45],39:[2,45],41:[2,45],42:[2,45]},{30:[2,46],37:[2,46],39:[2,46],41:[2,46],42:[2,46]},{30:[2,47],37:[2,47],39:[2,47],41:[2,47],42:[2,47]},{31:[1,59]},{4:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],12:[2,10],16:[2,10],18:[2,10],19:[2,10],20:[2,10],33:[2,10],35:[2,10],36:[2,10]},{12:[1,60]},{4:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],12:[2,11],16:[2,11],18:[2,11],19:[2,11],20:[2,11],33:[2,11],35:[2,11],36:[2,11]},{5:61,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,31],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{5:62,6:4,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,36],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],33:[2,36],35:[2,36],36:[1,15]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,33],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,37],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],33:[2,37],35:[2,37],36:[1,15]},{22:[1,63]},{4:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],12:[2,16],16:[2,16],18:[2,16],19:[2,16],20:[2,16],33:[2,16],35:[2,16],36:[2,16]},{7:[2,19],8:[2,19],9:[2,19],10:[2,19],12:[2,19],18:[2,19],19:[2,19],20:[2,19],33:[2,19],35:[2,19],36:[2,19]},{22:[1,64],28:65,29:[1,50],30:[1,51]},{22:[2,26],29:[2,26],30:[2,26]},{22:[2,27],29:[2,27],30:[2,27]},{29:[1,66],31:[1,67]},{22:[2,21],29:[2,21],30:[2,21]},{22:[2,22],29:[2,22],30:[2,22]},{22:[2,23],29:[2,23],30:[2,23]},{22:[2,24],29:[2,24],30:[2,24]},{4:[2,41],7:[2,41],8:[2,41],9:[2,41],10:[2,41],12:[2,41],16:[2,41],18:[2,41],19:[2,41],20:[2,41],33:[2,41],35:[2,41],36:[2,41]},{7:[2,43],8:[2,43],9:[2,43],10:[2,43],16:[2,43],17:[2,43],18:[2,43],19:[2,43],20:[2,43],36:[2,43]},{30:[2,44],37:[2,44],39:[2,44],41:[2,44],42:[2,44]},{30:[2,48],37:[2,48],39:[2,48],41:[2,48],42:[2,48]},{4:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],12:[2,12],16:[2,12],18:[2,12],19:[2,12],20:[2,12],33:[2,12],35:[2,12],36:[2,12]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,30],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],36:[1,15]},{6:17,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:9,12:[2,35],14:10,15:11,18:[1,12],19:[1,13],20:[1,14],33:[2,35],35:[2,35],36:[1,15]},{7:[2,39],8:[2,39],9:[2,39],10:[2,39],12:[2,39],18:[2,39],19:[2,39],20:[2,39],33:[2,39],35:[2,39],36:[2,39]},{7:[2,20],8:[2,20],9:[2,20],10:[2,20],12:[2,20],18:[2,20],19:[2,20],20:[2,20],33:[2,20],35:[2,20],36:[2,20]},{22:[2,25],29:[2,25],30:[2,25]},{22:[2,28],29:[2,28],30:[2,28]},{22:[2,29],29:[2,29],30:[2,29]}],
defaultActions: {2:[2,1],16:[2,2]},
parseError: function parseError(str,hash){if(hash.recoverable){this.trace(str)}else{throw new Error(str)}},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = (Object.getPrototypeOf ? Object.getPrototypeOf(this) : this.__proto__).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str)}},

// resets the lexer, sets new input
setInput:function (input){this._input=input;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},

// consumes and returns one char from the input
input:function (){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return ch},

// unshifts one char (or a string) into the input
unput:function (ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1){this.yylineno-=lines.length-1}var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]
}this.yyleng=this.yytext.length;return this},

// When called from action, caches matched text and appends it on next action
more:function (){this._more=true;return this},

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function (){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},

// retain first n characters of the match
less:function (n){this.unput(this.match.slice(n))},

// displays already matched input, i.e. for error messages
pastInput:function (){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},

// displays upcoming input, i.e. for error messages
upcomingInput:function (){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function (){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(token){if(this.options.backtrack_lexer){delete backup}return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}if(this.options.backtrack_lexer){delete backup}return false},

// return next match in input
next:function (){if(this.done){return this.EOF}if(!this._input){this.done=true}var token,match,tempMatch,index;if(!this._more){this.yytext="";this.match=""}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(this.options.backtrack_lexer){token=this.test_match(tempMatch,rules[i]);if(token!==false){return token}else if(this._backtrack){match=false;continue}else{return false}}else if(!this.options.flex){break}}}if(match){token=this.test_match(match,rules[index]);if(token!==false){return token}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},

// return next match that has a token
lex:function lex(){var r=this.next();if(r){return r}else{return this.lex()}},

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition){this.conditionStack.push(condition)},

// pop the previously active lexer condition state off the condition stack
popState:function popState(){var n=this.conditionStack.length-1;if(n>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n){n=this.conditionStack.length-1-Math.abs(n||0);if(n>=0){return this.conditionStack[n]}else{return"INITIAL"}},

// alias for begin(condition)
pushState:function pushState(condition){this.begin(condition)},

// return the number of states currently on the stack
stateStackSize:function stateStackSize(){return this.conditionStack.length},
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
/*``*/) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
		if (this._input.length) {
			if (this._input[0] == '<') {
				if (this.x_pure_blocks_mode) {
					this.begin("skipTag");
				} else {
					this.begin("tag");
				}
			} else if (['#','$','/','>','*','&'].indexOf(this._input[1]) !== -1) {
				this.begin("block");
			} else if (this._input.substr(0, 6) == '{else}' || this._input.substr(0, 7) == '{elseif') { // } <- comment for Jison
				this.begin("block");
			} else {
				this.begin("switch");
			}
		}
		if(yy_.yytext) return 7;

break;
case 1: return 7;
break;
case 2: this.popState(); return 7;
break;
case 3: this.popState(); yy_.yytext = yy_.yytext.substr(9, yy_.yyleng - 3); return 8;
break;
case 4: this.popState(); yy_.yytext = yy_.yytext.substr(12, yy_.yyleng - 6); return 8; // escaped variant
break;
case 5: this.popState(); return 33;
break;
case 6: this.popState(); yy_.yytext = yy_.yytext.substr(2, yy_.yyleng - 3); return 12;
break;
case 7: this.popState(); /* yy_.yytext = yy_.yytext.substr(2, yy_.yyleng - 4); return 'COMMENT'; */
break;
case 8: this.popState(); return 9; // normal
break;
case 9: this.popState(); return 10; // escaped
break;
case 10: Lava.t('Spaces between block opening tag and block name are not allowed');
break;
case 11: Lava.t('Spaces between block name and opening brace are not allowed');
break;
case 12: return 20;
break;
case 13: return 35;
break;
case 14: return 24;
break;
case 15: return 27;
break;
case 16:
		this.popState(); // block
		this.begin('blockHash');
		return 25;

break;
case 17:
		var config_ref = {
			input: this._input,
			tail_length: 0
		};
		this.x_export_arguments = Lava.ExpressionParser.parseWithTail(config_ref);
		this._input = this._input.substr(this._input.length - config_ref.tail_length);
		// { <- comment for Jison
		if (!(/(\s|\})/.test(this._input[0]))) Lava.t('Lex: arguments closing brace must be followed by whitespace or CLOSE_CURLY');
		this.popState(); // block
		this.begin('blockHash');
		return 26;

break;
case 18: yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1); return 30;
break;
case 19: return 29;
break;
case 20: yy_.yytext = Lava.parsers.Common.unquoteString(yy_.yytext); return 31;
break;
case 21: yy_.yytext = Lava.parsers.Common.unquoteString(yy_.yytext); return 31;
break;
case 22: this.popState(); return 22;
break;
case 23:
break;
case 24: this.popState(); return 7;
break;
case 25: this.popState(); return 7;
break;
case 26: this.popState(); yy_.yytext = yy_.yytext.substr(2,yy_.yyleng-3).toLowerCase(); return 16;
break;
case 27:
		yy_.yytext = yy_.yytext.substr(1).trim().toLowerCase();
		this.yy.x_lexer_tag_name = yy_.yytext;
		this.yy.x_lexer_is_fragment = false;
		if (yy_.yytext == 'script') {
			var index = this._input.indexOf('>');
			if (index == -1) Lava.t("Lexical error: malformed script tag");
			var attributes_string = this._input.substr(0, index);
			if (/type=(\'|\")lava\/fragment(\'|\")/.test(attributes_string)) {
				this.yy.x_lexer_is_fragment = true;
			}
		}
		return 36;

break;
case 28:
		var tag_name = this.yy.x_lexer_tag_name;
		this.yy.x_lexer_tag_name = null;
		this.popState();
		if (!this.yy.x_lexer_is_fragment && (tag_name == 'script' || tag_name == 'style')) {
			this.begin(tag_name == 'script' ? 'eatScript' : 'eatStyle');
		} else if (Lava.isVoidTag(tag_name)) {
			return 37; // in html5 browser returns void tags as unclosed
		}
		return 39;

break;
case 29:
		this.yy.x_lexer_tag_name = null;
		this.popState();
		return 37;

break;
case 30:
	yy_.yytext = yy_.yytext.trim();
	if (Lava.schema.DEBUG && yy_.yytext.toLowerCase() == 'type' && yy_.yytext != 'type') Lava.t("The 'type' attribute must be lower case: " + yy_.yytext);
	return 41;

break;
case 31:
	if (Lava.schema.DEBUG && yy_.yytext.toLowerCase() == 'type' && yy_.yytext != 'type') Lava.t("The 'type' attribute must be lower case: " + yy_.yytext);
	return 41;

break;
case 32:
	yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
	if (Lava.schema.DEBUG && yy_.yytext.toLowerCase() == 'type' && yy_.yytext != 'type') Lava.t("The 'type' attribute must be lower case: " + yy_.yytext);
	return 30;

break;
case 33: yy_.yytext = yy_.yytext.trim(); /* lowercase check is done in parser */ return 42;
break;
case 34: yy_.yytext = Lava.parsers.Common.unquoteString(yy_.yytext); return 31;
break;
case 35: yy_.yytext = Lava.parsers.Common.unquoteString(yy_.yytext); return 31;
break;
case 36:
break;
case 37: this.popState(); yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-9); return 17;
break;
case 38: this.popState(); yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-8); return 17;
break;
case 39:
		var _map = {
			L: '{', // comment for Jison is not needed (closing brace is below)
			R: '}',
			LT: '<',
			GT: '>',
			AMP: '&'
		};
		this.popState();
		yy_.yytext = _map[yy_.yytext.substr(2,yy_.yyleng-4)];
		return 7;

break;
case 40:
		this.popState();
		if (yy_.yytext == '{literal:}') {
			this.begin('literal');
		} else if (yy_.yytext == '{pure_blocks:}') {
			if (this.x_pure_blocks_mode) Lava.t('Lexer switch: "{pure_blocks:}" mode is already enabled');
			this.x_pure_blocks_mode = true;
		} else if (yy_.yytext == '{pre:}') {
			yy_.yytext = 'preserve_whitespace';
			return 18;
		} else {
			Lava.t('Unknown switch: ' + yy_.yytext);
		}

break;
case 41:
		this.popState();
		if (yy_.yytext == '{:pure_blocks}') {
			if (!this.x_pure_blocks_mode) Lava.t('Redundant lexer switch "{:pure_blocks}"');
			this.x_pure_blocks_mode = false;
		} else if (yy_.yytext == '{:pre}') {
			yy_.yytext = 'preserve_whitespace';
			return 19;
		} else {
			Lava.t('Unknown switch: ' + yy_.yytext);
		}

break;
case 42: this.popState(); yy_.yytext = yy_.yytext.substr(0, yy_.yyleng-10); return 7;
break;
case 43: return 4;
break;
}
},
rules: [/^(?:[^\x00]*?(?=((\{[\#\$\>\*])|{&gt;|(\{\/)|(<([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)\s*)|(<\/([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)>)|(<!--(.|\s)*?-->)|(<!\[CDATA\[(.|\s)*?\]\]>)|\{literal:\}|\{:literal\}|(\{:[LR]:\}|\{:[LG])|\{elseif\s*\(|\{else\})))/,/^(?:[^\x00]+)/,/^(?:<)/,/^(?:\{include>[^\}]*\})/,/^(?:\{include&gt;[^\}]*\})/,/^(?:\{else\})/,/^(?:\{\/(([a-zA-Z\_][a-zA-Z0-9\_]*)(\/([a-zA-Z\_][a-zA-Z0-9\_]*))*)\})/,/^(?:\{\*([^\*]|\*[^\}])*\*\})/,/^(?:\{(#|\$)>[^\}]+\})/,/^(?:\{(#|\$)&gt;[^\}]+\})/,/^(?:((\{[\#\$\>\*])|{&gt;)\s\b)/,/^(?:((\{[\#\$\>\*])|{&gt;)(([a-zA-Z\_][a-zA-Z0-9\_]*)(\/([a-zA-Z\_][a-zA-Z0-9\_]*))*)\s\()/,/^(?:((\{[\#\$\>\*])|{&gt;))/,/^(?:\{elseif(?=\())/,/^(?::[\$\#\@]([a-zA-Z\_][a-zA-Z0-9\_]*)\/(([a-zA-Z\_][a-zA-Z0-9\_]*)(\/([a-zA-Z\_][a-zA-Z0-9\_]*))*)(?=\())/,/^(?:(([a-zA-Z\_][a-zA-Z0-9\_]*)(\/([a-zA-Z\_][a-zA-Z0-9\_]*))*)(?=\())/,/^(?:\(\s*\))/,/^(?:\()/,/^(?:([a-zA-Z\_][a-zA-Z0-9\_]*)=)/,/^(?:([a-zA-Z\_][a-zA-Z0-9\_]*)(?=[\s\}]))/,/^(?:"([^\\\"]|\\.)*"(?=[\s\}]))/,/^(?:'([^\\\']|\\.)*'(?=[\s\}]))/,/^(?:\s*\})/,/^(?:\s+)/,/^(?:(<!--(.|\s)*?-->))/,/^(?:(<!\[CDATA\[(.|\s)*?\]\]>))/,/^(?:(<\/([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)>))/,/^(?:(<([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)\s*))/,/^(?:>)/,/^(?:\/>)/,/^(?:([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)\s+)/,/^(?:([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)(?=>))/,/^(?:([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)=)/,/^(?:([a-zA-Z][a-zA-Z0-9\_\-]*(:[a-zA-Z0-9\_][a-zA-Z0-9\_\-]*)*)=([a-zA-Z\_][a-zA-Z0-9\_]*)+\s\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:'([^\\\']|\\.)*')/,/^(?:\s+)/,/^(?:[\s\S]*?<\/script>)/,/^(?:[\s\S]*?<\/style>)/,/^(?:(\{:[LR]:\}|\{:[LG]))/,/^(?:\{literal:\})/,/^(?:\{:literal\})/,/^(?:[^\x00]*?\{:literal\})/,/^(?:$)/],
conditions: {"block":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":false},"blockHash":{"rules":[18,19,20,21,22,23],"inclusive":false},"tag":{"rules":[24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":false},"skipTag":{"rules":[2],"inclusive":false},"switch":{"rules":[39,40,41],"inclusive":false},"literal":{"rules":[42],"inclusive":false},"eatScript":{"rules":[37],"inclusive":false},"eatStyle":{"rules":[38],"inclusive":false},"INITIAL":{"rules":[0,1,43],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


