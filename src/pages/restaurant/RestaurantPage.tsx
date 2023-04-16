import React from "react";
import "./RestaurantPage.scss";
import { useParams } from "react-router-dom";
const RestaurantPage: React.FC = () => {
  const { restId } = useParams();
  console.log(restId);

  return (
    <>
      <section className="restaurant-section">restaurantPage</section>
      <div></div>
    </>
  );
};

export default RestaurantPage;
