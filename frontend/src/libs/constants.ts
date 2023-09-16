export const BACKEND =
  process.env.NODE_ENV != "production"
    ? "http://localhost:6969"
    : "helloworld.com";
