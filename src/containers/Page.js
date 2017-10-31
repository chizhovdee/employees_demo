import {connect} from 'react-redux'
import PageWrapper from '../components/PageWrapper'

const mapStateToProps = (state)=> (
  {
    pageName: state.page.pageName,
    pageData: state.page.pageData
  }
);

const Page = connect(
  mapStateToProps
)(PageWrapper);

export default Page;
