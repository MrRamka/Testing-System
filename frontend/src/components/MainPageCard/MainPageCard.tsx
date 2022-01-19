import React, { useCallback } from "react";
import { CardTestItem } from "../../pages";
import { Badge, Card } from "antd";
import { TestSelectStatuses } from "../TestStatusSelect";
import { strings } from "../../lang/strings";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { EditOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";

// import { Routes  } from "./constants";

interface CardProps {
  item: CardTestItem;
}

export const MainPageCard = ({ item }: CardProps): JSX.Element => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(Routes.CONSTRUCTOR_PREFIX + item.id);
  }, [history, item]);

  return (
    <>
      <Badge.Ribbon
        text={
          <span className="text-gray-700">
            {item.isActive
              ? TestSelectStatuses.Active
              : TestSelectStatuses.Inactive}
          </span>
        }
        className={`${
          item.isActive ? "bg-green-200" : "bg-red-200"
        } font-semibold `}
      >
        <Card
          title={
            <span>
              <span className="font-semibold">Название:</span> {item.name}
            </span>
          }
          className="rounded-lg cursor-pointer shadow-md hover:shadow-xl"
          onClick={onClick}
        >
          <div>
            <p>
              <span className="font-semibold">Дата создания:</span>{" "}
              {new Date(Date.parse(item.created_at)).toLocaleString("ru-RU")}
            </p>
          </div>
          {item.description ? (
            <div>
              <p>
                <span className="font-semibold">Описание:</span>{" "}
                {item.description}
              </p>
            </div>
          ) : null}
          <div className="flex flex-wrap">
            <div className="mr-1">
              <PrimaryButton
                title={strings.testCard.run}
                icon={
                  <PlayCircleOutlined style={{ verticalAlign: "0.125rem" }} />
                }
              />
            </div>
            <div>
              <SecondaryButton
                title={strings.testCard.edit}
                icon={<EditOutlined style={{ verticalAlign: "0.125rem" }} />}
              />
            </div>
          </div>
        </Card>
      </Badge.Ribbon>
    </>
  );
};
