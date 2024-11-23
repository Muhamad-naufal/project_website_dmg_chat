import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import { useLoaderData } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import { IconButton } from './Button';

const UserPrompt = ({ text }) => {
  const [isExpanded, toggleExpand] = useToggle();
  const { user } = useLoaderData();
  const textBoxRef = useRef();
  const [hasMoreContest, setHasMoreContent] = useState(false);
  useEffect(() => {
    setHasMoreContent(
      textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight,
    );
  }, [textBoxRef]);
  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr),max-content] md:gap-5'>
      <Avatar name={user?.name} />
      <p
        className={`text-bodyLarge pt-1 whitespace-pre-wrap ${!isExpanded ? 'line-clamp-4' : ''}`}
        ref={textBoxRef}
      >
        {text}
      </p>
      {hasMoreContest && (
        <IconButton
          icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          onClick={toggleExpand}
          title={isExpanded ? 'Collapse' : 'Expand'}
        />
      )}
    </div>
  );
};

UserPrompt.propTypes = {
  text: PropTypes.string,
};

export default UserPrompt;
