// Selecting all '.number' elements and converting them into an array
const items = [...document.querySelectorAll('.number')];

// updateCount - start
const updateCount = (el) => {

    console.log(el);

};
// updateCount - end

// Iterating over the items
items.forEach((item) => {

    updateCount(item);

});
