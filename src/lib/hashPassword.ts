import crypto from "crypto";

const hashPassword = async (password: string) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(64).toString("hex").normalize();
    crypto.scrypt(password, salt, 256, (err, derivedKey) => {
      if (err) reject(err);
      const hash = derivedKey.toString("hex").normalize();
      resolve({ salt, hash });
    });
  });
};

export default hashPassword;
