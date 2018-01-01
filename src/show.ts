import * as inquirer from 'inquirer'
import {compose} from './fp-ts'
import {IExample} from './types'

const createChoices: 
    (o: IExample[]) => inquirer.ChoiceType[] = 
    options => options
                    .map((option,index)=> ({
                        "message": option.title,
                        "value": option.title,
                        "name": option.title
                    })) 

const createQuestion:
    (c: inquirer.ChoiceType[]) => inquirer.Question[] = 
    choices => [({
        type: "checkbox",
        message: "Results found",
        name: "Results",
        choices: choices
    })]

export const show: 
    (o: IExample[]) => any = 
    options => inquirer
                .prompt(compose(createQuestion,createChoices)(options))
                .then((response:any) => console.log(response))
                .catch((error:any) => console.log(error))
       
