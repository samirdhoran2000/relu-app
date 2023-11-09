import "./horizontalScroll.css";
import BottomCard from "./BottomCard";
// import { BottomCardData } from "./Layout";
const HorizontalScroll = () => {
  return (
    <>
      <section className="section-container">
        <div className="product-list-container">
          <div className="product-list" id="productList">
            {/* <!-- Product 1 --> */}
            {/* <div className="product-card">
              <div className="new-badge">New</div>
              <img
                src="https://source.unsplash.com/random/150x150?sig=1"
                alt="Product 1 Image"
              />
              <h3>Product 1</h3>
              <p>This is product 1.</p>
            </div> */}
            {/* <!-- Product 2 --> */}
            {BottomCardData.map((item) => {
              return <BottomCard {...item} key={item.id} />;
            })}
          </div>
        </div>
        <div id="scrollRight" className="scroll-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default HorizontalScroll;
