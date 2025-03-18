
import Person from "../models/Person.js";

// get all user
// path=> http://localhost:5000/api/person/ get request
export const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving persons", error });
    }
};

//get single user by id 
// http://localhost:5000/api/pseron/:id
export const getPersonById = async (req, res) =>{
    try{
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.json(person);
    }
    catch(err){
        res.status(500).json({ message: error.message });
    }
}
// post method 
// http://localhost:5000/api/person/create/-> post method
export const createPerson = async (req, res) => {
    try {
        const {name,age, gender, mobile, email } = req.body;
        if (!name || !age || !gender || !mobile || !email){
            return res.status(400).json({ 
                message: "All fields are required" 
            });
        }
        // check if person having the unique email
        const isExisting = await Person.findOne({ email });
        if (isExisting) {
            return res.status(400).json({ message: "Email already in use" });
        }
        const newPerson = new Person({ name, age, gender, mobile, email });
        await newPerson.save();
        res.status(201).json({ message: "Person created successfully", newPerson });
    } catch (error) {
        res.status(500).json({ message: "Error creating person", error });
    }
};


// update the person by id 
// http://localhost:5000/api/person/update/:id ->put request
export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPerson = await Person.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedPerson) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json({ message: "Person updated", updatedPerson });
    } catch (error) {
        res.status(500).json({ message: "Error updating person", error });
    }
};

// deleting the person by id
// http://localhost:5000/api/person/delete/:id ->put request
export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await Person.findByIdAndDelete(id);
        if (!deletedPerson) {
            return res.status(404).json({ message: "Person not found" });
        }
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting person", error });
    }
};