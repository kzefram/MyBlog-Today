const router = require('express').Router();
const { Category } = require('../models');



router.get('/', (req, res) => {
  
  Category.findAll()
    .then(data => {
      console.log("data: ", data);
      res.status(200).json({ message: data });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: error });
    });
 
});

router.get('/:id', (req, res) => {
  console.log("Request Params: ", req.params)  
  Category.findOne({ where: { id: req.params.id }})
    .then(data => {
      console.log("data: ", data);
      res.status(200).json({ message: data });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: error });
    
    })
    
    
});
  
router.post('/', (req, res) => {
    console.log("Request Object: ", req.body)
    
    Category.create(req.body)
      .then(data => {
        console.log("data: ", data);
        res.status(200).json(data);
      })
      .catch(error => {
        console.log("Error: ", error);
        res.status(500).json({ message: error });
      })
});

router.put('/:id', (req, res) => {
  console.log("Request Params: ", req.params)
  console.log("Request Body: ", req.body)


  const id = req.params.id;


  Category.update(
    req.body,                   
    {
      where: {
        id: id,            
      },
    }
  )
  .then((category) => {
    
    res.status(200).json(category);
  })
  .catch((err) => {

    console.log("Error: ", err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  
  Category.destroy({ where: { id: req.params.id }})
    .then(data => {
      console.log("data: ", data);
      res.status(200).json({ message: data });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: error });
    
    })
});

module.exports = router;

