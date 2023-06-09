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

        // Checking if initialValue is greater than value; otherwise, it will run forever
        if (initalValue > value) {

            // Setting the element's textContent to value
            el.textContent = `${value}+`;

            // Clearing the interval
            clearInterval(increaseCount);

            return;

        }

        // Setting the element's textContent to initalValue
        el.textContent = `${initalValue}+`;

    }, 1);

};

export default updateCount;