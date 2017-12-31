// ------ BASE FP FUNCTIONS
const compose = (...fns: any[]) =>
    fns.reduce(
    (prevFn, currentFn) => (data: any) => prevFn(currentFn(data)),
        (identity: any) => identity
    );

interface IMaybe<T> {
    value: T,
    map <U>( fn: (a:T) => U) : IMaybe<U>;
}

const Maybe = <T>(value:T):IMaybe<T> =>({
   map: <U>( fn: (a:T) => U) : IMaybe<U> => Maybe(fn(value))
} as IMaybe<T>)


//type Either<L,R> = Left<L> | Right<R>;

//interface Left<L> {
    //value:L,
    //map<U>( fn: (a:L) => U) : Left<L>
//}

//interface Right<R> {
    //value:R, 
    //map<U>( fn: (a:R) => U) : Right<U>
//}
//const Left = <L,R>(value: L): Either<L,R> => ({
   //map: <U>( fn: (a:L) => U) : Left<L> => Left(value)
//} as Left<L>)

//const Right = <L,R>(value: R): Either<L,R> => ({
   //map: <U>( fn: (a:R) => U) : Right<U> => Right(fn(value))
//} as Right<R>)


//const Right = <L,R>(value: R): Either<L,R> => ({
    //kind: "right", v: value
//} as Right<R>)


// ------ BASE FP FUNCTIONS

// ---------------------------- PROGRAM ----------------------------

// ------ WARNING: NON PURE FUNCTIONS GO HERE
const readFromData: 
    (d: example[]) => (t: string) => example[] = 
    data => target => data.filter(entry => entry.keys.indexOf(target) >= 0);

const search: 
    (t: string) => (d: example[]) => IMaybe<example[]> =  
    target => data => Maybe(target).map(readFromData(data));

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
