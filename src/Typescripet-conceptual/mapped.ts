const myLuckeyNumber = [1, 2, 3, 4, 5, 6];
const myLuckeyString = myLuckeyNumber.map((luckeystring) =>
  luckeystring.toString()
);

console.log(myLuckeyString);

type listOffFriend = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: string;
};

type myFriendListReadOnly = {
  readonly [key in keyof listOffFriend]: listOffFriend[key];
};

const myFriendList: myFriendListReadOnly = {
  friend1: "khaled",
  friend2: "mitul ",
  friend3: "emu",
  friend4: "sakib",
};

// myFriendList.friend1 = "Khaled-Mitul";

console.log(myFriendList);
