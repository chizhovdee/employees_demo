import * as actions from '../actions';

export const employees = (state = [], action)=> {
  switch (action.type) {
    case actions.ADD_EMPLOYEE:
      return [
        ...state,
        {
          id: action.id,
          ...action.employeeData
        }
      ];

    case actions.EDIT_EMPLOYEE:
      return state.map((employee)=>{
        if(employee.id === action.employeeId){
          return {...employee, ...action.employeeData}
        }

        return employee;
      });

    default:
      return state;
  }
};

export const page = (state = {pageName: 'employees_list', pageData: {}}, action)=> {
  switch (action.type){
    case actions.SHOW_PAGE:
      return {pageName: action.pageName, pageData: action.pageData};
    default:
      return state;
  }
};