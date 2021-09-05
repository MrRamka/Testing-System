import React, { useCallback } from 'react';
import { CardTestItem } from '../../pages';
import { Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';

interface CardProps {
  item: CardTestItem;
}


export const MainPageCard = (props: CardProps): JSX.Element => {


  const history = useHistory();

  const onClick = useCallback(() => {
    //constructor

  }, [])

  return (
    <>
      <Card title={props.item.title} className="rounded-lg" onClick={onClick}>
        Card content
        <div>
          <Button onClick={() => {
            history.push(`/start-test/${props.item.id}`)
          }}>Run test</Button>
          <Button onClick={() => {
            history.push(`/constructor/${props.item.id}`)
          }}>Open constructor</Button>
        </div>
      </Card>
    </>
  )
}
