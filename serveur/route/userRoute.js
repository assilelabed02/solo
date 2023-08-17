const express = require("express")
const router = express.Router();
router.get("/",(request,response)=>{
    response.send('data successfuly sent')
})
module.exports = router;
