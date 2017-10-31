import {connect} from 'react-redux'
import {addEmployee} from '../actions'
import EmployeeManageModal from '../components/EmployeeManageModal'

const mapDispatchToProps = (dispatch)=> (
  {
    onEmployeeAdd(employeeData){
      dispatch(addEmployee(employeeData))
    }
  }
);

const EmployeeManage = connect(
  null,
  mapDispatchToProps
)(EmployeeManageModal);

export default EmployeeManage