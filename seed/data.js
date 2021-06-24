import db from "../db/connection.js";
import Post from "../models/post.js";

const insertData = async () => {
  await db.dropDatabase();

  const posts = [
    {
      title: "The White Wizard",
      author: "Gandolf",
      entryDate: "2021-06-20",
      content:
        "It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Weak bounties orders Alfrid claim wizard's. Stinker lowly storming belt Boromir's beacons regained sage change cur assure stinking! Risk you'll black-haired faced ignore sending East-farthing hinder fruitless fitted. Nenya wanted boarded skulk swears toss? Hobbitses guts sauteed company. Fell nesting sacrifice govern dirty lowest Mordor's offering knife-work ish pity's tracked? Haunted masters total he's pocket sight Treebeard splendor farming stealth doorway villain. ",
      imgURL:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
    },
    {
      title: "The Best Friend",
      author: "Sam",
      entryDate: "2021-06-17",
      content:
        "Single-handed cheese Amon special mainly rabbits private anymore niece? Despite sigh conjurer four-day Celeborn strategic question tonight noble arguing put? Decent shatter oversized within Precious excellent. Hidden Greenleaf lit valued wonder gulls. Sam... I'm glad you are with me. Deeper race solitude Ravenhill stage friend wasting castle 10 danger proper ruins. Foot tool collared decisions Wargs owed cannot pursuit message! Picked Fells juicy council potent ten? Tired solitary juice stairs thumping bygone could nonsense opportunity westward Brego feed.",
      imgURL:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
    },
  ];
  await Post.insertMany(posts);
  console.log("Create posts!");

  db.close();
};

insertData();
