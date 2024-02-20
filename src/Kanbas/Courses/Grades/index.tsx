import { assignments, enrollments, grades, users } from "../../Database";
import "./index.css";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const filteredAssignments = assignments.filter(assignment => assignment.course === courseId);
  const filteredEnrollments = enrollments.filter(enrollment => enrollment.course === courseId);

  return (
    <div>
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
              const user = users.find(user => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {filteredAssignments.map(assignment => {
                    const grade = grades.find(grade =>
                      grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id + enrollment.user}>
                        {grade?.grade || ""}
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

