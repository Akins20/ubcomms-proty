const Signout = async() => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
    return
}

export default Signout