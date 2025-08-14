import express from 'express'
import { aiController } from '../controller/aiController.js';


const router = express.Router();


router.post('/:fullName',aiController);

export default router;