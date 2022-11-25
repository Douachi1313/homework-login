require("dotenv").config()

const{
    PORT,
    URL,
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERIP,
    APPID
} = process.env

module.exports = {
    port: PORT,
    url: URL,
    firebaseConfig : {
        apiKey: "AIzaSyAMdZ3UpjPMvOY_eOn7bl3MJW6bqOd1-_k",
        authDomain: "ji-node.firebaseapp.com",
        projectId: "ji-node",
        storageBucket: "ji-node.appspot.com",
        messagingSenderId: "111318107850",
        appId: "1:111318107850:web:70bf580f20372bdc385633"
      }
}