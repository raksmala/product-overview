

export default {
  title: "Main Page",
  parameters: {
    chromatic: { viewports: [1536] }
  }
};

export const Default = () => {
  return `<iframe src="../index.html" style={{ width: '100%', height: '500px', border: 'none' }} />`;
};
