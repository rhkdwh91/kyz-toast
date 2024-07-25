import React, { FC, useCallback, useEffect } from 'react';
import { Toast } from './components';
import { useToast } from './hooks';
import { emitter, toastDispatcher } from './utils';
import { Events, Position } from './types';
import './ToastContainer.css';

interface IToastContainer {
  position?: Position
  delay?: number
  zIndex?: number
}

const ToastContainer: FC<IToastContainer> = ({ position = 'bottom-left', delay, zIndex = 999 }) => {
  const { toasts, dispatch } = useToast()

  useEffect(() => {
    toastDispatcher({ dispatch, delay })

    return () => {
      emitter.off()
    }
  }, [dispatch, delay])

  const onClose = useCallback((id: string) => {
    emitter.emit(Events.HIDE, id)
  }, [])

  return (
    <div className={`toastContainer ${position}`} style={{ zIndex }}>
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}

export default ToastContainer