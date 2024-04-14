import { ToastContent, ToastConfig } from './types';
declare const toast: {
    (content: ToastContent, config?: ToastConfig): void;
    success(content: ToastContent, config?: ToastConfig): void;
    error(content: ToastContent, config?: ToastConfig): void;
    info(content: ToastContent, config?: ToastConfig): void;
    warn(content: ToastContent, config?: ToastConfig): void;
    hideAll(): void;
};
export { toast };
