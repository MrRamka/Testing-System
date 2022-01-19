import React from "react";
import { Button } from "antd";

interface MainPageControlsProps {
  onClick: () => void;
}

export const MainPageControls = ({
  onClick,
}: MainPageControlsProps): JSX.Element => {
  return (
    <div className="my-3">
      <div className="mr-2">
        <span className="font-semibold">Сортировать: </span>
        <Button
          className="mx-1 rounded-md bg-blue-400 hover:bg-blue-500 hover:color-blue-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          Дате измениния
        </Button>
        <Button
          className="mx-1 rounded-md bg-blue-400 hover:bg-blue-500 hover:color-blue-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          Дате создания
        </Button>
        <Button
          className="mx-1 rounded-md bg-blue-400 hover:bg-blue-500 hover:color-indigo-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          Количество прохождений
        </Button>
      </div>
      <div className="my-2">
        <span className="font-semibold">Загрузить еще: </span>
        <Button
          className="mx-1 rounded-md bg-indigo-400 hover:bg-indigo-500 hover:color-indigo-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          10
        </Button>
        <Button
          className="mx-1 rounded-md bg-indigo-400 hover:bg-indigo-500 hover:color-indigo-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          25
        </Button>
        <Button
          className="mx-1 rounded-md bg-indigo-400 hover:bg-indigo-500 hover:color-indigo-600 hover:border-blue-500 text-white hover:text-white font-semibold"
          onClick={onClick}
        >
          100
        </Button>
      </div>
    </div>
  );
};
