const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        console.log(data)
        res.json([].concat(JSON.parse(data)))
        
    })
})

router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
       let newNote = req.body
       newNote.id = uuidv4();
       let oldNotes = [].concat(JSON.parse(data))
       oldNotes.push(newNote);
        //needs to be inside of readFile or else it cant read the note
       fs.writeFile("./db/db.json", JSON.stringify(oldNotes), (err) => {
           if(err) throw err;
            res.json(oldNotes)

       })

    })
})

//use filter to make the delete part


module.exports = router;