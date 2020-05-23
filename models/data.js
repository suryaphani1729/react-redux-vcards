import Profile from './profileModel';

export const friendsList = [
  new Profile(1001,"friend1", "friend1@gmail.com","900-000-0001","Hyd1"),
  new Profile(1002, "friend2", "friend2@gmail.com","900-000-0002","Hyd2"),
  new Profile(1003,"friend3", "friend3@gmail.com","900-000-0003","Hyd3"),
];

export const myProfile = new Profile(1000, "Gopal", "gopal@gmail.com","9000000000", "Hyd");

export const acceptRequests = [
  new Profile(1004,"friend4", "friend4@gmail.com","900-000-0004","Hyd4"),
  new Profile(1005, "friend5", "friend5@gmail.com","900-000-0005","Hyd5"),
  new Profile(1006,"friend6", "friend6@gmail.com","900-000-0006","Hyd6"),
]