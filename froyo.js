// order is vanilla, vanilla, vanilla, strawberry, coffee, coffee
// Ending output should look like the below, or something similar:
// const order = {
//     vanilla: 3,
//     strawberry: 1,
//     coffee: 2
// }

// Will need to loop through information

// separate into an array
// create for loop
// create if statement. if they have a name in the list, add 1. if else, create new name in list
// to add key: order[key] +=
// to add new key: order[key] = 1;

// Prompts user to input order
let userOrderInput = prompt(
  "Please type in your order, flavors separated by commas:",
  ""
);

let froyoOrderArray = userOrderInput.split(",");
console.log(froyoOrderArray);

let order = {};
function organizeOrder(inputOrder) {
  for (let i = 0; i < inputOrder.length; i++) {
    let currentFlavor = inputOrder[i];
    if (order[currentFlavor]) {
      order[currentFlavor]++;
    } else {
      order[currentFlavor] = 1;
    }
  }
}

organizeOrder(froyoOrderArray);

console.log("This is console logging the order.");
console.log(order);
