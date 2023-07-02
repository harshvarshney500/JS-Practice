/* Write a function to find the second largest number in an array.

ex:- var arr = [12,4,6,9,2,15,3,9];
		
		output second largest : 12*/



function second_larget(arr) {
    var ans = arr.sort((a,b) => b-a);
    return ans[1];
};
