import SWIGGY_LOGO from "../../../assets/swiggy-logo.png";
import ACCOUNT from "../../../assets/Account.png";
import DISCOUNT from "../../../assets/Discount.png";
import LIFEBUOY from "../../../assets/Lifebuoy.png";
import SEARCH from "../../../assets/Search.png";
import SHOPPING_CART from "../../../assets/Shopping cart.png";
import HOVER_ACCOUNT from "../../../assets/Account-1.png";
import HOVER_DISCOUNT from "../../../assets/Discount-1.png";
import HOVER_LIFEBUOY from "../../../assets/Lifebuoy-1.png";
import HOVER_SEARCH from "../../../assets/Search-1.png";
import HOVER_SHOPPING_CART from "../../../assets/Shopping cart-1.png";
import DOWN_ARROW_PRIMARY from "../../../assets/down-arrow-1.png";
import "./header.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import OptionsCard from "../../atoms/options-card/options-card";

const Header = ({
  title = "",
  location = true,
  search = true,
  offers = true,
  help = true,
  signIn = true,
  cart = true,
  lat = 0,
  lon = 0,
  onLogoClick,
  onLocationClick,
  onSearchClick,
  onOfferClick,
  onHelpClick,
  onSigninClick,
  onCartClick,
  changeHeader,
}) => {
  const [locationString, setLocationString] = useState("Location Not found!");
  const url = `https://www.swiggy.com/dapi/misc/address-recommend?latlng=${lat}%2C${lon}`;
  useEffect(() => {
    setLocation();
  }, [lat, lon]);
  const setLocation = async () => {
    const res = await axios.get(
      "https://api.allorigins.win/get?url=" + encodeURIComponent(url)
    );
    const content = JSON.parse(res?.data?.contents);
    const location =
      content?.data && content?.data[0] && content?.data[0]?.formatted_address;
    setLocationString(location);
  };
  return (
    <div className="header-container">
      {changeHeader ? (
        <div className="header-content">
          <OptionsCard />
          <div className="search-container">
            <input
              className="search-input"
              placeholder="Search for restaurant and food"
            ></input>
            <div className="search-icon">
              <img src={SEARCH} alt="Search Icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="header-content">
          <div className="logo-container">
            <figure className="logo">
              <img src={SWIGGY_LOGO} alt="swiggy logo" onClick={onLogoClick} />
            </figure>
            <div className="location-section">
              {location && (
                <>
                  <button id="other-button" onClick={onLocationClick}>
                    HOME
                  </button>
                  <p className="location" onClick={onLocationClick}>
                    {locationString &&
                      (locationString.length < 30
                        ? locationString
                        : locationString.slice(0, 30) + "...")}
                  </p>
                  <button id="location-dropdown" onClick={onLocationClick}>
                    <figure className="drop-down-icon">
                      <img src={DOWN_ARROW_PRIMARY} alt="drop down" />
                    </figure>
                  </button>
                </>
              )}
              {title.length > 0 && <h1 className="header-title">{title}</h1>}
            </div>
          </div>
          <nav className="nav-section">
            {search && (
              <button className="nav-button" onClick={onSearchClick}>
                <div className="icon-container">
                  <figure className="nav-icon">
                    <img src={SEARCH} alt="search icon" />
                  </figure>
                  <figure className="nav-icon icon-hover">
                    <img src={HOVER_SEARCH} alt="search icon" />
                  </figure>
                </div>
                <p className="nav-text">Search</p>
              </button>
            )}
            {offers && (
              <button className="nav-button" onClick={onOfferClick}>
                <div className="icon-container">
                  <figure className="nav-icon">
                    <img src={DISCOUNT} alt="offer icon" />
                  </figure>
                  <figure className="nav-icon icon-hover">
                    <img src={HOVER_DISCOUNT} alt="offer icon" />
                  </figure>
                </div>
                <p className="nav-text">
                  Offers<sup className="super-script">NEW</sup>
                </p>
              </button>
            )}
            {help && (
              <button className="nav-button" onClick={onHelpClick}>
                <div className="icon-container">
                  <figure className="nav-icon">
                    <img src={LIFEBUOY} alt="offer icon" />
                  </figure>
                  <figure className="nav-icon icon-hover">
                    <img src={HOVER_LIFEBUOY} alt="offer icon" />
                  </figure>
                </div>
                <p className="nav-text">Help</p>
              </button>
            )}
            {signIn && (
              <button className="nav-button" onClick={onSigninClick}>
                <div className="icon-container">
                  <figure className="nav-icon">
                    <img src={ACCOUNT} alt="offer icon" />
                  </figure>
                  <figure className="nav-icon icon-hover">
                    <img src={HOVER_ACCOUNT} alt="offer icon" />
                  </figure>
                </div>
                <p className="nav-text">Sign In</p>
              </button>
            )}
            {cart && (
              <button className="nav-button" onClick={onCartClick}>
                <div className="icon-container">
                  <figure className="nav-icon">
                    <img src={SHOPPING_CART} alt="offer icon" />
                  </figure>
                  <figure className="nav-icon icon-hover">
                    <img src={HOVER_SHOPPING_CART} alt="offer icon" />
                  </figure>
                </div>
                <p className="nav-text">Cart</p>
              </button>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
