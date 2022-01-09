import { Button } from "antd";
import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  title?: string;
  icon?: JSX.Element;
  classNames?: string;
}

export const PrimaryButton = ({
  onClick,
  title,
  icon,
  classNames,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className={
        "bg-blue-100 rounded-md hover:bg-blue-200 hover:border-blue-700 hover:text-gray-800 " +
        classNames
      }
      icon={icon}
    >
      {title}
    </Button>
  );
};
