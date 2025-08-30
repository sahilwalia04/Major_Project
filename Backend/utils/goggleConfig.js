const { google } = require('googleapis');
const dotenv = require('dotenv');
dotenv.config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
console.log("GOOGLE_CLIENT_ID", GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET", GOOGLE_CLIENT_SECRET);
console.log("GOOGLE_REDIRECT_URI", GOOGLE_REDIRECT_URI);


exports.oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
   GOOGLE_REDIRECT_URI
);


