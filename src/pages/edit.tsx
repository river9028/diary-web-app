import React, { useEffect, useState, useContext, useRef } from 'react';
import { useHistory, useParams } from 'react-router';
import { FaPen, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { v4 as uuid4 } from 'uuid';
import { Form, Header } from '../components';
import { Diary } from '../types/type';
import * as ROUTES from '../constants/routes';
import { useAuthListener, useContent } from '../hooks';
import { FirebaseContext } from '../context/firebase';

const Edit = () => {
  const user = useAuthListener();

  const { id } = useParams<{ id: string }>();
  const { diary, update } = useContent(id);

  const history = useHistory();
  const [form, setForm] = useState<Diary>({
    id: '',
    title: '',
    date: new Date(),
    contents: '',
    tags: [],
    image: null,
    file: null,
    creatorId: user?.uid,
  });
  const [tag, setTag] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);

  const { title, contents, tags, image, file, creatorId } = form;

  const { firebase } = useContext(FirebaseContext);

  const [hasTitle, setHasTitle] = useState<boolean>(false);

  useEffect(() => {
    if (diary) {
      setForm(diary as Diary);
      setAttachment(diary.image);
    }
  }, [diary]);

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

  const handleClearAttachment = () => {
    if (attachment) {
      const previmgRef = firebase?.storage().refFromURL(attachment);

      if (previmgRef) {
        const confirmMsg = window.confirm('???????????? ???????????????????');

        if (confirmMsg) {
          previmgRef.delete();
        }
      }
    }

    setAttachment(null);
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

        <Form.Title
          hasTitle={hasTitle}
          handleChange={handleChange}
          value={title}
          placeholder='????????? ???????????????'
        />
        <Form.Textarea handleChange={handleChange} value={contents} placeholder='????????? ???????????????' />

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
              placeholder='????????????'
            />
          )}
        </Form.TagWrapper>

        <Form.Button
          handleClick={async () => {
            let attachmentURL = attachment;

            // attachment??? ????????????, ?????? image??? attachment??? ?????? ???????????? ?????? ??????.
            // ????????? ?????? null??? ???????????? ????????? ???????????? ???????????? ?????????.
            if (attachment && image !== attachment) {
              const fileRef = firebase?.storage().ref().child(`diary/${uuid4()}`);
              const response = await fileRef?.putString(attachment, 'data_url');
              attachmentURL = await response?.ref.getDownloadURL();
            }

            const newDiary: Readonly<Diary> = {
              date: new Date(),
              title,
              contents,
              tags,
              image: attachmentURL,
              file,
              creatorId,
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

export default Edit;
