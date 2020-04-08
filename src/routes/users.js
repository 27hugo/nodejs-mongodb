const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/add', async (req, res, next) => {
  const user = new User(req.body);
  await user.save().then(resMongo => { 
    res.json({message: 'User created!'}) 
  }).catch(err => {
    res.json(err);
  });
});

router.get('/find/:id', async (req, res, next) => {
  let { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
});

router.put('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await User.update({_id: id}, req.body);
  res.json({message: 'User edited!'});
});

router.delete('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await User.remove({_id: id});
  res.json({message: 'User deleted!'});
});


module.exports = router;
