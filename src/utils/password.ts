import argon2 from "argon2";
import Logger from "./logger";

export async function hashPassword(password: string) {
  try {
    const hashedPassword = await argon2.hash(password);

    return hashedPassword;
  } catch (error) {
    Logger.error(error);
  }
}
