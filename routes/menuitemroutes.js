const express = require("express")
const router  = express.Router()
const menuitem = require("./../models/menuitem")


//munuitem post method

router.post('/', async (req, res)=> {
    try {
  
      const data =  req.body
      const newmenu  =  new menuitem(data)
      const response = await newmenu.save();
       
      console.log("data saved");
      res.status(200).json(response)
  
    } catch (err) {
      console.log(err);
      res.status(500).json({err:"internal server error"})
    }
  })

  // menuitem get method
  
  router.get('/', async (req, res) => {
    try {
      const data = await menuitem.find()
      console.log("data fetched");
      res.status(200).json(data)
    } catch (err) {
      console.log(err);
      res.status(500).json({err:"internal server error"})
    }
  })

   //menu tastetype get method
  
   router.get('/:tastetype', async  (req, res) => {
    try {
      const tastetype = req.params.tastetype
      if (tastetype == "sweet" || tastetype == "spicy" || tastetype == "sour") {
          const response = await menuitem.find({taste:tastetype})
          console.log("response fetched");
          res.status(200).json(response)
      } else {
         res.status(404).json({error:"invalid work type"})
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({err:"internal server error"})
    }
  })
module.exports=router