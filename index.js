const express=require("express");
const app=express();

const Students=require("./student.route")


app.use(Students);

app.use('/',(req,res,next)=>{
    res.send(`<a style="font-size:3em;" href="/students">students</a>`)
});

app.listen(3000,(err)=>{
   
    console.log(`server listen on port 3000 `);
});



// `<ul>
//     <li>ahmed</li>
//     <li>mohamed</li>
//     <li>omar</li>
//     <li>abdelrahman</li>
//     </ul>`