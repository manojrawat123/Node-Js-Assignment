import jwt from "jsonwebtoken";
import configurations from "../config/config.env";

const userSignByJwt = (object, options = null)=>{
    try {
        return jwt.sign(object, configurations.private_key, options)
    } catch (error) {
        return false;        
    }
}

const userDecodeByJwt = (token)=>{
    try {
        const decode = jwt.verify(token, configurations.private_key);
        return {
            expired : false,
            valid : true,
            decode
        }
    } catch (error) {
        return {
            expired : true,
            valid : false,
            decode : null
        }
    }
}

export { userDecodeByJwt, userSignByJwt }