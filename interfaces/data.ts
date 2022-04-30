import { ILink } from "./link";

export interface IData {
    username: string;
    bio: string;
    socials: ILink;
    donations: ILink;
    skills: Array<string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any
}