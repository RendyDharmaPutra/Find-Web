export const ApiEnv = () => {
  const api_url = process.env.API_URL;

  if (api_url) return api_url;

  console.error("API_URL tidak ditemukan");

  return "";
};
