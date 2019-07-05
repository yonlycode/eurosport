import React,{ useState, memo } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Header = props =>{

  const [isCollapsed, setCollapsed] = useState(false);

  const toggleNavbar = last =>{
    setCollapsed(!last)
  }

  let content = (
    <div>
        <Navbar color="dark" dark >
          <NavbarBrand href="/" className="mr-auto">This is an exercice</NavbarBrand>
          <NavbarToggler onClick={()=>toggleNavbar(isCollapsed)} className="mr-2" />
          <Collapse isOpen={isCollapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/YonnaR">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
  return content
}


export default memo(Header);