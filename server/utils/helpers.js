import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const checkPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};
