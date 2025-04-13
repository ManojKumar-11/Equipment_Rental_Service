function ensureAuthenticated(req, res, next) {
  console.log("🔍 Checking authentication:", req.session);

  if (req.session && req.session.user) {
      req.user = req.session.user; // ✅ Attach user to request
      console.log("✅ User is authenticated:", req.user);
      return next();
  }

  console.log("🚨 User not authenticated.");
  res.redirect("/login"); // ✅ Redirect to login instead of sending JSON
}

module.exports = { ensureAuthenticated };
