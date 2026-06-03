import validator from "validator";
import { Users } from "../model/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//function to register account
export const userRegisterAccount = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // check fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email",
      });
    }

    // check if user exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // password length check
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new Users({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // create token
    const token = JWT.sign(
      {
        id: newUser._id,
        role: "user",
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating account",
    });
  }
};

//function to login account
export const userLoginAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email",
      });
    }

    // check if user exists
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // create token
    const token = JWT.sign(
      {
        id: user._id,
        role: "user",
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, message: "User login successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while login account",
    });
  }
};

//function to logout
export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while logging out",
    });
  }
};

//function to see if the user is auth
export const isUserAuth = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "User is authenticated",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


//function to get the user data
export const getUserData = async(req,res) =>{
    try {
        const user = await Users.findById(req.userId).select('-password');
        if(!user){
            return res.status(400).json({success:false, message:"User not found"})
        }
          return res.status(200).json({
            success: true,
            user,
          });

    } catch (error) {
            console.error(error);

            return res.status(500).json({
              success: false,
              message: "Server error when getting user data",
            });
    }
}