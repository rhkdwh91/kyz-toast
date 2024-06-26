import { ToastContent, ToastConfig } from './types';
declare const toast: {
    (content: ToastContent, config?: ToastConfig | undefined): void;
    success(content: ToastContent, config?: ToastConfig | undefined): void;
    error(content: ToastContent, config?: ToastConfig | undefined): void;
    info(content: ToastContent, config?: ToastConfig | undefined): void;
    warn(content: ToastContent, config?: ToastConfig | undefined): void;
    hideAll(): void;
};
export { toast };
