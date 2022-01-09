import { Button } from "antd";
import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  title?: string;
  icon?: JSX.Element;
}

export const SecondaryButton = ({
  onClick,
  title,
  icon,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className={
        "bg-yellow-100 rounded-md hover:bg-yellow-200 hover:border-yellow-700 hover:text-gray-800"
      }
      icon={icon}
    >
      {title}
    </Button>
  );
};
