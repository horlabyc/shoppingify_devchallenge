import React from 'react';
import './shoppingListItem.scss';

export interface ShoppingListItemProps {
  
}
 
const ShoppingListItem: React.FunctionComponent<ShoppingListItemProps> = () => {
  return (  
    <div className="shoppingListItem__container">
      <h5 className="shoppingListItem__category">Fruit and vegetables</h5>
      <div className="shoppingListItem__item">
        <p className="item_name">Avocado</p>
        <p className="quantity">4 pcs</p>
      </div>
      <div className="shoppingListItem__item">
        <p className="item_name">Beef</p>
        <p className="quantity">2 pcs</p>
      </div>
    </div>
  );
}
 
export default ShoppingListItem;