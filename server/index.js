const express=require("express");
const app=express();
const bodyParser =require("body-parser");
const mysql=require("mysql");
const cors= require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password: "password",
    database: "empsystemnew",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req,res) => {
    const sqlGet =`SELECT * FROM project_db`;
    db.query(sqlGet, (error, result) =>{
        res.send(result);
    });
});


app.post("/api/post", (req, res) =>{
    const {project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID}=req.body;
    const sqlInsert=
    `INSERT INTO project_db(project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sqlInsert,[project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID],(error,result) => {
        if (error){
            console.log(error);
        }
    });

}); 


app.delete("/api/remove/:project_ID", (req, res) =>{
    const { project_ID }=req.params;
    const sqlRemove=
    `DELETE FROM project_db WHERE project_ID = ?`;
    db.query(sqlRemove,[project_ID],(error,result) => {
        if (error){
            console.log(error);
        }
    });

});

app.get("/api/get/:project_ID", (req, res) => {
    const { project_ID } =req.params;
    const sqlGet= `SELECT * FROM project_db WHERE project_ID= ?`;
    db.query(sqlGet,project_ID,(error, result) =>{
        if (error){
            console.log(error);
        }
        res.send(result);

    });

});


app.put("/api/put/:project_ID",(req, res) => {
    const { project_ID } =req.params;
    const {project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID}= req.body;
    const sqlUpdate =`UPDATE project_db SET project_company = ? ,project_name = ? ,start_date = ?,due_date = ? ,description = ? ,supervisor_ID = ?,manager_ID =? WHERE project_ID = ?`;
    db.query(sqlUpdate, project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID, project_ID, (error, result) => {
        if (error){
            console.log(error);
        }
        res.send(result);
    });
});



 


app.listen(5000 , () =>{
    console.log("Server is running on port 5000");

})