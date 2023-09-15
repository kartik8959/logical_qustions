let arr = [10, 20, 60, 50, 90, 100, 120, 110, 112,10 , 5 ,200, 400 ]

let maxValue = arr.reduce((prev, curr)=>{
    console.log(`prev - ${prev} curr - ${curr}`);
    return prev > curr ? prev : curr

})
//  previous will be first element 

console.log(maxValue);