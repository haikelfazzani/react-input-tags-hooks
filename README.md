## 📋 React input tags using hooks 
A lightweight React component input tags.  

### [Demo](https://stackblitz.com/edit/react-y7tnba)

![bundlephobia badge](https://badgen.net/npm/v/react-input-tags-hooks) ![bundlephobia badge](https://badgen.net/bundlephobia/min/react-input-tags-hooks) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/react-input-tags-hooks)

```
npm i react-input-tags-hooks
```

### Usage
```js
import InputTags from "react-input-tags-hooks";
import 'react-input-tags-hooks/build/index.css'; // required

<InputTags
  onTag={getTags} // return array of tags
  tagColor='#48c774' 
  placeHolder="Press enter to add tags"
/>
```

### Examples:
```js
const App = () => {

  const [tags, setTags] = useState([])

  const getTags = (tags) => {
    setTags(tags);
  }

  return (

    <InputTags
      onTag={getTags}
      tagColor={'#48c774'}
      placeHolder="Press enter to add tags"
    />
  );
}
```

### License
MIT