import React from 'react';
import {marked} from 'marked';
import parse from 'html-react-parser';

const MarkedComponent = ({ content }) => {
  // Convert Markdown to HTML
  const htmlContent = marked(content);
  const contentParse = parse(htmlContent)

  return (
    <div className="markdown-content">
        {htmlContent}
        {Array.isArray(contentParse) ? contentParse : [contentParse]}
    </div>
  );
};

export default MarkedComponent;
