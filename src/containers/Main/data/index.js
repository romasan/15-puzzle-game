import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { genField } from "@reducers/field/actions";

const data = connect(
    ({ field }) => ({
        field: field.field || [],
        // history: field.history,
    }),
    dispatch => ({
        genField: bindActionCreators(genField, dispatch),
        // handMove: bindActionCreators(handMove, dispatch),
    }),
);

export default data;