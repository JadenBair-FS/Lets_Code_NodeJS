const express = require("express");
const router = express.Router();

const items = [];

//http://localhost:3000/exercise
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Successful - GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});


// http://localhost:3000/exercise/34
router.get("/:id", (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Successful - GET BY ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        }
    })
});

router.delete("/:id", (req,res)=>{
  const id = req.params.id;
  index = items.indexOf(id);
  items.splice(index, 1);
  res.status(200).json({
      message: "Successful - Delete by ID",
      id: id,
      metadata: {
          hostname: req.hostname,
          method: req.method,
      }
  })
  console.log(items)
});

router.post("/:id", (req, res)=>{
  console.log('Request body >>>', req.body);
  const id = req.params.id;
  // const retrievedData = req.body;
  items.push(id);
  res.status(200).json({
    message: "We got the request", 
    id
  })
  console.log(items)
});

router.put("/:id", (req, res) => {
  const sentData = req.body;
  console.log(sentData);
  const id = req.params.id;
  index = items.indexOf(id);
  items[index] = sentData.id;
  res.status(200).json({
    message: "Successful Put by ID",
    id,
    sentData,
  })
  console.log(items)

})

module.exports = router;
