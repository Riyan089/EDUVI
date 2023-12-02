import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
      <h1>Homepage</h1>
     
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/jointeacher">JoinTeacher</Link>
        </li>
        <li>
        <Link to="/coursedetails">CourseDetails</Link>
        </li>
        <li>
          <Link to="/allmentors">Allmentors</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
