const router = require('express').Router();
const { Users } = require('../models');



router.get('/', (req, res) => {
  
  Users.findAll()
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
  Users.findOne({ where: { id: req.params.id }})
    .then(data => {
      console.log("data: ", data);
      res.status(200).json({ message: data });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: error });
    
    })
    
    
});
  
router.users('/', (req, res) => {
    console.log("Request Object: ", req.body)
    
    Users.create(req.body)
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


  Users.update(
    req.body,                   
    {
      where: {
        id: id,            
      },
    }
  )
  .then((users) => {
    
    res.status(200).json(users);
  })
  .catch((err) => {

    console.log("Error: ", err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  
  Users.destroy({ where: { id: req.params.id }})
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

