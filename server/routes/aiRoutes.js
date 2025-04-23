
const express = require("express");
const { CohereClient } = require("cohere-ai");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

require("dotenv").config();

// ✅ Use the new syntax from v5
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post("/summary", auth, async (req, res) => {
  try {
    const excelData = req.body.data;

    if (!excelData || !Array.isArray(excelData)) {
      return res.status(400).json({ error: "Invalid or missing data array" });
    }

    const prompt = `Summarize the following tabular JSON data:\n${JSON.stringify(
      excelData.slice(0, 10)
    )}`;

    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      maxTokens: 200,
      temperature: 0.5,
    });

    res.json({ summary: response.generations[0].text.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cohere summary failed" });
  }
});

module.exports = router;
