const {data ,data1,data2,data3,data4,data5,data6} = require('../JsonData')
const express = require('express');
const app = express();
app.use('/img', express.static('../img')); 
const router2 = express.Router();

// 1. GET all users
router2.get('/users', (req, res) => {
  res.json(data);
});
router2.get('/users/product1', (req, res) => {
  res.json(data1);
});
router2.get('/users/product2', (req, res) => {
  res.json(data2);
});
router2.get('/users/product3', (req, res) => {
  res.json(data3);
});
router2.get('/users/product4', (req, res) => {
  res.json(data4);
});
router2.get('/users/product5', (req, res) => {
  res.json(data5);
});
router2.get('/users/product6', (req, res) => {
  res.json(data6);
});
router2.get('/users/product7', (req, res) => {
  res.json(data7);
});
router2.get('/users/product8', (req, res) => {
  res.json(data8);
});
// 2. GET a specific user by ID
router2.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


router2.get('/users/product1/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user1 = data1.find(u => u.id === userId);
  if (user1) {
    res.json(user1);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


router2.get('/users/product2/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user2 = data2.find(u => u.id === userId);
  if (user2) {
    res.json(user2);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


router2.get('/users/product3/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user3 = data3.find(u => u.id === userId);
  if (user3) {
    res.json(user3);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router2.get('/users/product4/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user4 = data4.find(u => u.id === userId);
  if (user4) {
    res.json(user4);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
router2.get('/users/product5/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user5 = data5.find(u => u.id === userId);
  if (user5) {
    res.json(user5);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
router2.get('/users/product6/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user6 = data6.find(u => u.id === userId);
  if (user6) {
    res.json(user6);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
router2.get('/users/product7/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user7 = data7.find(u => u.id === userId);
  if (user7) {
    res.json(user7);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
router2.get('/users/product8/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user8 = data8.find(u => u.id === userId);
  if (user8) {
    res.json(user8);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
// 3. POST (Create) a new user
router2.post('/users', (req, res) => {
  const newId = data.length > 0 ? Math.max(...data.map(u => u.id)) + 1 : 1;
  const newUser = {
    id: newId, 
    name: req.body.name,
    product: req.body.product,
    img: req.body.img
  };
  data.push(newUser);
  res.status(201).json({ message: 'User added successfully', user: newUser });
});


router2.post('/users/product1', (req, res) => {
  const newId = data1.length > 0 ? Math.max(...data1.map(u => u.id)) + 1 : 1;
  const newUser1 = {
    id: newId, 
    size: req.body.size,
    name: req.body.name,
    price: req.body.product,
    img: req.body.img
  };
  data1.push(newUser1);
  res.status(201).json({ message: 'User added successfully', user1: newUser1 });
});


router2.post('/users/product2', (req, res) => {
  const newId = data2.length > 0 ? Math.max(...data2.map(u => u.id)) + 1 : 1;
  const newUser2 = {
    id: newId, 
    size: req.body.size,
    name: req.body.name,
    price: req.body.product,
    img: req.body.img
  };
  data2.push(newUser2);
  res.status(201).json({ message: 'User added successfully', user2: newUser2 });
});


router2.post('/users/product3', (req, res) => {
  const newId = data3.length > 0 ? Math.max(...data3.map(u => u.id)) + 1 : 1;
  const newUser3 = {
    id: newId, 
    size: req.body.size,
    name: req.body.name,
    price: req.body.product,
    img: req.body.img
  };
  data2.push(newUser3);
  res.status(201).json({ message: 'User added successfully', user3: newUser3 });
});


router2.post('/users/product4', (req, res) => {
  const newId = data4.length > 0 ? Math.max(...data4.map(u => u.id)) + 1 : 1;
  const newUser4 = {
    id: newId, 
    size: req.body.size,
    color: req.body.color,  // Include color
    name: req.body.name,
    price: req.body.price,  // Fix the field to be price instead of product
    img: req.body.img
  };
  data4.push(newUser4);
  res.status(201).json({ message: 'Product added successfully', user4: newUser4 });
});



router2.post('/users/product5', (req, res) => {
  const newId = data5.length > 0 ? Math.max(...data5.map(u => u.id)) + 1 : 1;
  const newUser5 = {
    id: newId, 
    size: req.body.size,
    color: req.body.color,  // Include color
    name: req.body.name,
    price: req.body.price,  // Fix the field to be price instead of product
    img: req.body.img
  };
  data5.push(newUser5);
  res.status(201).json({ message: 'Product added successfully', user5: newUser5 });
});


router2.post('/users/product6', (req, res) => {
  const newId = data6.length > 0 ? Math.max(...data6.map(u => u.id)) + 1 : 1;
  const newUser6 = {
    id: newId, 
    size: req.body.size,
    color: req.body.color,  // Include color
    name: req.body.name,
    price: req.body.price,  // Fix the field to be price instead of product
    img: req.body.img
  };
  data6.push(newUser6);
  res.status(201).json({ message: 'Product added successfully', user6: newUser6 });
});



router2.post('/users/product7', (req, res) => {
  const newId = data7.length > 0 ? Math.max(...data7.map(u => u.id)) + 1 : 1;
  const newUser7 = {
    id: newId, 
    size: req.body.size,
    color: req.body.color,  // Include color
    name: req.body.name,
    price: req.body.price,  // Fix the field to be price instead of product
    img: req.body.img
  };
  data7.push(newUser7);
  res.status(201).json({ message: 'Product added successfully', user7: newUser7 });
});



router2.post('/users/product8', (req, res) => {
  const newId = data8.length > 0 ? Math.max(...data8.map(u => u.id)) + 1 : 1;
  const newUser8 = {
    id: newId, 
    size: req.body.size,
    color: req.body.color,  // Include color
    name: req.body.name,
    price: req.body.price,  // Fix the field to be price instead of product
    img: req.body.img
  };
  data8.push(newUser8);
  res.status(201).json({ message: 'Product added successfully', user8: newUser8 });
});
// 4. PUT (Update) an existing user
router2.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = data.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    data[userIndex].name = req.body.name || data[userIndex].name;  // Update user name if provided
    data[userIndex].product = req.body.product || data[userIndex].product;
    data[userIndex].img = req.body.img || data[userIndex].img;
    res.json({ message: 'User updated successfully', user: data[userIndex] });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 5. DELETE a user
router2.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = data.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = data.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully', user: deletedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router2; 