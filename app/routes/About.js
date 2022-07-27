import React from "react";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/About/About.css";
import Footer from "~/Components/Footer/Footer";
import KeshavAndPP from "../Assets/Img/keshavAndPP.png"
import Aryan from "../Assets/Img/AryanSethia.png";
import PrabhavPandey from "../Assets/Img/PrabhavPandey.jpg"
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
import TeamCard from "~/Components/TeamCard/TeamCard";
import Select from "react-select";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

const teams = [
  "Core" , "Web Development", "Design" , "Content",
]
const teamData = [
  {
    id: "1",
    name: "Prabhav Pandey",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: PrabhavPandey,
    team: "Core"
  },
  {
    id: "2",
    name: "Keshav Dubey",
    title: "Deputy Lead",
    gif: "https://media.giphy.com/media/Dk57URqjqjHjNGHeMV/giphy.gif",
    pic: KeshavDubey,
    team: "Core"
  },
  {
    id: "3",
    name: "AB Santosh",
    title: "Dev Lead",
    gif: "https://media3.giphy.com/media/Y34mR8Pr58um3A7RR6/giphy.gif?",
    pic: ABSantosh,
    team: "Web Development"
  },
  {
    id: "4",
    name: "Yathansh",
    title: "Developer",
    gif: "https://cdn.discordapp.com/attachments/846575266545664014/998296836936826880/me.gif",
    pic: Yathansh,
    team: "Web Development"
  },
  {
    id: "5",
    name: "Akshat Sabavat",
    title: "Developer & Designer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: AkshatSabavat,
    team: "Web Development"
  },
  {
    id: "6",
    name: "Aryan Sethia",
    title: "Developer",
    gif: "https://media.giphy.com/media/pCJcExvbKdSeyyv8zP/giphy.gif",
    pic: Aryan,
    team: "Web Development"
  },
  {
    id: "7",
    name: "Riya Srivastava",
    title: "Lead",
    gif: "https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif",
    pic: Riya,
    team: "Web Development"
  },
  {
    id: "8",
    name: "Rishi B",
    title: "Developer",
    gif: "https://media.giphy.com/media/qbsXf9HsBk1RFXuoxi/giphy.gif",
    pic: RishiB,
    team: "Web Development"
  },
  {
    id: "9",
    name: "Pratham Agarwal",
    title: "Dev Advisor",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: Pratham,
    team: "Web Development"
  },
  {
    id: "10",
    name: "Amogh Maheshwari",
    title: "Content Curator",
    gif: "https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif",
    pic: Amogh,
    team: "Content"
  },
  {
    id: "11",
    name: "Toshika Shukla",
    title: "Content Curator",
    gif: "https://giphy.com/gifs/cat-cute-animal-X3Yj4XXXieKYM",
    pic: Toshika,
    team: "Content"
  },
  {
    id: "12",
    name: "Gokula Dutt",
    title: "Lead",
    gif: "https://media.giphy.com/media/hvvdSykrDVyZ5Sa5IS/giphy.gif",
    pic: Goku,
    team: "Content"
  },
  {
    id: "13",
    name: "Ojasvi Prabhat Dimri",
    title: "Lead",
    gif: "https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif",
    pic: Ojasvi,
    team: "Content"
  },
  {
    id: "14",
    name: "Pallavi",
    title: "Lead",
    gif: "https://media.giphy.com/media/RJDROup4h4JCAE1nDY/giphy-downsized-large.gif",
    pic: Pallavi,
    team: "Design"
  },

]

export default function About() {
  const [selectedValue, setSelectedValue] = React.useState("Core");

  const filteredCards = [];
  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  }
  const handleSelectDesktop = (event) => {
    setSelectedValue(event.target.id);
  }
  teamData.map((item) => {
    if(item.team === selectedValue) {
      filteredCards.push(item);
    }
  })

  return (
    <div className="AboutUsPage">
      <Header />
      <main className="AboutUsPage__main">
        <section className="AboutUsPage__main--hero">
          <h1>
            Meet <b>the Team</b>
          </h1>
          <p>
            Nibh turpis porta integer diam. Quis id adipiscing aliquam ut pretium suspendisse eget.it, navigating the university can be challenging!
          </p>
        </section>
        <section className="AboutUsPage__main--mission">
          <div className="AboutUsPage__main--mission__image--container">
            <img className="AboutUsPage__main--mission__image--container__image" src={KeshavAndPP} alt="keshav-and-Prabhav" />
          </div>
          <div className="AboutUsPage__main--mission__content">
            <h1>
              Our <b>Mission</b>
            </h1>
            <p>We get it, navigating the university can be challenging! But have no worries, We can connect you to resourses that will unlock all that Shiv Nadar University has to offer.</p>
          </div>
        </section>
        <section className="AboutUsPage__main--story">
          <div className="AboutUsPage__main--story__content">
            <h1>
              Our <b>Story,</b>
            </h1>
            <h1>
              has <b>been crazy,</b>
            </h1>
            <p>We get it, navigating the university can be challenging! But have no worries, We can connect you to resourses that will unlock all that Shiv Nadar University has to offer.</p>
          </div>
          <div className="AboutUsPage__main--story__image--container">
            <img className="AboutUsPage__main--story__image--container__image" src={KeshavAndPP} alt="keshav-and-Prabhav" />
          </div>
        </section>
        <section className="AboutUsPage__main--team">
          <div className="AboutUsPage__main--team__title">
            <h1>
              Who are <b>we ?</b>
            </h1>
            <p>These are the people that make the magic happen.</p>
          </div>
          <div className="AboutUsPage__main--team__teams">
            {teams.map(item => <div id={item} onClick={handleSelectDesktop} className="AboutUsPage__main--team__teams--data">{item}</div>)}
            <select value={selectedValue} onChange={handleSelect}>
              {teams.map(item => <option value={item}>{item}</option>)}
            </select>
            {/* <Select options={teams}/> */}
          </div>
          <div className="AboutUsPage__main--team__people">
            {console.log(filteredCards.length)}
            {filteredCards.map(item => <div className="AboutUsPage__main--team__people--cards">
              <TeamCard image={item.pic} gif={item.gif} name={item.name} title={item.title} />
            </div>)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}