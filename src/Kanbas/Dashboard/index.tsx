import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
      });
    
      const addNewCourse = () => {
        const newCourse = { ...course,
                            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
      };
      const deleteCourse = (courseId: string) => {
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
        <>
        <div className="d-none d-sm-block sticky-top wd-dashboard wd-dashboard-component"> 
                <h1>Dashboard</h1>
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


                <button onClick={addNewCourse} >
                    Add
                </button>
                <button onClick={updateCourse} >
                    Update
                </button>

                <hr/>
            </div>

            <div className="d-block d-sm-none wd-dashboard-component">
                <p className="wd-three-dot-menu"><FaEllipsisV /></p>
                <hr />
            </div>
            
            <div className="wd-dashboard-component">
                <h2>Published Courses ({courses.length})</h2> 
                <hr />
            </div>

            <div className="row wd-dashboard-component">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col wd-course-card-col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top wd-card-image" style={{ height: 150 }} alt="course card"/>
                                <div className="card-body">
                                    <Link className="card-title wd-card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                            <p className="wd-nowrap" style={{marginBottom: "2px"}}>{course.name}</p>
                                    </Link>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                    </button>
                                    <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                    </button>
                                    <p className="card-text wd-nowrap" style={{marginBottom: "2px"}}>{course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn" style={{fontSize: "25px", border: "0", padding: "0"}}><FaRegEdit /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </>
  );
}
export default Dashboard;