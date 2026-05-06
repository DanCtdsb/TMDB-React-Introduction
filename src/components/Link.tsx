import type { ReactNode } from "react";
import { matchPath, NavLink, useLocation } from "react-router-dom";

type LinkProps = {
  children: ReactNode;
  to: string;
  match?: string[];
  end: boolean;
};

export const Link = ({ children, to, match = [], end = false }: LinkProps) => {
  const { pathname } = useLocation();
  const matched = match.some((pattern) =>
    matchPath({ path: pattern, end }, pathname),
  );

  return (
    <NavLink
      replace
      to={to}
      className={({ isActive }) =>
        `text-[13px] px-2.5 py-1.5 rounded-md transition-colors ${
          isActive || matched
            ? "text-white bg-white/12"
            : "text-white/50 hover:text-white hover:bg-white/8"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
