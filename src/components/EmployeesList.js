import React from 'react'
import PropTypes from 'prop-types'
import EmployeeRow from './EmployeeRow'

const EmployeesList = ({employees, showEmployeeInfo})=> (
  <table className="employees-list">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Должность</th>
      </tr>
    </thead>

    <tbody>
      {
        employees.map((employee) => <EmployeeRow key={employee.id} {...employee} showEmployeeInfo={showEmployeeInfo}/>)
      }
    </tbody>
  </table>
);

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      post: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  ).isRequired,
  showEmployeeInfo: PropTypes.func.isRequired
};

export default EmployeesList