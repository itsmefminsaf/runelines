import crypto from "crypto";

const checkPassword = async (
  password: string,
  { hash, salt }: { hash: string; salt: string },
) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 256, (err, derivedKey) => {
      if (err) reject(err);

      const passwordBuffer = Buffer.from(hash, "hex");
      resolve(crypto.timingSafeEqual(passwordBuffer, derivedKey));
    });
  });
};

export default checkPassword;
