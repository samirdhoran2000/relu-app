import "./post.css";
const Post = ({id,name,username,profileImg,postImg,content,likes,comments,shares}) => {
  return (
    <div className="post-main-container">
      <div className="post-main-container-item post-main-container-item1">
        <div>
          <img
            src={profileImg}
            alt="profile picture"
            style={{ marginRight: "14px" }}
          />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <div className="profile-name">{name}</div>
            <div className="username">{username}</div>
          </div>
        </div>
        <div>
          <img src="/more.svg" alt="more logo" height={24} width={24} />
        </div>
      </div>
      <div className="post-main-container-item post-main-container-item2">
        <div>
         {content}
          <span>
            <a href="/" target="_blank">Read More</a>
          </span>
        </div>
        <div className="post-image-container">
          <img src={postImg} alt="post image" />
          <div className="like-overlay">
            <img src="heart-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="post-main-container-item post-main-container-item3">
        <div
          style={{
            width: "70px",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "19px",
          }}
        >
          <div>
            <img src="heart.svg" alt="" />
          </div>
          <div
            style={{
              font: "normal normal 600 20px/24px Gilroy",
              color: "#101010",
            }}
          >
           {likes}k
          </div>
        </div>
        <div
          style={{
            width: "70px",
            display: "flex",
            marginRight: "19px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src="comment-1.svg" alt="" />
          </div>
          <div
            style={{
              font: "normal normal 600 20px/24px Gilroy",
              color: "#101010",
            }}
          >
            {comments}k
          </div>
        </div>
        <div
          style={{
            width: "70px",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "19px",
          }}
        >
          <div>
            <img src="share.svg" alt="" />
          </div>
          <div
            style={{
              font: "normal normal 600 20px/24px Gilroy",
              color: "#101010",
            }}
          >
            {shares}k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
