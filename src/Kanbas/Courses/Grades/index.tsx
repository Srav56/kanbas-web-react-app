import db from "../../Database";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaFileExport, FaFileImport, FaGear, FaMagnifyingGlass } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { CiFilter } from "react-icons/ci";

function Grades() {
    const { courseId } = useParams();
    const filteredAssignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const filteredEnrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);


  return (
    <div>
        <button type="button" className="wd-float-right btn btn-light btn-outline-dark mt-1"><FaGear /></button>
            <button type="button" className="wd-float-right btn btn-light btn-outline-dark me-2 mt-1"><FaFileImport /> Export</button>
            <button type="button" className="wd-float-right btn btn-light btn-outline-dark me-2 mt-1"><FaFileExport /> Import</button>
            <div className="wd-float-done"></div>

            <div className="row">
                <div className="col-sm">
                    <label htmlFor="studentList" className="form-label">Student Names</label>
                    <div className="input-group">
                        <div className="input-group-text"><FaMagnifyingGlass /></div>
                        <input type="text" className="form-control wd-search-dropdown" id="studentList" list="studentListOptions" placeholder="Search Students"/>
                        <div className="input-group-text wd-dropdown-angle"><SlArrowDown /></div>
                    </div>
                    <datalist id="studentListOptions">
                        {filteredEnrollments.map((enrollment, x) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return(
                                <option key={x}>{user?.firstName} {user?.lastName}</option>
                            );
                        })}
                    </datalist>
                </div>
                <div className="col-sm">
                    <label htmlFor="assignmentList" className="form-label">Assignment Names</label>
                    <div className="input-group">
                        <div className="input-group-text"><FaMagnifyingGlass /></div>
                        <input type="text" className="form-control wd-search-dropdown" id="assignmentList" list="assignmentListOptions" placeholder="Search Assignments"/>
                        <div className="input-group-text wd-dropdown-angle"><SlArrowDown /></div>
                    </div>
                    <datalist id="assignmentListOptions">
                        {filteredAssignments.map((homework) => {
                            return(
                                <option key={homework._id}>
                                    {homework.title}
                                </option>
                            );
                        })}
                    </datalist>
                </div>
            </div>

            <button className="btn btn-light btn-outline-dark mt-3 mb-3"><CiFilter /> Apply Filters</button>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              {filteredAssignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEnrollments.map(enrollment => {
              const user = db.users.find(user => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {filteredAssignments.map((assignment, index) => {
                                        const grade = db.grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return(
                                            <td key={index} className="wd-table-cell">
                                                <input className="wd-table-cell" defaultValue={grade?.grade} size={4} type="number" min="0" max="100" step=".01"/>
                                            </td>
                                        );
                                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;

