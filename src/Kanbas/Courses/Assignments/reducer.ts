import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Title", subtitle: "New Subtitle", description: "New Assignment Description", dueDate: "2024-09-19", 
  availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100" } ,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
        state.assignments = [                       // Update assignments in state adding new assignment at beginning of array. Update assignments.
        { ...action.payload, _id: new Date().getTime().toString() },        // Override _id with timestamp.
        ...state.assignments,
        ];
        state.assignment = { title: "New Title", subtitle: "New Subtitle", description: "New Assignment Description", dueDate: "2024-09-19", 
                            availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100" };
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
