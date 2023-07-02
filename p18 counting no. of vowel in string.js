/*Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
Count of vowels in string;
ex:- str = "brainmentors"
		output: count = 4*/


function match_str(str){
    const count = str.match(/[aeiou]/g).length;
    return count;
}
undefined
function in_str(){
    var string = prompt("Enter the string");
    len = match_str(string);
    console.log(len);
}
undefined
in_str();
VM3115:4 4
undefined
