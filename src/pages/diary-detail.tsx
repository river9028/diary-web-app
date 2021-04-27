import React, { useContext, useState } from 'react';
import { FaWrench, FaRegTrashAlt } from 'react-icons/fa';
import { useParams } from 'react-router';
import Detail from '../components/detail';
import { Header } from '../containers';
import { FirebaseContext } from '../context';
import { useContent } from '../hooks';
import { Diary } from '../types/type';

const DiaryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { firebase } = useContext(FirebaseContext);

  const { diary } = useContent(id);

  return (
    <>
      <Header />

      {diary && (
        <Detail>
          <Detail.Group>
            <Detail.Title>{diary.title}</Detail.Title>
            <div>
              <Detail.Button>
                <FaWrench />
              </Detail.Button>
              <Detail.Button>
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
