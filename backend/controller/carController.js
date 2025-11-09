import { getallcarsService } from "../models/Carmmodels.js";

const handelResponse=(res,status,message,data=null)=>{
    res.status(status).json({
        status,
        message,
        data,
    });
}
export const getCars = async(req,res,next)=>{
    try{
        const car = await getallcarsService();
        handelResponse(res,201,"data fetched sucessfully ",car)
    }catch{
        next(err);
    }
}