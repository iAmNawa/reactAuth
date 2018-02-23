// Auth test

authmadness({
  route:'signup', // customize options here signup, signin
  email: 'anyemail',
  password: 'anypassword',
}, (e,b)=> {
  if (e)
    return console.log(e)
  console.log(b)
})

function authmadness(json, cb) {
  require('request').post({
    uri:`http://localhost:3449/${json.route}`, json
  }, (e,r,b)=>  cb(e,b))
}
