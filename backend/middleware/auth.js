// Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.staffId) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized. Please login.' });
};

// Middleware to check if user is an admin
export const isAdmin = (req, res, next) => {
  if (req.session && req.session.staffId && req.session.role === 'Admin') {
    return next();
  }
  return res.status(403).json({ message: 'Access denied. Admin only.' });
};

// Middleware to check if user's account is approved
export const isApproved = (req, res, next) => {
  if (req.session && req.session.status === 'Approved') {
    return next();
  }
  return res.status(403).json({ 
    message: 'Account pending approval',
    status: req.session.status || 'Pending'
  });
};
