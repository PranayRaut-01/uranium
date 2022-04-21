const jwt = require('jsonwebtoken');
const mid1= function ( req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "Best-Cohort");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    next();

}














//     let isFreeAppUser= req.headers.isfreeappuser
//     //console.log(isFreeAppUser)
// if(isFreeAppUser){
//     next();
// }else res.send({msg:"the request is missing a mandatory header"})
// }
module.exports.mid1=mid1