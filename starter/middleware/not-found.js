const notFound = (req, res)=>{
 res.status(404).send('this resource does not exist, fuck yeah');
}


module.exports = notFound;