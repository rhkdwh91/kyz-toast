import { TAction } from '../hooks';
interface IToastDispatcher {
    dispatch: (value: TAction) => void;
    delay?: number;
}
export declare const toastDispatcher: ({ dispatch, delay }: IToastDispatcher) => void;
export {};
