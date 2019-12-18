import * as types from './types';

export const addNewStatusMessage = (textOfStatus) => {
    return {
        type: types.ADD_NEXT,
        status: textOfStatus
    };
};