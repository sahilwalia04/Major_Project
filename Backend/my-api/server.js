const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/img', express.static('D:/Solar System Project/Backend/my-api/img')); 

const data = [
  { id: 1, name: 'Solar System', product: 32, img: "http://localhost:3000/img/p1.jpg" },
  { id: 2, name: 'Little Space Explorer', product: 31, img: "http://localhost:3000/img/p2.jpg" },
  { id: 3, name: 'This is my Planet', product: 9, img: "http://localhost:3000/img/p3.jpg" },
  { id: 4, name: 'Have you been to the Moon', product: 8, img: "http://localhost:3000/img/p4.jpg" },
  { id: 5, name: 'I will discover a new Planet', product: 9, img: "http://localhost:3000/img/p5.jpg" },
  { id: 6, name: 'I Support Space Development', product: 8, img: "http://localhost:3000/img/p6.jpg" },
  { id: 7, name: 'Logo With S', product: 7, img: "http://localhost:3000/img/p7.jpg" },
  { id: 8, name: 'Logo', product: 11, img: "http://localhost:3000/img/p8.jpg" },
];

const data1 =[
  {id:101 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLACK, GREY' , name:" Men's Premium T-Shirt", price:500, img:"http://localhost:3000/img/p11.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Men's Premium Hoodie", price:600, img:"http://localhost:3000/img/p12.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's Premium Hoodie", price:1000, img:"http://localhost:3000/img/p13.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Organic Short Sleeve Baby Bodysuit", price:399, img:"http://localhost:3000/img/p14.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Roll Cuff T-Shirt", price:699, img:"http://localhost:3000/img/p15.jpg"},
  {id:106 , size:'S M L XL 2XL 3XL 4XL', color:'BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:299, img:"http://localhost:3000/img/p16.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Toddler Premium T-Shirt", price:109 ,img:"http://localhost:3000/img/p17.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p18.jpg"},
  {id:109 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLAC,K GREY' , name:" Kids' T-Shirt", price:400, img:"http://localhost:3000/img/p19.jpg"},
  {id:110 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Unisex Contrast Hoodie", price:599, img:"http://localhost:3000/img/p120.jpg"},
  {id:111 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Women's T-Shirt", price:399, img:"http://localhost:3000/img/p121.jpg"},
  {id:112 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Hoodie", price:999, img:"http://localhost:3000/img/p122.jpg"},
  {id:113 , size:'S M L XL 2XL 3XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Full Color Mug", price:899, img:"http://localhost:3000/img/p123.jpg"},
  {id:114 , size:'S M L XL 2XL 3XL 4XL', color: 'BLACK, GREY' , name:"Kids' Hoodie", price:200, img:"http://localhost:3000/img/p124.jpg"},
  {id:115 , size:'S M L XL 2XL ', color: 'BLACK, GREY' , name:"Men's T-Shirt", price:199 ,img:"http://localhost:3000/img/p125.jpg",},
  {id:116 , size:'S M L XL 2XL 3XL 4XL', color: 'BLACK, GREY' , name:" Unisex Jersey T-Shirt by Bella + Canvas", price:299, img:"http://localhost:3000/img/p126.jpg"},
  {id:117 , size:'S', color: 'BLACK, GREY' , name:"Organic Long Sleeve Baby Bodysuit", price:499, img:"http://localhost:3000/img/p127.jpg"},
  {id:118 , size:'S M L XL 2XL 3XL 4XL', color: ' BLACK, GREY' , name:"Eco-Friendly Cotton Tote", price:199, img:"http://localhost:3000/img/p128.jpg"},
  {id:119 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, BLACK, GREY' , name:" Dog Bandana", price:99, img:"http://localhost:3000/img/p129.jpg"},
  {id:120 , size:'S M ', color: 'RED, BLACK, GREY' , name:" Baby Bib", price:99, img:"http://localhost:3000/img/p130.jpg"},

];


const data2 =[
  {id:201 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLACK, GREY' , name:"Women's Premium T-Shirt", price:500, img:"http://localhost:3000/img/p21.jpg"},
  {id:202 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Women's Premium Hoodie", price:600, img:"http://localhost:3000/img/p22.jpg"},
  {id:203 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Organic Short Sleeve Baby Bodysuit", price:1000, img:"http://localhost:3000/img/p23.jpg"},
  {id:204 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Women's Roll Cuff T-Shirt", price:399, img:"http://localhost:3000/img/p24.jpg"},
  {id:205 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:699, img:"http://localhost:3000/img/p25.jpg"},
  {id:206 , size:'S M L XL 2XL 3XL 4XL', color:'BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:299, img:"http://localhost:3000/img/p26.jpg"},
  {id:207 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Kids‘ Premium Hoodie", price:109 ,img:"http://localhost:3000/img/p27.jpg",},
  {id:208 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p28.jpg"},
  {id:209 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLAC,K GREY' , name:" Kids' T-Shirt", price:400, img:"http://localhost:3000/img/p29.jpg"},
  {id:210 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Men's Hoodie", price:599, img:"http://localhost:3000/img/p210.jpg"},
  {id:211 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Men's T-Shirt", price:399, img:"http://localhost:3000/img/p211.jpg"},
  {id:212 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLACK, GREY' , name:"Women's Flowy Tank Top by Bella", price:999, img:"http://localhost:3000/img/p212.jpg"},
  {id:213 , size:'one size', color: 'RED, GREEN, BLACK, GREY' , name:"Organic Long Sleeve Baby Bodysuit", price:899, img:"http://localhost:3000/img/p213.jpg"},
  {id:214 , size:'one size', color: 'BLACK, GREY' , name:" 20 oz Water Bottle", price:200, img:"http://localhost:3000/img/p214.jpg"},
  {id:215 , size:'one size ', color: 'BLACK, GREY' , name:"Buttons large 2.2'' (5-pack)", price:199 ,img:"http://localhost:3000/img/p215.jpg",},
  {id:216 , size:'one size', color: 'BLACK, GREY' , name:" Buttons small 1'' (5-pack)", price:299, img:"http://localhost:3000/img/p216.jpg"},
  {id:217 , size:'one size', color: 'BLACK, GREY' , name:"Mouse pad Horizontal", price:499, img:"http://localhost:3000/img/p217.jpg"},
  {id:218 , size:'S M L XL 2XL 3XL 4XL', color: '  Dog Bandana' , name:"Eco-Friendly Cotton Tote", price:199, img:"http://localhost:3000/img/p218.jpg"},
  {id:219 , size:'S L', color: 'Baby Bib' , name:" Dog Bandana", price:99, img:"http://localhost:3000/img/p219.jpg"},
  {id:220 , size:'one size', color: 'RED, BLACK, GREY' , name:" Throw Pillow Cover 17.5” x 17.5”", price:99, img:"http://localhost:3000/img/p220.jpg"},

];



const data3 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p31.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p32.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p33.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p34.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p35.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p36.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p37.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"http://localhost:3000/img/p38.jpg"},
];


const data4 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p41.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p42.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p43.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p44.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p45.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p46.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p47.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"http://localhost:3000/img/p48.jpg"},
];



const data5 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p51.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p52.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p53.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p54.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p55.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p56.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p57.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"http://localhost:3000/img/p58.jpg"},
];



const data6 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p61.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p62.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p63.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p64.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p65.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p66.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p67.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"http://localhost:3000/img/p68.jpg"},
];




const data7 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p71.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p72.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p73.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p74.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p75.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p76.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p77.jpg",},
];


const data8 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"http://localhost:3000/img/p81.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"http://localhost:3000/img/p82.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"http://localhost:3000/img/p83.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"http://localhost:3000/img/p84.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"http://localhost:3000/img/p85.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"http://localhost:3000/img/p86.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"http://localhost:3000/img/p87.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"http://localhost:3000/img/p88.jpg"},
];
// 1. GET all users
app.get('/api/users', (req, res) => {
  res.json(data);
});
app.get('/api/users/product1', (req, res) => {
  res.json(data1);
});
app.get('/api/users/product2', (req, res) => {
  res.json(data2);
});
app.get('/api/users/product3', (req, res) => {
  res.json(data3);
});
app.get('/api/users/product4', (req, res) => {
  res.json(data4);
});
app.get('/api/users/product5', (req, res) => {
  res.json(data5);
});
app.get('/api/users/product6', (req, res) => {
  res.json(data6);
});
app.get('/api/users/product7', (req, res) => {
  res.json(data7);
});
app.get('/api/users/product8', (req, res) => {
  res.json(data8);
});
// 2. GET a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.get('/api/users/product1/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user1 = data1.find(u => u.id === userId);
  if (user1) {
    res.json(user1);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.get('/api/users/product2/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user2 = data2.find(u => u.id === userId);
  if (user2) {
    res.json(user2);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.get('/api/users/product3/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user3 = data3.find(u => u.id === userId);
  if (user3) {
    res.json(user3);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/api/users/product4/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user4 = data4.find(u => u.id === userId);
  if (user4) {
    res.json(user4);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
app.get('/api/users/product5/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user5 = data5.find(u => u.id === userId);
  if (user5) {
    res.json(user5);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
app.get('/api/users/product6/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user6 = data6.find(u => u.id === userId);
  if (user6) {
    res.json(user6);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
app.get('/api/users/product7/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user7 = data7.find(u => u.id === userId);
  if (user7) {
    res.json(user7);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
app.get('/api/users/product8/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user8 = data8.find(u => u.id === userId);
  if (user8) {
    res.json(user8);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
// 3. POST (Create) a new user
app.post('/api/users', (req, res) => {
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


app.post('/api/users/product1', (req, res) => {
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


app.post('/api/users/product2', (req, res) => {
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


app.post('/api/users/product3', (req, res) => {
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


app.post('/api/users/product4', (req, res) => {
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



app.post('/api/users/product5', (req, res) => {
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


app.post('/api/users/product6', (req, res) => {
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



app.post('/api/users/product7', (req, res) => {
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



app.post('/api/users/product8', (req, res) => {
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
app.put('/api/users/:id', (req, res) => {
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
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = data.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = data.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully', user: deletedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
