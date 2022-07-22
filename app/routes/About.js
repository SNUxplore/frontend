import react from "react";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/About/About.css";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

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
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "3",
    name: "AB Santosh",
    title: "Dev Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "4",
    name: "Yathansh",
    title: "Developer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "5",
    name: "Akshat Sabavat",
    title: "Dev and Designer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "6",
    name: "Aryan Sethia",
    title: "Developer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "7",
    name: "Riya Srivastava",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "8",
    name: "Rishi B",
    title: "Developer",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "9",
    name: "Pratham Agarwal",
    title: "Dev Advisor",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "10",
    name: "Amogh Maheshwari",
    title: "Content Curator",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "11",
    name: "Toshika Shukla",
    title: "Content Curator",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "12",
    name: "Gokula Dutt",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "13",
    name: "Ojasvi Prabhat Dimri",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },
  {
    id: "14",
    name: "Pallavi",
    title: "Lead",
    gif: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
    pic: "https://drive.google.com/file/d/1l9MZckNszKGbE8YSq5e6f_YfmMt4RICG/view?usp=sharing",
    team: "core"
  },

]

export default function About() {
  return (
    <div>
      <Header />
      
      <Footer />
    </div>
  )
}