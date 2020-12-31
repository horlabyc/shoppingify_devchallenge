import * as React from 'react';
import styled from 'styled-components';
import SideMenu from '../SideMenu/sideMenu';
import menuIcon from '../../assets/images/list.svg';
import shopping_cart from '../../assets/images/shopping-cart.svg';
import chart from '../../assets/images/chart.svg';
import refresh from '../../assets/images/refresh.svg';

export interface MainLayoutProps {
  
}

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 55px calc(100vh - 55px);
  grid-template-areas:
    "sideMenu content"
    "sideMenu content";
  height: 100vh;
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
      <SideMenu>
        <SideMenu.SideMenuHeader></SideMenu.SideMenuHeader>
        <SideMenu.SideMenuIconList>
        <SideMenu.SideMenuIcon 
          icon={menuIcon} 
          link={'/history'}
          iconAlt="menulist"
        />
        <SideMenu.SideMenuIcon 
          icon={refresh} 
          link={'/history'}
          iconAlt="menulist"
        />
        <SideMenu.SideMenuIcon 
          icon={chart} 
          link={'/history'}
          iconAlt="menulist"
        />
        </SideMenu.SideMenuIconList>
        <SideMenu.SideMenuIcon 
          icon={shopping_cart}
          iconAlt="menulist"
          className="align-end relative"
          imgClassName="icon_full_rounded"
        >
          <CartCount className="cart_count">2</CartCount>
        </SideMenu.SideMenuIcon>
      </SideMenu>
    </LayoutContainer>
  );
}
 
export default MainLayout;