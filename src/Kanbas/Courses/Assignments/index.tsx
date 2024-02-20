import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="col col-sm-9">
      <div className="row">
        <div className="col col-sm-8">
          <input
            type="text"
            className="form-control w-50 inline"
            id="exampleFormControlInput1"
            placeholder="Search for Assignment"
          />
        </div>
        <div className="col col-sm-4">
          <div className="wd-course-action-buttons">
            <button type="button" className="btn btn-light float-end" style={{ margin: "0 0.25rem" }}>
              <FaEllipsisV style={{ fontSize: "1rem" }} className="green" />
            </button>
            <button type="button" className="btn btn-danger float-end wd-course-status-btn">
              <FaPlusCircle className="white" /> Assignment
            </button>
            <button className="btn btn-light float-end wd-course-status-btn" type="button">
              <FaPlusCircle /> Group
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <hr className="wd-custom-divider wd-margin-divider" style={{ marginTop: "10px" }} />
      </div>
      <div className="row">
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li key={assignment._id} className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
