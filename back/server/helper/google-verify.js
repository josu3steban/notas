const { OAuth2Client } = require('google-auth-library');


const clientID = process.env.GOOGLE_CLIENT_ID;
const client   = new OAuth2Client( clientID );


const googleVerify = async( google_token ) => {


    const ticket = await client.verifyIdToken({
        IdToken: google_token,
        audience: clientID
    });

    const { name, email, picture } = ticket.getPayload();
    

    return { name, email, picture }
    
}

module.exports = {

    googleVerify
    
}