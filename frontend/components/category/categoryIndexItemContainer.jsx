import { connect } from "react-redux";
import CategoryIndexItem from "./categoryIndexItem";

import { createCategory } from '../../actions/category_actions'

const mSTP = state => {
   return {
    }
}

const mDTP = dispatch => (
    {
    }
)

export default connect(mSTP, mDTP)(CategoryIndexItem)