let arr = [1,1,2,3,4,1]
let count = {}
for (let ele of arr) {
    if(count[ele]){
        count[ele]+=1
    }
    else{
        count[ele]=1
    }

}

// first it will find the key then only it will return the value, when ken is not then else part will be extracted
console.log(count);