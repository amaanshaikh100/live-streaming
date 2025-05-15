import User from "../../models/User.js";

export const postRegister = async (req, res) => {
  const user = await User.create({
    username: "user100",
    email: "user@gmail.com",
    password: "password",
  });

  res.send("new user is saved to db");
};
