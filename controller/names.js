const names = require('../daty')


const sendNames = (req, res)=>{
 let { name } = req.body
    res.status(200).send(`welcome ${name}`)

}
const sendpersons = (req, res)=>{
    let { name } = req.body
    
    if(!name){
        res.status(200).json(names)
     }
     const newName = names.find((person) =>
         person.id === Number(name)
     )  

     console.log(newName)
    res.status(200).json(newName)

   }
   

module.exports = { sendNames, sendpersons }