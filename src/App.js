import React from "react";
import Header from "./Components/Header/Header";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import ContentFrame from "./Components/ContentFrame/ContentFrame";
import { useStoreon } from 'storeon/react'
import "./App.css";

const App = () => {
  const { sidebar: { isCollapsed } } = useStoreon('sidebar')

  return (
    <div id="app" className={isCollapsed ? 'left-sidebar-collapsed' : ''}>
      <Header />
      <LeftSidebar />
      <ContentFrame />
    </div>
  );
};

export default App;
