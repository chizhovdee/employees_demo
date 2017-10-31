import React from 'react'
import Employees from '../containers/Employees';
import EmployeeManage from '../containers/EmployeeManage'
import '../../stylesheets/EmployeesListPage.scss'

class EmployeesListPage extends React.Component {
  constructor(){
    super();

    this.state = {
      showEmployeeAddModal: false
    }
  }

  onEmployeeAddHandle = (e)=> {
    if(this.state.showEmployeeAddModal) return;

    this.setState({showEmployeeAddModal: true});
  };

  employeeAddModalClose = ()=> {
    this.setState({showEmployeeAddModal: false});
  };

  render(){
    return (
      <div className="employees-list-page">
        <h2>Список сотрудников</h2>

        <div className="controls">
          <button className="button-add" onClick={this.onEmployeeAddHandle}>Добавить</button>
        </div>

        <Employees/>

        {
          this.state.showEmployeeAddModal ?
            <EmployeeManage handleClose={this.employeeAddModalClose} />
            : null
        }
      </div>
    );
  }
}

export default EmployeesListPage