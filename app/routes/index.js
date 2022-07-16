import React from "react";
import InfoComponent from "~/Components/InfoComponent__Desktop/InfoComponent__Desktop";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import Header from "~/Components/Header/Header";
import SearchBar from "~/Components/SearchBar/SearchBar";
import styleSheet from "~/styles/routes/LandingPage.css";
import arrow from "../Assets/Img/Arrow.svg";

const Sections = [
  {
    className: "aboutSection__View1",
  },
  {
    className: "aboutSection__View2",
  },
  {
    className: "aboutSection__View3",
  },
];

import { useMediaQuery } from "react-responsive";
import useScrollEffect from "~/Hooks/Observer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function LandingPage() {
  const callToAction = useMediaQuery({
    query: "(max-width: 1095px)",
  });

  const references = React.useRef([]);
  references.current = [];

  const { view } = useScrollEffect(Sections[0].className, references.current);

  const addRef = (element) => {
    if (element && !references.current.includes(element)) {
      references.current.push(element);
    }
  };

  return (
    <div className="LandingPage">
      <Header />
      <main className="LandingPage__mainContainer">
        <section className="heroSection">
          <div className="heroSection__top">
            <div className="heroSection__top--left">
              <img className="heroSection__arrow" src={arrow} alt="Arrow" />
              <div className="heroSection__title">
                <h1>
                  Your <b>guide</b>,
                </h1>
                <h1>
                  To all <b>things SNU</b>
                </h1>
              </div>
              <div className="heroSection__desc">
                <p>
                  We get it, navigating the university can be challenging! But
                  have no worries, We can connect you to resourses that will
                  unlock all that Shiv Nadar University has to offer.
                </p>
              </div>
              {!callToAction && (
                <div className="heroSection__callToAction">
                  <ButtonLink href="/#learn-more" content="Learn More" />
                  <ButtonLink href="/about" content="Contact Us" fill />
                </div>
              )}
            </div>
            <div className="heroSection__top--right">
              <div className="heroSection__funFact">
                <span>Fun Fact:&nbsp;</span>
                <p>Absolutely fixed relatively broken coordinates</p>
              </div>
              <SearchBar />
            </div>
          </div>
          <div className="heroSection__bottom">
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">Faculty on Board</p>
              <p className="heroSection__stats--stat">1,500 +</p>
            </div>
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">Students enrolled '22</p>
              <p className="heroSection__stats--stat">29,000 +</p>
            </div>
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">Events held '22</p>
              <p className="heroSection__stats--stat">143 +</p>
            </div>
          </div>
        </section>
        <section className="aboutSection">
          <InfoComponent
            indicatorState={
              view === Sections[0].className
                ? 1
                : view === Sections[1].className
                ? 2
                : 3
            }
          />
          {Sections.map((section, index) => {
            return (
              <section
                key={index}
                className={section.className}
                ref={addRef}
              ></section>
            );
          })}
        </section>
      </main>
    </div>
  );
}
