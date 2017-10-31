import React from 'react'
import Employees from '../containers/Employees';

class EmployeesListPage extends React.Component {
  constructor(){
    super();

    this.state = {

    }
  }

  onEmployeeAdd = ()=> {
    console.log('click');
  };

  render(){
    return (
      <div>
        <h2>Список сотрудников</h2>

        <div className="controls">
          <button className="button-add" onClick={this.onEmployeeAdd}>Добавить</button>
        </div>

        <Employees/>
      </div>
    );
  }
}

export default EmployeesListPage