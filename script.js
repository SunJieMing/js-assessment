//#1
//Declare a variable called 'name' that has the value of your name.

/var name = 'Nana Owusu Nyamekye'/

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

/if (name == 'Nana Owusu Nyamekye') {
  console.log('yes');
}
 else {
   console.log('no')
 }/

//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods

/var favoriteFoods = new Array('rice', 'fufu', 'noodles', 'banku');/

//#4
//use a for loop to log each food in the 'favoriteFoods' array

/for (var i = 0;i < favoriteFoods.length; i++) {
  console.log(favoriteFoods[i]);
}/

//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name

/var favoriteMovie = {
  runtime: 90;
  title: 'Transformers';
  director: 'Micheal Bay'
};/

//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument

/function sayHi(name) {
  console.log('Hello' + name);
}

//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array

/var friends = new Array()

var Kofi = {
  name: 'John Kofi Doe';
  age: 32;
  vocation: 'Artist'
};

var Susan = {
  name: 'Susan Jacobs';
  age: 26;
  vocation: 'Hiring Manager';
};

var Cassie = {
  name: 'Cassie Sarfo'
  age: 22;
  vocation: 'Software Developer';
};/

friends.push(Kofi);
friends.push(Susan);
friends.push(Cassie);

//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'

/for (i = 0; i < friends.length; i++) {
console.log('My friend' + name + "" + 'is' + age + "" + 'years old and does' + vocation + "" + 'for work.');
};/

//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor

/*code here*/

//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively

/function nFactorial(num) {
  if (num === 0) {
    return 1
  }
  elsif {  
  return num * factorial(num-1);
  };
  
};/
