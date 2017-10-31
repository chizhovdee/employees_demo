import {connect} from 'react-redux'
import {showPage} from '../actions'
import EmployeeInfo from '../components/EmployeeInfo'

const mapStateToProps = (state, ownProps)=> (
  {
    employee: state.employees.find((employee)=> employee.id == ownProps.employeeId)
  }
);

const mapDispatchToProps = (dispatch)=> (
  {
    shopPage(pageName){
      dispatch(showPage(pageName))
    }
  }
);

const Employee = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeInfo);

export default Employee