import {IExample} from './types'
import {IMaybe, Maybe} from './lib/fp-ts'

const readFromData: 
    (d: IExample[]) => (t: string) => IExample[] | null = 
    data => target => {
     let results = data.filter(entry => entry.keys.indexOf(target) >= 0);
     return results.length > 0 ? results : null;
    };

export const searchAll: 
    (t: string) => (d: IExample[]) => IMaybe<IExample[] | null> =  
         target => data => Maybe(target).map(readFromData(data));

export const searchById: 
    (d:IExample[]) => (i: string) => IMaybe<IExample| undefined> =  
    data => id => Maybe(data.find(sample=> sample.id === id))
