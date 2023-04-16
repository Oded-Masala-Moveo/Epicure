import React, { useEffect, useState } from "react";
import "./ChefPage.scss";
import { Chef, ChefCategory } from "../../models/index.model";
import { filterChefs, getChefs } from "../../services";
import { Card } from "../../components";
const ChefPage: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [chefsCategory, setChefsCategory] = useState<string>(ChefCategory.All);

  useEffect(() => {
    const setChefsData = () => {
      const chefsData = getChefs();
      setChefs(filterChefs(chefsData, chefsCategory));
    };
    setChefsData();
  }, [chefsCategory]);
  return (
    <>
      <section className="chef-section">
        <div className="chef-title">
          <h2>CHEFS</h2>
        </div>
        <ul className="chef-category">
          <li
            onClick={() => setChefsCategory(ChefCategory.All)}
            className={
              chefsCategory == ChefCategory.All ? "selected" : "category"
            }
          >
            <p>{ChefCategory.All}</p>
          </li>
          <li
            onClick={() => setChefsCategory(ChefCategory.new)}
            className={
              chefsCategory == ChefCategory.new ? "selected" : "category"
            }
          >
            <p>{ChefCategory.new}</p>
          </li>
          <li
            onClick={() => setChefsCategory(ChefCategory.Viewed)}
            className={
              chefsCategory == ChefCategory.Viewed ? "selected" : "category"
            }
          >
            <p>{ChefCategory.Viewed}</p>
          </li>
        </ul>
        <div className="chef-list">
          {chefs.map((chef) => (
            <Card key={chef.id} card={chef} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ChefPage;
