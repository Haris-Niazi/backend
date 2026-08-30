const User = require("../models/user");

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
exports.deleteUser = async (req, res) => {
    
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        res.status(200).json({
            message: "User deleted successfully",
            deletedUser
        });

    
};
exports.createUser = async (req, res) => {
    const { name, email , password } = req.body;

    const user = await User.create({
        name,
        email,
        password
    });
    

    res.status(201).json(user);
};