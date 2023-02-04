import React from 'react';
import Image from "next/image";
import styles from "/styles/PizzaCard.module.css";
import Link from 'next/link';


const PizzaCard = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.container}>
      <Link href={`/product/${item._id}`} passHref>
        <Image src={item.img} alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>${item.prices[0]}</span>
      <p className={styles.desc}>
        {item.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
