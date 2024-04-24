import React from 'react';

export default {
  title: "Main Page",
  parameters: {
    chromatic: { viewports: [1536] },
  },
};

export const HTMLComponent = () => (
  <div>
    <iframe src="../index.html" style={{ width: '100%', height: '500px' }} />
  </div>
);
