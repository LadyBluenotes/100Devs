// Arrays

/* Write a program that:
Creates an array named muskateer containing values "athos", "porthos", "aramis"
- Show each array element using a for loop
- Add the "d'artagnan" element to the array
- Show each array element using the foreach() method
- Remove poor aramis
- Show each array element using a for-of loop*/

const muskateers = ["athos", "porthos", "aramis"];

// for (let i = 0; i < muskateer.length; i++) {
//   console.log(muskateer[i]);
// }

muskateers.push("d'artagnan");

// console.log(muskateers[3]);

// muskateers.forEach(muskateer => {
//   console.log(muskateer);
// });

// muskateers.splice(0,1)

// // console.log(muskateers);

// for (const muskateer of muskateers) {
//   console.log(muskateer)
// }

// Objects

/* Write a program that creates an account object with the following characteristic:
  name = Alex, 
  balance - 0, 
  credit method adding the positive or negative value passed as an argument to the account balance,
  a describe method returning the account description */

// const account = {
//   name: 'Alex',
//   balance: 0,

//   describe() {
//     return `owner: ${account.name}, balance ${account.balance}`
//   }
// }

// // console.log(account.describe())

// //Credit 250
// account.balance += 250

// // //Debit 80
// account.balance -= 80

// console.log (account.describe())

