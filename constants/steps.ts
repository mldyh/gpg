import StepOne from '../components/wizard/step-one';
import StepTwo from '../components/wizard/step-two';
import { IStep } from '../interfaces/steps';

export enum STEPS {
    USERNAME = 1,
    DONE = 2
}

export const StepContent = (step:STEPS): (props: IStep) => JSX.Element => {
    switch(step) {
        case STEPS.DONE: 
            return StepTwo;
        default: 
            return StepOne;
    }
}
