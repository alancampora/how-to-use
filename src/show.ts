import * as inquirer from 'inquirer'
import {compose} from './lib/fp-ts'
import {IExample} from './types'

const createChoices: 
    (o: IExample[]) => inquirer.ChoiceType[] = 
    options => options
                    .map((option,index)=> ({
                        "message": option.title,
                        "value": option.id,
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
    (o: IExample[]) => Promise<inquirer.ChoiceType> = 
    options => inquirer.prompt(compose(createQuestion,createChoices)(options))
      
