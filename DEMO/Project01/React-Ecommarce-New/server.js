const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J5v1gIiI1LbArDLghO6XsioS97zB37IhpjOsFjYoSX1Lw4tWVKTUvAjT6pV1UYFjJ8T9rz371bL2DAyD16XNUKJ00V38b9ozA")
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req,res) => {
    res.send("Welcome into react shop website")
});
app.post('/checkout' , async (req , res)=>{
    let error;
    let status;
    try {
        const{product, token} = req.body;
        const customer = await stripe.customer.create({
            email: token.email,
            source: token.id
        })
        const charge = await stripe.charges.create({})
    } catch (error) {
        console.log(error);
        error = ""
    }
})

app.listen(8080, () => {
    console.log("Your app is running on port number 8080")
})