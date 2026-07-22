var createCounter = function (init) {
    const initialValue = init;
    let current = init;

    return {
        increment: () => {
            current++;
            console.log(current);
            return current;
        },
        decrement: () => {
            current--;
            console.log(current);
            return current;
        },
        reset: () => {
            current = initialValue;
            console.log(current);
            return current;
        }
    };
};



const counter = createCounter(5)
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
counter.increment();
counter.decrement();
console.log('-------------');

counter.reset(); 
