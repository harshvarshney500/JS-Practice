/*.Write a function to find the intersection of two arrays (common elements between the two arrays).

ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

output = [1,4,7]*/



function intersection(){
    var arr1=[2,4,1,7,4,2]; 
    var arr2 = [5,1,4,7,3,1];
    var l=[];
    arr1.reduce((acc,e)=>{
        if(arr2.includes(e)){
            l.push(e);
        }
    });
    return l;
}
