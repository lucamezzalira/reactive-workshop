import xs from 'xstream';

const data = [1,2,10,1,3,9,6,13,11,10,10,3,19,18,17,15,4,8,4];

const filterEven = (value) => value % 2 === 0; 
const removeDuplicates = (inputStream) => {
    const buffer = [];
    const outputStream = xs.fromArray(buffer);
    
    inputStream.addListener({
        next(value){
            if(buffer.length === 0 || buffer.indexOf(value) < 0)
                buffer.push(value);
        }
    })
    
    return outputStream;
}
const sumValues = (acc, value) => acc + value;

const listener = {
    next(value){
        console.log(`current sum is ${value}`);
    },
    error(){
        console.error("stream error");
    },
    complete(){
        console.log("stream completed");
    }
}

const stream = xs.fromArray(data)
                 .filter(filterEven)
                 .compose(removeDuplicates)
                 .fold(sumValues, 0);

stream.addListener(listener);