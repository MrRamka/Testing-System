import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

interface MenuButtonProps {
  title?: string;
  icon?: JSX.Element;
  to: string;
  isActive?: boolean;
  className?: string;
}

export const MenuButton = ({
  title,
  icon,
  to,
  isActive,
  className,
}: MenuButtonProps): JSX.Element => {
  const history = useHistory();

  const activeStyles = isActive ? "text-white " : "";

  return (
    <Button
      key={title}
      icon={icon}
      title={title}
      className={
        "w-3/4 border-0 " +
        "bg-primary hover:bg-primary rounded-md hover:border-2 font-bold " +
        "text-lg text-gray-100 " +
        activeStyles +
        className
      }
      onClick={() => {
        history.push(to);
      }}
    >
      {title}
    </Button>
  );
};
