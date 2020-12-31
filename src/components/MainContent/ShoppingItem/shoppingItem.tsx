import React from 'react';
import styled from 'styled-components';
import plus from '../../../assets/images/plus.svg';


export interface ShoppingItemProps {
  name: String
}

const Item = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 13px;
`
 
const ShoppingItem: React.FunctionComponent<ShoppingItemProps> = ({ name }) => {
  return (  
    <Item>
      <p style={{ fontSize: "0.9rem"}}>{name}</p>
      <img src={plus} alt="add" style={{ cursor: "pointer"}}/>
    </Item>
  );
}
 
export default ShoppingItem;