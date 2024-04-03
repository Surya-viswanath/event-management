const bcrypt = require('bcrypt');
const Client = require('./Clientschema');
const jwt=require('jsonwebtoken');

const clientSignup = async(req,res)=>{
    const {Name,Email,Password,Place,Phone,Profile}=req.body;
    const existingClient = await Client.findOne({Email});

if(existingClient){
    return res.status(400).json({error:'email alredy exist'})
}
else{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(Password,salt)
    
    const clientdetails = await Client.create({
       Name,Email,Password :hashedpassword,Place,Phone,Profile

})

res.json({
    Id:clientdetails._id,
    Name:clientdetails.Name,
    Email:clientdetails.Email,
    Password:clientdetails.Password,
    Place:clientdetails.Place,
    Phone:clientdetails.Phone,
    Profile:clientdetails.Profile,
    Token:tokengenerate(clientdetails._id),}
)
}

}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })}



const getclient = async (req, res) => {
        const clientdata = await Client.find();
        res.json(clientdata);
};


const deleteclient = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedclient = await Client.findByIdAndDelete(id);
      if (!deletedclient) {
        return res.status(404).json({ message: "List not found" });
      }
      res.json({ message: "List deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports={clientSignup,getclient,deleteclient}