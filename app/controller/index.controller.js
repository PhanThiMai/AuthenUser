const registerController = require('./register.controller')

module.exports.getLogin = (req,res,next)=>{
    res.render("index",{
        title: 'LoginPage'
    });
}

module.exports.postLogin=(req,res,next)=>{

    let body = req.body;
    user.findOne({ username: body.username }, (err, user) => {
    if (err) next(err);
    else {
      if (user == undefined) {
        return res.json({
          type: 0,
          msg: "Account does not exist!"
        });
      }
    
      if ( registerController.hashPassword(body.username, body.password) !== user.password) {
        return res.json({
          type: 0,
          msg: "Your username or password is invalid!"
        });
      }

    //   req.session.userId = user._id;
    //   req.session.username = user.username;

      res.json({
        type: 1
      });
    }
  });

}