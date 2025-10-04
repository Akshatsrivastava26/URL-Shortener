const jwt = require('jsonwebtoken');
const secret = "Akshat$123@$";

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, 
    secret
);
}

function getUser(token){
    if(!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (err) {
        console.error("JWT Error:", err.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};