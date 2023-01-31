import express from 'express';

const routes = express.Router();

const registerUser = (req, res) => {
  const firstName = req.body?.firstName || null;
  const lastName = req.body?.lastName || null;
  const email = req.body?.email || null;
  const password = req.body?.password || null;

  if (!firstName || !lastName || !email || !password) {
    res.json({
      status: -1,
      message: 'Not all data received',
    });
  }

  return res.json({
    status: 1,
    message: 'User created successfully !',
  });
};

routes.post('/register', registerUser);

export default routes;
