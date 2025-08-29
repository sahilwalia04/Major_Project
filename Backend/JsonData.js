const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use('/img', express.static('./img')); 

// console.log(process.env.PORT);

const data = [
  { id: 1, name: 'Solar System', product: 32, img: "https://shivamwallu.site/api/img/p1.jpg" },
  { id: 2, name: 'Little Space Explorer', product: 31, img: "https://shivamwallu.site/api/img/p2.jpg" },
  { id: 3, name: 'This is my Planet', product: 9, img: "https://shivamwallu.site/api/img/p3.jpg" },
  { id: 4, name: 'Have you been to the Moon', product: 8, img: "https://shivamwallu.site/api/img/p4.jpg" },
  { id: 5, name: 'I will discover a new Planet', product: 9, img: "https://shivamwallu.site/api/img/p5.jpg" },
  { id: 6, name: 'I Support Space Development', product: 8, img: "https://shivamwallu.site/api/img/p6.jpg" },
  { id: 7, name: 'Logo With S', product: 7, img: "https://shivamwallu.site/api/img/p7.jpg" },
  { id: 8, name: 'Logo', product: 11, img: "https://shivamwallu.site/api/img/p8.jpg" },
];

const data1 =[
  {id:101 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLACK, GREY' , name:" Men's Premium T-Shirt", price:500, img:"https://shivamwallu.site/api/img/p11.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Men's Premium Hoodie", price:600, img:"https://shivamwallu.site/api/img/p12.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's Premium Hoodie", price:1000, img:"https://shivamwallu.site/api/img/p13.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Organic Short Sleeve Baby Bodysuit", price:399, img:"https://shivamwallu.site/api/img/p14.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Roll Cuff T-Shirt", price:699, img:"https://shivamwallu.site/api/img/p15.jpg"},
  {id:106 , size:'S M L XL 2XL 3XL 4XL', color:'BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:299, img:"https://shivamwallu.site/api/img/p16.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Toddler Premium T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p17.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p18.jpg"},
  {id:109 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLAC,K GREY' , name:" Kids' T-Shirt", price:400, img:"https://shivamwallu.site/api/img/p19.jpg"},
  {id:110 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Unisex Contrast Hoodie", price:599, img:"https://shivamwallu.site/api/img/p120.jpg"},
  {id:111 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Women's T-Shirt", price:399, img:"https://shivamwallu.site/api/img/p121.jpg"},
  {id:112 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Hoodie", price:999, img:"https://shivamwallu.site/api/img/p122.jpg"},
  {id:113 , size:'S M L XL 2XL 3XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Full Color Mug", price:899, img:"https://shivamwallu.site/api/img/p123.jpg"},
  {id:114 , size:'S M L XL 2XL 3XL 4XL', color: 'BLACK, GREY' , name:"Kids' Hoodie", price:200, img:"https://shivamwallu.site/api/img/p124.jpg"},
  {id:115 , size:'S M L XL 2XL ', color: 'BLACK, GREY' , name:"Men's T-Shirt", price:199 ,img:"https://shivamwallu.site/api/img/p125.jpg",},
  {id:116 , size:'S M L XL 2XL 3XL 4XL', color: 'BLACK, GREY' , name:" Unisex Jersey T-Shirt by Bella + Canvas", price:299, img:"https://shivamwallu.site/api/img/p126.jpg"},
  {id:117 , size:'S', color: 'BLACK, GREY' , name:"Organic Long Sleeve Baby Bodysuit", price:499, img:"https://shivamwallu.site/api/img/p127.jpg"},
  {id:118 , size:'S M L XL 2XL 3XL 4XL', color: ' BLACK, GREY' , name:"Eco-Friendly Cotton Tote", price:199, img:"https://shivamwallu.site/api/img/p128.jpg"},
  {id:119 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, BLACK, GREY' , name:" Dog Bandana", price:99, img:"https://shivamwallu.site/api/img/p129.jpg"},
  {id:120 , size:'S M ', color: 'RED, BLACK, GREY' , name:" Baby Bib", price:99, img:"https://shivamwallu.site/api/img/p130.jpg"},

];


const data2 =[
  {id:201 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLACK, GREY' , name:"Women's Premium T-Shirt", price:500, img:"https://shivamwallu.site/api/img/p21.jpg"},
  {id:202 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Women's Premium Hoodie", price:600, img:"https://shivamwallu.site/api/img/p22.jpg"},
  {id:203 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Organic Short Sleeve Baby Bodysuit", price:1000, img:"https://shivamwallu.site/api/img/p23.jpg"},
  {id:204 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Women's Roll Cuff T-Shirt", price:399, img:"https://shivamwallu.site/api/img/p24.jpg"},
  {id:205 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:699, img:"https://shivamwallu.site/api/img/p25.jpg"},
  {id:206 , size:'S M L XL 2XL 3XL 4XL', color:'BLACK, GREY'  , name:"Toddler Premium T-Shirt", price:299, img:"https://shivamwallu.site/api/img/p26.jpg"},
  {id:207 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Kids‘ Premium Hoodie", price:109 ,img:"https://shivamwallu.site/api/img/p27.jpg",},
  {id:208 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p28.jpg"},
  {id:209 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLAC,K GREY' , name:" Kids' T-Shirt", price:400, img:"https://shivamwallu.site/api/img/p29.jpg"},
  {id:210 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Men's Hoodie", price:599, img:"https://shivamwallu.site/api/img/p210.jpg"},
  {id:211 , size:'S M L XL 2XL 3XL 4XL 5XL', color: 'RED, GREEN, BLACK, GREY' , name: "Men's T-Shirt", price:399, img:"https://shivamwallu.site/api/img/p211.jpg"},
  {id:212 , size:'S M L XL 2XL 3XL 4XL', color: 'RED, GREEN, BLACK, GREY' , name:"Women's Flowy Tank Top by Bella", price:999, img:"https://shivamwallu.site/api/img/p212.jpg"},
  {id:213 , size:'one size', color: 'RED, GREEN, BLACK, GREY' , name:"Organic Long Sleeve Baby Bodysuit", price:899, img:"https://shivamwallu.site/api/img/p213.jpg"},
  {id:214 , size:'one size', color: 'BLACK, GREY' , name:" 20 oz Water Bottle", price:200, img:"https://shivamwallu.site/api/img/p214.jpg"},
  {id:215 , size:'one size ', color: 'BLACK, GREY' , name:"Buttons large 2.2'' (5-pack)", price:199 ,img:"https://shivamwallu.site/api/img/p215.jpg",},
  {id:216 , size:'one size', color: 'BLACK, GREY' , name:" Buttons small 1'' (5-pack)", price:299, img:"https://shivamwallu.site/api/img/p216.jpg"},
  {id:217 , size:'one size', color: 'BLACK, GREY' , name:"Mouse pad Horizontal", price:499, img:"https://shivamwallu.site/api/img/p217.jpg"},
  {id:218 , size:'S M L XL 2XL 3XL 4XL', color: '  Dog Bandana' , name:"Eco-Friendly Cotton Tote", price:199, img:"https://shivamwallu.site/api/img/p218.jpg"},
  {id:219 , size:'S L', color: 'Baby Bib' , name:" Dog Bandana", price:99, img:"https://shivamwallu.site/api/img/p219.jpg"},
  {id:220 , size:'one size', color: 'RED, BLACK, GREY' , name:" Throw Pillow Cover 17.5” x 17.5”", price:99, img:"https://shivamwallu.site/api/img/p220.jpg"},

];



const data3 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p31.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p32.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p33.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p34.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p35.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p36.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p37.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"https://shivamwallu.site/api/img/p38.jpg"},
];


const data4 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p41.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p42.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p43.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p44.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p45.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p46.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p47.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"https://shivamwallu.site/api/img/p48.jpg"},
];



const data5 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p51.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p52.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p53.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p54.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p55.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p56.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p57.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"https://shivamwallu.site/api/img/p58.jpg"},
];



const data6 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p61.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p62.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p63.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p64.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p65.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p66.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p67.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"https://shivamwallu.site/api/img/p68.jpg"},
];




const data7 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p71.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p72.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p73.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p74.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p75.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p76.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p77.jpg",},
];


const data8 =[
  {id:101 , size:'one size', color:'BLACK' , name:"Tote Bag", price:500, img:"https://shivamwallu.site/api/img/p81.jpg"},
  {id:102 , size:'S M L XL 2XL 3XL 4XL 5XL', color:'RED, GREEN, BLACK '  , name:"Kids' T-Shirt", price:600, img:"https://shivamwallu.site/api/img/p82.jpg"},
  {id:103 , size:'S M L XL 2XL 3XL', color:'RED, BLACK, GREY'  , name:"Women's T-Shirt", price:1000, img:"https://shivamwallu.site/api/img/p83.jpg"},
  {id:104 , size:'S M L XL 2XL 3XL 4XL', color:'RED, GREEN, BLAC,K GREY'  , name:"Men's Hoodie", price:399, img:"https://shivamwallu.site/api/img/p84.jpg"},
  {id:105 , size:'S M L XL 2XL', color:' BLACK, GREY'  , name:"Women's Hoodie", price:699, img:"https://shivamwallu.site/api/img/p85.jpg"},
  {id:106 , size:'one size', color:'BLACK'  , name:"Full Color Mug", price:299, img:"https://shivamwallu.site/api/img/p86.jpg"},
  {id:107 , size:'S M L XL ', color: 'RED, GREEN, BLACK, GREY' , name:"Men's T-Shirt", price:109 ,img:"https://shivamwallu.site/api/img/p87.jpg",},
  {id:108 , size:'S M L', color: 'RED, GREEN, BLACK, GREY' , name:"Men's Pique Polo Shirt", price:500, img:"https://shivamwallu.site/api/img/p88.jpg"},
];


module.exports = {data , data1 ,data2 , data3 , data4 ,data5 , data6, data7 , data8};