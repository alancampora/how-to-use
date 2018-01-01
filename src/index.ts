#!/usr/bin/env node

import {show} from './show'
import {IExample} from './types'
import {IMaybe, Maybe, compose, map} from './fp-ts'


// ------ WARNING: NON PURE FUNCTIONS GO HERE
const readFromData: 
    (d: IExample[]) => (t: string) => IExample[] = 
    data => target => data.filter(entry => entry.keys.indexOf(target) >= 0);

const search: 
    (t: string) => (d: IExample[]) => IMaybe<IExample[]> =  
         target => data => Maybe(target).map(readFromData(data));

// ------ WARNING: NON PURE FUNCTIONS GO HERE

// ---------------------------- PROGRAM ----------------------------
const main: 
    (t: string) =>  (d: IExample[]) => any =
    target => data => compose(map(show),search(target))(data)

// ---------------------------- DUMMY  ----------------------------
let dummyTarget: string = 'functional';
let dummyData: IExample[] = [
    {keys: ['functional', 'filter'], title: "Array.filter"},
    {keys: ['functional', 'map', 'array'], title: "Array.map"}
];
main(dummyTarget)(dummyData);
