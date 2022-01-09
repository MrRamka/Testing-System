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

  const activeStyles = isActive ? "bg-gray-200 " : "";

  return (
    <Button
      key={title}
      icon={icon}
      title={title}
      className={
        "w-3/4 border-0 hover:bg-gray-300 " +
        "bg-gray-100 hover:text-gray-700 hover:shadow-sm rounded-md " +
        "focus:bg-gray-200 focus:text-gray-700 text-lg " +
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
