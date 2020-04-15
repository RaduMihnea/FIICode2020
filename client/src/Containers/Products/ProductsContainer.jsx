import { addToCart } from '../../Actions/Cart/cartActions';
import {connect} from "react-redux";
import Products from '../../Components/Products/Products';

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)