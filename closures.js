function outerFunction() {
  let greet = "Hello, ";
  function innerFunction(name) {
    console.log(`${greet} ${name}`);
  }
  return innerFunction;
}
let innerFunction = outerFunction();
innerFunction("Kartik Jii");
