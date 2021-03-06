const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore))

// For middleware lesson
// router.get('/', storeController.myMiddleware, storeController.homePage);

// Learning code
// router.get('/', (req, res) => {
//   // const wes = { name: 'Wes', age: 100, cool: true };
//   // console.log('Hey!!');
//   // res.send('Hey! It works!');
//   // res.json(wes);
//   // res.send(req.query.name);
//   // res.json(req.query);
//   // res.render('hello');

//   res.render('hello', {
//     name: 'wes',
//     dog: 'snickers',
//     // dog: req.query.dog
//     title: 'I love dogs'
//   });
// });

// router.get('/reverse/:name', (req, res) => {
//   // res.send('it works!');
//   // res.send(req.params.name)
//   const reversed = [...req.params.name].reverse().join('');
//   res.send(reversed);
// })

module.exports = router;
