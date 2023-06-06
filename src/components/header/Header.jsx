import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DialpadIcon from '@mui/icons-material/Dialpad';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './header.scss';

const Header = () => {
  const [lang, setLang] = useState('ENG');
  const [currency, setCurrency] = useState('USD');

  console.log(lang);

  const changeLang = e => {
    setLang(e.target.value);
  };

  const changeCurrency = e => {
    setCurrency(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <p className="right">Free Shipping Over $100 & Free Returns</p>
          <div className="left">
            <div className="tel">
              Hotline:
              <a className="text-white" href="tel: +80506765453">
                80506765453
              </a>
            </div>
            <div className="dropdown lang">
              <FormControl fullWidth>
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  className="drop-select"
                  value={lang}
                  label="Age"
                  onChange={changeLang}
                >
                  <MenuItem value="ENG">ENG</MenuItem>
                  <MenuItem value="UKR">UKR</MenuItem>
                  <MenuItem value="RUS">RUS</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="dropdown currency">
              <FormControl fullWidth>
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  className="drop-select"
                  value={currency}
                  label="Age"
                  onChange={changeCurrency}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="UAN">UAN</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="header-upper">
        <div className="container">
          <div className="logo">
            <Link className="text" to="/">
              Digitic.
            </Link>
          </div>
          <div className="left-section">
            <div className="search">
              <input
                className="input"
                type="text"
                placeholder="Search product here"
              />
              <button className="search-button">
                <SearchIcon className="icon" />
              </button>
            </div>
            <div className="left">
              <div className="item">
                <LoopOutlinedIcon className="icon" />
                <div className="wrapper">
                  <span>Compare </span>
                  <span>Products</span>
                </div>
              </div>
              <div className="item">
                <FavoriteBorderIcon className="icon" />
                <div className="wrapper">
                  <span>Favourite</span>
                  <span>Wishlist</span>
                </div>
              </div>
              <div className="item">
                <PersonOutlineIcon className="icon" />
                <div className="wrapper">
                  <span>Log in</span>
                  <span>My Account</span>
                </div>
              </div>
              <div className="item">
                <ShoppingCartOutlinedIcon className="icon cart" />
                <div className="wrapper">
                  <span className="count">2</span>
                  <span className="total">$ 245</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="categories-side">
            <DialpadIcon />
            <span className="categories-title">Shop Categories</span>
            <ArrowDropDownIcon className="arrow-icon" />
          </div>
          <div className="menu-side">
            <ul className="list-menu">
              <li className="item-menu">
                <NavLink to="/" className="link">
                  HOME
                </NavLink>
              </li>
              <li className="item-menu">
                <NavLink to="/about" className="link">
                  OUR STORE
                </NavLink>
              </li>
              <li className="item-menu">
                <NavLink to="/blog" className="link">
                  Blog
                </NavLink>
              </li>
              <li className="item-menu">
                <NavLink to="/contact" className="link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
