import React from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import styles from '/styles/PizzaList.module.css';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList && pizzaList.map((item) => (
          <React.Fragment key={item._id}>
            <PizzaCard item={item} />
          </React.Fragment>
        ))
        }
      </div>
    </div>
  );
};

export default PizzaList;