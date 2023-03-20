import express from "express";
import { getPosts,createPost} from "./Controller.js";

import multer  from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get('/',getPosts);
router.post('/post',createPost);
export default router;