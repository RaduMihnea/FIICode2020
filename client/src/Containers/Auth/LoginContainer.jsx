import {connect} from "react-redux";
import {userLogin} from '../../Actions/Auth/authActions';
import Login from "../../Components/Auth/Login";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (user) => {
            dispatch(userLogin(user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)