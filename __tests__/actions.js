import * as actions from '../src/actions'

describe('actions', ()=>{
  it('should create an action to add an employee', ()=>{
    const employeeData = {
      firstName: 'firstName',
      lastName: 'lastName',
      post: 'post',
      description: 'description'
    };

    const expectedAction = {
      type: actions.ADD_EMPLOYEE,
      employeeData
    };

    let result = actions.addEmployee(employeeData);

    expectedAction.id = result.id; // set id from result, because it is random  generated

    expect(result).toEqual(expectedAction);
  });

  it('should create an action to edit an employee', ()=>{
    const employee = {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      post: 'post',
      description: 'description'
    };

    const expectedAction = {
      type: actions.EDIT_EMPLOYEE,
      employeeId: employee.id,
      employeeData: employee
    };

    expect(actions.editEmployee(employee.id, employee)).toEqual(expectedAction);
  });

  it('should create an action to show page', ()=>{
    const expectedAction = {
      type: actions.SHOW_PAGE,
      pageName: 'employee_info',
      pageData: {id: 1}
    };

    expect(actions.showPage('employee_info', {id: 1})).toEqual(expectedAction)
  });
});