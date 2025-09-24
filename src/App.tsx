import { Outlet, useLocation } from "react-router-dom";
import { LinkWithDot } from "./LinkWithDot";


export default function App() {
  const { pathname } = useLocation();


  return (
    <div className="container">
      <nav className="tabs">
        <LinkWithDot to="/left" dotPath="/left">Left</LinkWithDot>
        <LinkWithDot to="/center" dotPath="/center">Center</LinkWithDot>
        <LinkWithDot to="/right" dotPath="/right">Right</LinkWithDot>
      </nav>
      <Outlet />
      <footer style={{ padding: 16, color: "#999", fontSize: 12 }}>Текущий путь: {pathname}</footer>
    </div>
  );
}