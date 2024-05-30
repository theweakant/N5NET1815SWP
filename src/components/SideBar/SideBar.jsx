import {
  cilCloudDownload,
  cilLayers,
  cilPuzzle,
  cilSpeedometer,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CImage,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import React from "react";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import logo from "/assets/images/Logo/logo.png";
import "./SideBar.css";

export default function SideBar() {
  return (
    <CSidebar className="border-end admin-sidebar" colorScheme="dark" size="xl">
      <CSidebarHeader className="border-bottom">
        {/* <CImage src={logo}></CImage> */}
        <CSidebarBrand>Five Diamond</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Admin Dashboard</CNavTitle>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Thống Kê
          </CNavItem>
        </Link>

        <Link to={routes.bst}>
          <CNavItem href="#" className="link-text">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Biểu Đồ
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
        </Link>

        {/* <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
                dropdown
              </>
            }
          >
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{" "}
              Nav dropdown item
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{" "}
              Nav dropdown item
            </CNavItem>
          </CNavGroup> */}
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Quản lý
            đơn hàng
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sản
            phẩm
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý danh
            mục
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý khách
            hàng
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý câu
            hỏi FAQs
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sự
            kiện sale
          </CNavItem>
        </Link>
      </CSidebarNav>
      {/* <CSidebarHeader className="border-top">
          <CSidebarToggler />
        </CSidebarHeader> */}
    </CSidebar>
  );
}
