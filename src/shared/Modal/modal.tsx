import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import './modal.scss';

export interface ModalProps {
    
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(87, 93, 119, 0.8);
`

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
`

const Modal: React.FunctionComponent<ModalProps> = ({ children }) => {
  const el = document.createElement('div');
  el.setAttribute('id', 'confirmation-dialog');
  // const [dynamic] = useState(!el.current.parentElement);
  // console.log({dynamic})
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
            {children}
          </div>
        </ModalBody>
      </Overlay>,
      el
    )
  );
}
 
export default Modal;