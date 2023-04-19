const router = require("express").Router();

router.get('/students', (req, res,next) => {
    res.send(`<ul style="font-size:3em;">
    <li>mahmoud</li>
    <li>mohamed</li>
    <li>ali</li>
    <li>yousef</li>
    </ul>`)
  })


module.exports = router;
