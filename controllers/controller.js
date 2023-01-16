import StudentModel from "../models/Student.js"

const getAllDoc = async (req, res) => {
    try {
        const result = await StudentModel.find();
        res.render("index.ejs", { data: result })

    } catch (error) {
        console.log(error)
    }
}
const createDoc = async (req, res) => {

    const doc = await new StudentModel({ name: req.body.name, age: Number(req.body.age), class: req.body.class });

    // saving doc 
    const result = await doc.save()
    // console.log(result)
    res.redirect('/')
}
const editDoc = async (req, res) => {
    try {
        const result = await StudentModel.findById(req.params.id)
        res.render("edit.ejs",{data:result})

    } catch (error) {
        console.log(error)
    }
}
const updateDocById = async (req, res) => {
    try {
        const result = await StudentModel.findByIdAndUpdate(req.params.id, {name:req.body.name,age: req.body.age,class:req.body.class})
        res.redirect('/')
    } catch (error) {
        console.log(error)
        
    }
 
}
const deleteDocById = async (req, res) => {
    try {
        const result= await StudentModel.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
export { getAllDoc, createDoc, editDoc, updateDocById, deleteDocById };