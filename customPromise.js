function getValue() {
let myPromise = new Promise((myResolve, myReject) => {
    let num =10;

    if(num < 7){
        myResolve(`The value is : ${num}`)
    }
    else{
        myReject("Something went wrong with the value")
    }

})

myPromise.then((res) =>{

    console.log(res);
},
(err)=>{
    console.log(err)
    }
)

}

getValue()