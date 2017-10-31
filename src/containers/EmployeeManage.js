import {connect} from 'react-redux'
import {addEmployee, editEmployee} from '../actions'
import EmployeeManageModal from '../components/EmployeeManageModal'

const mapDispatchToProps = (dispatch)=> (
  {
    onEmployeeAdd(employeeData){
      dispatch(addEmployee(employeeData))
    },

    onEmployeeEdit(id, employeeData){
      dispatch(editEmployee(id, employeeData))
    }
  }
);

const EmployeeManage = connect(
  null,
  mapDispatchToProps
)(EmployeeManageModal);

export default EmployeeManage