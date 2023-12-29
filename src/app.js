const express=require("express")
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")
const routes=require("./routes/main")
const bodyParser=require("body-parser")
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/static",express.static("public"))
app.use("",routes)

app.set("view engine", "hbs")
app.set("views", "views")
hbs.registerPartials("views/partials")

app.get("/", (req,res)=>{
    res.send("this is data from server")
})

//db connections
mongoose.connect("mongodb+srv://ksubhojit20:m0zynELn3NnQtVd6@cluster0.g7elimb.mongodb.net/",{
    dbName: 'website_tut' // Add this line with your actual database name
}).then(() => {
    console.log("Connected to the database");

    // Service.create([
    //   {
    //     icon:"fab fa-accusoft",
    //     title:"Provide Best Courses",
    //     description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro officiis nihil excepturi harum. Laborum?",
    //     linkText:"https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    //     link:"Check"
    //   },
    //   {
    //     icon:"fab fa-affiliatethme",
    //     title:"Learn Projects",
    //     description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro officiis nihil excepturi harum. Laborum?",
    //     linkText:"https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    //     link:"Learn"
    //   },
    //   {
    //     icon:"fab fa-affiliatethme",
    //     title:"Practice DSA",
    //     description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro officiis nihil excepturi harum. Laborum?",
    //     linkText:"https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    //     link:"Practice"
    //   },
    // ])

    // Slider.create([
    //   {
    //     title:"Wallpaper 1",
    //     subTitle:" Wavy Black and White",
    //     imageUrl:"/static/images/p1.jpg"
    //   },
    //   {
    //     title:"Wallpaper 2",
    //     subTitle:"Abstract Black and White",
    //     imageUrl:"/static/images/p2.jpg"
    //   },
    //   {
    //     title:"Wallpaper 3",
    //     subTitle:"Pink Car",
    //     imageUrl:"/static/images/p3.jpg"
    //   },
    // ])

    // Detail.create({
    //   brandName:"Paras_Times",
    //   brandIconUrl:"public\images\pic.jpg",
    //   links:[
    //     {
    //       label:"Home",
    //       url:"/"
    //     },
    //     {
    //       label:"Services",
    //       url:"/services"
    //     },
    //     {
    //       label:"Gallery",
    //       url:"/gallery"
    //     },
    //     {
    //       label:"About",
    //       url:"/about"
    //     },
    //     {
    //       label:"Contact Us",
    //       url:"/contact-us"
    //     },
    //   ]

    // })
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

app.listen(process.env.PORT | 5556, ()=>{
    console.log("server started")
})
