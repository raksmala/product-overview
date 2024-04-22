// index.stories.js

// Import your index.html file
import indexHTML from '../index.html';

// Define your Storybook story
export default {
  title: 'Index', // Title of your story
};

// Define a function to create a DOM element from HTML string
function createDOMFromString(htmlString) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString.trim();
  return wrapper.firstChild;
}

// Define the "Default" story
export const Default = () => {
  // Create a DOM element from the index.html content
  const indexElement = createDOMFromString(indexHTML);

  // Return the created DOM element
  return indexElement;
};
