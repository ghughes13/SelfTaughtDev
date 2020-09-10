require("dotenv").config()
// const stripe = require("stripe")()
// const axios = require("axios")
var mongoose = require("mongoose")

mongoose.connect(process.env.DBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

console.log(process.env.DBURL)

mongoose.connection.on("connected", () => {})

//Schema
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  accountType: String,
})

const newUserModel = mongoose.model("user", userSchema)

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
}

function handleRequest(event, context, callback) {
  console.log("submitting")
  try {
    console.log("trying to parse body")
    body = JSON.parse(event.body)
  } catch {
    console.log("there was an error; Sending response")
    sendErrorMessage(400, "Body not formatted in JSON.", callback)
  }
  console.log("No Error; Trying to save to DB")
  const newUser = new newUserModel({
    userName: body.username,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    accountType: "lite",
  })

  newUser.save(error => {
    if (error) {
      console.log("error")
    } else {
      console.log("saved data!")
    }
  })

  return callback(null, {
    statusCode: 200,
    headers,
  })
}

function sendErrorMessage(statusCode, message, callback) {
  console.log("below is the error message")
  console.error(message)

  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({ message }),
  })
}

exports.handler = handleRequest
