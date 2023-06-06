import './footer.scss';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import SocialLinks from 'components/socialLinks/SocialLinks';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="newsletter">
            <SendIcon className="logo" />
            <div className="title">Sign Up For Newsletter</div>
          </div>
          <div className="form">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              className="input-form"
            />
            <button className="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="block lx">
            <h2>Contact us</h2>
            <ul className="list">
              <li className="adress">
                <span>
                  Demo Store <br />
                  No. 1259 Freedom, New York, 11111
                  <br />
                  United States
                </span>
              </li>
              <li className="contact">+38098765678</li>
              <li>
                <Link to="/" className="link">
                  demo@exampledemo.com
                </Link>
              </li>
              <li className="social-links">
                <SocialLinks />
              </li>
            </ul>
          </div>
          <div className="block">
            <h2>Information</h2>
            <ul className="list">
              <li className="item">
                <Link className="link" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Refund Policy
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Shipping Policy
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Terms Of Servise
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h2>Account</h2>
            <ul className="list">
              <li className="item">
                <Link className="link" to="/">
                  Search
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  About Us
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Faq
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Contacts
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Size Chart
                </Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h2>Quick Links</h2>
            <ul className="list">
              <li className="item">
                <Link className="link" to="/">
                  Accessories
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Laptops
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Headphones
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Smart Watches
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/">
                  Tablets
                </Link>
              </li>
            </ul>
          </div>
          <div className="block lx">
            <h2>Our App</h2>
            <p className="our-app-section">
              Download our App and get extra 15% Discount on your first Order..!
            </p>
            <div className="app-section">
              <div className="app">
                <GoogleIcon className="icon" />
                <div className="desc">
                  <div className="header">Download on the</div>
                  <div className="title">Google Play</div>
                </div>
              </div>
              <div className="app">
                <AppleIcon className="icon" />
                <div className="desc">
                  <div className="header">Download on the</div>
                  <div className="title">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2023, <a href="/">Digital-store.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
