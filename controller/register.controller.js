
var hashPassword = (username, password) => {
    let secret = `${username}${password}`
      .toUpperCase()
      .split("")
      .reverse()
      .join();
    return crypto
      .createHmac("SHA256", secret)
      .update(password)
      .digest("hex");
  };

module.exports.getRegister=(req,res,next)=>{
    res.render("register",{
        title: "Register Page"
    });
}

module.exports.postRegister=(req,res,next)=>{
    let body = req.body;
    let newUser = new user({
        username: body.username,
        email: body.email,
        password: hashPassword(body.username, body.password)
      });
    
      newUser.save(err => {
        if (err) return err;
        return res.json({
          type: 1
        });
      });

    res.render("login",{
        title: "Register Page"
    });
}

module.exports.hashPassword = hashPassword;