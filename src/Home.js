import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media.istockphoto.com/vectors/medical-hospital-building-vector-id983457502?k=20&m=983457502&s=612x612&w=0&h=joRDCbkCmPtw2N1w1uDIOFycUOx-_2s9B0APUPA95nk="
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Paracetamol"
            price={1.34}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="49538094"
            title="Amoxicillin"
            price={2.70}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2020/9/TX/RT/LU/73935541/amoxicillin-capsule-500x500.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="23445930"
            title="Silver Membership"
            price={10.00}
            rating={0}
            image="https://www.toyoos.com/wp-content/uploads/2018/07/Silver-Membership.png"
          />
          <Product
            id="4903850"
            title="Gold Membership"
            price={18.99}
            rating={0}
            image="https://yourpng.com/download/Dv7We5uY149DvKcHC8ibfngBj2FaUei1XnFQKrkW1tk7c4ff75eL8Gc37YkEFUJOi0rMEeuw3qg6zDSAMPibY8ZhMlfKicpttJfpv55Zskxz6g1DfWjEvktErNkeHy2BmpMGjXthb0gfWdDIokBqoTiynr0QkG4utKluoCygL3ci0p5ZE7l3zU7qBsiKRzn6UvnBhP5s/large"
          />
          <Product
            id="3254354345"
            title="Bronze Membership"
            price={22.99}
            rating={0}
            image="https://developer.team/vault/images/2018/08/27/1ctUt.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
