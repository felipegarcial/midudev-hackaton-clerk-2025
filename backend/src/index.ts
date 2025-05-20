import express from "express";
import dotenv from "dotenv";
import { clerkClient, requireAuth } from "@clerk/express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/update-metadata", requireAuth(), async (req, res) => {
  console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);
  const { userId } = req.auth;

  const { city, country } = req.body;

  await clerkClient.users.updateUser(userId, {
    publicMetadata: { city, country, onboardingCompleted: true },
  });

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("🚀 Servidor activo en http://localhost:3000");
});
