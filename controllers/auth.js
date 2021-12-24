const login = (req, res) => {
  const { username, password } = req.body;

  res.json({ username, password });
};

const logout = (req, res) => {
  const { username } = req.body;

  res.json({ username });
};

export { login, logout };
