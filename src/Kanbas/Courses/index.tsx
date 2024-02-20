import React, { useState } from 'react';
import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useLocation } from 'react-router-dom';
import './index.css';

function Courses() {
    const [isNavVisible, setIsNavVisible] = useState(true); // Initially visible
    const toggleNav = () => setIsNavVisible(!isNavVisible); // Toggle function
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Calculate the start index to slice the array to get only the last two elements
    const startIndex = pathnames.length > 2 ? pathnames.length - 2 : 0;
    const lastTwoPathnames = pathnames.slice(startIndex);

  return (
    <div>
        <button className="hamburger" onClick={toggleNav}>
            <HiMiniBars3 /> {/* Assuming HiMiniBars3 is correctly imported */}
        </button>
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {lastTwoPathnames.map((name, index) => {
                // Adjust the index based on the new sliced array for proper routing
                const routeToIndex = startIndex + index + 1;
                const routeTo = `/${pathnames.slice(0, routeToIndex).join('/')}`;
                const isLast = index === lastTwoPathnames.length - 1;
                const classNames = `breadcrumb-item ${isLast ? 'wd-breadcrumb-header-active' : 'wd-breadcrumb-header'}`;

                return (
                    <li key={index} className={classNames}>

                    {isLast ? (
                        <>
                        {name}
                        <span className="visually-hidden"> (Current Page)</span>
                        </>
                    ) : (
                        <a href={routeTo}>{name}</a>
                    )}
                    </li>
                );
                })}
            </ol>
        </nav>
        <hr className="wd-custom-divider" />
    
        {isNavVisible && <CourseNavigation className={`course-navigation ${isNavVisible ? 'course-navigation-visible' : ''}`} />}
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;