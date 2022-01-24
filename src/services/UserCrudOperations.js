const fs = require('fs')

exports.CreateUser = (args) => {
  fs.writeFile('log.txt', args, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
  })
  return {
    result: [args.name, args.email]
  }
}

exports.ReadUser = (args) => {
  return {
    result: [args.name, args.email]
  }
}

exports.UpdateUser = (args) => {
  return {
    result: [args.name, args.email]
  }
}

exports.DeleteUser = (args) => {
  return {
    result: [args.name, args.email]
  }
}
