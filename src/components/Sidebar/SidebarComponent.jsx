import React from "react";
import Style from "./SidebarComponent.module.css";
import { Routes } from "../../routes";
import {
    ProSidebar,
    SubMenu,
    SidebarContent,
    Menu,
    MenuItem,
    Sidebar
} from "react-pro-sidebar";
//import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
export default function SidebarComponent() {

    return (
        <div className={Style.Sidebar}>
            <div>
                <h1>Quizzie</h1>
            </div>
            <div>
                <div><Link to="/dashboard-panel/dashboard">Dashboard</Link></div>
                <div><Link to="/dashboard-panel/analytics">Analytics</Link></div>
                <div><Link to="/dashboard-panel/create-quiz">Create Quiz</Link></div>               
            </div>
            <div><h2>Logout</h2></div>
        </div>
    );
}