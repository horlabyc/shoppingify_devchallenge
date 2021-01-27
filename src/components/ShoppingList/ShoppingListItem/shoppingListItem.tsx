import React from 'react';
import { useDispatch } from 'react-redux';
import { updateItemQuantity } from '../../../features/shoppingListSlice';
import { IItem } from '../../../models/items';
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
  const updateQuantity = (qty: number, itemId: string) => {
    dispatch(updateItemQuantity(shoppingListId,itemId, qty));
  }
  return (  
    <div className="shopping-list-item">
      <h5 className="shopping-list-item__category">{titleCase(item.category)}</h5>
      {
        item.items.map((i) => (
          <ShoppingItem item={i} key={i._id} shoppingListId={shoppingListId} onQuantityUpdate={(quantity: number, itemId) => updateQuantity(quantity, itemId)}/>
        ))
      }
    </div>
  );
}
 
export default ShoppingListItem;