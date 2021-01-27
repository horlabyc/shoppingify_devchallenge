import React, { useEffect, useState } from 'react';
import { IItem } from '../../../models/items';
import './shopping-item.scss';
import trash from '../../../assets/images/trash.svg';
import minus from '../../../assets/images/minus.svg';
import plus from '../../../assets/images/plus_orange.svg';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface ShoppingItemProps {
  item: IItem,
  shoppingListId: string,
  onQuantityUpdate: (quantity: number, itemId: string) => void
}
 
const ShoppingItem: React.SFC<ShoppingItemProps> = ({item, onQuantityUpdate}) => {
  const [ quantity, setQuantity] = useState(item.quantity);
 
  const updateQty$ = new Subject<number>();
  const addQtyClick = () => {
    setQuantity(quantity + 1)
    updateQty$.next(quantity + 1);
  }
  const reduceQtyClick = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
      updateQty$.next(quantity - 1);
    }else {
      setQuantity(1);
    }
  }
  useEffect(() => {
    updateQty$.pipe(
      distinctUntilChanged(),
      debounceTime(2000),
      tap((qty) => {
        onQuantityUpdate(qty, item._id)
      })
    ).subscribe()
  }, [item._id, onQuantityUpdate, updateQty$]);
  return (  
    <div className="shopping-list-item__item" key={item._id}>
      <div>
        <p className="item-name">{item.name}</p>
      </div>
      <div className="shopping-list-item__actions">
        <img src={trash} alt="delete" className="" loading="lazy"/>
        <p className="quantity">{quantity} {item.unitMeasure}</p>
        <img src={minus} alt="reduce" id="shopping-list-item__reduceBtn" loading="lazy" onClick={reduceQtyClick}/>
        <img src={plus} alt="add" id="shopping-list-item__addBtn" loading="lazy" onClick={addQtyClick}/>
      </div>
    </div>
);
}
 
export default ShoppingItem;
