import { IData } from '../../interfaces/data';
import StepOne from './step-one';
import StepTwo from './step-two';

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
export interface IStep {
    data: IData;
    onChange: React.Dispatch<React.SetStateAction<IData>>;
    onContinue: () => void;
}