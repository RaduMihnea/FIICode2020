import {connect} from "react-redux";
import {addQuantity, subtractQuantity, removeItem} from '../../Actions/Cart/cartActions';
import Cart from "../../Components/Cart/Cart";


const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => {
            dispatch(removeItem(item))
        },
        addQuantity: (item) => {
            dispatch(addQuantity(item))
        },
        subtractQuantity: (item) => {
            dispatch(subtractQuantity(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)