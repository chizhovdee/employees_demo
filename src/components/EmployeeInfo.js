import React from 'react'
import PropTypes from 'prop-types'
import EmployeeManage from '../containers/EmployeeManage'

class EmployeeInfo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showEmployeeEditModal: false
    }
  }

  onEmployeeEditHandle = (e)=> {
    if(this.state.showEmployeeEditModal) return;

    this.setState({showEmployeeEditModal: true});
  };

  employeeEditModalClose = ()=> {
    this.setState({showEmployeeEditModal: false});
  };

  render(){
    return (
      <div>
        <h2>Сотрудник {this.props.employee.firstName} {this.props.employee.lastName}</h2>

        <div className="controls">
          <button className="button-list" onClick={()=> this.props.shopPage('employees_list')}>К списку</button>

          <button className="button-edit" onClick={this.onEmployeeEditHandle}>Редактировать</button>
        </div>

        <div className="info">
          <div className="attribute">
            <strong>Имя: </strong> <span>{ this.props.employee.firstName }</span>
          </div>

          <div className="attribute">
            <strong>Фамилия: </strong> <span>{ this.props.employee.lastName }</span>
          </div>

          <div className="attribute">
            <strong>Должность: </strong> <span>{ this.props.employee.post }</span>
          </div>


          <div className="attribute">
            <strong>Описание: </strong> <span>{ this.props.employee.description }</span>
          </div>
        </div>

        {
          this.state.showEmployeeEditModal ?
            <EmployeeManage mode="edit" employee={this.props.employee} handleClose={this.employeeEditModalClose} />
            : null
        }
      </div>
    );
  }
}

EmployeeInfo.propTypes = {
  shopPage: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired
};

export default EmployeeInfo