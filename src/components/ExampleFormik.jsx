import React, { useState } from 'react';
// import { Editor, EditorState, ContentState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

const ExampleFormik = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (state) => {
    setEditorState(state);
  };

  return (
    <div>
      <h1>Draft.js Editor</h1>
      <Editor
        editorState={editorState}
        onChange={handleChange}
      />
      <div>
        <h2>Output:</h2>
        <div>
          {editorState.getCurrentContent().getPlainText()}
        </div>
      </div>
    </div>
  );
};

export default ExampleFormik;
