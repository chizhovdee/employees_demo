import React from 'react'
import PropTypes from 'prop-types'
import Employee from '../containers/Employee'

const EmployeeInfoPage = ({pageData})=> (
  <div>
    <Employee employeeId={pageData.id}/>
  </div>
);

EmployeeInfoPage.propTypes = {
  pageData: PropTypes.object.isRequired
};

export default EmployeeInfoPage