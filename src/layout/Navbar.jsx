import React from "react";
import { Link, useLocation } from "react-router-dom";

const MENU = {
  HOME: {
    path: "/",
    ariaLabel: "Go to Homepage",
    label: "Home",
  },
  mermaid: {
    path: "/mermaid",
    ariaLabel: "Go to Mermaid Page",
    label: "Mermaid",
  },
  reactflow: {
    path: "/reactflow",
    ariaLabel: "Go to ReactFlow Page",
    label: "ReactFlow",
  },
};

const Navbar = () => {
  const location = useLocation();

  const StyledLink = ({ children, to, ariaLabel }) => (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`whitespace-nowrap p-2 ${
        location.pathname === to ? "bg-neutral-100" : ""
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <ul className="flex gap-10 items-end">
        {Object.values(MENU).map((menu, index) => (
          <li key={index}>
            <StyledLink to={menu.path} ariaLabel={menu.ariaLabel}>
              {menu.label}
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
