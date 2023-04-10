import { SpicyBig, VeganBig, VegetarianBig } from "../../assets/icons";
import "./SignatureSection.scss";
const SignatureSection: React.FC = () => {
  return (
    <section>
      <div className="signature-container">
        <h2>Signature Dish Of:</h2>
        <div className="icons-container">
          <div className="signature-icon">
            <SpicyBig className="Spicy-icon" />
            <p>Spicy</p>
          </div>
          <div className="signature-icon">
            <VegetarianBig className="Vegetarian-icon" />
            <p>Vegetarian</p>
          </div>
          <div className="signature-icon">
            <VeganBig className="Vegan-icon" />
            <p>Vegan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
