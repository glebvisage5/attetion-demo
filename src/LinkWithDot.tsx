import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useAttention } from "./attentionStore";

function hasPathname(t: unknown): t is { pathname: string } {
    return (
        typeof t === "object" && t !== null && "pathname" in t &&
        typeof (t as { pathname?: unknown }).pathname === "string"
    );
}

export const LinkWithDot: React.FC<LinkProps & { dotPath?: string; className?: string; activeClassName?: string }> = ({ to, className, activeClassName, dotPath, children, ...rest }) => {
    const { hasAttention } = useAttention();
    const { pathname } = useLocation();

    const toPath = typeof to === "string" ? to : hasPathname(to) ? to.pathname : String(to);
    const target = dotPath ?? toPath;
    const active = pathname === toPath;

    return (
        <Link to={to} className={["tab", className, active ? activeClassName ?? "active" : ""].filter(Boolean).join(" ")}{...rest}>
            {children}
            {hasAttention(target) && <span className="dot" aria-label="attention" />}
        </Link>
    );
};