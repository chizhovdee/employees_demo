import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import EmployeesListPage from '../components/EmployeesListPage'
import EmployeeInfoPage from '../components/EmployeeInfoPage'
import '../../stylesheets/Page.scss'

const PageWrapper = ({pageName, pageData})=> {
  let page;

  switch(pageName) {
    case 'employees_list':
      page = <EmployeesListPage />;
      break;

    case 'employee_info':
      page = <EmployeeInfoPage pageData={pageData}/>;
      break;

    default:
      page = null;
  }

  return <div className={classNames("page", `${pageName}-page`)}>
    {page}
  </div>
};

PageWrapper.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageData: PropTypes.object
};

export default PageWrapper