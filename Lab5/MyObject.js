const collegeClass = {
    id: "00", 
    name: "cat ears",
    description: "learn how to creat your own cat ears",
    course: "Cat ears 101",
};
export default function WorkingWithObjects(app) {
    app.get("/lab5/module", (req, res) => {
        res.json(collegeClass);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
   
};