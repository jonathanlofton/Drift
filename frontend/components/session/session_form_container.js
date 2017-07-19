import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {

  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: user => dispatch(login(user)),
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);
