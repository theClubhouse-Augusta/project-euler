const extensions = {
	'.h': 'C|C++|Objective-C',	// C header file
	'.cpp': 'C++',			   // C++ source code
	'.class': 'Java',		   // Java compiled bytecode
	'.jar': 'Java',			   // Java executable archive
	'.swift': 'Swift',		   // Swift source code
	'.R': 'R|Rebol',			// R source code
	'.r': 'R|Rebol',			// R source code
	'.rs': 'Rust|RenderScript',		// Rust source code
	'.ts': 'TypeScript',	   // TypeScript source code
	'.cs': 'C#|Smalltalk',		// C# source code
	'.m': 'Limbo|M|MUF|Mathematica|MatLab|Mercury|Objective-C',	   // Objective-C source code
	'.bat': 'Batch|BatchFile',		// Batch script
	'.abap': 'ABAP',     // programming
	'.asc': 'AGS Script|AsciiDoc',     // programming
	'.ash': 'AGS Script',     // programming
	'.ampl': 'AMPL',     // programming
	'.mod': 'AMPL|Modula-2|LinuxKernelModule',     // programming
	'.g4': 'ANTLR',     // programming
	'.apib': 'API Blueprint',     // markup
	'.apl': 'APL',     // programming
	'.dyalog': 'APL',     // programming
	'.asp': 'ASP',     // programming
	'.asax': 'ASP',     // programming
	'.ascx': 'ASP',     // programming
	'.ashx': 'ASP',     // programming
	'.asmx': 'ASP',     // programming
	'.aspx': 'ASP',     // programming
	'.axd': 'ASP',     // programming
	'.dats': 'ATS',     // programming
	'.hats': 'ATS',     // programming
	'.sats': 'ATS',     // programming
	'.as': 'ActionScript',     // programming
	'.adb': 'Ada',     // programming
	'.ada': 'Ada',     // programming
	'.ads': 'Ada',     // programming
	'.agda': 'Agda',     // programming
	'.als': 'Alloy',     // programming
	'.apacheconf': 'ApacheConf',     // markup
	'.vhost': 'ApacheConf|Nginx',     // markup
	'.cls': 'Apex|TeX|VisualBasic|OpenEdge',     // programming
	'.applescript': 'AppleScript',     // programming
	'.scpt': 'AppleScript',     // programming
	'.arc': 'Arc',     // programming
	'.ino': 'Arduino',     // programming
	'.asciidoc': 'AsciiDoc',     // prose
	'.adoc': 'AsciiDoc',     // prose
	'.aj': 'AspectJ',     // programming
	'.asm': 'Assembly',     // programming
	'.a51': 'Assembly',     // programming
	'.inc': 'Assembly|C++|Pawn|Pascal|PHP|POV-Ray|SourcePawn|SQL',     // programming
	'.nasm': 'Assembly',     // programming
	'.aug': 'Augeas',     // programming
	'.ahk': 'AutoHotkey',     // programming
	'.ahkl': 'AutoHotkey',     // programming
	'.au3': 'AutoIt',     // programming
	'.awk': 'Awk',     // programming
	'.auk': 'Awk',     // programming
	'.gawk': 'Awk',     // programming
	'.mawk': 'Awk',     // programming
	'.nawk': 'Awk',     // programming
	'.cmd': 'Batchfile',     // programming
	'.befunge': 'Befunge',     // programming
	'.bison': 'Bison',     // programming
	'.bb': 'BitBake|BlitzBasic',     // programming
	'.decls': 'BlitzBasic',     // programming
	'.bmx': 'BlitzMax',     // programming
	'.bsv': 'Bluespec',     // programming
	'.boo': 'Boo',     // programming
	'.b': 'Brainfuck|Limbo',     // programming
	'.bf': 'Brainfuck|HyPhy',     // programming
	'.brs': 'Brightscript',     // programming
	'.bro': 'Bro',     // programming
	'.c': 'C',     // programming C source code
	'.cats': 'C',     // programming
	'.idc': 'C',     // programming
	'.w': 'C',     // programming
	'.cake': 'C#|CoffeeScript',     // programming
	'.cshtml': 'C#',     // programming
	'.csx': 'C#',     // programming
	'.c++': 'C++',     // programming
	'.cc': 'C++',     // programming C++ source code
	'.cp': 'C++|ComponentPascal',     // programming
	'.cxx': 'C++',     // programming C++ source code
	'.h++': 'C++',     // programming
	'.hh': 'C++|Hack',     // programming
	'.hpp': 'C++',     // programming
	'.hxx': 'C++',     // programming
	'.inl': 'C++',     // programming
	'.ipp': 'C++',     // programming
	'.tcc': 'C++',     // programming
	'.tpp': 'C++',     // programming
	'.c-objdump': 'C-ObjDump',     // data
	'.chs': 'C2hs Haskell',     // programming
	'.clp': 'CLIPS',     // programming
	'.cmake': 'CMake',     // programming
	'.cmake.in': 'CMake',     // programming
	'.cob': 'COBOL',     // programming
	'.cbl': 'COBOL',     // programming
	'.ccp': 'COBOL',     // programming
	'.cobol': 'COBOL',     // programming
	'.cpy': 'COBOL',     // programming
	'.css': 'CSS',     // markup CSS stylesheet
	'.csv': 'CSV',     // data
	'.capnp': 'CapnProto',     // programming
	'.mss': 'CartoCSS',     // programming
	'.ceylon': 'Ceylon',     // programming
	'.chpl': 'Chapel',     // programming
	'.ch': 'Charity|xBase',     // programming
	'.ck': 'ChucK',     // programming
	'.cirru': 'Cirru',     // programming
	'.clw': 'Clarion',     // programming
	'.icl': 'Clean',     // programming
	'.dcl': 'Clean',     // programming
	'.click': 'Click',     // programming
	'.clj': 'Clojure',     // programming
	'.boot': 'Clojure',     // programming
	'.cl2': 'Clojure',     // programming
	'.cljc': 'Clojure',     // programming
	'.cljs': 'Clojure',     // programming
	'.cljs.hl': 'Clojure',     // programming
	'.cljscm': 'Clojure',     // programming
	'.cljx': 'Clojure',     // programming
	'.hic': 'Clojure',     // programming
	'.coffee': 'CoffeeScript',     // programming
	'._coffee': 'CoffeeScript',     // programming
	'.cjsx': 'CoffeeScript',     // programming
	'.cson': 'CoffeeScript',     // programming
	'.iced': 'CoffeeScript',     // programming
	'.cfm': 'ColdFusion',     // programming
	'.cfml': 'ColdFusion',     // programming
	'.cfc': 'ColdFusionCFC',     // programming
	'.lisp': 'CommonLisp|NewLisp',     // programming
	'.asd': 'CommonLisp',     // programming
	'.cl': 'Cool|CommonLisp|PHP',     // programming
	'.l': 'CommonLisp|Groff|Lex|PicoLisp',     // programming
	'.lsp': 'CommonLisp|NewLisp',     // programming
	'.ny': 'CommonLisp',     // programming
	'.podsl': 'CommonLisp',     // programming
	'.sexp': 'CommonLisp',     // programming
	'.cps': 'ComponentPascal',     // programming
	'.coq': 'Coq',     // programming
	'.v': 'Coq|Verilog',     // programming
	'.cppobjdump': 'Cpp-ObjDump',     // data
	'.c++-objdump': 'Cpp-ObjDump',     // data
	'.c++objdump': 'Cpp-ObjDump',     // data
	'.cpp-objdump': 'Cpp-ObjDump',     // data
	'.cxx-objdump': 'Cpp-ObjDump',     // data
	'.creole': 'Creole',     // prose
	'.cr': 'Crystal',     // programming
	'.feature': 'Cucumber',     // programming
	'.cu': 'Cuda',     // programming
	'.cuh': 'Cuda',     // programming
	'.cy': 'Cycript',     // programming
	'.pyx': 'Cython',     // programming
	'.pxd': 'Cython',     // programming
	'.pxi': 'Cython',     // programming
	'.d': 'D|DTrace|MakeFile',     // programming
	'.di': 'D',     // programming
	'.d-objdump': 'D-ObjDump',     // data
	'.com': 'DIGITAL Command Language',     // programming
	'.dm': 'DM',     // programming
	'.zone': 'DNS Zone',     // data
	'.arpa': 'DNS Zone',     // data
	'.darcspatch': 'Darcs Patch',     // data
	'.dpatch': 'Darcs Patch',     // data
	'.dart': 'Dart',     // programming Dart source code
	'.diff': 'Diff',     // data
	'.patch': 'Diff',     // data
	'.dockerfile': 'Dockerfile',     // data
	'.djs': 'Dogescript',     // programming
	'.dylan': 'Dylan',     // programming
	'.dyl': 'Dylan',     // programming
	'.intr': 'Dylan',     // programming
	'.lid': 'Dylan',     // programming
	'.E': 'E',     // programming
	'.ecl': 'ECL|ECLiPSe',     // programming
	'.eclxml': 'ECL',     // programming
	'.sch': 'Eagle|KiCad',     // markup
	'.brd': 'Eagle|KiCad',     // markup
	'.epj': 'Ecere Projects',     // data
	'.e': 'Eiffel',     // programming
	'.ex': 'Elixir',     // programming
	'.exs': 'Elixir',     // programming
	'.elm': 'Elm',     // programming
	'.el': 'Emacs Lisp',     // programming
	'.emacs': 'Emacs Lisp',     // programming
	'.emacs.desktop': 'Emacs Lisp',     // programming
	'.em': 'EmberScript',     // programming
	'.emberscript': 'EmberScript',     // programming
	'.erl': 'Erlang',     // programming
	'.es': 'Erlang|JavaScript',     // programming
	'.escript': 'Erlang',     // programming
	'.hrl': 'Erlang',     // programming
	'.xrl': 'Erlang',     // programming
	'.yrl': 'Erlang',     // programming
	'.fs': 'F#|Filterscript|Forth|GLSL',     // programming
	'.fsi': 'F#',     // programming
	'.fsx': 'F#',     // programming
	'.fx': 'FLUX|HLSL',     // programming
	'.flux': 'FLUX',     // programming
	'.f90': 'FORTRAN',     // programming
	'.f': 'FORTRAN|Forth',     // programming
	'.f03': 'FORTRAN',     // programming
	'.f08': 'FORTRAN',     // programming
	'.f77': 'FORTRAN',     // programming
	'.f95': 'FORTRAN',     // programming
	'.for': 'FORTRAN|Formatted|Forth',     // programming
	'.fpp': 'FORTRAN',     // programming
	'.factor': 'Factor',     // programming
	'.fy': 'Fancy',     // programming
	'.fancypack': 'Fancy',     // programming
	'.fan': 'Fantom',     // programming
	'.eam.fs': 'Formatted',     // data
	'.fth': 'Forth',     // programming
	'.4th': 'Forth',     // programming
	'.forth': 'Forth',     // programming
	'.fr': 'Forth|Frege',     // programming
	'.frt': 'Forth',     // programming
	'.ftl': 'FreeMarker',     // programming
	'.g': 'G-code|GAP',     // data
	'.gco': 'G-code',     // data
	'.gcode': 'G-code',     // data
	'.gms': 'GAMS',     // programming
	'.gap': 'GAP',     // programming
	'.gd': 'GAP|GDScript',     // programming
	'.gi': 'GAP',     // programming
	'.tst': 'Scilab|GAP',     // programming
	'.s': 'GAS',     // programming
	'.ms': 'GAS|Groff|Maxscript',     // programming
	'.glsl': 'GLSL',     // programming
	'.fp': 'GLSL',     // programming
	'.frag': 'GLSL|JavaScript',     // programming
	'.frg': 'GLSL',     // programming
	'.fsh': 'GLSL',     // programming
	'.fshader': 'GLSL',     // programming
	'.geo': 'GLSL',     // programming
	'.geom': 'GLSL',     // programming
	'.glslv': 'GLSL',     // programming
	'.gshader': 'GLSL',     // programming
	'.shader': 'GLSL',     // programming
	'.vert': 'GLSL',     // programming
	'.vrx': 'GLSL',     // programming
	'.vsh': 'GLSL',     // programming
	'.vshader': 'GLSL',     // programming
	'.gml': 'GameMakerLanguage|GraphModelingLanguage',     // programming
	'.kid': 'Genshi',     // programming
	'.ebuild': 'Gentoo Ebuild',     // programming
	'.eclass': 'Gentoo Eclass',     // programming
	'.po': 'Gettext Catalog',     // prose
	'.pot': 'Gettext Catalog',     // prose
	'.glf': 'Glyph',     // programming
	'.gp': 'Gnuplot',     // programming
	'.gnu': 'Gnuplot',     // programming
	'.gnuplot': 'Gnuplot',     // programming
	'.plot': 'Gnuplot',     // programming
	'.plt': 'Gnuplot',     // programming
	'.go': 'Go',     // programming Go source code
	'.golo': 'Golo',     // programming
	'.gs': 'Gosu|JavaScript',     // programming
	'.gst': 'Gosu',     // programming
	'.gsx': 'Gosu',     // programming
	'.vark': 'Gosu',     // programming
	'.grace': 'Grace',     // programming
	'.gradle': 'Gradle',     // data
	'.gf': 'Grammatical Framework',     // programming
	'.graphql': 'GraphQL',     // data
	'.dot': 'Graphviz (DOT)',     // data
	'.gv': 'Graphviz (DOT)',     // data
	'.man': 'Groff',     // markup
	'.1': 'Groff',     // markup
	'.1in': 'Groff',     // markup
	'.1m': 'Groff',     // markup
	'.1x': 'Groff',     // markup
	'.2': 'Groff',     // markup
	'.3': 'Groff',     // markup
	'.3in': 'Groff',     // markup
	'.3m': 'Groff',     // markup
	'.3qt': 'Groff',     // markup
	'.3x': 'Groff',     // markup
	'.4': 'Groff',     // markup
	'.5': 'Groff',     // markup
	'.6': 'Groff',     // markup
	'.7': 'Groff',     // markup
	'.8': 'Groff',     // markup
	'.9': 'Groff',     // markup
	'.me': 'Groff',     // markup
	'.n': 'Groff|Nemerle',     // markup
	'.rno': 'Groff',     // markup
	'.roff': 'Groff',     // markup
	'.groovy': 'Groovy',     // programming
	'.grt': 'Groovy',     // programming
	'.gtpl': 'Groovy',     // programming
	'.gvy': 'Groovy',     // programming
	'.gsp': 'Groovy Server Pages',     // programming
	'.hcl': 'HCL',     // programming
	'.tf': 'HCL',     // programming
	'.hlsl': 'HLSL',     // programming
	'.fxh': 'HLSL',     // programming
	'.hlsli': 'HLSL',     // programming
	'.html': 'HTML',     // markup HTML markup
	'.htm': 'HTML',     // markup HTML markup
	'.html.hl': 'HTML',     // markup
	'.st': 'Smalltalk|HTML',     // markup
	'.xht': 'HTML',     // markup
	'.xhtml': 'HTML',     // markup
	'.mustache': 'HTML+Django',     // markup
	'.jinja': 'HTML+Django',     // markup
	'.eex': 'HTML+EEX',     // markup
	'.erb': 'HTML+ERB',     // markup
	'.erb.deface': 'HTML+ERB',     // markup
	'.phtml': 'HTML+PHP',     // markup
	'.http': 'HTTP',     // data
	'.php': 'Hack|PHP',     // programming PHP source code
	'.haml': 'Haml',     // markup
	'.haml.deface': 'Haml',     // markup
	'.handlebars': 'Handlebars',     // markup
	'.hbs': 'Handlebars',     // markup
	'.hb': 'Harbour',     // programming
	'.hs': 'Haskell',     // programming Haskell source code
	'.hsc': 'Haskell',     // programming
	'.hx': 'Haxe',     // programming
	'.hxsl': 'Haxe',     // programming
	'.hy': 'Hy',     // programming
	'.pro': 'IDL|INI|ProLog|QMake',     // programming
	'.dlm': 'IDL',     // programming
	'.ipf': 'IGOR Pro',     // programming
	'.ini': 'INI',     // data
	'.cfg': 'INI',     // data
	'.prefs': 'INI',     // data
	'.properties': 'INI',     // data
	'.irclog': 'IRC log',     // data
	'.weechatlog': 'IRC log',     // data
	'.idr': 'Idris',     // programming
	'.lidr': 'Idris',     // programming
	'.ni': 'Inform 7',     // programming
	'.i7x': 'Inform 7',     // programming
	'.iss': 'Inno Setup',     // programming
	'.io': 'Io',     // programming
	'.ik': 'Ioke',     // programming
	'.thy': 'Isabelle',     // programming
	'.ijs': 'J',     // programming
	'.flex': 'JFlex',     // programming
	'.jflex': 'JFlex',     // programming
	'.json': 'JSON',     // data JSON data file
	'.geojson': 'JSON',     // data
	'.lock': 'JSON',     // data
	'.topojson': 'JSON',     // data
	'.json5': 'JSON5',     // data
	'.jsonld': 'JSONLD',     // data
	'.jq': 'JSONiq',     // programming
	'.jsx': 'JSX',     // programming
	'.jade': 'Jade',     // markup
	'.j': 'Jasmin|Objective-J',     // programming
	'.java': 'Java',     // programming Java source code
	'.jsp': 'Java Server Pages',     // programming
	'.js': 'JavaScript',     // programming JavaScript source code
	'._js': 'JavaScript',     // programming
	'.bones': 'JavaScript',     // programming
	'.es6': 'JavaScript',     // programming
	'.jake': 'JavaScript',     // programming
	'.jsb': 'JavaScript',     // programming
	'.jscad': 'JavaScript',     // programming
	'.jsfl': 'JavaScript',     // programming
	'.jsm': 'JavaScript',     // programming
	'.jss': 'JavaScript',     // programming
	'.njs': 'JavaScript',     // programming
	'.pac': 'JavaScript',     // programming
	'.sjs': 'JavaScript',     // programming
	'.ssjs': 'JavaScript',     // programming
	'.sublime-build': 'JavaScript',     // programming
	'.sublime-commands': 'JavaScript',     // programming
	'.sublime-completions': 'JavaScript',     // programming
	'.sublime-keymap': 'JavaScript',     // programming
	'.sublime-macro': 'JavaScript',     // programming
	'.sublime-menu': 'JavaScript',     // programming
	'.sublime-mousemap': 'JavaScript',     // programming
	'.sublime-project': 'JavaScript',     // programming
	'.sublime-settings': 'JavaScript',     // programming
	'.sublime-theme': 'JavaScript',     // programming
	'.sublime-workspace': 'JavaScript',     // programming
	'.sublime_metrics': 'JavaScript',     // programming
	'.sublime_session': 'JavaScript',     // programming
	'.xsjs': 'JavaScript',     // programming
	'.xsjslib': 'JavaScript',     // programming
	'.jl': 'Julia',     // programming
	'.ipynb': 'Jupyter Notebook',     // markup
	'.krl': 'KRL',     // programming
	'.kicad_pcb': 'KiCad',     // programming
	'.kit': 'Kit',     // markup
	'.kt': 'Kotlin',     // programming Kotlin source code
	'.ktm': 'Kotlin',     // programming
	'.kts': 'Kotlin',     // programming
	'.lfe': 'LFE',     // programming
	'.ll': 'LLVM',     // programming
	'.lol': 'LOLCODE',     // programming
	'.lsl': 'LSL',     // programming
	'.lslp': 'LSL',     // programming
	'.lvproj': 'LabVIEW',     // programming
	'.lasso': 'Lasso',     // programming
	'.las': 'Lasso',     // programming
	'.lasso8': 'Lasso',     // programming
	'.lasso9': 'Lasso',     // programming
	'.ldml': 'Lasso',     // programming
	'.latte': 'Latte',     // markup
	'.lean': 'Lean',     // programming
	'.hlean': 'Lean',     // programming
	'.less': 'Less',     // markup
	'.lex': 'Lex',     // programming
	'.ly': 'LilyPond',     // programming
	'.ily': 'LilyPond',     // programming
	'.ld': 'Linker Script',     // data
	'.lds': 'Linker Script',     // data
	'.liquid': 'Liquid',     // markup
	'.lagda': 'Literate Agda',     // programming
	'.litcoffee': 'Literate CoffeeScript',     // programming
	'.lhs': 'Literate Haskell',     // programming
	'.ls': 'LiveScript|LoomScript',     // programming
	'._ls': 'LiveScript',     // programming
	'.xm': 'Logos',     // programming
	'.x': 'Logos',     // programming
	'.xi': 'Logos',     // programming
	'.lgt': 'Logtalk',     // programming
	'.logtalk': 'Logtalk',     // programming
	'.lookml': 'LookML',     // programming
	'.lua': 'Lua',     // programming Lua source code
	'.fcgi': 'Lua|PHP|Perl|Ruby|Python|Shell',     // programming
	'.nse': 'Lua',     // programming
	'.pd_lua': 'Lua',     // programming
	'.rbxs': 'Lua',     // programming
	'.wlua': 'Lua',     // programming
	'.mumps': 'M',     // programming
	'.m4': 'M4|M4Sugar',     // programming
	'.mcr': 'MAXScript',     // programming
	'.mtml': 'MTML',     // markup
	'.muf': 'MUF',     // programming
	'.mak': 'Makefile',     // programming
	'.mk': 'Makefile',     // programming
	'.mkfile': 'Makefile',     // programming
	'.mako': 'Mako',     // programming
	'.mao': 'Mako',     // programming
	'.mask': 'Mask',     // markup
	'.mathematica': 'Mathematica',     // programming
	'.cdf': 'Mathematica',     // programming
	'.ma': 'Mathematica',     // programming
	'.mt': 'Mathematica',     // programming
	'.nb': 'Mathematica',     // programming
	'.nbp': 'Mathematica',     // programming
	'.wl': 'Mathematica',     // programming
	'.wlt': 'Mathematica',     // programming
	'.matlab': 'Matlab',     // programming
	'.maxpat': 'Max',     // programming
	'.maxhelp': 'Max',     // programming
	'.maxproj': 'Max',     // programming
	'.mxt': 'Max',     // programming
	'.pat': 'Max',     // programming
	'.mediawiki': 'MediaWiki',     // prose
	'.wiki': 'MediaWiki',     // prose
	'.moo': 'Mercury|Moocode',     // programming
	'.metal': 'Metal',     // programming
	'.minid': 'MiniD',     // programming
	'.druby': 'Mirah',     // programming
	'.duby': 'Mirah',     // programming
	'.mir': 'Mirah',     // programming
	'.mirah': 'Mirah',     // programming
	'.mo': 'Modelica',     // programming
	'.mms': 'Module Management System',     // programming
	'.mmk': 'Module Management System',     // programming
	'.monkey': 'Monkey',     // programming
	'.moon': 'MoonScript',     // programming
	'.myt': 'Myghty',     // programming
	'.ncl': 'NCL',     // programming
	'.nl': 'NL|NewLisp',     // data
	'.nsi': 'NSIS',     // programming
	'.nsh': 'NSIS',     // programming
	'.axs': 'NetLinx',     // programming
	'.axi': 'NetLinx',     // programming
	'.axs.erb': 'NetLinx+ERB',     // programming
	'.axi.erb': 'NetLinx+ERB',     // programming
	'.nlogo': 'NetLogo',     // programming
	'.nginxconf': 'Nginx',     // markup
	'.nim': 'Nimrod',     // programming
	'.nimrod': 'Nimrod',     // programming
	'.ninja': 'Ninja',     // data
	'.nit': 'Nit',     // programming
	'.nix': 'Nix',     // programming
	'.nu': 'Nu',     // programming
	'.numpy': 'NumPy',     // programming
	'.numpyw': 'NumPy',     // programming
	'.numsc': 'NumPy',     // programming
	'.ml': 'OCaml',     // programming
	'.eliom': 'OCaml',     // programming
	'.eliomi': 'OCaml',     // programming
	'.ml4': 'OCaml',     // programming
	'.mli': 'OCaml',     // programming
	'.mll': 'OCaml',     // programming
	'.mly': 'OCaml',     // programming
	'.objdump': 'ObjDump',     // data
	'.mm': 'Objective-C++',     // programming
	'.sj': 'Objective-J',     // programming
	'.omgrofl': 'Omgrofl',     // programming
	'.opa': 'Opa',     // programming
	'.opal': 'Opal',     // programming
	'.opencl': 'OpenCL',     // programming
	'.p': 'OpenEdge ABL',     // programming
	'.scad': 'OpenSCAD',     // programming
	'.org': 'Org',     // prose
	'.ox': 'Ox',     // programming
	'.oxh': 'Ox',     // programming
	'.oxo': 'Ox',     // programming
	'.oxygene': 'Oxygene',     // programming
	'.oz': 'Oz',     // programming
	'.pwn': 'PAWN',     // programming
	'.aw': 'PHP',     // programming
	'.ctp': 'PHP',     // programming
	'.php3': 'PHP',     // programming
	'.php4': 'PHP',     // programming
	'.php5': 'PHP',     // programming
	'.phps': 'PHP',     // programming
	'.phpt': 'PHP',     // programming
	'.pls': 'PLSQL',     // programming
	'.pck': 'PLSQL',     // programming
	'.pkb': 'PLSQL',     // programming
	'.pks': 'PLSQL',     // programming
	'.plb': 'PLSQL',     // programming
	'.plsql': 'PLSQL',     // programming
	'.sql': 'SQL|PLSQL|PLpgSQL',     // SQL Script
	'.pov': 'POV-Ray SDL',     // programming
	'.pan': 'Pan',     // programming
	'.psc': 'Papyrus',     // programming
	'.parrot': 'Parrot',     // programming
	'.pasm': 'Parrot Assembly',     // programming
	'.pir': 'Parrot Internal Representation',     // programming
	'.pas': 'Pascal',     // programming
	'.dfm': 'Pascal',     // programming
	'.dpr': 'Pascal',     // programming
	'.lpr': 'Pascal',     // programming
	'.pp': 'Pascal|Puppet',     // programming
	'.pl': 'Perl|ProLog',     // programming Perl source code
	'.al': 'Perl',     // programming
	'.cgi': 'Perl|Python|Shell',     // programming
	'.perl': 'Perl',     // programming
	'.ph': 'Perl',     // programming
	'.plx': 'Perl',     // programming
	'.pm': 'Perl',     // programming Perl module
	'.pod': 'Perl|Pod',     // programming
	'.psgi': 'Perl',     // programming
	'.t': 'Perl|Terra|Turing',     // programming
	'.6pl': 'Perl6',     // programming
	'.6pm': 'Perl6',     // programming
	'.nqp': 'Perl6',     // programming
	'.p6': 'Perl6',     // programming
	'.p6l': 'Perl6',     // programming
	'.p6m': 'Perl6',     // programming
	'.pl6': 'Perl6',     // programming
	'.pm6': 'Perl6',     // programming
	'.pkl': 'Pickle',     // data
	'.pig': 'PigLatin',     // programming
	'.pike': 'Pike',     // programming
	'.pmod': 'Pike',     // programming
	'.pogo': 'PogoScript',     // programming
	'.pony': 'Pony',     // programming
	'.ps': 'PostScript',     // markup
	'.eps': 'PostScript',     // markup
	'.ps1': 'PowerShell',     // programming Powershell script
	'.psd1': 'PowerShell',     // programming
	'.psm1': 'PowerShell',     // programming
	'.pde': 'Processing',     // programming
	'.prolog': 'Prolog',     // programming
	'.yap': 'Prolog',     // programming
	'.spin': 'Propeller Spin',     // programming
	'.proto': 'Protocol Buffer',     // markup
	'.pub': 'Public Key',     // data
	'.pd': 'Pure Data',     // programming
	'.pb': 'PureBasic',     // programming
	'.pbi': 'PureBasic',     // programming
	'.purs': 'PureScript',     // programming
	'.py': 'Python',     // programming Python source code
	'.bzl': 'Python',     // programming
	'.gyp': 'Python',     // programming
	'.lmi': 'Python',     // programming
	'.pyde': 'Python',     // programming
	'.pyp': 'Python',     // programming
	'.pyt': 'Python',     // programming
	'.pyw': 'Python',     // programming Python GUI application
	'.rpy': 'RenPy|Python',     // programming
	'.tac': 'Python',     // programming
	'.wsgi': 'Python',     // programming
	'.xpy': 'Python',     // programming
	'.pytb': 'Python traceback',     // data
	'.qml': 'QML',     // programming
	'.qbs': 'QML',     // programming
	'.pri': 'QMake',     // programming
	'.rsx': 'R',     // programming
	'.raml': 'RAML',     // markup
	'.rdoc': 'RDoc',     // prose
	'.rbbas': 'REALbasic',     // programming
	'.rbfrm': 'REALbasic',     // programming
	'.rbmnu': 'REALbasic',     // programming
	'.rbres': 'REALbasic',     // programming
	'.rbtbar': 'REALbasic',     // programming
	'.rbuistate': 'REALbasic',     // programming
	'.rhtml': 'RHTML',     // markup
	'.rmd': 'RMarkdown',     // prose
	'.rkt': 'Racket',     // programming
	'.rktd': 'Racket',     // programming
	'.rktl': 'Racket',     // programming
	'.scrbl': 'Racket',     // programming
	'.rl': 'Ragel in Ruby Host',     // programming
	'.raw': 'Raw token data',     // data
	'.reb': 'Rebol',     // programming
	'.r2': 'Rebol',     // programming
	'.r3': 'Rebol',     // programming
	'.rebol': 'Rebol',     // programming
	'.red': 'Red',     // programming
	'.reds': 'Red',     // programming
	'.cw': 'Redcode',     // programming
	'.rsh': 'RenderScript',     // programming
	'.robot': 'RobotFramework',     // programming
	'.rg': 'Rouge',     // programming
	'.rb': 'Ruby',     // programming Ruby source code
	'.builder': 'Ruby',     // programming
	'.gemspec': 'Ruby',     // programming
	'.god': 'Ruby',     // programming
	'.irbrc': 'Ruby',     // programming
	'.jbuilder': 'Ruby',     // programming
	'.mspec': 'Ruby',     // programming
	'.pluginspec': 'Ruby',     // programming
	'.podspec': 'Ruby',     // programming
	'.rabl': 'Ruby',     // programming
	'.rake': 'Ruby',     // programming
	'.rbuild': 'Ruby',     // programming
	'.rbw': 'Ruby',     // programming
	'.rbx': 'Ruby',     // programming
	'.ru': 'Ruby',     // programming
	'.ruby': 'Ruby',     // programming
	'.thor': 'Ruby',     // programming
	'.watchr': 'Ruby',     // programming
	'.rs.in': 'Rust',     // programming
	'.sas': 'SAS',     // programming
	'.scss': 'SCSS',     // markup
	'.smt2': 'SMT',     // programming
	'.smt': 'SMT',     // programming
	'.sparql': 'SPARQL',     // data
	'.rq': 'SPARQL',     // data
	'.sqf': 'SQF',     // programming
	'.hqf': 'SQF',     // programming
	'.cql': 'SQL',     // data
	'.ddl': 'SQL',     // data
	'.prc': 'SQL',     // data
	'.tab': 'SQL',     // data
	'.udf': 'SQL',     // data
	'.viw': 'SQL',     // data
	'.db2': 'SQLPL',     // programming
	'.ston': 'STON',     // data
	'.svg': 'SVG',     // data
	'.sage': 'Sage',     // programming
	'.sagews': 'Sage',     // programming
	'.sls': 'SaltStack',     // programming
	'.sass': 'Sass',     // markup
	'.scala': 'Scala',     // programming Scala source code
	'.sbt': 'Scala',     // programming
	'.sc': 'Scala|SuperCollider',     // programming
	'.scaml': 'Scaml',     // markup
	'.scm': 'Scheme',     // programming
	'.sld': 'Scheme',     // programming
	'.sps': 'Scheme',     // programming
	'.ss': 'Scheme',     // programming
	'.sci': 'Scilab',     // programming
	'.sce': 'Scilab',     // programming
	'.self': 'Self',     // programming
	'.sh': 'Shell',     // programming Shell script
	'.bash': 'Shell',     // programming
	'.bats': 'Shell',     // programming
	'.command': 'Shell',     // programming
	'.ksh': 'Shell',     // programming
	'.sh.in': 'Shell',     // programming
	'.tmux': 'Shell',     // programming
	'.tool': 'Shell',     // programming
	'.zsh': 'Shell',     // programming
	'.sh-session': 'ShellSession',     // programming
	'.shen': 'Shen',     // programming
	'.sl': 'Slash',     // programming
	'.slim': 'Slim',     // markup
	'.smali': 'Smali',     // programming
	'.tpl': 'Smarty',     // programming
	'.sp': 'SourcePawn',     // programming
	'.sma': 'SourcePawn',     // programming
	'.nut': 'Squirrel',     // programming
	'.stan': 'Stan',     // programming
	'.ML': 'Standard ML',     // programming
	'.fun': 'Standard ML',     // programming
	'.sig': 'Standard ML',     // programming
	'.sml': 'Standard ML',     // programming
	'.do': 'Stata',     // programming
	'.ado': 'Stata',     // programming
	'.doh': 'Stata',     // programming
	'.ihlp': 'Stata',     // programming
	'.mata': 'Stata',     // programming
	'.matah': 'Stata',     // programming
	'.sthlp': 'Stata',     // programming
	'.styl': 'Stylus',     // markup
	'.scd': 'SuperCollider',     // programming
	'.sv': 'SystemVerilog',     // programming
	'.svh': 'SystemVerilog',     // programming
	'.vh': 'SystemVerilog',     // programming
	'.toml': 'TOML',     // data
	'.txl': 'TXL',     // programming
	'.tcl': 'Tcl',     // programming
	'.adp': 'Tcl',     // programming
	'.tm': 'Tcl',     // programming
	'.tcsh': 'Tcsh',     // programming
	'.csh': 'Tcsh',     // programming
	'.tex': 'TeX',     // markup
	'.aux': 'TeX',     // markup
	'.bbx': 'TeX',     // markup
	'.bib': 'TeX',     // markup
	'.cbx': 'TeX',     // markup
	'.dtx': 'TeX',     // markup
	'.ins': 'TeX',     // markup
	'.lbx': 'TeX',     // markup
	'.ltx': 'TeX',     // markup
	'.mkii': 'TeX',     // markup
	'.mkiv': 'TeX',     // markup
	'.mkvi': 'TeX',     // markup
	'.sty': 'TeX',     // markup
	'.toc': 'TeX',     // markup
	'.tea': 'Tea',     // markup
	'.txt': 'Text',     // prose
	'.no': 'Text',     // prose
	'.textile': 'Textile',     // prose
	'.thrift': 'Thrift',     // programming
	'.tu': 'Turing',     // programming
	'.ttl': 'Turtle',     // data
	'.twig': 'Twig',     // markupg
	'.tsx': 'TypeScript',     // programming
	'.upc': 'UnifiedParallelC',     // programming
	'.anim': 'Unity3DAsset',     // data
	'.asset': 'Unity3DAsset',     // data
	'.mat': 'Unity3DAsset',     // data
	'.meta': 'Unity3DAsset',     // data
	'.prefab': 'Unity3DAsset',     // data
	'.unity': 'Unity3DAsset',     // data
	'.uno': 'Uno',     // programming
	'.uc': 'UnrealScript',     // programming
	'.ur': 'UrWeb',     // programming
	'.urs': 'UrWeb',     // programming
	'.vcl': 'VCL',     // programming
	'.vhdl': 'VHDL',     // programming
	'.vhd': 'VHDL',     // programming
	'.vhf': 'VHDL',     // programming
	'.vhi': 'VHDL',     // programming
	'.vho': 'VHDL',     // programming
	'.vhs': 'VHDL',     // programming
	'.vht': 'VHDL',     // programming
	'.vhw': 'VHDL',     // programming
	'.vala': 'Vala',     // programming
	'.vapi': 'Vala',     // programming
	'.veo': 'Verilog',     // programming
	'.vim': 'VimL',     // programming
	'.vb': 'VisualBasic',     // programming
	'.bas': 'VisualBasic',     // programming
	'.frm': 'VisualBasic',     // programming
	'.frx': 'VisualBasic',     // programming
	'.vba': 'VisualBasic',     // programming
	'.vbhtml': 'VisualBasic',     // programming
	'.vbs': 'VisualBasic',     // programming
	'.volt': 'Volt',     // programming
	'.vue': 'Vue',     // markup
	'.owl': 'WebOntologyLanguage',     // markup
	'.webidl': 'WebIDL',     // programming
	'.x10': 'X10',     // programming
	'.xc': 'XC',     // programming
	'.xml': 'XML',     // data
	'.ant': 'XML',     // data
	'.axml': 'XML',     // data
	'.ccxml': 'XML',     // data
	'.clixml': 'XML',     // data
	'.cproject': 'XML',     // data
	'.csl': 'XML',     // data
	'.csproj': 'XML',     // data
	'.ct': 'XML',     // data
	'.dita': 'XML',     // data
	'.ditamap': 'XML',     // data
	'.ditaval': 'XML',     // data
	'.dll.config': 'XML',     // data
	'.dotsettings': 'XML',     // data
	'.filters': 'XML',     // data
	'.fsproj': 'XML',     // data
	'.fxml': 'XML',     // data
	'.glade': 'XML',     // data
	'.grxml': 'XML',     // data
	'.iml': 'XML',     // data
	'.ivy': 'XML',     // data
	'.jelly': 'XML',     // data
	'.jsproj': 'XML',     // data
	'.kml': 'XML',     // data
	'.launch': 'XML',     // data
	'.mdpolicy': 'XML',     // data
	'.mxml': 'XML',     // data
	'.nproj': 'XML',     // data
	'.nuspec': 'XML',     // data
	'.odd': 'XML',     // data
	'.osm': 'XML',     // data
	'.plist': 'XML',     // data
	'.props': 'XML',     // data
	'.ps1xml': 'XML',     // data
	'.psc1': 'XML',     // data
	'.pt': 'XML',     // data
	'.rdf': 'XML',     // data
	'.rss': 'XML',     // data
	'.scxml': 'XML',     // data
	'.srdf': 'XML',     // data
	'.storyboard': 'XML',     // data
	'.stTheme': 'XML',     // data
	'.sublime-snippet': 'XML',     // data
	'.targets': 'XML',     // data
	'.tmCommand': 'XML',     // data
	'.tml': 'XML',     // data
	'.tmLanguage': 'XML',     // data
	'.tmPreferences': 'XML',     // data
	'.tmSnippet': 'XML',     // data
	'.tmTheme': 'XML',     // data
	'.ui': 'XML',     // data
	'.urdf': 'XML',     // data
	'.ux': 'XML',     // data
	'.vbproj': 'XML',     // data
	'.vcxproj': 'XML',     // data
	'.vssettings': 'XML',     // data
	'.vxml': 'XML',     // data
	'.wsdl': 'XML',     // data
	'.wsf': 'XML',     // data
	'.wxi': 'XML',     // data
	'.wxl': 'XML',     // data
	'.wxs': 'XML',     // data
	'.x3d': 'XML',     // data
	'.xacro': 'XML',     // data
	'.xaml': 'XML',     // data
	'.xib': 'XML',     // data
	'.xlf': 'XML',     // data
	'.xliff': 'XML',     // data
	'.xmi': 'XML',     // data
	'.xml.dist': 'XML',     // data
	'.xproj': 'XML',     // data
	'.xsd': 'XML',     // data
	'.xul': 'XML',     // data
	'.zcml': 'XML',     // data
	'.xsp-config': 'XPages',     // programming
	'.xsp.metadata': 'XPages',     // programming
	'.xpl': 'XProc',     // programming
	'.xproc': 'XProc',     // programming
	'.xquery': 'XQuery',     // programming
	'.xq': 'XQuery',     // programming
	'.xql': 'XQuery',     // programming
	'.xqm': 'XQuery',     // programming
	'.xqy': 'XQuery',     // programming
	'.xs': 'XS',     // programming
	'.xslt': 'XSLT',     // programming
	'.xsl': 'XSLT',     // programming
	'.xojo_code': 'Xojo',     // programming
	'.xojo_menu': 'Xojo',     // programming
	'.xojo_report': 'Xojo',     // programming
	'.xojo_script': 'Xojo',     // programming
	'.xojo_toolbar': 'Xojo',     // programming
	'.xojo_window': 'Xojo',     // programming
	'.xtend': 'Xtend',     // programming
	'.yml': 'YAML',     // data
	'.reek': 'YAML',     // data
	'.rviz': 'YAML',     // data
	'.sublime-syntax': 'YAML',     // data
	'.syntax': 'YAML',     // data
	'.yaml': 'YAML',     // data
	'.yaml-tmlanguage': 'YAML',     // data
	'.yang': 'YANG',     // data
	'.y': 'Yacc',     // programming
	'.yacc': 'Yacc',     // programming
	'.yy': 'Yacc',     // programming
	'.zep': 'Zephir',     // programming
	'.zimpl': 'Zimpl',     // programming
	'.zmpl': 'Zimpl',     // programming
	'.zpl': 'Zimpl',     // programming
	'.desktop': 'desktop',     // data
	'.desktop.in': 'desktop',     // data
	'.ec': 'eC',     // programming
	'.eh': 'eC',     // programming
	'.edn': 'edn',     // data
	'.fish': 'fish',     // programming
	'.mu': 'mupad',     // programming
	'.nc': 'nesC',     // programming
	'.ooc': 'ooc',     // programming
	'.rst': 'reStructuredText',     // prose
	'.rest': 'reStructuredText',     // prose
	'.rest.txt': 'reStructuredText',     // prose
	'.rst.txt': 'reStructuredText',     // prose
	'.wisp': 'wisp',     // programming
	'.prg': 'xBase',     // programming
	'.prw': 'xBase',     // programming
};

module.exports = extensions;