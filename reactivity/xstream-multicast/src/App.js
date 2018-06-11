import xs from "xstream";

const periodicStream = xs.periodic(1000)
                         .map(_ => Math.floor(Math.random()*1000) + 100);

periodicStream.addListener({
    next(value){
        console.log("first listener", value);
    }
})

setTimeout(_ =>{
    periodicStream.addListener({
        next(value){
            console.log("second listener", value);
        }
    })
}, 3000);

setTimeout(_ =>{
    periodicStream.addListener({
        next(value){
            console.log("third listener", value);
        }
    })
}, 6000);