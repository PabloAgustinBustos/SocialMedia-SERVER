import express from "express";
import usersRoutes from "./routes/user.routes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server ready");
})

app.use("/api/v1/users", usersRoutes)

export default app