// ------ FUNCTORS 
export interface IMaybe<T> {
    value: T | null,
    map <U>( fn: (a:T) => U) : IMaybe<U>,
    inspect () : string
}

export const Maybe = <T>(value:T):IMaybe<T> =>({
   map: <U>( fn: (a:T) => U) : IMaybe<U> => 
           value === null || value === undefined ? Maybe(value) : Maybe(fn(value)), 
           inspect: () : string => `Maybe(${value})`
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
// ------ INLINE FUNCTIONS 

