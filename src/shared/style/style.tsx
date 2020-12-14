import styled from "styled-components";

export const Btn = styled.button`
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  padding: 20px;
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