import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
      setCourses([...courses, { ...course, _id: new Date().getTime().toString(), "image": "reactjs.jpg" }]);
    };
    const deleteCourse = (courseId: any) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  
    return (
      <Provider store={store}>
        <div className="container-fluid wd-main-container">
        <div className="row wd-main-row">
            {/* Column 1a: Kanbas Navigation. Hide on screen smaller than medium. */}
            <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-none d-md-block" style={{marginLeft:'0px',paddingLeft:'0px'}}>
                <KanbasNavigation/>
            </div>

            {/* Column 2a: Rest of screen. */}
            <div className="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-main-content" style={{marginLeft:'0px',paddingLeft:'0px'}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                    } />
                    <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Studio" element={<h1>Studio</h1>} />
                    <Route path="Commons" element={<h1>Commons</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />
                </Routes>
            </div>
        </div>
    </div> 
    </Provider>
  );}
export default Kanbas;
