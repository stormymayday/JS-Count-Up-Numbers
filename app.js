// Selecting all '.number' elements and converting them into an array
const items = [...document.querySelectorAll('.number')];

// updateCount - start
const updateCount = (el) => {

    // Getting the value and converting it to a number
    const value = parseInt(el.dataset.value);

};
// updateCount - end

// Iterating over the items
items.forEach((item) => {

    updateCount(item);

});
