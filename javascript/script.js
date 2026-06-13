let projectTitle = document.querySelector("#project-title");
let projectDescription = document.querySelector("#project-description");
let projectDate = document.querySelector("#project-date");
let projectTech = document.querySelector("#project-tech");
let projectImage = document.querySelector("#project-img");
const forwardButton = document.querySelector("#next");
const backButton = document.querySelector("#previous");

const projects = [
  {
    title: "TechnicianOS",
    description:
      "A REST API backend written in Javascript for managing the tasks required of any technical implementation work.",
    date: "February 2026",
    tech: "Node.JS, Express, SQLite, PrismaORM",
    image: "../images/TechnicianOS-Mockup.png",
  },
  {
    title: "Jobster API",
    description:
      "Node/Express + MongoDB backend for the Jobster React app, with JWT auth, job CRUD/stats endpoints, security middleware, rate-limited auth routes, and static serving of the prebuilt client.",
    date: "December 2025",
    tech: "Node.js, Express, MongoDB, Mongoose",
    image: "../images/jobsterapi.png",
  },
  {
    title: "BandOS",
    description:
      "BandOS is a band management application I built to help bands and band leaders organize their gigs and rehearsals. Current band communication is broken. Band leaders send out communication on a variety of different apps (Email, Whatsapp, Messenger), store sheet music on Dropbox, and there is no way to centralize a calendar for everyone to know exactly what's going on at all times. I've lived this painpoint first hand on numerous occasions, when a band leader forgot to update me on the change of date for a gig, or music got changed last minute and the message was sent on an app I didn't check. I wanted to build BandOS to help centralize communication for bands so that everyone knows they have a central source of truth for all gig and reheasal information, BandOS.",
    date: "April 2025",
    tech: "HTML/CSS, React, Firebase",
    image: "../images/bandos.png",
  },
  {
    title: "Distributed Weather Station",
    description:
      "This project demonstrates a distributed sensor network using two ESP32 microcontrollers and a DHT11 temperature and humidity sensor. The system includes a Sensor Node that collects environmental data and sends it to a Base Station via Wi-Fi. The Base Station hosts a web server to display the received data in real-time.",
    date: "December 2024",
    tech: "C++, ESP32 Microcontroller, DHT11 Sensor",
    image: "../images/weather_station.jpg",
  },
];

let index = 0;

projectTitle.textContent = projects[index].title;
projectDescription.textContent = projects[index].description;
projectDate.textContent = projects[index].date;
projectTech.textContent = projects[index].tech;
projectImage.src = projects[index].image;

forwardButton.addEventListener("click", () => {
  ++index;

  if (index == projects.length) {
    index = 0;
  }

  projectTitle.textContent = projects[index].title;
  projectDescription.textContent = projects[index].description;
  projectDate.textContent = projects[index].date;
  projectTech.textContent = projects[index].tech;
  projectImage.src = projects[index].image;
});

backButton.addEventListener("click", () => {
  --index;

  if (index < 0) {
    index = projects.length - 1;
  }

  projectTitle.textContent = projects[index].title;
  projectDescription.textContent = projects[index].description;
  projectDate.textContent = projects[index].date;
  projectTech.textContent = projects[index].tech;
  projectImage.src = projects[index].image;
});
