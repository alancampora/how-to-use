#!/usr/bin/env node
import {show} from './show'
import {IExample} from './types'
import {IMaybe, Maybe, compose, map} from './fp-ts'
import {searchAll} from './search-samples'


// ---------------------------- PROGRAM ----------------------------
const main: 
    (t: string) =>  (d: IExample[]) => any =
    target => data => compose(map(show),searchAll(target))(data)

// ---------------------------- DUMMY  ----------------------------
let dummyTarget: string = 'functional';
let dummyData: IExample[] = [
    {keys: ['functional', 'reduce', 'array'], title: "Array.reduce4"},
    {keys: ['functional', 'reduce', 'array'], title: "Array.reduce"},
    {keys: ['functional', 'filter', 'array'], title: "Array.filter"},
    {keys: ['functional', 'map', 'array'], title: "Array.map"}
];
main(dummyTarget)(dummyData);
