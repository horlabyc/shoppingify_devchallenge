import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppContext } from '../../contexts/appContext';
import { fetchItems } from '../../features/itemSlice';
import { IItem } from '../../models/items';
import { DELETE, POST } from '../../services/http';
import AddItemToListDialog from '../../shared/AddItemToListDialog/addItemToListDialog';
import Button from '../../shared/Button/button';
import ConfirmationDialog from '../../shared/ConfirmationDialog/confirmationDialog';
import { titleCase } from '../../utility';
import './itemDescription.scss';

export interface ItemDescriptionProps {
  item: IItem
}
 
const ItemDescription: React.FunctionComponent<ItemDescriptionProps> = ({item}) => {
  const defaultImage = 'https://cdn.pixabay.com/photo/2018/03/09/08/04/avocado-3210885_1280.jpg';
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const [dialogButtonState, setDialogButtonState] = useState<'idle' | 'loading'>('idle');
  const [dialogButtonDisabled, setDialogButtonDisabled] = useState<boolean>(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [addItemToListModalIsOpen, setAddItemToListModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openConfirmationDIalog = () => {
    setConfirmationModalIsOpen(true);
  }
  const { dispatch: dispatchContext } = useContext(AppContext);
  const showShoppingList = () => {
    dispatchContext({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'shoppingList'});
  }

  const handleDeleteItem = () => {
    setDialogButtonState('loading');
    setDialogButtonDisabled(true);
    DELETE(`items/${item._id}`).then(() => {
      setDialogButtonState('idle');
      setDialogButtonDisabled(false);
      setConfirmationModalIsOpen(false);
      showShoppingList();
      dispatch(fetchItems());
    })
  }

  const handleAddItem = (shoppingListId: string) => {
    setAddItemToListModalIsOpen(false)
    setButtonState('loading');
    setButtonDisabled(true);
    POST(`shoppingList/${shoppingListId}/addItem`, {itemId: item._id}).then(() => {
      setButtonState('idle');
      setButtonDisabled(false);
      showShoppingList();
    })
  }

  return (  
    <div className="itemDescription">
      <div className="itemDescription__image">
        <img src={item.image ? item.image : defaultImage} alt="item"/>
      </div>
      <div className="itemDescription__section itemDescription__name">
        <h5 className="itemDescription__title">name</h5>
        <p className="itemDescription__name">{item.name}</p>
      </div>
      <div className="itemDescription__section">
        <h5 className="itemDescription__title">category</h5>
        <p className="itemDescription__category">{titleCase(item.category)}</p>
      </div>
      <div className="itemDescription__section">
        <h5 className="itemDescription__title">note</h5>
        <p className="itemDescription__description">{item.description}</p>
      </div>
      <div className="itemDescription__actions">
        <p onClick={openConfirmationDIalog}>delete</p>
        <Button 
          type="" 
          action="Add to list" 
          variant="secondary" 
          className="itemDescription__actions__add" 
          state={buttonState} disabled={buttonDisabled}
          handleClick={() => setAddItemToListModalIsOpen(true)}
        >
        </Button>
      </div>
      {
        confirmationModalIsOpen && 
          <ConfirmationDialog 
            message="Are you sure you want to delete this item?"
            onCancel={() => setConfirmationModalIsOpen(false)}
            onYes={handleDeleteItem}
            buttonDisabled = {dialogButtonDisabled}
            buttonState={dialogButtonState}
          ></ConfirmationDialog>
      }
      {
        addItemToListModalIsOpen && 
          <AddItemToListDialog 
            message={`Add ${item.name} to shopping list`}
            onCancel={() => setAddItemToListModalIsOpen(false)}
            onAddItem={handleAddItem}
            buttonDisabled = {dialogButtonDisabled}
            buttonState={dialogButtonState}
          ></AddItemToListDialog>
      }
    </div>
  );
}
 
export default ItemDescription;