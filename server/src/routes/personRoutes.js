
import express from "express";
import {getAllPersons,
        createPerson,
        updatePerson,
        deletePerson,
        getPersonById,
} from "../controllers/personController.js";

const router = express.Router();

router.get("/", getAllPersons); // -> get all user 
router.get("/:id", getPersonById);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
