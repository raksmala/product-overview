import './mainpage.css';
import logo from "../img/logo.png";
import black from "../img/black.png";
import green from "../img/green.png";
import blue from "../img/blue.png";
import pink from "../img/pink.png";

export default {
  title: "Main Page",
};

export const Default = () => {
  return `
  <div class="black">
      <div class="eclipse"></div>
      <div class="container">
          <div class="content">
              <img src="${logo}" alt="logo" class="content-logo">
              <span class="content-title">Apple AirPods Max Wireless Over-Ear Headphones.</span>
              <span class="content-description">Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control, Bluetooth Headphones for Iphone - <span class="description-color">Black</span></span>
              <span class="content-price"><span class="price-suffix">$</span>500.00</span>
              
              <div class="content-social-media">
                  <div class="social-media-item">
                      <i class="bx bxl-facebook"></i>
                  </div>
                  <div class="social-media-item">
                      <i class="mdi mdi-twitter"></i>
                  </div>
                  <div class="social-media-item">
                      <i class="mdi mdi-youtube"></i>
                  </div>
              </div>
          </div>
          <div class="product">
              <img src="${black}" alt="product" class="product-image active">
              <img src="${green}" alt="product" class="product-image next">
              <img src="${blue}" alt="product" class="product-image outside">
              <img src="${pink}" alt="product" class="product-image prev">
          </div>
      </div>
  </div>`;
};
