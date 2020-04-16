import Profile from "../Components/Profile";
import {connect} from "react-redux";
import {userLogin} from '../Actions/Auth/authActions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (user) => {
            dispatch(userLogin(user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)