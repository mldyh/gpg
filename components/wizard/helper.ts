import StepFive from './step-five';
import StepFour from './step-four';
import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

export enum STEPS {
    USERNAME = 1,
    BIO = 2,
    TECH_STACKS = 3,
    SOCIAL_LINK = 4,
    DONATION = 5,
    DONE = 6
}

export const StepContent = (step:STEPS): (props: IStep) => JSX.Element => {
    switch(step) {
        case STEPS.BIO: 
            return StepTwo;
        case STEPS.TECH_STACKS: 
            return StepThree;
        case STEPS.SOCIAL_LINK: 
            return StepFour;
        case STEPS.DONATION: 
            return StepFive;
        default: 
            return StepOne;
    }
}

export const SOCIAL_LINKS: ILink = {
    "Behance": {
        baseURL: "https://www.behance.net/"
    },
    "Facebook": {
        baseURL: "https://www.facebook.com/"
    },
    "LinkedIn": {
        baseURL: "https://www.linkedin.com/"
    },
    "Pinterest": {
        baseURL: "https://www.pinterest.com/"
    },
    "Reddit": {
        baseURL: "https://www.reddit.com/"
    },
    "Tiktok": {
        baseURL: "https://www.tiktok.com/en/"
    },
    "Twitter": {
        baseURL: "https://twitter.com/"
    },
    "Discord": {
        baseURL: "https://discord.com/"
    },
    "Instagram": {
        baseURL: "https://www.instagram.com/"
    },
    "Medium": {
        baseURL: "https://medium.com/"
    },
    "Quora": {
        baseURL: "https://www.quora.com/"
    },
    "Stack Overflow": {
        baseURL: "https://stackoverflow.com/"
    },
    "Twitch": {
        baseURL: "https://www.twitch.tv/"
    },
    "YouTube": {
        baseURL: "https://www.youtube.com/"
    }
}

export const DONATION_LINKS: ILink = {
    "buymeacoffee": {
        baseURL: "https://www.buymeacoffee.com/",
        imageURL: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
    },
    "Ko-fi": {
        baseURL: "https://ko-fi.com/",
        imageURL: "https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
    },
}

export interface ILink {
    [name: string]: {
        baseURL: string;
        username?: string;
        imageURL?: string;
    }
}
export interface IData {
    username: string;
    bio: string;
    socials: ILink;
    donations: ILink;
}
export interface IStep {
    data: IData;
    onChange: React.Dispatch<React.SetStateAction<IData>>;
    onContinue: () => void;
}