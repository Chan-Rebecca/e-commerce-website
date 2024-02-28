import express, { Router } from  'express'
import { user } from '../controllers/users.controller.js';
const router =express.Router();
router.post('/',user)

export default router;