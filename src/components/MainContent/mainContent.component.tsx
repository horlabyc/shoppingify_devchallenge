import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import './mainContent.component.scss';
import Items from './Items/items';
import { GET } from '../../services/http';
import { IItem } from '../../models/items';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, setItems } from '../../features/itemSlice';
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
  
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GET('items').then((res) => {
      dispatch(setItems(res.data.data.items))
      setLoading(false);
    });
  }, [dispatch]);
  return (  
    <Container>
      <Header></Header>
      <div className="body" style={{ marginTop:'3rem'}}>
      {
        loading ? <Spinner></Spinner> :
        items.map((item: any, index: number) => <Items items={item} key={`${index}`}></Items>)
      }
      </div>
    </Container>
  );
}
 
export default MainContent;