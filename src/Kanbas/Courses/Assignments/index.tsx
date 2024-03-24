import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import { TbFilePencil } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./reducer";        // Import reducer functions to add, delete, and update assignments.
import { AssignmentType, KanbasState } from "../../store";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);  // Retrieve current state variables modules and module from reducer.
  const [toBeDeleted, setToBeDeleted] = useState<AssignmentType | undefined>();
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const [show, setShow] = useState(false);

    function handleCloseYes(assignment: AssignmentType  | undefined) {
        console.log("In handleCloseYes");
        console.log("assignment being deleted = " + JSON.stringify(assignment));
        dispatch(deleteAssignment(assignment?._id));
        setShow(false);
    }

    function handleCloseNo() {
        console.log("In handleCloseNo");
        setShow(false);
    }

    function handleShow(assignment: AssignmentType) {
        setToBeDeleted(assignment);
        console.log(toBeDeleted);
        console.log("In handleShow");
        setShow(true);
    };
  
    function handleAddAssign() {
        console.log("In handleAddAssign");
        navigate(`/Kanbas/Courses/${courseId}/Assignments/Editor`);
    }
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
            <button type="button" className="btn btn-danger float-end wd-course-status-btn" onClick={handleAddAssign}>
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
              {assignmentList.filter((assignment) => assignment.course === courseId).map((assignment) => (
                <li key={assignment._id} className="list-group-item" onClick={() => setAssignment(assignment)} draggable="true">
                  <FaEllipsisV className="me-2" />
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}<br/>
                    <span style={{fontSize: "12px", paddingLeft: "48px"}}>{assignment.subtitle}  Module |</span><br/>
                    <span style={{fontSize: "12px", paddingLeft: "48px"}}><b>Due Date: </b>{assignment.dueDate} | <b>Assignment Points: </b> {assignment.points} pts</span>
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                    <button className="btn btn-danger me-1" style={{borderRadius: "6px"}} onClick={() => handleShow(assignment)}>Delete Assignment</button> {/* Wrap reducer functions with dispatch. */}

                    <Modal show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => handleCloseNo()}>
                        <Modal.Header closeButton>
                            Deleting an Assignment
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure that you want to delete assignment: {toBeDeleted?.title}?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleCloseNo()}>
                                No
                            </Button>
                            <Button variant="primary" onClick={() => handleCloseYes(toBeDeleted)}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
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
