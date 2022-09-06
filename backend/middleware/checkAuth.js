
const checkAuth = (req, res, next) => {
    console.log("Desde checkauth")

    next()
}

export default checkAuth;