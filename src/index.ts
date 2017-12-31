// ------ BASE FP FUNCTIONS
const compose = (...fns: any[]) =>
    fns.reduce(
        (prevFn, currentFn) => (data: any) => prevFn(currentFn(data)),
        (identity: any) => identity
    );
const Context = (value: any) => ({
    map: (fn: any) => Context(fn(value))
});

type Maybe = null | any;
const Maybe = (value: any) => ({
    map: (fn: any) =>
        value === undefined || value == null ? Maybe(null) : Maybe(fn(value)),
    inspect: `Maybe(${value})`
});
// ------ BASE FP FUNCTIONS

// ---------------------------- PROGRAM ----------------------------

// ------ WARNING: NON PURE FUNCTIONS GO HERE
const readFromData: 
    (d: examples[]) => (t: string) => Maybe = 
    data => target => data.filter(entry => entry.keys.indexOf(target) >= 0);

const search: 
    (t: string, d: examples[]) => Maybe =  
    (target,data) => Maybe(target).map(readFromData(data));
// ------ WARNING: NON PURE FUNCTIONS GO HERE

const main: 
    (t: string, d: examples[]) => any =
    (target,data) => {
        let results: Maybe = search(target, data);
        console.log(results);
    };

interface examples {
    keys: string[];
}

let dummyTarget: string = 'functional';
let dummyData: examples[] = [{keys: ['functional', 'map', 'array']}];
main(dummyTarget, dummyData);
