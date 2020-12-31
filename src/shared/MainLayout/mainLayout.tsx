import * as React from 'react';
import styled from 'styled-components';
import NavigationMenu from '../NavigationMenu/navigationMenu';
import menuIcon from '../../assets/images/list.svg';
import shopping_cart from '../../assets/images/shopping-cart.svg';
import chart from '../../assets/images/chart.svg';
import refresh from '../../assets/images/refresh.svg';
import MainContent from '../../components/MainContent/mainContent.component';

export interface MainLayoutProps {
  
}

const LayoutContainer = styled.main`
  display: flex;
  min-height: 100vh;
  background: #FAFAFE;
`

const CartCount = styled.span`
  position: absolute;
  bottom: 37px;
  right: 2rem;
  border-radius: 50%;
  background: #EB5757;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.75rem;
`
 
const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  return (  
    <LayoutContainer>
      <NavigationMenu>
        <NavigationMenu.NavigationMenuHeader></NavigationMenu.NavigationMenuHeader>
        <NavigationMenu.NavigationMenuIconList>
        <NavigationMenu.NavigationMenuIcon 
          icon={menuIcon} 
          link={'/history'}
          iconAlt="menulist"
        />
        <NavigationMenu.NavigationMenuIcon 
          icon={refresh} 
          link={'/history'}
          iconAlt="menulist"
        />
        <NavigationMenu.NavigationMenuIcon 
          icon={chart} 
          link={'/history'}
          iconAlt="menulist"
        />
        </NavigationMenu.NavigationMenuIconList>
        <NavigationMenu.NavigationMenuIcon 
          icon={shopping_cart}
          iconAlt="menulist"
          className="align-end relative"
          imgClassName="icon_full_rounded"
        >
          <CartCount className="cart_count">2</CartCount>
        </NavigationMenu.NavigationMenuIcon>
      </NavigationMenu>
      <MainContent></MainContent>
    </LayoutContainer>
  );
}
 
export default MainLayout;