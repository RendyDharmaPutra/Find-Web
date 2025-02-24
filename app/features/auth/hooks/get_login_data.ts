export const getLoginData = (body: FormData) => {
  const data = {
    Username: String(body.get("username")),
    Password: String(body.get("password")),
  };

  return data;
};
