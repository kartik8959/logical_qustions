//  Remove Duplicate elements
// 1.

function removeDuplicates(arr){

    const uniqueSet = new Set(arr)
    console.log([...uniqueSet])
    let uniqueArr = Array.from(uniqueSet)
    console.log(uniqueArr)

}



const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
removeDuplicates(array);

// 2.


function removeDuplicateElements(arr){
    let b=[]

    arr.filter((item,index)=>{
        if(b.indexOf(item)== -1){
            b.push(item)
        }
    })

    return b;

}

let data = [1, 2, 3, 4, 2, 3, 1, 5, 6, 4];


let res = removeDuplicateElements(data)
console.log(res,"result")
