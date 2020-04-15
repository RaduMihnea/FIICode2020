import {connect} from "react-redux";
import Receipt from "../../Components/Cart/Receipt";



const mapStateToProps = (state) => {
    return {
        total: state.cart.total,
        user: state.auth.user,
        items: state.cart.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt)