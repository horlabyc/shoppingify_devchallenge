import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import './mainContent.component.scss';
import Items from './Items/items';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, ItemsSelector } from '../../features/itemSlice';
import Spinner from '../Spinner/spinner';

export interface MainContentProps {
  
}

const Container = styled.main`
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  flex: 0.7;
`
 
const MainContent: React.FunctionComponent<MainContentProps> = () => {
  
  const { items, loading, hasErrors } = useSelector(ItemsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (  
    <Container>
      <Header></Header>
      <div className="body" style={{ marginTop:'3rem'}}>
      {
        loading ? <Spinner></Spinner> : 
        hasErrors ? <h4> Error fetching data !!!</h4> :
        items.map((item: any, index: number) => <Items items={item} key={`${index}`}></Items>)
      }
      </div>
    </Container>
  );
}
 
export default MainContent;