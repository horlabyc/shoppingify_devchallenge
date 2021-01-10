import styled from "styled-components";

export const Btn = styled.button`
  color: white;
  text-transform: uppercase;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 1rem;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  -webkit-appearance: none;
  outline: none;
  min-width: 200px;
  cursor: pointer;
  display: block;
  text-align: center;
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &.button__primary {
    background: #56CCF2;
    &:hover {
      background: #1493bd;
    }
  }
  &.button__secondary {
    background:#F9A109;
    &:hover {
      background:#af720a;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(87, 93, 119, 0.8);
  animation: fadeIn 2s ease-in both;
  transition: 0.3s all;
`

export const ModalBody = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 24px;
  animation: fadeIn 2s ease-in both;
  transition: 0.3s all;
  min-width: 500px;
`