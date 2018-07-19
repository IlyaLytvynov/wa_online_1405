/**
 * Created by IlyaLitvinov on 14.10.16.
 */
const express = require('express');
const router = express.Router();

const menus = [
  {
    title: 'home',
    url: '/',
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

router.get('/second', function (req, res) {
  res.status(200).send([
    {
      title: 'Sub menu item',
      url: '/',
      id: Date.now()
    },
    {
      title: 'Sub menu oiyetm2',
      url: '/about',
      id: Date.now() + 10
    },
  ]);
});

module.exports = router;
