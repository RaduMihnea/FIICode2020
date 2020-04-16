import {connect} from "react-redux";
import ProductsAdd from '../../Components/Products/ProductsAdd';

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdd)