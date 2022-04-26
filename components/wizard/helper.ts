import StepFour from './step-four';
import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

export enum STEPS {
    USERNAME = 1,
    BIO = 2,
    STATS = 3,
    SOCIAL_LINK = 4,
    TECH_STACKS = 5,
    DONATION = 6,
    DONE = 7
}

export const StepContent = (step:STEPS): (props: IStep) => JSX.Element => {
    switch(step) {
        case STEPS.BIO: 
            return StepTwo;
        case STEPS.STATS: 
            return StepThree;
        case STEPS.SOCIAL_LINK: 
            return StepFour;
        default: 
            return StepOne;
    }
}

export const SOCIAL_LINKS: ILink = {
    "Behance": "",
    "Facebook": "",
    "LinkedIn": "",
    "Pinterest": "",
    "Reddit": "",
    "Tiktok": "",
    "Twitter": "",
    "Discord": "",
    "Instagram": "",
    "Medium": "",
    "Quora": "",
    "Stack Overflow": "",
    "Twitch": "",
    "YouTube": ""
}

export interface ILink {
    [name: string]: string
}
export interface IData {
    username: string;
    bio: string;
    socials: {
        [name: string]: string
    }
}
export interface IStep {
    data: IData;
    onChange: React.Dispatch<React.SetStateAction<IData>>;
    onContinue: () => void;
}