import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    res.render("home");
});

router.get("/login", async (req, res) => {
    res.render("login");
});

export default router;