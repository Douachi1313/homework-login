const admin = require("firebase-admin")
const config = require("./config")
const serviceAccount = require("./ji-node-firebase-adminsdk-xp2di-ae8076465c.json")
const firebaseConfig = config.firebaseConfig

const database = admin.initializeApp({
    firebaseConfig,
    credential: admin.credential.cert(serviceAccount)
})

module.exports = {
    database 
}