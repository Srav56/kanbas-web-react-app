import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

const AssignmentEditor: React.FC = () => {
  const { assignmentId, courseId } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="col col-sm-9">
      
      <div className="row container">
        <div className="col col-sm-12">
          <div className="wd-course-action-buttons">
            <button type="button" className="btn btn-light float-end" style={{ margin: '0 0.25rem' }}>
              <i style={{ fontSize: '1rem' }} className="fa-solid fa-ellipsis-vertical green"></i>
            </button>
            <button type="button" className="btn btn-outline-light float-end wd-course-status-btn">
              <i className="fa-solid fa-check-circle" style={{ color: 'green' }}></i>
              <span style={{ color: 'green' }}>Publish All</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <hr className="wd-custom-divider wd-margin-divider" style={{ marginTop: '10px' }} />
      </div>
      <div className="row container-fluid">
        <div className="mb-3 p-1">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{ paddingLeft: '5px' }}>Assignment Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={assignment?.title} />
        </div>
        <div className="mb-3 p-1">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}>Assignment Description</textarea>
        </div>
      </div>
      <div className="row container-fluid mb-3 p-1">
        <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}>
          <label htmlFor="points">Points</label>
        </div>
        <div className="col col-sm-7">
          <div className="col-sm-10 ml-0">
            <input id="points" type="text" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row container-fluid mb-3 p-1">
        <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}>
          <div className="form-row">
            <label htmlFor="assignment-group" className="col-form-label">Assignment Group</label>
          </div>
        </div>
        <div className="col col-sm-7">
          <div className="col-sm-10 ml-0">
            <select id="assignment-group" className="wd-form-select-style" aria-label="Default select example">
            <option selected={true}>ASSIGNMENTS</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row container-fluid mb-3 p-1">
        <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}>
            <div className="form-row">
            <label htmlFor="assignment-group" className="col-form-label">Display Grade as</label>
            </div>
        </div>
        <div className="col col-sm-7">
            <div className="col-sm-10 ml-0">
            <select id="grade-group" className="wd-form-select-style" aria-label="Default select example">
                <option selected={true}>Percentage</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
        </div>
    </div>
<div className="row container-fluid mb-3 p-1">
  <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}></div>
  <div className="col col-sm-7">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Do not count this assignment towards the final grade
    </label>
  </div>
</div>
<div className="row container-fluid mb-3 p-1">
  <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}>
    <label htmlFor="submission-type">Submission Type</label>
  </div>
  <div className="col col-sm-7">
    <div className="wd-box-submission-type" style={{ border: '1px solid darkgrey', width: 'inherit', height: 'auto', padding: '20px' }}>
      <div className="row">
        <div className="col col-sm-7 mb-3 pb-1">
          <select id="submission-type" className="form-select" aria-label="Default select example">
            <option selected={true}>Online</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-7">
          <p className="wd-custom-text"><strong>Online Entry Options</strong></p>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={true} />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              Text Entry
            </label>
          </div>                                      
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked={true} />
      <label className="form-check-label" htmlFor="flexCheckChecked1">
        Website Url
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2"  />
      <label className="form-check-label" htmlFor="flexCheckChecked2">
        Media Recordings
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
      <label className="form-check-label" htmlFor="flexCheckChecked3">
        Student Annotation
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={true}/>
      <label className="form-check-label" htmlFor="flexCheckChecked">
        File Uploads
      </label>
    </div>
  </div>
</div>
</div>
</div>
<div className="row container-fluid mb-3 p-1">
  <div className="col col-sm-3" style={{ textAlign: 'right', marginRight: '0.1rem' }}>
    <label htmlFor="Assign">Assign</label>
  </div>
  <div className="col col-sm-7">
    <div className="wd-box-submission-type" style={{ border: '1px solid darkgrey', width: 'inherit', height: 'auto', padding: '20px' }}>
      <div className="row mb-3 pb-1">
        <div className="wd" style={{ border: '0.1rem solid rgb(230, 229, 229)', width: '45vh', padding: '10px' }}>
          <button id="Assign" type="button" className="btn btn-light wd-custom-button-width">Everyone &times;</button>
        </div>
      </div>
      <div className="row mb-3 pb-1">
        <label htmlFor="due" className="">Due</label>
        <input id="due" className="form-control" type="date" defaultValue="2023-09-18" />
      </div>
      <div className="row mb-3 pb-1">
        <div className="col col-sm-6">
          <label htmlFor="af" className="">Available From</label>
          <input className="form-control" id="af" type="date" defaultValue="2023-09-18" />
        </div>
        <div className="col col-sm-6">
          <label htmlFor="unt" className="">Until</label>
          <input className="form-control" id="unt" type="date" defaultValue="2023-09-18" />
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-plus"></i>Add</button>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <hr className="wd-custom-divider" />
</div>
<div className="row container-fluid">
  <div className="col col-sm-3"></div>
  <div className="col col-sm-7">
    <input className="form-check-input" type="checkbox" id="flexCheckDefault5" />
    <label className="form-check-label" htmlFor="flexCheckDefault5">
      Notify users that this content has been changed
    </label>
  </div>
</div>
<div className="row container">
  <div className="col col-sm-12">
    <div className="wd-course-action-buttons">
    <button onClick={handleSave} className="btn btn-success ms-2 float-end">
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
            Cancel
          </Link>
    </div>
  </div>
</div>
</div>
</div>
  );
};

export default AssignmentEditor;
