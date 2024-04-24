import "./mainpage.css";
import logo from "../img/logo.png";
import black from "../img/black.png";
import green from "../img/green.png";
import blue from "../img/blue.png";
import pink from "../img/pink.png";

export default {
  title: "Main Page",
  parameters: {
    chromatic: { viewports: [1536] },
  },
};

export const MainPage = () => (
  <div>
    <iframe
      src="../index.html"
      style={{ width: "100%", height: "500px" }}
    />
  </div>
);
