/*.Write a function to rotate an array by a given number of steps to the right.

ex:- arr = [1,2,3,4,5];
		step = 2;

 output = [5,4,1,2,3]*/


function rotatestep(arr, step) {
    for(var i = 0 ; i < step ; i++){
        arr.unshift(arr.pop());
    }
    return arr;
};
