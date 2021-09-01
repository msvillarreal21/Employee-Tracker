//place all api routes here and export them. 


const express = require('express');
const router = express.Router();

router.use(require('./apiRoutes/deptRoutes'));
router.use(require('./apiRoutes/empRoutes'));
router.use(require('./apiRoutes/roleRoutes'));

module.exports = router;