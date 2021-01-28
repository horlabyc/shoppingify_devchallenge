import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLists, updateItemQuantity } from '../../../features/shoppingListSlice';
import { IItem } from '../../../models/items';
import { DELETE, PUT } from '../../../services/http';
import ConfirmationDialog from '../../../shared/ConfirmationDialog/confirmationDialog';
import { titleCase } from '../../../utility';
import ShoppingItem from '../Shopping-Item/shopping-item';

import './shoppingListItem.scss';

export interface ShoppingListItemProps {
  shoppingListId: string,
  item: {
    category: string,
    items: IItem[]
  }
}
 
const ShoppingListItem: React.FunctionComponent<ShoppingListItemProps> = ({item, shoppingListId}) => {
  const dispatch = useDispatch();
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [dialogButtonDisabled, setDialogButtonDisabled] = useState<boolean>(false);
  const [dialogButtonState, setDialogButtonState] = useState<'idle' | 'loading'>('idle');
  const [item_Id, setItem_Id] = useState('');
  const openConfirmationDIalog = () => {
    setConfirmationModalIsOpen(true);
  }
  const updateQuantity = (qty: number, itemId: string) => {
    dispatch(updateItemQuantity(shoppingListId,itemId, qty));
  }
  const deleteItemFromList = (itemId: string) => {
    setItem_Id(itemId);
    openConfirmationDIalog();
  }
  const handleDeleteItemFromList = () => {
    setDialogButtonState('loading');
    setDialogButtonDisabled(true);
    PUT(`shoppingList/${shoppingListId}/${item_Id}/delete`).then(() => {
      setDialogButtonState('idle');
      setDialogButtonDisabled(false);
      setConfirmationModalIsOpen(false);
      dispatch(fetchLists());
    }).catch(() => {
      setDialogButtonState('idle');
      setDialogButtonDisabled(false);
      setConfirmationModalIsOpen(false);
    })
  }
  return (  
    <div className="shopping-list-item">
      <h5 className="shopping-list-item__category">{titleCase(item.category)}</h5>
      {
        item.items.map((i, index) => (
          <ShoppingItem 
            item={i} key={index} 
            shoppingListId={shoppingListId} 
            onQuantityUpdate={(quantity: number, itemId) => updateQuantity(quantity, itemId)}
            onDeleteItem={(itemId) => deleteItemFromList(itemId)}
          />
        ))
      }
      {
        confirmationModalIsOpen && 
          <ConfirmationDialog 
            message="Are you sure you want to delete this item from shopping list?"
            onCancel={() => {setConfirmationModalIsOpen(false); setItem_Id('');}}
            onYes={handleDeleteItemFromList}
            buttonDisabled = {dialogButtonDisabled}
            buttonState={dialogButtonState}
          ></ConfirmationDialog>
      }
    </div>
  );
}
 
export default ShoppingListItem;