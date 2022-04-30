export interface IData {
    greetings: string;
    bio: string;
    socials: {[name: string]: string};
    donations: {[name: string]: string};
    skills: Array<string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any
}