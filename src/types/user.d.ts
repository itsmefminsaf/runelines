export type UserType = {
  name: string;
  email: string;
  profile: string;
  password: { hash: string; salt: string };
};
