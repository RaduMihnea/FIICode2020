import {connect} from "react-redux";
import ProductsSingle from '../../Components/Products/ProductsSingle';

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSingle)