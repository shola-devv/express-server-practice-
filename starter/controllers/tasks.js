const Task = require('../models/task');
const wrapper =  require('../middleware/async')

const getTask = wrapper(async (req, res)=>{
    
  const tasks =  await Task.find({});
  res.status(200).json({tasks})
   
    
})
const createTask = async (req, res)=>{
     const task = await Task.create(req.body);
    res.status(201).json(task)
}
const updateTask = async (req, res)=>{
    try{
        const {id:_ID} =  req.params;
            const task  = await Task.findOne({_id: _ID});
        if(!task){
            res.status(404).json({message: "task with your id does not exist"})
        }
    } catch(error){
        res.status(500).json({message : error});
    }
    
    res.status(200).json({message: `'updated task'${req.params.body}`})
}

const deleteTask = (req, res)=>{
    res.status(200).json({message: 'deleted task'})
}


module.exports = {
    getTask,
    createTask,
    updateTask,
    deleteTask,
}
