const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401) // Use 401 for Unauthorized (missing token)
                  .json({ message: "Unauthorized, JWT token is required" });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from 'Bearer <token>'
    
    if (!token) {
        return res.status(401) // Unauthorized (missing token after 'Bearer')
                  .json({ message: "Unauthorized, JWT token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to the request
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(403) // Forbidden (token expired or invalid)
                  .json({ message: "Unauthorized, JWT token wrong or expired" });
    }
}

module.exports = ensureAuthenticated;
