import "./bottomCard.css";
const BottomCard = ({ id, coverImg, title, price, rating }) => {
  return (
    <div className="bottom-container">
      <div>
        <img
          src={coverImg}
          alt="cover photo"
          style={{
            borderRadius: "10px",
          }}
          height={180}
          width={252}
        />
      </div>
      <div className="bottom-container-title">{title}</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:'#F5F5F5'
        }}
      >
        <div className="bottom-container-ammount">{price}</div>
        <div className="rating">
          <img src="/star.svg" alt="star svg" width={14} height={14} />
          <img src="/star.svg" alt="star svg" width={14} height={14} />
          <img src="/star.svg" alt="star svg" width={14} height={14} />
          <img src="/star.svg" alt="star svg" width={14} height={14} />
          <img src="/star.svg" alt="star svg" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
