import React from 'react';
import { useField } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

const CustomCKEditor = ({ label, ...props }) => {
  const [field, , { setValue }] = useField(props);

//   const turndownService = new TurndownService();

//   turndownService.addRule('bold', {
//     filter: 'strong',
//     replacement: (content) => `**${content}**`
//   });
//   turndownService.addRule('italic', {
//     filter: 'em',
//     replacement: (content) => `*${content}*`
//   });



  return (
    <div>
      <label>{label}</label>
      <CKEditor
        editor={ClassicEditor}
        config={{
            toolbar: [
                'undo', 'redo', '|',
                'heading', '|', 'bold', 'italic', '|',
                'link', 'insertTable', 'mediaEmbed', '|',
                'bulletedList', 'numberedList', 'indent', 'outdent'
            ],
            plugins: [
                Bold,
                Essentials,
                Heading,
                Indent,
                IndentBlock,
                Italic,
                Link,
                List,
                MediaEmbed,
                Paragraph,
                Table,
                Undo
            ],

        }}
        data={field.value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data); // Update Formik state
        }}
        
      />
    </div>
  );
};

export default CustomCKEditor;
