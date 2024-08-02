import React from 'react';
import MarkedComponent from './MarkedComponent';

const Appmarkedcomponent = () => {

    const markdownContent = `
Hi, **I am** how to convert this **am** to bold.
`;
  return (
    <div>
      <div>
      <h2>Markdown Content</h2>
      <MarkedComponent content={markdownContent} />
    </div>
    </div>
  )
}

export default Appmarkedcomponent
