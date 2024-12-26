import { PricingWrapper } from "../css_sheets/colorSheets.css";
import { plans} from "../assets/assets";
import Title from "../components/Title";

const BuyCredit = () => {
  return (
    <PricingWrapper>
      <div className="plan-button">
        <button>OUR PLANS</button>
      </div>
      <Title text={<p>Choose the plan that’s right for you</p>}/>
      <div className="plan-wrapper">
        {plans.map((item, index) => {
          return (
            <>
              <div className="plan-card" key={index}>
                <div className="plan-title">{item.id}</div>
                <div className="plan-description">{item.desc}</div>
                <div className="plan-price">${item.price}</div>
                <div className="plan-credits">/ {item.credits} credits</div>
                <button>Get started</button>
              </div>
            </>
          );
        })}
      </div>
    </PricingWrapper>
  );
};

export default BuyCredit;
