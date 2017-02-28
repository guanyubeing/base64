function btoa(string) {
	function base64(num) {
	switch(num) {
		case  0 :
		return 'A'
		case  1 :
		return 'B'	
		case  2 :
		return 'C'
		case  3 :
		return 'D'	
		case  4 :
		return 'E'
		case  5 :
		return 'F'	
		case  6 :
		return 'G'
		case  7 :
		return 'H'	
		case  8 :
		return 'I'
		case  9 :
		return 'J'	
		case  10 :
		return 'K'
		case  11 :
		return 'L'
		case  12 :
		return 'M'
		case  13 :
		return 'N'	
		case  14 :
		return 'O'
		case  15 :
		return 'P'	
		case  16 :
		return 'Q'
		case  17 :
		return 'R'	
		case  18 :
		return 'S'
		case  19 :
		return 'T'	
		case  20 :
		return 'U'
		case  21 :
		return 'V'	
		case  22 :
		return 'W'
		case  23 :
		return 'X'
		case  24 :
		return 'Y'
		case  25 :
		return 'Z'	
		case  26 :
		return 'a'
		case  27 :
		return 'b'	
		case  28 :
		return 'c'
		case  29 :
		return 'd'	
		case  30 :
		return 'e'
		case  31 :
		return 'f'	
		case  32 :
		return 'g'
		case  33 :
		return 'h'	
		case  34 :
		return 'i'
		case  35 :
		return 'j'
		case  36 :
		return 'k'
		case  37 :
		return 'l'	
		case  38 :
		return 'm'
		case  39 :
		return 'n'	
		case  40 :
		return 'o'
		case  41 :
		return 'p'	
		case  42 :
		return 'q'
		case  43 :
		return 'r'	
		case  44 :
		return 's'
		case  45 :
		return 't'	
		case  46 :
		return 'u'
		case  47 :
		return 'v'
		case  48 :
		return 'w'
		case  49 :
		return 'x'	
		case  50 :
		return 'y'
		case  51 :
		return 'z'	
		case  52 :
		return '0'
		case  53 :
		return '1'	
		case  54 :
		return '2'
		case  55 :
		return '3'	
		case  56 :
		return '4'
		case  57 :
		return '5'	
		case  58 :
		return '6'
		case  59 :
		return '7'
		case  60 :
		return '8'
		case  61 :
		return '9'	
		case  62 :
		return '+'
		case  63 :
		return '/'	
	}
}
	var s = string.split('').reduce(function(acc,val) {
		var v = (val.charCodeAt(0)).toString(2)
		while(v.length % 8 !== 0) {
			v = '0' + v
		}
		return acc+v
	},'')
	while(s.length % 6 !== 0){
		s+='0'
	}
	var r=''
	for (var i = 0; i <= s.length - 1; i+=6) {
		r=r+base64(parseInt(s.slice(i,i+6),2))
	}
	var cc = string.length
	while(cc%3 !== 0) {
		r=r+'='
		cc--
	}
	return r
}

function atob(string) {
	function reversBase64(str) {
		switch(str) {
		case 'A':
		return  0 
		case 'B':	
		return  1 
		case 'C':
		return  2 
		case 'D':	
		return  3 
		case 'E':
		return  4 
		case 'F':	
		return  5 
		case 'G':
		return  6 
		case 'H':	
		return  7 
		case 'I':
		return  8 
		case 'J':	
		return  9 
		case 'K':
		return  10 
		case 'L':
		return  11 
		case 'M':
		return  12 
		case 'N':	
		return  13 
		case 'O':
		return  14 
		case 'P':	
		return  15 
		case 'Q':
		return  16 
		case 'R':	
		return  17 
		case 'S':
		return  18 
		case 'T':	
		return  19 
		case 'U':
		return  20 
		case 'V':	
		return  21 
		case 'W':
		return  22 
		case 'X':
		return  23 
		case 'Y':
		return  24 
		case 'Z':	
		return  25 
		case 'a':
		return  26 
		case 'b':	
		return  27 
		case 'c':
		return  28 
		case 'd':	
		return  29 
		case 'e':
		return  30 
		case 'f':	
		return  31 
		case 'g':
		return  32 
		case 'h':	
		return  33 
		case 'i':
		return  34 
		case 'j':
		return  35 
		case 'k':
		return  36 
		case 'l':	
		return  37 
		case 'm':
		return  38 
		case 'n':	
		return  39 
		case 'o':
		return  40 
		case 'p':	
		return  41 
		case 'q':
		return  42 
		case 'r':	
		return  43 
		case 's':
		return  44 
		case 't':	
		return  45 
		case 'u':
		return  46 
		case 'v':
		return  47 
		case 'w':
		return  48 
		case 'x':	
		return  49 
		case 'y':
		return  50 
		case 'z':	
		return  51 
		case '0':
		return  52 
		case '1':	
		return  53 
		case '2':
		return  54 
		case '3':	
		return  55 
		case '4':
		return  56 
		case '5':	
		return  57 
		case '6':
		return  58 
		case '7':
		return  59 
		case '8':
		return  60 
		case '9':	
		return  61 
		case '+':
		return  62 
		case '/':	
		return  63 
	}
	}
	var s = string.split('').reduce(function(acc,val) {
		if (val === '=') {
			return acc
		}
		var v = (reversBase64(val)).toString(2)
		while(v.length % 6 !== 0) {
			v = '0' + v
		}
		return acc+v
	},'')
	while(s.length % 8 !== 0){
		s+='0'
	}
	var r=''
	for (var i = 0; i <= s.length - 1; i+=8) {
		r=r+String.fromCharCode(parseInt(s.slice(i,i+8),2))
	}
	return r
}
	

