import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {useTranslation} from "react-i18next";

//source https://reactstrap.github.io/components/navbar/
const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [t, i18n] = useTranslation('common');
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">{t('navbar.courseName')}</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">{t('navbar.home')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">{t('navbar.membership')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">{t('navbar.rates')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">{t('navbar.contact')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">{t('navbar.book')}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {t('navbar.language')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => i18n.changeLanguage('en')}>
                  {t('navbar.english')}
                </DropdownItem>
                <DropdownItem onClick={() => i18n.changeLanguage('fr')}>
                  {t('navbar.french')}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;