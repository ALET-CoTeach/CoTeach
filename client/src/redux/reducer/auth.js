let lastId = 0;


const authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			const { userId, email, token, authLevel } = action.payload;
			return {
				...state,
				id: ++lastId,
				email,
				userId,
				token,
				authLevel,
			}

		case 'SIGN_OUT':
			const { userId, email, token, authLevel } = action.payload;
			return {
				...state,
				id: ++lastId,
				email,
				userId,
				token,
				authLevel,
			}
			default:
				return state;
	}
}