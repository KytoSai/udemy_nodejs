exports.getLogin = (req, res, next) => {
  // Lấy giá trị của cookie `loggedIn` đã gán trước đó
  const isLoggedIn = req
    .get("Cookie")
    .split(";")[0]
    .trim()
    .split("=")[1];

  console.log(isLoggedIn);

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
