// ------ FUNCTORS 
export interface IMaybe<T> {
    value: T | null | undefined,
    map <U>( fn: (a:T) => U) : IMaybe<U>,
    isNothing () : boolean, 
    inspect () : string

}

export const Maybe = <T>(value:T):IMaybe<T> =>({
    map: <U>( fn: (a:T) => U) : IMaybe<U> => 
           value === null || value === undefined ? Maybe(value) : Maybe(fn(value)), 
    isNothing: 
            () : boolean  => value === null || value === undefined,
    inspect: 
            () : string => `Maybe(${value})`
} as IMaybe<T>)
// ------ FUNCTORS 

// ------ INLINE FUNCTIONS 
export const compose = (...fns: any[]) =>
    fns.reduce(
    (prevFn, currentFn) => (data: any) => prevFn(currentFn(data)),
        (identity: any) => identity
    );

export const map: 
    (fn: any) => (functor: any) => any =
    fn => functor => functor.map(fn)

export const trace: 
    (data: any) => any =
    data => (console.log(data),data)


export const maybe: 
    <T,U>(e: string) => (fn: (a:T) => U) => (f: IMaybe<T>) => IMaybe<U> | string = 
         mError => fn => m => m.isNothing ? mError : m.map(fn)

//const maybe:
    //(d:string) => string | number
    //= dale => dale ? dale : 1

// ------ INLINE FUNCTIONS 

