var num = 4;

function outer() {
  var num = 2;
  function inner() {
    num++;
    console.log(num, "JJ");
    var num = 1;
    console.log(num);
  }
  inner();
}
outer();
