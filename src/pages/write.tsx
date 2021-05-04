import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { FaPlus, FaPen, FaRegTrashAlt } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { v4 as uuid4 } from 'uuid';
import { Form, Header } from '../components';
import { Diary } from '../types/type';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Write = () => {
  const history = useHistory();
  const [form, setForm] = useState<Diary>({
    date: new Date(),
    title: '',
    contents: '',
    tags: [],
    image: null,
    file: null,
  });
  const [tag, setTag] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const { title, date, contents, tags, image, file } = form;

  const { firebase } = useContext(FirebaseContext);

  const [hasTitle, setHasTitle] = useState<boolean>(true);

  useEffect(() => {
    if (title.length > 0) {
      setHasTitle(true);
    }
  }, [title]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('File Change');
    const {
      target: { files },
    } = e;
    if (files !== null) {
      const theFile = files[0];
      const reader = new FileReader();
      reader.onload = (finishEvent) => {
        // console.log(finishEvent);
        const { result } = finishEvent.target!;
        if (typeof result === 'string') {
          setAttachment(result);
        }
      };
      reader.readAsDataURL(theFile);
    }
  };

  const handleClearAttachment = () => setAttachment(null);

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

        <Form.Title
          hasTitle={hasTitle}
          handleChange={handleChange}
          value={title}
          placeholder='제목을 입력하세요'
        />
        <Form.Textarea handleChange={handleChange} value={contents} placeholder='내용을 입력하세요' />

        <Form.FileWrapper hasAttachment={!!attachment}>
          {attachment ? <Form.Image src={attachment} /> : <FaPlus />}
          <Form.FileInput handleChange={handleFileChange} />
          {attachment && (
            <Form.FileButton handleClick={handleClearAttachment}>
              <FaRegTrashAlt />
            </Form.FileButton>
          )}
        </Form.FileWrapper>

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
                // console.log('Enter press');
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
          handleClick={async () => {
            if (title.length === 0) {
              // console.log(titleRef);
              setHasTitle(false);
              return;
            }
            let attachmentURL: string | null = null;

            if (attachment) {
              const fileRef = firebase?.storage().ref().child(`diary/${uuid4()}`);
              const response = await fileRef?.putString(attachment, 'data_url');
              attachmentURL = await response?.ref.getDownloadURL();
            }

            const newDiary: Readonly<Diary> = {
              date,
              title,
              contents,
              tags,
              image: attachmentURL,
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
