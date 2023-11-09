import "./sideCard.css";
const SideCard = ({profileImg,coverImg,name,username}) => {
  return (
    <div className="side-main-container">
      <img src={coverImg} alt="card image" />
      <div className="username-profile">
        <div className="username-profile-inner">
          <div className="active-profile" style={{ marginRight: "15px" }}>
            <img
              src={profileImg}
              alt="profile logo"
            />
            <div className="active-green"></div>
          </div>
          <div className="username-name">
            <div
              style={{
                font: "normal normal 600 16px/19px Gilroy",
                color: "#FFFFFF",
              }}
            >
             {name}
            </div>
            <div
              style={{
                font: "normal normal medium 12px/14px Gilroy",
                color: "#FFFFFF",
              }}
            >
            {username}
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <img
              src="/pexels-anastasia-shuraeva-4406721-1.png"
              alt="profile logo"
            />
          </div>
          <div>
            <div>Thomas Edward</div>
            <div>@thewildwithyou</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideCard;
