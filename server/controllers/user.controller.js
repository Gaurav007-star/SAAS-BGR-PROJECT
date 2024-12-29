import {Webhook} from "svix"


// https://
const clerkWebhok = async(req,res)=>{
    try {
        const whook = new Webhook(process.env.SIGNING_SECRET)

        const responseData = await whook.verify(req.body,{
            // 
        })


    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}