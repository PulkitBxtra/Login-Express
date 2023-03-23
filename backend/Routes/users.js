const router = require("express").Router();
const { User, validate } = require("../Models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	// try {
	// 	const { error } = validate(req.body);
	// 	if (error){
    //         console.log(`hit 1`)
            
	// 		return res.status(400).send({ message: error.details[0].message });
    //     }

	// 	const user = await User.findOne({ email: req.body.email });
	// 	if (user){
    //         console.log(`hit 2`);
    //         return res
    //         .status(409)
    //         .send({ message: "User with given email already Exist!" });
    //     }

	// 	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	// 	const hashPassword = await bcrypt.hash(req.body.password, salt);

	// 	await new User({ ...req.body, password: hashPassword }).save();
	// 	res.status(201).send({ message: "User created successfully" });
	// } catch (error) {
    //     console.log(`hit 3`);
	// 	res.status(500).send({ message: "Internal Server Error" });
	// }

    try{
        const {error} = validate(req.body);

        if(error) {
            return res.status(400).send({message: error.details[0].message});
        }

        const user = await User.findOne({email: req.body.email});

        if(user){
            return res.status(409).send({message:"User already exists with this mail"});
        }

        const salt=await bcrypt.genSalt(parseInt(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password, salt);
        console.log(hashPassword);

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"User created successfully"});
    }

    catch(error){
        console.log(error);
    }
});

module.exports = router;

// const router=require('express').Router();
// const {User,validate} = require('../Models/user');
// const bcrypt = require('bcrypt');

// router.post("/",async(req,res)=>{
//     try{
//         const {error} = validate(req.body);

//         if(error) {
//             console.log(`hit1`);
//             return res.status(400).send({message: error.details[0].message});
//         }

//         const user=await User.findOne({email: req.body.email});

//         if(user){
//             return res.status(409).send({message:"User already exists with this mail"});
//         }

//         const salt=await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword=await bcrypt.hash(req.body.password, salt);

//         await new User({...req.body,password:hashPassword}).save();
//         res.status(201).send({message:"User created successfully"});
//     }

//     catch(err){
//         res.status(500).send({message:"Internal Server Error"});
//         console.log(`hit2`);
//     }
// })

// module.exports=router;