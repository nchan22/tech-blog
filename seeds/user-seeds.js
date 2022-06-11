const { User } = require("../models");

const userData = [
  {
    username: "sam_sour",
    twitter: "soursam",
    github: "sams",
    email: "sammy123@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "matt_v",
    twitter: "mattive",
    github: "mattv",
    email: "mathew_v@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "steve-o",
    twitter: "steveo",
    github: "steveo",
    email: "steveo@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "lee_ye",
    twitter: "leeyen123",
    github: "leeyen",
    email: "leeyen1993@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "bob_s",
    twitter: "bobbleS22",
    github: "bob_s95",
    email: "bob_s95@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "theo_c",
    twitter: "the00c",
    github: "ctheo22",
    email: "ctheo22@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
