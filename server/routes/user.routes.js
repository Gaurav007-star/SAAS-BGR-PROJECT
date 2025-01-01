import express from "express"
import { register, update,getUser } from "../controllers/user.controller.js"
const Router = express.Router()

// Router.post("/webhooks",clerkWebhook)
Router.get("/:id",getUser)
Router.post("/register",register)
Router.patch("/update/:id",update)

export default Router