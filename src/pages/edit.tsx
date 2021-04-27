import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useParams } from 'react-router';
import { FaPen } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Form, Header } from '../components';
import { Diary } from '../types/type';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useContent } from '../hooks';

const Write = () => {
  const { id } = useParams<{ id: string }>();
  const { diary, update } = useContent(id);

  const history = useHistory();
  const [form, setForm] = useState<Diary>({
    id: '',
    title: '',
    date: new Date(),
    contents: '',
    tags: [],
    file: '',
    image: '',
  });
  const [tag, setTag] = useState('');

  const { title, contents, tags, image, file } = form;
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (diary) {
      setForm(diary as Diary);
    }
  }, [diary]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

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

      <Form>
        {/* <Form.Image src='https://picsum.photos/700/100' /> */}

        <Form.Title handleChange={handleChange} value={title} placeholder='제목을 입력하세요' />
        <Form.Textarea handleChange={handleChange} value={contents} placeholder='내용을 입력하세요' />

        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
        {tags.length < 4 && (
          <Form.Tag
            handlePressEnter={() => {
              console.log('Enter press');
              setForm({
                ...form,
                tags: tags.concat([tag]),
              });
              setTag('');
            }}
            handleChange={(e) => {
              e.preventDefault();
              setTag(e.target.value);
            }}
            value={tag}
            placeholder='태그입력'
          />
        )}

        <Form.Button
          handleClick={() => {
            const newDiary: Readonly<Diary> = {
              date: new Date(),
              title,
              contents,
              tags,
              image,
              file,
            };
            // console.log(newDiary);
            update(newDiary);
            history.push(`${ROUTES.DIARYDETAIL}/${id}`);
          }}
        >
          Edit
        </Form.Button>
      </Form>
    </>
  );
};

export default Write;
