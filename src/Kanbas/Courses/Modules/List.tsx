import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { LessonType } from "../../Util";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);


  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules" style={{marginTop: "6px"}}>
      
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="btn btn-danger mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                
              </span>
              
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: LessonType) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li style={{borderRadius: "6px", marginTop: "25px"}} className="list-group-item">
        
        <input id="modName" className="m-2 p-2" style={{borderRadius: "6px", width: "40vw"}} value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="form-control m-2 p-2" style={{width: "40vw", borderRadius: "6px"}} value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <button type="button" className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button type="button" className="btn btn-custom-red mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
      </li>
      </ul>
    </>
  );
}
export default ModuleList;
