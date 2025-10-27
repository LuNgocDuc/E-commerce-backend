const User = require('../models/UserModel');
const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = newUser
        try {
            const checkUser = await User.findOneAndUpdate({
                email: email
            })
            if(checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'The email is already',
                })
            }
            const createdUser = await User.create({
                name, 
                email, 
                password, 
                confirmPassword, 
                phone
            }) 
            if(createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser,
                })
            }
        }
        catch(e) {
            console.error('LỖI TỪ USER SERVICE:', e);
            reject(e)
        }
    })
}

module.exports = {
    createUser
}