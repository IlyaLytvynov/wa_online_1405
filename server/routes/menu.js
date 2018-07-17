/**
 * Created by IlyaLitvinov on 14.10.16.
 */
const express = require('express');
const router = express.Router();

const menus = [
  {
    title: 'home',
    url: '/home',
    id: Date.now()
  },
  {
    title: 'About',
    url: '/about',
    id: Date.now() + 10
  },
]

router.get('/', function (req, res) {
  res.status(200).send(menus);
});

module.exports = router;
