1. What is an array?
	>>It is a special variable that can store multiple variables at a time

2. How to create an Array?
	>>Using an array literal is the easiest way

var userName = ["value1","value2","value3",...];
var userName = newArray("value1","value2","value3");

let's create an array of color; let's name it as colors, put 5 values

var colors = ["red","blue","green","purple","cyan"];

3. How to access an Array?
	>> You can access an arrray element with Index Number
var userName = ["Kate","Hyunmin","Jae Young"];
userName[0]
console.log(userName[0]); //Kate will return
console.log(userName[1]); //Hyunmin will return
console.log(userName[2]); //Jae Young will return

4. How to change the value of an array?
	>>same as variables

5. How to check how many elements in an array?
	>>Use "length" property
var Username = ["Kate","Hyunmin","jae Young"];
console.log(userName.length); // return 3

6. How do you access the first element of an Array?
	>>userName[0]; //Return "Kate"

7. How do you access the last elements of an Array?
	>>userName[userName.length-1];

9. Adding Array elements
	>>var Username = ["Kate","Hyunmin","Jae Young"];
	>>USE Push Method!
	>>userName.push("Simeon");

9. Adding elements to specific elements
	>>var UserName = ["Kate","Hyunmin","Jae Young"];
	>>userName[7] = "Simeon";
10. Removing Elements from an array
var userName = ["Kate","Hyunmin","Jae Young"];
	a. pop - removes from the end of an Array
		ex) username.pop() //["Kate","Hyunmin"]
	b. shift - Removes from the beginning of an array
		ex) userName.shift() //["Hyunmin","Jae Young"]
	c. splice - removes from a specific Array Index
		ex) userName.splice(1,1) // Hyunmin will be deleted
		ex) userName.splice(1) // "Hyunmin" everything behind will be deleted
	d. delete
		ex) delete userNamme[1] // "Hyunmin" will be deleted
11. Merging(Concatenating) Arrays
	a. var myColors = ["blue","green"]
	b. var myFlowers = ["rose","sunflower"]
	c. var colorFlowers = myColors.concat(myFlowers);
	//["blue","green","rose","sunflower"]
12. Merging multiple Arrays
	a. var array1 = ["Blue","Red"];
	b. var array2 = ["Yellow","Green"];
	c. var array3 = ["Brown","Black"];
	d. var array4 = array1.concat(array2,array3);

13. Getting Index Value from an Array. 
	a. Use indexOf() Method
	b.nameOfArray.indexOf("value");

14. How to add an element to the End of an array
	a. var array1 = ["blue","red"];
	b. array1.push("green");
	c. concsole.log(array1); //["blue","red","green"] will return

15. How to add an element to the Beginning of an array
	a. var array1 = ["blue","red"];
	b. array1.unshift("yellow");
	c.console.log(array1) // ["yellow","blue","red"] will return
	d.shift vs. unshift //shift removes , unshift adds
16. How to add an element to the middle of an array
	a. var array1 = ["blue","red","green","yellow"];
	b. array1.splice(2,1,"black")
	c.console.log(array1) //["blue","red","black","yellow"] will return
	d. Splice modifies the content of an array by removing existing element and/or adding new element
	e.What is you don't want to remove but just add more elements in the middle?
	f.array.splice(2,0,"black")//["blue","red","black","green","yellow"]
17. How to slice out a piece of an array into a new array
	a. var array1 = ["blue","red","green","yellow"]
	b. var array2 = array1.slice(2); //returns ["green","yellow"]
	c.slice() method creates a new array. It doesn't remove any elements in the source array
	d. var array3 = array1.slice(1,2) //returns ["green"]

 Array Sorting
18. How to sort elements in alphabetical order
	a. Use sort() method
	b. var colors = ["red","green","blue","black"];
	c. colors.sort(); //["black","blue","green","red"];

19. How to reverse elements in Array
	a. var colors = ["red","green","blue","black"];
	b.colors.reverse();// ["black","blue","green","red];