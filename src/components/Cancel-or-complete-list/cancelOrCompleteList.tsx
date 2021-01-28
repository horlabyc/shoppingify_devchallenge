import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLists } from '../../features/shoppingListSlice';
import { PUT } from '../../services/http';
import Button from '../../shared/Button/button';
import './cancelorCompleteList.scss';

export interface CancelorCompleteListProps {
  shoppingListId: string
}
 
const CancelOrCompleteList: React.FunctionComponent<CancelorCompleteListProps> = ({shoppingListId}) => {
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const completeList = () => {
    setButtonState('loading');
    setButtonDisabled(true);
    PUT(`shoppingList/${shoppingListId}/complete`).then(() => {
      setButtonState('idle');
      setButtonDisabled(false);
      dispatch(fetchLists());
    }).catch(() => {
      setButtonState('idle');
      setButtonDisabled(false);
    })
  }
  return (  
    <div className="list-actions">
      <p>cancel</p>
      <Button type="" action="Complete" 
        variant="primary" className="complete-list-button" 
        state={buttonState} 
        disabled={buttonDisabled}
        handleClick={completeList}
      ></Button>
    </div>
  );
}
 
export default CancelOrCompleteList;