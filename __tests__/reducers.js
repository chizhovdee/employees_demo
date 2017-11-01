import * as actions from '../src/actions'
import {employees, page} from '../src/store/reducers'

describe('employees reducers', ()=>{
  it('should return initial state', ()=>{
    expect(employees(undefined, {})).toEqual([])
  });

  it('should handle ADD_EMPLOYEE', ()=>{
    let result, newEmployeeId;

    const state = [];
    const newEmployee = {
      firstName: 'firstName',
      lastName: 'lastName',
      post: 'post',
      description: 'description'
    };

    // add first employee
    result = employees(state, actions.addEmployee(newEmployee));
    newEmployeeId = result[0].id; // set id from result, because it is random  generated
    state.push({id: newEmployeeId, ...newEmployee});

    expect(result).toEqual(state);

    // add second employee
    result = employees(state, actions.addEmployee(newEmployee));
    newEmployeeId = result[1].id;
    state.push({id: newEmployeeId, ...newEmployee});

    expect(result).toEqual(state);
  });

  it('should handle EDIT_EMPLOYEE', ()=>{
    const state = [
      {
        id: 1,
        firstName: 'firstName',
        lastName: 'lastName',
        post: 'post',
        description: 'description'
      },
      {
        id: 2,
        firstName: 'firstName 2',
        lastName: 'lastName 2',
        post: 'post 2',
        description: 'description 2'
      }
    ];

    let result = employees(state, actions.editEmployee(2, {post: 'post 3'}));

    state[1].post = 'post 3';

    expect(result).toEqual(state);
  });
});

describe('page reducers', ()=>{
  it('should return initial state', ()=>{
    expect(page(undefined, {})).toEqual({pageName: 'employees_list', pageData: {}})
  });

  it('should handle SHOW_PAGE', ()=>{
    expect(
      page({pageName: 'employees_list', pageData: {}}, actions.showPage('employee_info', {id: 1}))
    ).toEqual({pageName: 'employee_info', pageData: {id: 1}})
  });
});