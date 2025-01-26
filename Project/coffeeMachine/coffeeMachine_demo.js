// Hyperskill Coffee Machine Project:
// Make code that results in the following output:
/*
Prices:
Bubblegum: $2
Toffee: $0.2
Ice cream: $5
Milk chocolate: $4
Doughnut: $2.5
Pancake: $3.2
*/

const priceList = {
    title: 'Prices:',
};
const bubblegum = {
    price: function (number) {
        console.log(`Bubblegum: $${number}`);
    },
};
const toffee = {
    price: function (number) {
        console.log(`Toffee: $${number}`);
    },
};
const iceCream = {
    price: function (number) {
        console.log(`Ice Cream: $${number}`);
    },
};
const milkChoc = {
    price: function (number) {
        console.log(`Milk Chocolate: $${number}`);
    },
};
const doughnut = {
    price: function (number) {
        console.log(`Doughnut: $${number}`);
    },
};
const pancake = {
    price: function (number) {
        console.log(`Pancake: $${number}`);
    },
};

console.log(priceList.title);
bubblegum.price(2);
toffee.price(0.2);
iceCream.price(5);
milkChoc.price(4);
doughnut.price(2.5);
pancake.price(3.2);

