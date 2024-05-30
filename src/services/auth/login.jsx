export const Authenticateduser = (username, password) => {
  const ValidUser = userAccount.find(
    (acc) => acc.username === username && acc.passsword === password
  );
  return ValidUser;
};
