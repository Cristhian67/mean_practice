const { Router} = require('express');

const router = Router();

const employeesCtrl = require('../controllers/employees.controller.js');

router.get('/', employeesCtrl.Get);
router.get('/:id', employeesCtrl.GetById);
router.post('/', employeesCtrl.Create);
router.put('/:id', employeesCtrl.Update);
router.delete('/:id', employeesCtrl.Delete);

module.exports = router;