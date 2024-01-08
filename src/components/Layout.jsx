import "./layout.css";
import Post from './Post';
import {useNavigate} from 'react-router-dom'
import Posts,{SideData,BottomCardData} from '../Constant/data'
import SideCard from './SideCard';
import BottomCard from "./BottomCard";
import { useEffect } from "react";
const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("componet mount ");
    return () => {
      console.log("component will unmount :");
      localStorage.clear();
      navigate('/');
    };
  }, []);
  const logout = () => {
    navigate("/")
  }
  return (
    <div className="grid-container">
      <div className="grid-item logo-container">
        <p className="logo-para">LOGO</p>{" "}
        {/* cursor:pointer  // for home page */}
      </div>
      <div className="grid-item search-container">
        <div className="search-container">
          <div className="search-container-inner">
            <div>
              <img src="/Search.svg" alt="search icon" height={20} width={20} />
            </div>

            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
            />
          </div>
          <div className="filter-container-inner">
            <div>
              <img src="/Filter.svg" alt="search icon" height={26} width={26} />
            </div>
            <div className="filter">Filters</div>
          </div>
        </div>
      </div>
      <div className="grid-item become-a-seller-grid-item">
        <span>Become a Seller</span>
      </div>
      <div className="grid-item nav-grid-item">
        <div className="navigation-main-container">
          <ul>
            <li>
              <div className="nav-inner" id="home">
                <img src="/home.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">Home</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img
                  src="/notification.svg"
                  alt="Home logo"
                  className="home-svg"
                />
                <p className="nav-name-para">Notifications</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img src="/heart-4.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">Shop</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img src="/message.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">Conversation</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img
                  src="/message-1.svg"
                  alt="Home logo"
                  className="home-svg"
                />
                <p className="nav-name-para">Wallet</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img src="/favorite.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">Subscription</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img src="/profile.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">My Profile</p>
              </div>
            </li>
            <li>
              <div className="nav-inner other">
                <img src="/setting.svg" alt="Home logo" className="home-svg" />
                <p className="nav-name-para">Settings</p>
              </div>
            </li>
          </ul>
        </div>
        <ul
          style={{
            textDecoration: "none",
            listStyleType: "none",
            paddingLeft: "33px",
          }}
        >
          <li
            style={{
              width: "100px",
            }}
          >
            <div className="nav-inner other" onClick={() => {
              logout();
            }}>
              <img src="/logout.svg" alt="logout logo" className="home-svg" />
              <p
                className="nav-name-para"
                style={{
                  color: "#88C2BB",
                  font: "normal normal 600 16px/19px Gilroy",
                }}
              >
                Log out
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="grid-item scrollable-content ">
        {Posts?.map((data) => {
          return <Post {...data} key={data.id} />;
        })}
        {/* <Post />
        <Post />
        <Post /> */}

        <div
          className="bottom-scrollable-content"
          style={{ backgroundColor: "#F5F5F5", paddingTop: "30px" }}
        >
          {BottomCardData?.map((item) => {
            return <BottomCard {...item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="grid-item grid-item6">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            marginBottom: "23px",
          }}
        >
          <div className="category-container">
            <div
              style={{
                font: " normal normal 600 16px/19px Gilroy",
                color: "#101010",
                cursor: "pointer",
              }}
            >
              Artists
            </div>
            <div
              style={{
                font: "normal normal 600 16px/19px Gilroy",
                color: "#8D8D8D",
                cursor: "pointer",
              }}
            >
              Photographers
            </div>
          </div>
        </div>

        {SideData?.map((data) => {
          return <SideCard {...data} key={data.id} />;
        })}
      </div>
      <div className="grid-item footer-first">
        <p>2022&#169;logo name</p>
        <p>Developed by ivan Infotech</p>
      </div>
      <div className="grid-item" style={{ backgroundColor: "#F5F5F5" }}></div>
      <div className="grid-item footer-second">
        <p>Privacy</p>
        <p>Terms of Seervice</p>
        <p>Cookie Notice</p>
      </div>
    </div>
  );
};

export default Layout;
