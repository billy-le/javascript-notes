/*
 * What is an Observable? An observable is a data type that combines the iterator and observer pattern together.
 * Observables are event-like data that arrives over time. You can listen to these events by subscribing that that data
 * with an observer.
 */

/** A simple observer looks like this **/
var observer = {
    next() {
        // do something when the producers tells the subscriber data has arrived
    },
    error() {
        // do something when the producer tells the subscriber there is an error
    },
    complete() {
        // do something when the producer tells the subscriber we are done
    },
};

/** Simple Observables **/
// ES5
var es5Observable = function(subscribe) {
    this._subscribe = subscribe;

    return {
        subscribe(observer) {
            return this._subscribe(observer);
        },
    };
};

// ES6
class es6Observable {
    private _subscribe;

    constructor(subscribe) {
        this._subscribe = subscribe;
    }

    subscribe(observer) {
        return this._subscribe(observer);
    }
}

// Typescript
interface Observer {
    next: (value?) => void;
    error?: (err: any) => void;
    complete?: () => void;
}

interface Subscription {
    unsubscribe: () => void;
}

class tsObservable {
    private _subscribe;

    constructor(subscribe) {
        this._subscribe = subscribe;
    }

    subscribe = (observer: Observer): Subscription => {
        return this._subscribe(observer);
    };

    static timeout = (time: number) => {
        return new tsObservable(
            (observer: Observer): Subscription => {
                const handler = setTimeout(() => {
                    observer.next(), observer.complete();
                }, time);

                return {
                    unsubscribe() {
                        clearTimeout(handler);
                    },
                };
            }
        );
    };
}

const obs = tsObservable.timeout(1000).subscribe({
    next(value) {
        console.log(`logging out to console after ${value} second`);
    },
    complete() {
        console.log('done');
    },
});
