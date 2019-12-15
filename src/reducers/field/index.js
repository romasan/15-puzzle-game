import { GEN_FIELD } from './types';

const reducers = {
    [GEN_FIELD]: (state = {}, action) => ({
        ...state,
        field: [1, 2, 3],
        history: []
    }),
}

const fields = (state = {}, action) => {
    return reducers[action.type] ? reducers[action.type](state, action) : state;
}

export default fields;