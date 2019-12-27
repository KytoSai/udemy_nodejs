exports.getLogin = (req, res, next) => {
  // Lấy giá trị của cookie `loggedIn` đã gán trước đó
  console.log('[Cookie]', req.get("Cookie"))
  let isLoggedIn = false;
  if(
    req.get("Cookie") &&
    req.get("Cookie").split(";")[0].trim() &&
    req.get("Cookie").split(";")[0].trim().split("=")[1] === 'true'
  ) {
    isLoggedIn = true;
  }

  console.log(isLoggedIn);

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; Max-Age=10");
  res.redirect("/");
};
