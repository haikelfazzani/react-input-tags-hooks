import React, { useState } from 'react';
import { render } from "react-dom";
import './index.css'
import InputTags from './lib';

const colors = [
  { n: 'green', v: '#48c774' },
  { n: 'rose', v: '#f14668' },
  { n: 'black', v: '#363636' },
  { n: 'bluesky', v: '#3298dc' },
  { n: 'blue', v: '#3273dc' },
  { n: 'lightgray', v: '#f5f5f5' },
  { n: 'lightyellow', v: '#ffdd57' }
];

const App = () => {

  const [tags, setTags] = useState([])
  const [color, setColor] = useState('#48c774')

  const getTags = (tags) => {
    setTags(tags);
  }

  return (
    <div className="container">
      <InputTags
        onTag={getTags}
        tagColor={color}
        placeHolder="Press enter to add tags"
      />

      <label>Choose color :</label>
      <select onChange={e => setColor(e.target.value)} className="mt-3">
        {colors.map(c => <option value={c.v} key={c.n}>{c.n}</option>)}
      </select> {'hexa : '+ color}

      <p>Your tags are : </p>
      <pre>{'[' + tags.join(', ') + ']'}</pre>

    </div>
  );
}

render(<App />, document.getElementById("root"));
