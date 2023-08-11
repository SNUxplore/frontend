import React from "react";
import Header from "~/Components/Header/Header";
import Footer from "~/Components/Footer/Footer";
import styleSheet from "~/styles/routes/Safety/Safety.css";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import SafetyCard from "~/Components/SafetyCard/SafetyCard";
import InquiryFeedbackSection from "~/Components/InquiryFeedbackSection/InquiryFeedbackSection";
import Navbar from "~/Components/Navbar/Navbar";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Safety() {
  return (
    <div className="SafetyToolkitPage">
      <Header />
      <Navbar />
      <div className="SafetyToolkitPage__mainContainer">
        <div className="SafetyToolkitPage--effect SafetyToolkitPage--effectLeft"></div>
        <div className="SafetyToolkitPage--effect SafetyToolkitPage--effectRight"></div>
        <section className="SafetyToolkitPage__mainSection">
          <div className="SafetyToolkitPage__mainSection--top">
            <h1 className="SafetyToolkitPage__mainSection--title">Your Safety & <br/> Well-Being, <span className="SafetyToolkitPage__mainSection--highlightText">Our Priority</span></h1>

            <p className="SafetyToolkitPage__mainSection--desc">
              Welcome to SNUxplore's Supportive Initiative, where we prioritize your mental health and safety. We understand that university life can be full of challenges, and we are here to provide immediate assistance in times of emergency.
            </p>
            <ButtonLink
              className="SafetyToolkitPage__mainSection--accessEmergencyButton"
              content="Access Emergency Support"
            />
          </div>
          <div className="SafetyToolkitPage__cards">
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
            <SafetyCard />
          </div>
        </section>
        <InquiryFeedbackSection />
      </div>
      <Footer />
    </div>
  );
}
