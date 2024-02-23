// cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.upateWallet();
//     });
//   });
// });
//What are callback function ? What is callback hell , Pyramid of Doom, Inversion of control

// Ans: Callback functions are function that are passed as a parameter to another function, and the function which gets them as a parameter are known as Higher Order Function
const add = (a, b) => a + b;
function subtract(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function display(a, b, operation) {
  return operation(a, b);
}
console.log(display(5, 6, add));
//why we use callback ? : to handle asynchronous funtionlality of a javascript ..

function bringCheese(callback) {
  setTimeout(function () {
    const cheese = "🧀";
    console.log("bring the cheese", cheese);
    callback(cheese);
  }, 2000);
}
function fetchBread(cheese, callback) {
  setTimeout(() => {
    const bread = "🥞" + cheese;
    console.log("bread fetched", bread);
    callback(bread);
  }, 1000);
}

function pepperSpread(bread, callback) {
  setTimeout(() => {
    const pepper = bread + "🍾";
    console.log("That's the pepper bread", pepper);
    callback(pepper);
  }, 1000);
}
function pizzaReady(pepper, callback) {
  setTimeout(() => {
    const pizza = pepper + "🍕";
    console.log("here is the pizza", pizza);
    callback(pizza);
  }, 500);
}

bringCheese((cheese) => {
  fetchBread(cheese, (bread) => {
    pepperSpread(bread, (pepper) => {
      pizzaReady(pepper, (pizza) => {
        console.log("finally the pizza has been prepared", pizza);
      });
    });
  });
});

//see here's the problem occurs, the pyramid of doom or callback hell.
