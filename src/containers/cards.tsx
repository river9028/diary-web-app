import React from 'react';
import { useHistory } from 'react-router';
import { Card } from '../components';
import * as ROUTES from '../constants/routes';
import { useContents } from '../hooks';

const Cards = () => {
  const { diary } = useContents('diary');

  // const [currentCards, setCurrentCards] = useState<Diary[]>(diary);
  console.log(diary);

  const history = useHistory();

  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      {diary.map(({ id, title, contents, tags, date, image }) => (
        <Card
          handleClick={() => {
            history.push(`${ROUTES.DIARYDETAIL}/${id}`);
          }}
          key={id}
        >
          <Card.Group className='left'>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{contents}</Card.Text>

            <Card.Info>
              {tags.map((tag) => (
                <Card.Tag>{tag}</Card.Tag>
              ))}
              &nbsp;
              {console.log(date)}
              <Card.Date>{date.toLocaleString()}</Card.Date>
            </Card.Info>
          </Card.Group>

          {image && (
            <Card.Group className='right'>
              <Card.Img src={image} />
            </Card.Group>
          )}
        </Card>
      ))}
    </div>
  );
};
export default Cards;
