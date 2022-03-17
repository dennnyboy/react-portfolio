import React from "react";
import Project from "./Project";
import logo from '../../components/images/github.png'
import '../utils/index.css'
const projects = [
  {
    id: "m1",
    title: "Budget Tracker",
    image: logo,
    description: "This app allows a user to add or subract their income from a corresponding graph and table. This allows for easy calculations with and without internet connection.",
    url:"https://github.com/dennnyboy/budget-tracker"
  },
  {
    id: "m2",
    title: "Read Me Generator",
    image: logo,
    description: "This project allows you to create readme's with ease. Thus allowing you to spend more time focusing on building you application and not worrying about readme files.",
    url:"https://github.com/dennnyboy/readMe-Creator"
  },
  {
    id: "m3",
    title: "Networking API",
    image: logo,
    description: "This project uses Mongodb and allows you to GET, PUT, DELETE, and POST data into the database. This project also impliments express.js and the mongoose package.",
    url:"https://github.com/dennnyboy/Networking-API"
  },
  {
    id: "m4",
    title: "Event Finder",
    image: logo,
    description: "This application allows a user to search based off their zipcode location, and then presents the users with a list of events happening in the zipcode searched. A user can also save events in their favorites to view later.",
    url:"https://github.com/ivydo/Event-Finder"
  },
  {
    id: "m5",
    title: "CRM LITE",
    image: logo,
    description: "This is a simple CRM meant for use by small businesses and sole proprietors that need a simple app to keep track of customers and potential customers.",
    url:"https://github.com/mollyrendon/crm-lite"
  },
  {
    id: "m6",
    title: "GYM CRM",
    image: logo,
    description: "This project allows Gym owners to easily track and maintain customer and employee databases through our CRM tool.",
    url:"https://github.com/coleleg/gym-crm"
  },
];

function MyworkPage() {
  return (
    <section>
       <h1>My Work</h1>
       <p>Click one each Github icon to view the Repository. </p>
       <hr />

      <Project projects={projects} />
      
    </section>
    
  );
}

export default MyworkPage;
