import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
// Define an interface for the component props
interface CourseNavigationProps {
    className?: string; // The '?' makes the prop optional
  }
  
  function CourseNavigation({ className = "" }: CourseNavigationProps) {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "Zoom Meetings", "People", "Announcements","Files","Panapto Video","Pages","Syllabus","Discussions","Collaborations","Outcomes","Settings"];
  const { pathname } = useLocation();
  return (
    <ul className={`wd-navigation ${className}`}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;