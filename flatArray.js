let arr = [10,[20,30],40,[50]]
// first way
let res = [].concat.apply([],arr)
// second way
let res1 =[].concat(...arr)

// console.log(res);
// console.log(res1);

// array flatten

const flatten = function(arr, res=[]){
    for (let i=0; i<arr.length; i++) {
        let value= arr[i];
    if(Array.isArray(value)){
        console.log("if")
        flatten(value,res)
    }else{
        console.log("else");
        res.push(value)
    }
}
return res;
}

let result= flatten(arr)
console.log("result: ", result, result.length);