import React from 'react'
import PropTypes from 'prop-types'

const EmployeeRow = ({id, firstName, lastName, post, showEmployeeInfo})=>(
  <tr className="employee-row" onClick={()=> showEmployeeInfo(id)}>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{post}</td>
  </tr>
);

EmployeeRow.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  showEmployeeInfo: PropTypes.func.isRequired
};

export default EmployeeRow

