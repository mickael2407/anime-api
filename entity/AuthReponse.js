module.exports = class AuthReponse{
    constructor(username, nbConnections, lastConnection){
        this.username = username;
        this.nbConnections = nbConnections;
        this.lastConnection = lastConnection;
    }   
}