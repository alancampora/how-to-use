import {IExample} from './types'
import {IMaybe, Maybe} from './fp-ts'

const readFromData: 
    (d: IExample[]) => (t: string) => IExample[] = 
    data => target => data.filter(entry => entry.keys.indexOf(target) >= 0);

export const searchAll: 
    (t: string) => (d: IExample[]) => IMaybe<IExample[]> =  
         target => data => Maybe(target).map(readFromData(data));

