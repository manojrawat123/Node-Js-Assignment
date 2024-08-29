import { UserModel } from "../models/user.models"

const registerUserServiceFunc = async (userObj)=>{
    try {
        return await UserModel.create(userObj);
    } catch (error) {
        throw error;
    }
}

const findUserServiceFunc = async (query)=>{
try{
    return await UserModel.findOne(query).lean();
}
catch(error){
    throw new Error("find User Error");
}
}

const validatePassword = async ({
    email , password
})=>{
    const user = await UserModel.findOne({email : email});
    if(!user){
        return false;
    }
   const is_valid = user.comparePassword(password);
   if(!is_valid){
    return false;
   }
   return omit(user.toJSON(), "password");
}

export { registerUserServiceFunc, findUserServiceFunc, validatePassword };