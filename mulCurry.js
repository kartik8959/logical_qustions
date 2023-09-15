function currying(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}
let res = currying(2)(4)(8)
console.log(res)