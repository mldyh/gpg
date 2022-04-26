import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

export enum STEPS {
    USERNAME = 1,
    BIO = 2,
    STATS = 3,
    THROPIES = 4,
    SOCIAL_LINK = 5,
    TECH_STACKS = 6,
    DONATION = 7,
    DONE = 8
}

export const StepContent = (step:STEPS): (props: IStep) => JSX.Element => {
    switch(step) {
        case STEPS.BIO: 
            return StepTwo;
        case STEPS.STATS: 
            return StepThree;
        default: 
            return StepOne;
    }
} 

export interface IData {
    username: string;
    bio: string;
}
export interface IStep {
    data: IData;
    onChange: React.Dispatch<React.SetStateAction<IData>>;
    onContinue: () => void;
}