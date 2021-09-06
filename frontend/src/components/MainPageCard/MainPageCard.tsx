import React, { useCallback } from "react";
import { CardTestItem } from "../../pages";
import { Badge, Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { TestSelectStatuses } from "../TestStatusSelect";

interface CardProps {
  item: CardTestItem;
}

export const MainPageCard = ({ item }: CardProps): JSX.Element => {
  const history = useHistory();

  const onClick = useCallback(() => {
    //constructor
  }, []);

  return (
    <>
      <Badge.Ribbon
        text={<span className="text-gray-700">{item.status}</span>}
        className={`${
          item.status === TestSelectStatuses.Active
            ? "bg-indigo-200"
            : "bg-red-200"
        } font-semibold `}
      >
        <Card
          title={item.title}
          className="rounded-lg bg-gray-50 shadow-xl"
          onClick={onClick}
        >
          <div>
            <Button
              onClick={() => {
                history.push(`/start-test/${item.id}`);
              }}
              className="bg-green-100 text-green-700 rounded-md hover:bg-green-200 hover:border-green-700 hover:text-green-700 mr-3"
            >
              Run test
            </Button>
            <Button
              onClick={() => {
                history.push(`/constructor/${item.id}`);
              }}
              className="bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 hover:border-yellow-700 hover:text-yellow-700"
            >
              Open constructor
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </>
  );
};
