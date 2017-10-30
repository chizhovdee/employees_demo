import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

const mapStateToProps = (state)=> (
  {
    pageName: state.page.pageName,
    pageData: state.page.pageData
  }
);

const PageContainer = ({pageName, pageData})=> (
  <div className={ classNames("page", pageName) }>
    <h2>{ pageName }</h2>
    <code>{ JSON.stringify(pageData) }</code>
  </div>
);

const Page = connect(
  mapStateToProps
)(PageContainer);

export default Page;
