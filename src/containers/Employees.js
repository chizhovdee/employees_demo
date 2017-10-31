import {connect} from 'react-redux'
import {showPage} from '../actions'
import EmployeesList from '../components/EmployeesList';

const mapStateToProps = (state)=>(
  {
    employees: state.employees
  }
);

const mapDispatchToProps = (dispatch)=>(
  {
    showEmployeeInfo(id){
      dispatch(showPage('employee_info', {id}))
    }
  }
);

const Employees = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);

export default Employees