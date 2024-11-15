import applicationModelObj from "../../Models/application.js"
const getApply=(req,res)=>{
    applicationModelObj
    .find()
    .then((data) => {
        res.status(200).json(data)
    }) 
    .catch((err) => {
        res.status(500).json({ message: err.message });
      });
}

export default getApply;