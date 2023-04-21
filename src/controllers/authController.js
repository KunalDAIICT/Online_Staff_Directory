const jwt = require("jsonwebtoken");

module.exports = function(token, secret) {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
}


/* 

    How to use the verify tocken functinality!?

    const token = req.headers.authorization.split(' ')[1];
    const user = verifyToken(token, process.env.ACESS_TOKEN_SECRET);
    if (!user) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    // Use the user object here
    console.log(user.userId);


*/
<<<<<<< HEAD

//added new line
=======
>>>>>>> f086a4e541938cc4899db9f81b844a5565974abb
