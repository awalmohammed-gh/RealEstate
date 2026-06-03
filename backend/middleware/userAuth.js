import JWT from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded?.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    req.userId = decoded?.id;
    next();
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
