// Selecting all '.number' elements and converting them into an array
const items = [...document.querySelectorAll('.number')];

// updateCount - start
const updateCount = (el) => {

    // Getting the value and converting it to a number
    const value = parseInt(el.dataset.value);

    // Setting the increment
    const increment = Math.ceil(value / 1000);

    // Setting the initialValue
    let initalValue = 0;

    const increaseCount = setInterval(() => {

        // Increasing initialValue by increment
        initalValue += increment;

        // Setting the element's textContent
        el.textContent = `${initalValue}+`;

    }, 1);

};
// updateCount - end

// Iterating over the items
items.forEach((item) => {

    updateCount(item);

});
