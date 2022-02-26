import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User1",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "User2",
    email: "sampuser@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
