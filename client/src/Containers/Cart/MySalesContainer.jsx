import {connect} from "react-redux";
import MySales from "../../Components/Cart/MySales";



const mapStateToProps = (state) => {
    return {
      user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySales)