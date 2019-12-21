import React, { useState, useEffect } from 'react';
import './InputTags.css';

const Tag = ({ txt, idx, send, tagColor }) => {

  const removeTag = () => { send(idx); }

  return <span className="tags has-addons">
    <span className="tag is-link" style={{ backgroundColor: tagColor }}>{txt}</span>
    <span className="tag is-delete" onClick={removeTag}>&times;</span>
  </span>
}

export default function InputTags ({ onTag, placeHolder, tagColor }) {

  const [tags, setTags] = useState([])

  useEffect(() => {
    onTag(tags)
  }, [tags, setTags])

  const addTag = (e) => {
    if (e.keyCode === 13) {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  }

  const getChildVal = (idx) => {
    setTags(tags.filter((tag, i) => i !== idx));
  }

  return <div className="tag-container">
    {tags.map((t, i) => <Tag txt={t} send={getChildVal} key={t + i} idx={i} tagColor={tagColor} />)}
    <input
      className="input-tags"
      type="text"
      onKeyUp={addTag}
      placeholder={placeHolder}
      required
    />
  </div>;
}
