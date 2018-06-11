import {interval} from 'rxjs';
import {startWith, publish, refCount} from 'rxjs/operators';

const source = interval(2000)
                .pipe(
                    startWith(123),
                    publish(),
                    refCount()
                )


source.subscribe(value => console.log("first observer", value))

setTimeout(_ =>{
    source.subscribe(value => console.log("second observer", value))
}, 5000);

setTimeout(_ =>{
    source.subscribe(value => console.log("third observer", value))
}, 8000)