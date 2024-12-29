import express from "express"
import { clerkWebhook } from "../controllers/user.controller.js"
const Router = express.Router()

Router.post("/webhooks",clerkWebhook)

export default Router