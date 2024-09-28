import { Request, Response } from "express";

const users = [
  {
    "id": 1,
    "email": "cegleton0@theatlantic.com",
    "password": "$2a$04$.Lo65fGZ2XK.bLGWY2HBwuIUG/J3CwTzvbfIYAmf4FjJplbAamjBW"
  }, {
    "id": 2,
    "email": "ddelacoste1@ihg.com",
    "password": "$2a$04$vLSkTb0LKqONj5vcy70gVeGMXQHFM5jc3GBpFxwcta4vcjAF7j66."
  }, {
    "id": 3,
    "email": "tpardie2@sourceforge.net",
    "password": "$2a$04$/s77qp9Xfn7mYQQ.JnduHexgshemtIPro0zn1dUU79tdcSD.Kk5e6"
  }
]

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({
    users
  })
}

export const createUser = (req: Request, res: Response) => {
  const { email, password } = req.body

  let user = users.find(u => u.email === email)

  if (user) {
    res.status(400).json({
      message: "A user with that email already exists"
    })
  } else {
    user = {
      id: users.length + 1,
      email,
      password
    }
  
    users.push(user)
  
    res.status(201).json({
      newUser: user
    })
  }

}