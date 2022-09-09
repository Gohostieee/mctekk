import type { NextApiRequest, NextApiResponse } from 'next'
import type {user} from "../../interface"
import axios from "axios"
const userInformationAmount = 6

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {body:user,method} = req
    console.log(req.body)
    switch(method) {
        case 'GET': 

        break;


        case 'POST':
            console.log("wow",user)
            if(Object.keys(user).length !== userInformationAmount) {
                res.status(200).send({status:"400",response:"not enough arguments"})
                return
            }
            axios({
                method:'POST',
                url:'https://apidev.kanvas.dev/v2/v1/users',
                data:user    
            }).then(x => {res.status(200).send({status:200,response:x.data})}).catch(x=>{res.send({status:x.response.status,response:x.data.session})})
            break;
        

    }
}