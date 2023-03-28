import type { ReactElement, ReactNode } from "react";

interface IShowIfProps {
  children: ReactNode;
  show?: boolean;
}

const ShowIf = ({ children, show }: IShowIfProps) => {
  if (show) {
    return children as ReactElement;
  }
  return null;
};

export default ShowIf;
