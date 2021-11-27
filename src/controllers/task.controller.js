
import Task from "../models/Task";
   
   
   export const renderTasks  =  async (req, res) =>  {
       const tasks = await Task.find().lean();
  
    res.render("index", { tasks: tasks });
   };

   export const addTasks = async (req, res) => {
    try {
      const task = Task(req.body);
  
      await task.save();
  
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
  
      res.render("edit", { task: task });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateTasks = async (req, res) => {
    const { id } = req.params;
  
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  };

  export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
  
    res.redirect("/");
  };

  export const done = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
  
    task.done = !task.done;
    await task.save();
  
    res.redirect("/");
  };