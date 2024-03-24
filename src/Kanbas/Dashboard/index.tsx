import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }){
  
    return (
        <>
        <div className="d-none d-sm-block sticky-top wd-dashboard wd-dashboard-component" style={{backgroundColor: "white", opacity: 1}}> 
                <h1>Dashboard</h1>
                <h5>Course</h5>
                
                <hr/>
            </div>

            <div className="wd-dashboard-component" style={{marginBottom: "45px"}}>
                <input style={{margin:"5px", marginLeft: "0px"}} value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input style={{margin:"5px", marginLeft: "0px"}} value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input style={{margin:"5px", marginLeft: "0px"}} value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input style={{margin:"5px", marginLeft: "0px"}} value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />



                <button className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={updateCourse} >
                    Update
                </button>
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
                                    <button className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                    </button>
                                    <button className="btn btn-danger mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={(event) => {
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