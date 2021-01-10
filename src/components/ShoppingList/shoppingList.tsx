import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import './shoppingList.scss';
import source from '../../assets/images/source.svg';
import edit from '../../assets/images/edit.svg';
import ShoppingListItem from './ShoppingListItem/shoppingListItem';
import { AppContext } from '../../contexts/appContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLists, ShoppingListSelector} from '../../features/shoppingListSlice';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { IShoppingList } from '../../models/shoppingList';
export interface ShoppingListProps {
  
}

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  max-height: 100vh;
`

const Header = styled.div`
  background: #80485B;
  position: relative;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0 1rem;
`
 
const ShoppingList: React.FunctionComponent<ShoppingListProps> = () => {

  const [editListName, setEditLastName] = useState(false);
  const [completeOrCancelList, setCompleteOrCancelList] = useState(true);

  const handleEditListName = () => {
    setEditLastName(true);
    setCompleteOrCancelList(false);
  }

  const { dispatch: dispatchContext } = useContext(AppContext);
  const showAddNewItemTab = () => {
    dispatchContext({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'addNewItem'});
  }
  const { shoppingLists, loading, hasErrors } = useSelector(ShoppingListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLists())
  }, [dispatch]);
  return (  
    <Container>
      <div className="header">
        <Header>
          <img src={source} alt="bottle"/>
          <div className="header__text">
            <h4>Didn't find what you need?</h4>
            <button className="additem" onClick={showAddNewItemTab}>Add item</button>
          </div>
        </Header>
      </div>
      <Accordion className="shoppinglist__accordion" allowZeroExpanded>
        {
          shoppingLists.map((shoppingList: IShoppingList) => (
            <AccordionItem key={shoppingList._id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {shoppingList.name}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {
                  shoppingList.items.length ?
                  shoppingList.items.map((item) => (
                    <ShoppingListItem key={item.category} item={item}></ShoppingListItem>
                  )) :
                  <p>No Item on this list</p>
                }
                {
                  shoppingList.items.length ?
                  shoppingList.items.map((item) => (
                    <ShoppingListItem key={item.category} item={item}></ShoppingListItem>
                  )) :
                  <p>No Item on this list</p>
                }
              </AccordionItemPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
      <section className="action_center">
        {completeOrCancelList && <CancelOrCompleteList></CancelOrCompleteList>}
        {editListName && <EditListName></EditListName>}
      </section>
    </Container>
  );
}

const EditListName = () => {
  return (
    <h3>Edit list name</h3>
  )
}

const CancelOrCompleteList = () => {
  return (
    <h3>Complete list</h3>
  )
}
 
export default ShoppingList;