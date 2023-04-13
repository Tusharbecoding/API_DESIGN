import {Router} from 'express';

const router = Router();

//Products

router.get('/product', (req, res) => {
    res.json({message: 'hello'})
})
router.get('product/:id', () => {}) //id can be any number
router.put('/product/:id', () => {}) 
router.post('/product', () => {})
router.delete('/product/:id', () => {})

//Update

router.get('/update', () => {})
router.get('update/:id', () => {}) //id can be any number
router.put('/update/:id', () => {}) 
router.post('/update', () => {})
router.delete('/update/:id', () => {})

//Update Points

router.get('/updatepoint', () => {})
router.get('updatepoint/:id', () => {}) //id can be any number
router.put('/updatepoint/:id', () => {}) 
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router;