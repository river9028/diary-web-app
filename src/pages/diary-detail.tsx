import React from 'react';
import { FaWrench, FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Detail, Header } from '../components';
import { useContent } from '../hooks';
import * as ROUTES from '../constants/routes';

const DiaryDetail = (): JSX.Element => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { diary, remove } = useContent(id);

  return (
    <>
      <Header>
        <Header.Group handleClick={() => history.goBack()}>
          <RiArrowGoBackFill />
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.HOME);
          }}
        >
          Diary
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.WRITE);
          }}
        >
          <FaPen />
        </Header.Group>
      </Header>
      {diary && (
        <Detail>
          <Detail.Image src={diary.image} />

          <Detail.Group>
            <Detail.Title>{diary.title}</Detail.Title>
            <div>
              <Detail.Button handleClick={() => history.push(`${ROUTES.EDIT}/${id}`)}>
                <FaWrench />
              </Detail.Button>
              <Detail.Button
                handleClick={() => {
                  // eslint-disable-next-line no-alert
                  const confirmMsg = window.confirm('삭제하시겠어요?');
                  if (confirmMsg) {
                    remove(diary);
                    history.push(ROUTES.HOME);
                  }
                }}
              >
                <FaRegTrashAlt />
              </Detail.Button>
            </div>
          </Detail.Group>

          <Detail.Date>{diary.date.toLocaleString()}</Detail.Date>
          <Detail.Text>{diary.contents}</Detail.Text>
          <Detail.TagGroup>
            {diary.tags.map((tag) => (
              <Detail.Tag>{tag}</Detail.Tag>
            ))}
          </Detail.TagGroup>
        </Detail>
      )}
    </>
  );
};

export default DiaryDetail;
