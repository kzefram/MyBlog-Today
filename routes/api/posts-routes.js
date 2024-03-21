const router = require('express').Router();
const { Posts } = require('../../models');



router.get('/', (req, res) => {
  
  Posts.findAll()
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
  Posts.findOne({ where: { id: req.params.id }})
    .then(data => {
      console.log("data: ", data);
      res.status(200).json({ message: data });
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: error });
    
    })
    
    
});
  
router.get('/', (req, res) => {
    console.log("Request Object: ", req.body)
    
    Posts.create(req.body)
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


  Posts.update(
    req.body,                   
    {
      where: {
        id: id,            
      },
    }
  )
  .then((posts) => {
    
    res.status(200).json(posts);
  })
  .catch((err) => {

    console.log("Error: ", err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  
  Posts.destroy({ where: { id: req.params.id }})
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

