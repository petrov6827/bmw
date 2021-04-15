import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://bmw-bycicle-default-rtdb.firebaseio.com/`,
    responseType: "json",
    // headers: {
    //     'API-KEY': 'AAAAZOBc8E0:APA91bEPkzD3xmokGdRinQnbD89VcNyFnaLXORiDKIxjiJ_fRohkQnC0ibbEwxmhJ69yT-TRbPLILa74OSIc6rWlDXmE_B6-AY8CPb3xKpZyWDSf8be7W0rsxp5nFwvr23TbUMLzmhkp',
    // }
});

axios({
    method: 'post',
    url: `https://bmw-bycicle-default-rtdb.firebaseio.com/`,
    data: {
        name: 'pokemon',
        phone: '02'
    }
})