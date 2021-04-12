const userRouter = require('express').Router();
const path = require('path');

userRouter.get('/' , (req,res) => {
    // res.status(200).send("<h2 style='tet-align:center;'>Welcome!</h2>");
    res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'));
});

module.exports = userRouter;