export type UserType = {
  name: string;
  email: string;
  password: { hash: string; salt: string };
};
