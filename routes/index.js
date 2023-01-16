import express from 'express';
import {getAllDoc,createDoc,editDoc,updateDocById,deleteDocById} from "../controllers/controller.js"
const router = express.Router();
router.get('/',getAllDoc)
router.post('/',createDoc)
router.get('/edit/:id',editDoc)
router.post('/update/:id',updateDocById)
router.post('/delete/:id',deleteDocById)
export default router;