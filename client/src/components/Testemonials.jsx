import Title from "./Title";
import { TestemonialsWrapper } from "../css_sheets/colorSheets.css";
import { testimonialsData } from "../assets/assets";

const Testemonials = () => {
  return (
    <TestemonialsWrapper>
      <Title text={<p>Customer Testimonials</p>} />
      <div className="textimonial-wrapper">
        {testimonialsData.map((item) => {
          return (
            <div className="card " key={item.id}>
              <p className="quote">{item.text}</p>
              <div className="userInfo">
                <img src={item.image} alt="User Avatar" className="avatar" />
                <div>
                  <p className="name">{item.author}</p>
                  <p className="title">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TestemonialsWrapper>
  );
};

export default Testemonials;
