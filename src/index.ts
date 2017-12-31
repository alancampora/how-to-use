// ------ BASE FP FUNCTIONS
const compose = (...fns: any[]) =>
    fns.reduce(
    (prevFn, currentFn) => (data: any) => prevFn(currentFn(data)),
        (identity: any) => identity
    );

interface IMaybe<T> {
    map <U>( fn: (a:T) => U) : IMaybe<U>;
}

class Maybe<T> implements IMaybe<T>{
    private value:T

    constructor(value:T){
       this.value = value; 
    }
    map<U>(fn: (a:T) => U){
        return new Maybe(fn(this.value))
    }
}

// ------ BASE FP FUNCTIONS

// ---------------------------- PROGRAM ----------------------------

// ------ WARNING: NON PURE FUNCTIONS GO HERE
const readFromData: 
    (d: example[]) => (t: string) => example[] = 
    data => target => data.filter(entry => entry.keys.indexOf(target) >= 0);

const search: 
    (t: string) => (d: example[]) => IMaybe<example[]> =  
    target => data => new Maybe(target).map(readFromData(data));

const showOptions: 
    (o: any[]) => any = 
    options => console.log(options)
// ------ WARNING: NON PURE FUNCTIONS GO HERE

const main: 
    (t: string, d: example[]) => any =
    (target,data) => {
        search(target)(data)
            .map(showOptions)
    }

interface example {
    keys: string[];
}
let dummyTarget: string = 'functional';
let dummyData: example[] = [{keys: ['functional', 'map', 'array']}];
main(dummyTarget, dummyData);
