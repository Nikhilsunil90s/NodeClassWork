const router = require('express').Router;

const adminRouter = router();

adminRouter.get('/addProduct' , (req,res) => {
    res.send("<form method = 'POST' action = '/admin/addProduct'><input type = 'text' name = 'prodName'><input type = 'submit' value = 'Add!'></form>")
});

adminRouter.post('/addProduct' , (req,res) => {
    console.log(req.body);
    res.send("<h2>Product Added! </h2>");
});

module.exports = adminRouter;
