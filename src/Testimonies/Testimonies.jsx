import React from "react";
import Carousel from "react-elastic-carousel";
import Title from "../Title/Title";
import Testimony from "./Testimony";
import user1 from "../Assets/user-1.jpg";
import user2 from "../Assets/user-2.jpg";
import user3 from "../Assets/user-3.jpg";
import user4 from "../Assets/user-4.jpg";
import user5 from "../Assets/user-5.jpg";
import user6 from "../Assets/user-6.jpg";
import user10 from "../Assets/user-10.jpg";
import user11 from "../Assets/user-11.jpg";
import user12 from "../Assets/user-12.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const Testimonies = () => {
  return (
    <section className="testimonies-section">
      <Title mainTitle="our success stories" subTitle="testimonials" />
      <Carousel
        breakPoints={breakPoints}
        itemsToShow={3}
        itemsToScroll={1}
        enableTilt={true}
        enableSwipe={true}
      >
        <div className="testimony__scroll-helper">
          <Testimony
            image={user1}
            userName="Bisengi Japhet"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user2}
            userName="Stasha Ann"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user3}
            userName="Levin Kol"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user12}
            userName="Charles Dready"
            currentPosition="doctor"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user4}
            userName="Bossman Bisengi"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user11}
            userName="Rozina Daddygal"
            currentPosition="digital entrepreneur"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user5}
            userName="Rozzy kaqute"
            currentPosition="program manager"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimonies__scroll-helper">
          <Testimony
            image={user10}
            userName="Davies Kirober"
            currentPosition="sales and marketting"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>
        <div className="testimonies__scroll-helper">
          <Testimony
            image={user6}
            userName="Askofu Chris"
            currentPosition="ethical hacker"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonies;
