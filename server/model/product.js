const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        max:[120,'Too much characters'],
        min:[1, 'Characters too low'],
        required:[true, 'Product name is required']

    },

    price:{
        type:String,
        max:[120000,'Too much characters'],
        min:[1, 'Character too low'],
        required:[true, 'Price is required']
    },
        
    description:{
        type:String,
        max:[1200002, 'Too much characters'],
        min:[1,'Characters too low'],
        required:[true,'Description required']

    },

    image:{
        type:String,
        required:[true, 'Image needed']
    }

})

const Products = mongoose.model('Product',productSchema)

module.exports=Products