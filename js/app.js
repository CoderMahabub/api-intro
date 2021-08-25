// JavaScript Object Notation
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['Laptop', 'Mobile', 'Pepsi'],
    owner: {
        name: 'Alia Bhaat',
        profession: 'Actor',
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const coverted = JSON.parse(shopStringified);
console.log(coverted);