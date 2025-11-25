const RoleCheck = (req, res, next) => {
  try {
    let status = req.headers.status;
    if (status == "true") {
      next();
    } else {
      res.status(401).send("Status is not true");
    }
  } catch (error) {
    console.log(error);
  }
};

export default RoleCheck;
