import React, { useContext } from 'react';
import styled from 'styled-components';
import plus from '../../../assets/images/plus.svg';
import { AppContext } from '../../../contexts/appContext';


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
  const { state, dispatch } = useContext(AppContext);

  const viewItemDetails = () => {
    dispatch({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'itemDetails'})
  }
  
  return (  
    <Item onClick={() => viewItemDetails()}>
      <p style={{ fontSize: "0.9rem", cursor:'pointer'}}>{name}</p>
      <img src={plus} alt="add" style={{ cursor: "pointer"}}/>
    </Item>
  );
}
 
export default ShoppingItem;