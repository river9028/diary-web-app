import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Card } from '../components';
import * as ROUTES from '../constants/routes';
import { FilterDiaryContext } from '../context';
import { useContents } from '../hooks';

const Cards = () => {
  const { startDate, endDate, selectTags, setSelectTags } = useContext(FilterDiaryContext);
  const { diary } = useContents('diary', startDate, endDate, selectTags);
  // console.log('diary: ', diary);
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
                <Card.Tag
                  handleClick={(e) => {
                    e.stopPropagation();
                    setSelectTags((prev) => {
                      return [...new Set(prev.concat(tag))];
                    });
                  }}
                >
                  {tag}
                </Card.Tag>
              ))}
              &nbsp;
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
