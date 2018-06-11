import Rx from "rxjs"

const data = [1,2,10,1,3,9,6,13,11,10,10,3,19,18,17,15,4,8,4];

const onData = (value) => console.log(`current sum is ${value}`);
const onError = _ => console.log("stream error");
const onComplete = _ => console.log("stream completed");

const obs = Rx.Observable.from(data)
                            .filter(value => value % 2 === 0)
                            .distinct()
                            .reduce((acc, value) => acc + value);

obs.subscribe(onData, onError, onComplete);