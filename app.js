import updateCount from "./utils/updateCount.js";

// Selecting all '.number' elements and converting them into an array
const items = [...document.querySelectorAll('.number')];

// Iterating over the items
items.forEach((item) => {

    updateCount(item);

});
