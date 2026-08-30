const express = require("express");
const router = express.Router();

const {
    getUsers,
    createUser,
    deleteUser
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/delete/:id",deleteUser)

module.exports = router;