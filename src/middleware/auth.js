const jwt = require("jsonwebtoken");

const mid1 = function (req, res, next) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "Best-Cohort");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId;
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId;

  //userId comparision to check if the logged-in user is requesting for their own data
  if (userToBeModified != userLoggedIn)
    return res.status(403).send({
      status: false,
      msg: "User logged is not allowed to modify the requested users data",
    });

  next();
}
catch(err){
  console.error(err)
  res.status(500).send({ msg: "Error", error: err.message })
}
};
module.exports.mid1 = mid1


//     let isFreeAppUser= req.headers.isfreeappuser
//     //console.log(isFreeAppUser)
// if(isFreeAppUser){
//     next();
// }else res.send({msg:"the request is missing a mandatory header"})
// 
