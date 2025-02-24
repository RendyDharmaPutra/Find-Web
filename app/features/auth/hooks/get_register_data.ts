export const getRegisterData = (body: FormData) => {
  const data = {
    Fullname: String(body.get("fullname")),
    Username: String(body.get("username")),
    Password: String(body.get("password")),
  };

  return data;
};
