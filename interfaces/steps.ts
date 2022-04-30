import { IData } from "./data";

export interface IStep {
    data: IData;
    onChange: React.Dispatch<React.SetStateAction<IData>>;
    onContinue: () => void;
}