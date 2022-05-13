import User from "../model/userSchema.js";

export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ Number: req.body.Number });
        if (exist) {
            userLogIn(req.body)
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

export const userLogIn = async (req, res) => {
    try {
        const user = await User.findOne({ Number: req.body.Number }, { _id: 0, "Username": 1, "Email": 1, "Number": 1 });
        if (user) {
            console.log(user);
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch',error);
        return res.status(500).json('failed');
    }
}
