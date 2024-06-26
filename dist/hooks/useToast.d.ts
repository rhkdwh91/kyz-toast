/// <reference types="react" />
import { Toast } from '../types';
export declare type TAction = {
    type: 'ADD';
    toast: Toast;
} | {
    type: 'REMOVE';
    id: string;
} | {
    type: 'REMOVE_ALL';
};
export declare const useToast: () => {
    dispatch: import("react").Dispatch<TAction>;
    toasts: Toast[];
};
