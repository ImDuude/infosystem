import axios from 'axios';

const url = 'http://localhost:5000/Bauelement/';

class BauelementService {

    //Get Baulement
    static getBauelement() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(bauelement => ({
                        ...bauelement
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    //Create Post
    static insertBauelement(name, gewicht, laenge, breite, hoehe) {
        return axios.post(url, {
            name, 
            gewicht, 
            laenge,
            breite, 
            hoehe
        });
    }

    //delete Post
    static deleteBauelement(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default BauelementService;