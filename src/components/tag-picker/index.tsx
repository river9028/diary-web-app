import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Wrapper, Tag } from './styles/tag-picker';

import 'react-datepicker/dist/react-datepicker.css';
import { FilterDiaryContext } from '../../context';

const TagPickerComponent: React.FC<{ showDatePicker: boolean }> = ({
  showDatePicker,
  children,
  ...restProps
}) => {
  const { selectTags, setSelectTags } = useContext(FilterDiaryContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        if (ref.current !== null) {
          ref.current.scrollLeft += e.deltaY;
        }
      });
    }
  }, [ref]);

  return (
    <Wrapper showDatePicker={showDatePicker} showTagPicker={selectTags.length !== 0}>
      <Container
        ref={ref}
        showDatePicker={showDatePicker}
        showTagPicker={selectTags.length !== 0}
        {...restProps}
      >
        {selectTags.map((tag) => (
          <Tag onClick={() => setSelectTags(selectTags.filter((v) => v !== tag))}>{tag}</Tag>
        ))}
        {children}
      </Container>
    </Wrapper>
  );
};

export default TagPickerComponent;
