import { connect } from 'react-redux';
import SideBar from './sidebar';
import { Route, Link } from 'react-router-dom';

const mapStateToProps = ({ session, playlist }) => ({
  session,
  playlist,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
