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
      name: "Category 1",
      questions: [
        {
          id: 1,
          question: "How big is the Campus?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros.",
        },
        {
          id: 2,
          question: "How many Academic blocks?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros.",
        },
        {
          id: 3,
          question: "How many professors reside within?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros.",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      questions: [
        {
          id: 1,
          question: "Question 1",
          answer: "Answer 1",
        },
        {
          id: 2,
          question: "Question 2",
          answer: "Answer 2",
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
