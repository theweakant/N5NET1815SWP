// import { Link } from "react-router-dom";
// import "./SideBar.css";
// import logo from "../../../public/assets/images/Logo/logo.png";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
// import CategoryIcon from "@mui/icons-material/Category";
// import DiamondIcon from "@mui/icons-material/Diamond";
// import PersonIcon from "@mui/icons-material/Person";
// import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// import EventIcon from "@mui/icons-material/Event";
// import { routes } from "../../routes";
// import BasicButton from "../Button/myButton";
// import { logout, selectUser } from "../../redux/features/counterSlice";
// import { useDispatch, useSelector } from "react-redux";
// export default function SideBar() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const handleLogout = () => {
//     dispatch(logout());
//   };
//   return (
//     <div className="sidenav">
//       <div className="sidenav-header">
//         <img src={logo} alt="" />
//         <span>Five Diamond</span>
//       </div>
//       <hr className="rounded" />
//       <h1>Admin DashBoard</h1>
//       <hr className="rounded" />

//         <Link to={routes.bst}>
//           <CNavItem href="#" className="link-text">
//             <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Biểu Đồ
//             <CBadge color="primary ms-auto">NEW</CBadge>
//           </CNavItem>
//         </Link>

//         {/* <CNavGroup
//               toggler={
//                 <>
//                   <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
//                   dropdown
//                 </>
//               }
//             >
//               <CNavItem href="#">
//                 <span className="nav-icon">
//                   <span className="nav-icon-bullet"></span>
//                 </span>{" "}
//                 Nav dropdown item
//               </CNavItem>
//               <CNavItem href="#">
//                 <span className="nav-icon">
//                   <span className="nav-icon-bullet"></span>
//                 </span>{" "}
//                 Nav dropdown item
//               </CNavItem>
//             </CNavGroup> */}
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Quản lý
//             đơn hàng
//           </CNavItem>
//         </Link>
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sản
//             phẩm
//           </CNavItem>
//         </Link>
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý danh
//             mục
//           </CNavItem>
//         </Link>
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý khách
//             hàng
//           </CNavItem>
//         </Link>
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý câu
//             hỏi FAQs
//           </CNavItem>
//         </Link>
//         <Link to={routes.bst} className="link-text">
//           <CNavItem href="#">
//             <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sự
//             kiện sale
//           </CNavItem>
//         </Link>
//       </CSidebarNav>
//       {/* <CSidebarHeader className="border-top">
//             <CSidebarToggler />
//           </CSidebarHeader> */}
//     </CSidebar>
//   );
// }
