function init() {
    let state = 0;

    const increment = () =>{
        state += 1;
        return state;
    }

    const decrement = function () {
        state -= 1;
        return state;
    }

    increment();
    increment();
    increment();
    decrement();
    console.log(`State: ${state}`);
}

init();