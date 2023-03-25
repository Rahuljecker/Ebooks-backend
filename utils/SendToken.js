export const SendToken=(res,user,message,statusCode=200)=>{
 
 const token=user.getJWTToken();

 const options={
    expires:new Date(Date.now()+5*60*1000),
    httpOnly:true,
    secure:true,
    sameSite:"none",
 }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        message,
        user,
    })
}