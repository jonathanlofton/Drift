import { connect } from 'react-redux';
import SideBar from './sidebar';

const mapStateToProps = ({ session, playlist }) => ({
  session,
  playlist,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
