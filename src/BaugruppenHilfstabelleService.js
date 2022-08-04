import axios from 'axios';

const url = 'http://localhost:5000/BaugruppeHilfstabelle/';

class BaugruppenHilfstabelleService {

    static getBaugruppeHilfstabelle() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(baugruppeH => ({
                        ...baugruppeH
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    //Create Post
    static insertBaugruppeHilfstabelle(baugruppe, unterElement, anzahl) {
        return axios.post(url, {
            baugruppe, 
            unterElement, 
            anzahl
        });
    }

    //delete Post
    static deleteBaugruppeHilfstabelle(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default BaugruppenHilfstabelleService;