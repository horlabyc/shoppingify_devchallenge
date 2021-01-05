import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/button';
import { ModalBody, Overlay } from '../Styled Components/style';
import './confirmationDialog.scss';

export interface ConfirmationDialogProps {
  message: string;
  onYes: () => void;
  onCancel: () => void;
  buttonState: 'idle' | 'loading';
  buttonDisabled: boolean;
}

const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({ message, children, onYes, onCancel, buttonState, buttonDisabled }) => {
  const el = document.createElement('div');
  el.setAttribute('id', 'confirmation-dialog');
  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, [el]);
  return (
    createPortal(
      <Overlay>
        <ModalBody>
          <div>
            <p>{message}</p>
            <div className="actions">
              <p onClick={onCancel}>cancel</p>
              <Button type="" action="Yes" 
                variant="secondary" className="confirmationAction__yes" 
                state={buttonState} 
                disabled={buttonDisabled}
                handleClick={onYes}
              >
              </Button>
            </div>
          </div>
        </ModalBody>
      </Overlay>,
      el
    )
  )
}

export default ConfirmationDialog;
