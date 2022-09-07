import React from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  InputGroup,
  Menu,
  MenuDivider,
  MenuItem,
  Position,
  PopoverInteractionKind,
  Switch
} from "@blueprintjs/core";

import {Popover2} from "@blueprintjs/popover2";

import { useStoreon } from 'storeon/react'

import logo from "./logo.png";

import "./Header.css";

const exampleMenu = (
  <Menu>
    <MenuItem icon="graph" text="Graph" />
    <MenuItem icon="map" text="Map" />
    <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
    <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
    <MenuDivider />
    <MenuItem icon="cog" text="Settings...">
      <MenuItem icon="add" text="Add new application" disabled={true} />
      <MenuItem icon="remove" text="Remove application" />
    </MenuItem>
  </Menu>
);



const Header = () => {
  const { dispatch, theme: { darkTop, darkSide } } = useStoreon('theme')

  const handleToggleThemeTop = () => {
    dispatch('theme/toggleTop')
  }

  const handleToggleThemeSide = () => {
    dispatch('theme/toggleSide')
  }

  const settingsMenu = (
    <Menu>
      <MenuDivider title="Theme" />
      <div style={{ padding: '0.25rem .5rem' }}>

        <Switch
          checked={darkTop}
          label="Dark Top"
          alignIndicator="right"
          onChange={handleToggleThemeTop}
        />

        <Switch
          checked={darkSide}
          label="Dark Side"
          alignIndicator="right"
          onChange={handleToggleThemeSide}
        />
      </div>
    </Menu>

  )

  return (
    <div className={darkTop ? Classes.DARK : ''}>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <div className="app-name-container">
            <img src={logo} style={{ height: "30px", marginRight: "5px" }} alt="App logo" />
            <NavbarHeading>Case Management Portal</NavbarHeading>
          </div>
        </NavbarGroup>
        <NavbarGroup align={Alignment.LEFT} >
          <NavbarDivider />
          <InputGroup placeholder="Search data..." style={{width:"250px"}}/>
          <AnchorButton text="Cases" target="_blank" minimal icon="diagram-tree" style={{marginLeft:"6px"}}/>
          <AnchorButton text="Tasks" target="_blank" minimal  icon="annotation" active intent="warning" />
          <AnchorButton text="Approvals" target="_blank" minimal  />
          <AnchorButton text="Documents" target="_blank" minimal />
          <Popover2
            content={exampleMenu}
            position={Position.BOTTOM}
            interactionKind={PopoverInteractionKind.HOVER}
          >
            <Button minimal rightIcon="airplane">
              Advanced Menu
            </Button>
          </Popover2>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button minimal icon="document">
            Files
          </Button>
          <NavbarDivider />
          <Button icon="user" minimal />
          <Button icon="notifications" minimal />
          <Popover2
            content={settingsMenu}
            position={Position.BOTTOM}
            interactionKind={PopoverInteractionKind.CLICK}
            captureDismiss={true}
          >
            <Button icon="cog" minimal />
          </Popover2>
        </NavbarGroup>
      </Navbar>
    </div>
  );
};

export default Header;
