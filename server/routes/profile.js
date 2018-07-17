/**
 * Created by IlyaLitvinov on 14.10.16.
 */
const express = require('express');
const router = express.Router();

const user = {
  firstName: 'John',
  secondName: 'Test',
  age: 30
}

router.get('/', function (req, res) {
  res.status(200).send(user);
});

module.exports = router;
