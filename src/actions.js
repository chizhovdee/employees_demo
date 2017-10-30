export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const SHOW_PAGE = 'SHOW_PAGE';

export const addEmployee = (employeeData = {}) => (
  {
    type: ADD_EMPLOYEE,
    id: Math.ceil(Math.random() * 10000000),
    employeeData
  }
);

export const editEmployee = (employeeId, employeeData = {})=> (
  {type: EDIT_EMPLOYEE, employeeId, employeeData}
);

export const showPage = (pageName, pageData = {})=> (
  {type: SHOW_PAGE, pageName, pageData}
);
