import {connect} from "react-redux";
import {userLogout} from '../../Actions/Auth/authActions';
import Logout from "../../Components/Auth/Logout";
import {emptyCart} from '../../Actions/Cart/cartActions';

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            dispatch(userLogout())
        },
        emptyCart:()=>{
            dispatch(emptyCart())
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)