import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Allmentors = React.lazy(() => import("pages/Allmentors"));
const JoinTeacher = React.lazy(() => import("pages/JoinTeacher"));
const CourseDetails = React.lazy(() => import("pages/CourseDetails"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const AllCourses = React.lazy(() => import("pages/AllCourses"));
const Shop = React.lazy(() => import("pages/Shop"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jointeacher" element={<JoinTeacher />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/allmentors" element={<Allmentors />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/Shop" element={<Shop />} />



        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
