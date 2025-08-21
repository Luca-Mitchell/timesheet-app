import express from 'express';
import supabase from '../db.js';

const router = express.Router();

router.post('/logIn', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(200).json({ message: 'Logged in successfully', data });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

router.post('/signUp', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(200).json({ message: 'Created new user', data });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
