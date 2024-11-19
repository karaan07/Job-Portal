import express from 'express';
import { register, updateProfile, login, logout } from '../controllers/user.controller.js'; // Ensure all functions are imported
import isAuthenticated from '../middlewares/isAuthenticated.js'; // Middleware for authentication
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

// Route for user registration
router.route("/register").post(singleUpload,register);

// Route for user login
router.route("/login").post(login);

router.route("/logout").get(logout);

// Route for updating user profile, requires authentication
router.route("/profile/update").post(isAuthenticated,singleUpload, updateProfile);

export default router;
