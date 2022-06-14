const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "sam_sour",
    twitter: "soursam",
    github: "sams",
    email: "sammy123@gmail.com",
    password: "p@ssword1",
  },
  {
    id: 2,
    username: "matt_v",
    twitter: "mattive",
    github: "mattv",
    email: "mathew_v@gmail.com",
    password: "p@ssword2",
  },
  {
    id: 3,
    username: "steve-o",
    twitter: "steveo",
    github: "steveo",
    email: "steveo@gmail.com",
    password: "p@ssword3",
  },
  {
    id: 4,
    username: "lee_ye",
    twitter: "leeyen123",
    github: "leeyen",
    email: "leeyen1993@gmail.com",
    password: "p@ssword4",
  },
  {
    id: 5,
    username: "bob_s",
    twitter: "bobbleS22",
    github: "bob_s95",
    email: "bob_s95@gmail.com",
    password: "p@ssword5",
  },
  {
    id: 6,
    username: "theo_c",
    twitter: "the00c",
    github: "ctheo22",
    email: "ctheo22@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
