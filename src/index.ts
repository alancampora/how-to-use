#!/usr/bin/env node
import {show} from './show'
import {IExample} from './types'
import {maybe, compose, trace} from './lib/fp-ts'
import {searchAll} from './search-samples'


// ---------------------------- PROGRAM ----------------------------
//const afterSelection: 
    //(d: IExample[])=>(s: IExample) =>any= 
    //data => selectedSample => compose(map(trace),searchById(data))(selectedSample.id)

const main: 
    (t: string) =>  (d: IExample[]) => any =
    target => data => 
        compose(trace,maybe('Error',show),searchAll(target))(data)

// ---------------------------- DUMMY  ----------------------------
let dummyTarget: string = 'functional';
let dummyData: IExample[] = [
    {id: "1", keys: ['functional', 'reduce', 'array'], title: "Array.reduce4"},
    {id: "2", keys: ['functional', 'reduce', 'array'], title: "Array.reduce"},
    {id: "3", keys: ['functional', 'filter', 'array'], title: "Array.filter"},
    {id: "4", keys: ['functional', 'map', 'array'], title: "Array.map"}
];
main(dummyTarget)(dummyData);
