// server.js
const jsonServer = require('json-server')
const path = require('path')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const userdb = require('./db.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

server.use(middlewares)
server.use(/^(?!\/login).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Bad authorization header'
    res.status(status).json({ status, message })
    return
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const status = 401
    const message = 'Error: access_token is not valid'
    res.status(status).json({ status, message })
  }
})

server.use('/api', router)
server.post('/login', (req, res) => {
  const { email, password } = req.body

  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }
  const access_token = createToken({ email, password })
  res.status(200).json({ access_token })
})

server.use(jsonServer.bodyParser)


server.listen(3000, () => {
  console.log('🏃 Mocked server is running on port 3000...')
})