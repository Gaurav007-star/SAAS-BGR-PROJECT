import { Webhook } from "svix";

// https://localhost:4000/api/user/webhooks
const clerkWebhok = async (req, res) => {
  try {
    const whook = new Webhook(process.env.SIGNING_SECRET);

    const responseData = await whook.verify(req.body, {
      //
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"]
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
