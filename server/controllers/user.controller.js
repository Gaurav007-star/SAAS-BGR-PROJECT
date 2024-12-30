import { Webhook } from "svix";
import UserModel from "../models/user.model.js";

// https://localhost:4000/api/user/webhooks
export const clerkWebhook = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      //
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"]
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created":
        const createUser = await UserModel.create({
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstname: data.first_name,
          lastname: data.last_name
        });

        res.json({createUser});
        break;

      case "user.updated":
        const updateUser = await UserModel.updateOne(
          {
            _id: data.id
          },
          {
            $set: {
              email: data.email_addresses[0].email_address,
              photo: data.image_url,
              firstname: data.first_name,
              lastname: data.last_name
            }
          }
        );

        res.json({});
        break;

      case "user.deleted":
        const userDeleted = UserModel.deleteOne({
          _id: data.id
        });
        res.json({});
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
