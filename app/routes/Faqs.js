import React from "react";
import Header from "~/Components/Header/Header";
import Footer from "~/Components/Footer/Footer";
import styleSheet from "~/styles/routes/Faqs/Faqs.css";
import { Link, Outlet } from "@remix-run/react";
import questionIcon from "~/Assets/Img/questionIcon.svg";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
  // current response structure for questions
  // Can be modified if the need arises, jsx will have to be modified as well
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];

  const dropdown = useMediaQuery({
    query: "(max-width: 750px)",
  });

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  const testFAQs = [
    {
      id: 1,
      name: "Campus",
      questions: [
        {
          id: 1,
          question: "What is a minor degree exactly?",
          answer:
            "Minor degrees are offered separately from the Major degrees, are not compulsory to do. You can simply take courses from different departments and complete the credits.",
        },
        {
          id: 2,
          question: "How do I avail the shuttle service?",
          answer:
            "The Shuttle service can be booked from the SNU app under TRANSPORT POOLING. Or, the second option is to send your name, contact number, and ticket details to 9150232364 (Agaash, Campus Affairs Secretary).",
        },
        {
          id: 3,
          question: "What are the university timings? Process to go out?",
          answer:
            "You can leave the campus grounds at 6am and have to return by 9pm otherwise you will have to explain to the DSA how you were not out committing cardinal sins but because that one Marvel movie had both a mid-credit and an end-credit scene and you were naive enough to book an evening show. You just need your ID card and get the biometric done from the IT bay at the library.",
        },
      ],
    },
    {
      id: 2,
      name: "Miscellaneous",
      questions: [
        {
          id: 1,
          question: "What do our ID cards help us do?",
          answer: "Our college ID cards are our proof of identity during entry in the main gate and can help us issue sports equipment from the ISC (Indoor Sports Complex) and books from the library.",
        },
        {
          id: 2,
          question: "What is the purpose of clubs?",
          answer: "Clubs are student run student led organizations that venture and explore their interests in different fields like entrepreneurship, music, debating and pretty much everything under the sun. They help you network, gain experience, work in a team and conduct large scale events. For example, the E-Summit, TEDx Conference and so on.",
        },
      ],
    },
  ];

  return (
    <div className="FaqsPage">
      <Header />
      <div className="FaqsPage__mainContainer">
        <section className="mainSection">
          <div className="mainSection__top">
            <h1 className="mainSection__title">Frequently Asked Questions</h1>
            <p className="mainSection__desc">
              Still confused? We’ve been there
              <br />
              We’ve compiled a few of the most asked questions right here.
            </p>
          </div>
          <div className="mainSection__bottom">
            <div className="mainSection__categories">
              {testFAQs.map((category) => (
                <div
                  key={category.id}
                  className={
                    "mainSection__categoryBox " +
                    (category.id == categoryId
                      ? "mainSection__categoryBox--active"
                      : "")
                  }
                >
                  <img
                    className="mainSection__categoryIcon"
                    src={
                      category.id == categoryId ? questionIcon : questionIcon //change to inactive icon asset
                    }
                    alt="snu explore Logo"
                  />
                  <Link
                    to={`/faqs/${category.id}`}
                    className={
                      "mainSection__categoryName " +
                      (category.id == categoryId
                        ? "mainSection__categoryName--active"
                        : "")
                    }
                    onClick={() => {
                      // setcategoryId(index);
                    }}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
            <Outlet context={[testFAQs]} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
