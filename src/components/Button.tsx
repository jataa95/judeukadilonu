import type { ReactNode } from "react";
import { Arrow } from "./Icons";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "dark" | "light" | "line";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

/** Pill button with a round "seal" holding the arrow; the seal turns on hover. */
export function Button({ href, children, variant = "dark", onClick, type = "button", className = "" }: Props) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__seal" aria-hidden>
        <Arrow size={15} />
      </span>
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick}>
      {inner}
    </button>
  );
}
