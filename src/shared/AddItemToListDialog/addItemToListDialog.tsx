import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { ShoppingListSelector } from '../../features/shoppingListSlice';
import { IShoppingList } from '../../models/shoppingList';
import Button from '../Button/button';
import { ModalBody, Overlay } from '../Styled Components/style';
import './addItemToListDialog.scss';

export interface AddItemToListDialogProps {
  message: string;
  onAddItem: (shoppingListId: string) => void;
  onCancel: () => void;
  buttonState: 'idle' | 'loading';
  buttonDisabled: boolean;
}
 
const AddItemToListDialog: React.FunctionComponent<AddItemToListDialogProps> = ({ message, children, onAddItem, onCancel, buttonState, buttonDisabled }) => {
  const { shoppingLists } = useSelector(ShoppingListSelector);
  const el = document.createElement('div');
  el.setAttribute('id', 'react-dialog');
  const [formValue, setFormValue] = useState('');
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  const handleChange = (e: any) => {
    setFormValue(e.target.value);
  }

  const submit = () => {
    if(formValue){
      onAddItem(formValue);
    }
  }
  return (  
    createPortal(
      <Overlay>
        <ModalBody>
        <div>
            <p style={{ fontSize: '24px', fontWeight: 500}}>{message}</p>
            <form>
              <label>Select a shopping list</label>
              <select onChange={handleChange} value={formValue}>
                <option value=''>--Select a list--</option>
                {
                  shoppingLists.map((list: IShoppingList) => (
                    <option key={list._id} value={list._id}>{list.name}</option>
                  ))
                }
              </select>
            </form>
            <div className="actions">
              <p onClick={onCancel}>cancel</p>
              <Button type="" action="Add Item" 
                variant="secondary" className="confirmationAction__yes" 
                state={buttonState} 
                disabled={buttonDisabled}
                handleClick={submit}
              >
              </Button>
            </div>
          </div>
        </ModalBody>
      </Overlay>,
      el
    )
  );
}
 
export default AddItemToListDialog;
