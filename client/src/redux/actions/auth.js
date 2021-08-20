const signIn = (data) => {
    const { userId, email, token, authLevel } = data;
    return{
        type: 'SIGN_IN',
        payload: {
            authLevel,
            token,
            userId,
            email,
        }
    };
};
const signOut = () => {
    return{
        type: 'SIGN_OUT',
        payload: {
            authLevel: '',
            token: '',
            userId: '',
            email: '',
        }
    };
};