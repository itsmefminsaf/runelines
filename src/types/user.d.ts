export type UserType = {
  name: string;
  uname: string;
  profile: string;
  password: { hash: string; salt: string };
};
