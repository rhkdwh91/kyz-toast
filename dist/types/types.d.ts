export declare enum Events {
    SHOW = "show",
    HIDE = "hide",
    HIDE_ALL = "hideAll"
}
export declare type Type = 'default' | 'success' | 'error' | 'info' | 'warning';
export declare type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare type ToastContent = string;
export declare type ToastConfig = {
    backgroundColor?: string;
    color?: string;
};
export interface Toast {
    id: string;
    content: ToastContent;
    type: Type;
    config?: ToastConfig;
}
export interface ToastProvider {
    content: ToastContent;
    config?: ToastConfig;
}
