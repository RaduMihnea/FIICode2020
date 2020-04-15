import {connect} from "react-redux";
import ConfirmOrders from "../../Components/Cart/ConfirmOrders";



const mapStateToProps = (state) => {
    return {
      user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrders)