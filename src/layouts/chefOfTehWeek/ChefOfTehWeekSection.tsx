import { Carousel } from "../../components";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./chefOfTehWeek.scss";
const ChefOfTehWeekSection: React.FC = () => {
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  const chefOfTheWeek = (chefId: number) => {
    return restData.filter((rest) => rest.chefId === chefId);
  };
  return (
    <section className="chef-container">
      <h2>Chef of the week:</h2>
      {chefData &&
        chefData
          .filter((chef) => chef.weekChef === true)
          .map((chef) => (
            <>
              <div className="chef-header">
                <div className="chef-image">
                  <img src={chef.image} alt={chef.name} />
                  <div className="chef-name">
                    <h3>{chef.name}</h3>
                  </div>
                </div>
              </div>
              <div className="chef-description">
                <p>{chef.description}</p>
              </div>
              <div>
                <p>Chef of the week:</p>
                {<Carousel cards={chefOfTheWeek(chef.id)} weekChef={true} />}
              </div>
            </>
          ))}
    </section>
  );
};

export default ChefOfTehWeekSection;
