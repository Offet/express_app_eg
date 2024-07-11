export const checkUserSession = async (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        return res.status(401).json("No user session!");
    }
};