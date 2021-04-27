import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';
import { FaPen } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Form, Header } from '../components';
import { Diary } from '../types/type';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Write = () => {
  const history = useHistory();
  const [form, setForm] = useState<{
    title: string;
    contents: string;
    tags: string[];
    image: string;
    file: string;
  }>({
    title: '',
    contents: '',
    tags: [],
    image: '',
    file: '',
  });
  const [tag, setTag] = useState('');
  const { title, contents, tags, image, file } = form;

  const { firebase } = useContext(FirebaseContext);

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

        <Form.TagWrapper>
          {tags.map((tag) => (
            <Form.Tag
              handleClick={() => {
                setForm({
                  ...form,
                  tags: tags.filter((item) => item !== tag),
                });
              }}
            >
              {tag}
            </Form.Tag>
          ))}

          {tags.length < 4 && (
            <Form.TagInput
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
        </Form.TagWrapper>

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
            firebase?.firestore().collection('diary').add(newDiary);
            history.push(ROUTES.HOME);
          }}
        >
          Write
        </Form.Button>
      </Form>
    </>
  );
};

export default Write;
