import express from "express";

const router = express.Router()

router.get('/', (_, res) => {
  res.send('inside users') 
})

export default router

