import React from 'react'
import PropTypes from 'prop-types'

const Employee = ({employee, showEmployeeInfo})=>(
  <tr key={employee.id} onClick={()=> showEmployeeInfo(employee.id)}>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.post}</td>
  </tr>
);

Employee.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  description: PropTypes.string,
  showEmployeeInfo: PropTypes.func.isRequired
};

export default Employee

