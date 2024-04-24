export default {
  title: "Main Page",
  parameters: {
    chromatic: { viewports: [1536] },
  },
};

export const HTMLComponent = () => (
  <iframe
    src="../index.html"
    style={{ width: "100%", height: "500px", border: "none" }}
  />
);
