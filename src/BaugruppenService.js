import axios from 'axios';

const url = 'http://localhost:5000/Baugruppe/';

class BaugruppenService {

    static getBaugruppe() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(baugruppe => ({
                        ...baugruppe
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    //Create Post
    static insertBaugruppe(name, gewicht, laenge, breite, hoehe) {
        return axios.post(url, {
            name, 
            gewicht, 
            laenge,
            breite, 
            hoehe
        });
    }

    //delete Post
    static deleteBaugruppe(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default BaugruppenService;