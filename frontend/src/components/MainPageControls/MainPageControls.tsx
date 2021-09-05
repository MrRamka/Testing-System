import React from "react";
import { Button, Radio } from "antd";

interface MainPageControlsProps {
  onClick: () => void;
}

export const MainPageControls = ({
  onClick,
}: MainPageControlsProps): JSX.Element => {
  return (
    <div className="my-3">
      <div className="mr-2">
        <span>Sort by: </span>
        <Radio.Group defaultValue="a" className="rounded-md">
          <Radio.Button value="a" className="mx-1">
            Modified time
          </Radio.Button>
          <Radio.Button value="b" className="mx-1">
            Creation time
          </Radio.Button>
          <Radio.Button value="c" className="mx-1">
            Number of test passes
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="my-2">
        <span>Load more: </span>
        <Button className="mx-1" onClick={onClick}>
          Load more 10
        </Button>
        <Button className="mx-1" onClick={onClick}>
          Load more 25
        </Button>
        <Button className="mx-1" onClick={onClick}>
          Load more 100
        </Button>
      </div>
    </div>
  );
};
