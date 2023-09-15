let userDetails = [

    {
        id : 101,
        name : "kartik",
        email : "kartikjodhani@gmail.com"
    },
    {
        id : 102,
        name : "Pooja",
        email : "Pooja@gmail.com"
    },
    {
        id : 103,
        name : "Ankit",
        email : "Ankit@gmail.com"
    },
    {
        id : 104,
        name : "meenal",
        email : "meenal@gmail.com"
    },
    {
        id : 105,
        name : "tamanna",
        email : "tamanna@gmail.com"
    }
]

const users = userDetails.map((value,index,array)=>{
    return {
        name:value.name,
        email:value.email,
        position : 'employee'
    }
})

console.log(users);