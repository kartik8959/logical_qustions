// // Initialize an object with properties and methods
// const job = {
//   position: "cashier",
//   type: "hourly",
//   isAvailable: true,
//   showDetails() {
//     const accepting = this.isAvailable
//       ? "is accepting applications"
//       : "is not currently accepting applications";

//     console.log(
//       `The ${this.position} position is ${this.type} and ${accepting}.`
//     );
//   },
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();
// console.log(job);

// // Initialize an object
// const operatingSystem = {
//   name: "Ubuntu",
//   version: 18.04,
//   license: "Open Source",
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);
// entries.forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];
//   console.log(key, ":", value);
// });

// console.log(entries);

let user = {
  username: "kartik",
  password: "1234566",
};

// let myUser = Object.freeze(user);

// user.username = "deepak";
// myUser.username = "deepak";
// let res = { ...user };
// res.username = "mhhh";
// delete user.username;

let myUser = Object.seal(user);
myUser.password = "********";
myUser.active = false;

console.log(user, myUser);
