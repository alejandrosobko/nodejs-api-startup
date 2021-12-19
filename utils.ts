import { check, validationResult } from "express-validator"
import { POST, POST_ERROR } from './consts/index';


const validateCreatePost = [
    check(POST, POST_ERROR).isLength({ min: 10, max: 50 }),
    (req, res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array().map(error => error.msg) });
        }
    next();
  },
]

export {
    validateCreatePost
}