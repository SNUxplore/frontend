import react from "react";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/About/About.css";
import Footer from "~/Components/Footer/Footer";
import KeshavAndPP from "../Assets/Img/keshavAndPP.png"

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}
const teams = [
  "Core", "Technical Team", "Design Team", "Content Team",
]
const teamData = [
  {
    id: "1",
    name: "Prabhav Pandey",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "2",
    name: "Keshav Dubey",
    title: "Deputy Lead",
    gif: "https://media.giphy.com/media/Dk57URqjqjHjNGHeMV/giphy.gif",
    pic: "https://drive.google.com/file/d/1fYjLWq5HZWedVziVEAluXbCCNCudfBEa/view?usp=sharing",
    team: "core"
  },
  {
    id: "3",
    name: "AB Santosh",
    title: "Dev Lead",
    gif: "https://media3.giphy.com/media/Y34mR8Pr58um3A7RR6/giphy.gif?",
    pic: "https://drive.google.com/file/d/1_0WDJveG7hxruevbq-yyUSCBlfiMiicw/view?usp=sharing",
    team: "core"
  },
  {
    id: "4",
    name: "Yathansh",
    title: "Developer",
    gif: "https://cdn.discordapp.com/attachments/846575266545664014/998296836936826880/me.gif",
    pic: "https://drive.google.com/file/d/1pkGdZPVOdXwIHQugE5GeCvOghKyF6heo/view?usp=sharing",
    team: "core"
  },
  {
    id: "5",
    name: "Akshat Sabavat",
    title: "Dev and Designer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1POrcnmOReGqbZLWwF-_ytM21izbPc8B2/view?usp=sharing",
    team: "core"
  },
  {
    id: "6",
    name: "Aryan Sethia",
    title: "Developer",
    gif: "https://media.giphy.com/media/pCJcExvbKdSeyyv8zP/giphy.gif",
    pic: "https://drive.google.com/file/d/1koq4FrX-jvsv6qXoIvb4J8jldR_W5Bxh/view?usp=sharing",
    team: "core"
  },
  {
    id: "7",
    name: "Riya Srivastava",
    title: "Lead",
    gif: "https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif",
    pic: "https://drive.google.com/file/d/1Jaizr0f6SgXsDMB8jNNeillasQ-0BveB/view?usp=sharing",
    team: "core"
  },
  {
    id: "8",
    name: "Rishi B",
    title: "Developer",
    gif: "https://media.giphy.com/media/qbsXf9HsBk1RFXuoxi/giphy.gif",
    pic: "https://drive.google.com/file/d/1wKI4t-neTa9sZ8s2E_qJJ_5gUkfN-H8J/view?usp=drivesdk",
    team: "core"
  },
  {
    id: "9",
    name: "Pratham Agarwal",
    title: "Dev Advisor",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1BQF3zqI7-965lPZK2SRMMwyua8XpK8w-/view?usp=sharing",
    team: "core"
  },
  {
    id: "10",
    name: "Amogh Maheshwari",
    title: "Content Curator",
    gif: "https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif",
    pic: "https://drive.google.com/file/d/1HUAZLlhq4DVnHwRnghbdDdTaHlTHGC_w/view?usp=sharing",
    team: "core"
  },
  {
    id: "11",
    name: "Toshika Shukla",
    title: "Content Curator",
    gif: "https://giphy.com/gifs/cat-cute-animal-X3Yj4XXXieKYM",
    pic: "https://drive.google.com/file/d/1FRewDtMFsFRgaFxLkmJOdhgNenVKoEuM/view?usp=sharing",
    team: "core"
  },
  {
    id: "12",
    name: "Gokula Dutt",
    title: "Lead",
    gif: "https://media.giphy.com/media/hvvdSykrDVyZ5Sa5IS/giphy.gif",
    pic: "https://drive.google.com/file/d/1CeF-NkqNByVziiWIOPvlRGo8OBKiHW75/view?usp=sharing",
    team: "core"
  },
  {
    id: "13",
    name: "Ojasvi Prabhat Dimri",
    title: "Lead",
    gif: "https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif",
    pic: "https://drive.google.com/file/d/1PIFs2QCnHBAt5CZJ7c3hIFIu6jbDUfOO/view?usp=sharing",
    team: "core"
  },
  {
    id: "14",
    name: "Pallavi",
    title: "Lead",
    gif: "https://media.giphy.com/media/RJDROup4h4JCAE1nDY/giphy-downsized-large.gif",
    pic: "https://drive.google.com/file/d/1IhcxTmYlw3UNxnBmC6HZ4lb-CEq4PYHL/view?usp=sharing",
    team: "core"
  },

]

export default function About() {
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
            {teamData.map((item) => {
              console.log(item.name);
              <div>{item.name}</div>
            }) }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}