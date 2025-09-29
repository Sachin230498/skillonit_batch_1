import User from "../models/userModel.js"

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.json(user);
  } catch (error) {
    res.send(error);
  }
};


export const getUser = async (req,res)=>{
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

