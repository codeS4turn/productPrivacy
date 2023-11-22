const router = require('express').Router()

const productController=require('../controller/product')

// router.get('/',productController.homePage)

router.post('/addProduct',productController.zoboFc)

router.get('/showProduct',productController.showProduct)

router.get('/updateProduct/:id',productController.updateProduct)
router.post('/editProduct/:id', productController.editProduct)

// router.post('editProduct/:id',productController)

router.post('/register',productController.registerUser)






module.exports=router