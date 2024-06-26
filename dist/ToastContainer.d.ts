import { FC } from 'react';
import { Position } from './types';
import './ToastContainer.css';
interface IToastContainer {
    position?: Position;
    delay?: number;
}
declare const ToastContainer: FC<IToastContainer>;
export default ToastContainer;
