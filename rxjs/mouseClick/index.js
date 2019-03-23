const { fromEvent } = rxjs;
let counter = 0;
const incrementButton= document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement')
const count = document.querySelector('#count')
count.innerHTML = `${counter}`;

const incrementObservable = fromEvent(incrementButton, 'click');
const decrementObservable = fromEvent(decrementButton, 'click');


/*
 * incrementHandler and decrementHandler will cease to function
 * when conditions are met. I don't know how to re-trigger a 
 * subscription to the observable. Can't wrap it in a while loop
 * if counter is 20 or -20
 */

const incrementHandler = incrementObservable.subscribe(() => {
    counter += 1;
    console.log('Inside increment, the counter is: ', counter)
    count.innerHTML = `${counter}`;

    if (counter >= 20) {
        return incrementHandler.unsubscribe();
    }
});


const decrementHandler = decrementObservable.subscribe(() => {
    counter -= 1;
    console.log('Inside decrement, the counter is: ', counter)
    count.innerHTML = `${counter}`;

    if (counter <= -20) {
        return decrementHandler.unsubscribe();
    }
})