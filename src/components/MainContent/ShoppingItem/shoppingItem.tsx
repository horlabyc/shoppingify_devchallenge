import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import plus from '../../../assets/images/plus.svg';
import { AppContext } from '../../../contexts/appContext';
import { setActiveItem } from '../../../features/itemSlice';
import { IItem } from '../../../models/items';


export interface ShoppingItemProps {
  item: IItem
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
 
const ShoppingItem: React.FunctionComponent<ShoppingItemProps> = ({item}) => {
  const { dispatch: emit } = useContext(AppContext);
  const dispatch = useDispatch();

  const viewItemDetails = () => {
    emit({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'itemDetails'});
    dispatch(setActiveItem(item))
  }
  
  return (  
    <Item onClick={() => viewItemDetails()}>
      <p style={{ fontSize: "0.9rem", cursor:'pointer'}}>{item.name}</p>
      <img src={plus} alt="add" style={{ cursor: "pointer"}}/>
    </Item>
  );
}
 
export default ShoppingItem;