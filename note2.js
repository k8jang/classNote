Javascript Operators
	1. Arithmetic Operator;
	2. Assignment Operator
	3. String Operator;
	4. Comparison Operator;
	5. Logical Operator;
	6. Type Operator;

1. Arithmetic Operator 
	Operator 			Description
	+					Addition
	-					Subtraction
	*					Multiplication
	**					Exponentiation
	/					Division
	%					Modulus (Remainder)
	++					Increment
	--					Decrement

	a. Addition
		var a = 10+2;
	b. Subtraction
		var b = 2-1;
	c. Multiplication
		var c = 7*8;
	d. Exponentiation;
		var d = 2**3 //returns 8
	e. Division;
		var e = 10/5;
	f. Modulus(remainder);
		var f = 8%3; //returns 2
	g. Increment;
		var g = 2;
		g++;
		console.log(g);
	h. Decrement;
		var h = 3;
		h--;
		console.log(h);
	i. Operator Precedence
		var x= 100+50*2
		console.log(x) //?

2. Assignment Operator
	: assign R-value to L-value;
	var x = 3;
	+=
	-=
	*=
	%=

3. String Operator
	+ operator is used to add(concatenate) strings
	var x = "Hello"
	var y = "World"
	var z = x+y;
	console.log(z); //"HelloWorld" will return;

	+= operator is used to add(concenate) strings
	var x= "Hello"
	x+= "World" // x = x+"World";
	console.log(x);

4. Comparison Operator // returns true or false value
	Operator 	Description
	==			Equal to
		var x =3;
		var y = "3";
		console.log(x==y);
	===			Equal value and Equal Type
		var x =3;
		var y =3;
		console.log(x===y);  
	!=			Not Equal value
	!==			Not Equal value or Not Equal Type
	>			Greater than
	<			Less than
	>= 			Greater than or equal to
	<=			Less than or equal to

