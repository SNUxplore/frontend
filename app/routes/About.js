import React from "react";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/About/About.css";
import Footer from "~/Components/Footer/Footer";
import KeshavAndPP from "../Assets/Img/keshavAndPP.png";
import Aryan from "../Assets/Img/AryanSethia.png";
import PrabhavPandey from "../Assets/Img/PrabhavPandey.jpg";
import ABSantosh from "../Assets/Img/ABSantosh.png";
import AkshatSabavat from "../Assets/Img/AkshatSabavat.jpg";
import Amogh from "../Assets/Img/Amogh.jpeg";
import Goku from "../Assets/Img/Goku.jpg";
import Toshika from "../Assets/Img/Toshika.jpg";
import KeshavDubey from "../Assets/Img/KeshavDubey.png";
import Ojasvi from "../Assets/Img/Ojasvi.jpg";
import Pallavi from "../Assets/Img/Pallavi.jpg";
import Pratham from "../Assets/Img/Pratham.png";
import RishiB from "../Assets/Img/RishiB.png";
import Riya from "../Assets/Img/Riya.jpg";
import Yathansh from "../Assets/Img/Yathansh.jpg";
import { useNavigate } from "@remix-run/react";
import aboutIllustration from "../Assets/Img/xplorAboutusImage.svg";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import Navbar from "~/Components/Navbar/Navbar";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

// const teams = ["Core", "Web Dev", "Design", "Content"];
const teams = ["Development Team", "Design", "Content", "Marketing"];
const teamData = [
  // {
  //   id: "1",
  //   name: "Prabhav Pandey",
  //   title: "Lead",
  //   gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
  //   pic: PrabhavPandey,
  //   team: "Core",
  //   direction: "center",
  // },
  // {
  //   id: "2",
  //   name: "Keshav Dubey",
  //   title: "Deputy Lead",
  //   gif: "https://media.giphy.com/media/Dk57URqjqjHjNGHeMV/giphy.gif",
  //   pic: KeshavDubey,
  //   team: "Core",
  //   direction: "center",
  // },
  {
    id: "3",
    name: "AB Santosh",
    title: "Dev Lead",
    gif: "https://media3.giphy.com/media/Y34mR8Pr58um3A7RR6/giphy.gif?",
    pic: ABSantosh,
    team: "Development Team",
    direction: "right",
  },
  {
    id: "4",
    name: "Yathansh",
    title: "Developer",
    gif: "https://cdn.discordapp.com/attachments/846575266545664014/998296836936826880/me.gif",
    pic: Yathansh,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "5",
    name: "Akshat Sabavat",
    title: "Developer & Designer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: AkshatSabavat,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "6",
    name: "Aryan Sethia",
    title: "Developer",
    gif: "https://media.giphy.com/media/pCJcExvbKdSeyyv8zP/giphy.gif",
    pic: Aryan,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "7",
    name: "Riya Srivastava",
    title: "Developer",
    gif: "https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif",
    pic: Riya,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "8",
    name: "Rishi B",
    title: "Developer",
    gif: "https://media.giphy.com/media/qbsXf9HsBk1RFXuoxi/giphy.gif",
    pic: RishiB,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "9",
    name: "Pratham Agarwal",
    title: "Dev Advisor",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: Pratham,
    team: "Development Team",
    direction: "center",
  },
  {
    id: "10",
    name: "Amogh Maheshwari",
    title: "Content Curator",
    gif: "https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif",
    pic: Amogh,
    team: "Content",
    direction: "center",
  },
  {
    id: "11",
    name: "Toshika Shukla",
    title: "Content Curator",
    gif: "https://giphy.com/gifs/cat-cute-animal-X3Yj4XXXieKYM",
    pic: Toshika,
    team: "Content",
    direction: "center",
  },
  {
    id: "12",
    name: "Gokula Dutt",
    title: "Lead",
    gif: "https://media.giphy.com/media/hvvdSykrDVyZ5Sa5IS/giphy.gif",
    pic: Goku,
    team: "Content",
    direction: "center",
  },
  {
    id: "13",
    name: "Ojasvi Prabhat Dimri",
    title: "Lead",
    gif: "https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif",
    pic: Ojasvi,
    team: "Content",
    direction: "center",
  },
  {
    id: "14",
    name: "Pallavi",
    title: "Lead",
    gif: "https://media.giphy.com/media/RJDROup4h4JCAE1nDY/giphy-downsized-large.gif",
    pic: Pallavi,
    team: "Design",
    direction: "center",
  },
];

export default function About() {
  const [selectedValue, setSelectedValue] = React.useState("Development Team");
  const filteredCards = [];

  teamData.map((item) => {
    if (item.team === selectedValue) {
      filteredCards.push(item);
    }
  });

  return (
    <div className="AboutUsPage">
      <Header />
      <Navbar />
      <main className="AboutUsPage__mainContainer">
        {/* <section className="AboutUsPage__hero">
          <h1 className="AboutUsPage__hero--title">
            Meet the <span>Team</span>
          </h1>
          <p className="AboutUsPage__hero--desc">
            Here you'll see the knights who sit at the round table. Talented,
            resourceful and willing to give their all to make your experience
            the best possible.
          </p>
        </section> */}
        {/* <section className="AboutUsPage__mission">
          <div className="AboutUsPage__mission--left">
            <img src={aboutIllustration} alt="about" />
          </div>
          <div className="AboutUsPage__mission--right">
            <h2 className="AboutUsPage__mission--title">
              Our{" "}
              <span>
                <b>Mission</b>
              </span>
            </h2>
            <p className="AboutUsPage__mission--desc">
              We at team SNUXplore are a group of passionate and driven
              individuals, who have come together for the sole purpose of making
              a comprehensive repository of all student related information
              available anytime, anywhere.
            </p>
          </div>
        </section> */}
        <section className="AboutUsPage__story">
          <div className="AboutUsPage__story--left">
            <h2 className="AboutUsPage__story--title">
              {/* Our Story
              <br /> has <b>been</b>{" "}
              <span>
                <b>crazy</b>
              </span> */}
              Meet the <span className="AboutUsPage--highlightText">Co-Founders</span>
            </h2>
            <p className="AboutUsPage__story--desc">
              What started as an idea in the library, is now finally a reality.
              The Student Council. DSA. Admin. We've faced them all and with
              their support, have reached here, serving to you the features, we
              feel, make your campus life better.
            </p>
            <div class="AboutUsPage__story--cofounderProfiles">
                <ButtonLink
                  content="Keshav Dubey"
                  href="https://www.linkedin.com/in/keshavdubey2025/"
                  className="AboutUsPage__story--button"
                />
                <ButtonLink
                  content="Prabhav Pandey"
                  href="https://www.linkedin.com/in/prabhav-pandey/"
                  className="AboutUsPage__story--button"
                />
            </div>
          </div>
          <div className="AboutUsPage__story--right">
            <img src={KeshavAndPP} alt="Keshav and Prabhav" />
          </div>
        </section>

        <section className="AboutUsPage__team">
          <div className="AboutUsPage__team--top">
            <h2 className="AboutUsPage__team--title">
              {/* Who <b>are we?</b> */}
              Meet the <span className="AboutUsPage--highlightText">Team</span><br/> Behind the <span className="AboutUsPage--highlightText">magic</span>
            </h2>
            <p className="AboutUsPage__team--subTitle">We at team SNUXplore are a group of passionate and driven individuals, who have come together for the sole purpose of making a comprehensive repository of all student related information available anytime, anywhere.</p>
          </div>
          <div className="AboutUsPage__team--middle">
            {teams.map((item, index) =>
              item === selectedValue ? (
                <button
                  onClick={() => setSelectedValue(item)}
                  // id={item}
                  key={index}
                  className={
                    "AboutUsPage__team--link AboutUsPage__team--active " + (item.length >= 13 ? "AboutUsPage__team--longButton" : "")
                  }
                >
                  {item}
                </button>
              ) : (
                <button
                  onClick={() => setSelectedValue(item)}
                  // id={item}
                  key={index}
                  className={"AboutUsPage__team--link " + (item.length >= 13 ? "AboutUsPage__team--longButton" : "")}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <div className={`AboutUsPage__team--members`}>
            <div className={`AboutUsPage__team--members`}>
              {teamData
                .filter((item) => item.team === selectedValue)
                .map((member, index) => {
                  return (
                    <div className="AboutUsPage__team--memberCard" key={index}>
                      <div className="AboutUsPage__team--memberCard__imageBox">
                        <div
                          id={`${member.name}--gif`}
                          className="AboutUsPage__team--memberCard__image"
                          style={{
                            backgroundImage: `url(${member.gif})`,
                            backgroundSize: "cover",
                            backgroundPosition: `${member.direction}`,
                            backgroundRepeat: "no-repeat",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                        <div
                          tabIndex={0}
                          id={`${member.name}--pic`}
                          className="AboutUsPage__team--memberCard__image"
                          onMouseEnter={() => {
                            document.getElementById(
                              `${member.name}--pic`
                            ).style.opacity = 0;
                          }}
                          onFocus={() => {
                            document.getElementById(
                              `${member.name}--pic`
                            ).style.opacity = 0;
                          }}
                          onMouseLeave={() => {
                            document.getElementById(
                              `${member.name}--pic`
                            ).style.opacity = 1;
                          }}
                          onBlur={() => {
                            document.getElementById(
                              `${member.name}--pic`
                            ).style.opacity = 1;
                          }}
                          style={{
                            backgroundImage: `url(${member.pic})`,
                            backgroundSize: "cover",
                            backgroundPosition: `${member.direction}`,
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            zIndex: 2,
                          }}
                        />
                      </div>
                      <div className="AboutUsPage__team--memberCard__name">
                        {member.name}
                      </div>
                      <div className="AboutUsPage__team--memberCard__title">
                        {member.title}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
