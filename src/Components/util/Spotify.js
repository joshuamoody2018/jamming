let usrAccToken = undefined;

const Spotify = {
    getAccessToken(){
        if(usrAccToken){
            return usrAccToken;
        }
        
    }
};

export default Spotify;