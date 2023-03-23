const router = require("express").Router();
const { User } = require("../Models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error){
            console.log(`hit 1`)
			return res.status(400).send({ message: error.details[0].message });
        }
        
		const user = await User.findOne({ email: req.body.email });
		if (!user){
            console.log(`hit 2`)
			return res.status(401).send({ message: "Invalid Email or Password" });
        }

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
            console.log(req.body.password);
            console.log(user.password);

		if (!validPassword){
            console.log(`hit 3`)
			return res.status(401).send({ message: "Invalid Email or Password" });
        }

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
        console.log(`hit 4`)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;

// const router = require('express').Router();
// const {User} = require('../Models/user');
// const Joi= require("joi");
// const bcrypt=require("bcrypt");


// router.post("/",async(req,res)=>{
//     try{
//         const{error} = validate(req.body);

//         if(error){
//             console.log(`hit1`)
//             return res.status(400).send({message:error.details[0].message});
//         }
        
//         const user= await User.findOne({email: req.body.email});

//         if(!user){
//             console.log(`hit 2`)
//             return res.status(401).send({message:`Invalid Email or Password`});
//         }

//         const validPassword = await bcrypt.compare(
//             req.body.password, user.password
//         );

//         if(!validPassword){
//             console.log(`hit 3`)
//             return res.status(401).send({message:`Invalid Password`});
//         }

//         const token=user.generateAuthToken();
//         res.status(200).send({data:token,message:`logged in successfully`});
//     }

//     catch(err){
//         console.log(`hit 4`);
//         res.status(500).send({message:`internal server error: ${err.message}`});
//     }
// });

// const validate = (data) =>{
//     const schema = Joi.object({
//         email: Joi.string().email().required().label("Email"),
//         password: Joi.string().passowrd().required().label("Password")
//     });
//     return schema.validate(data);
// }