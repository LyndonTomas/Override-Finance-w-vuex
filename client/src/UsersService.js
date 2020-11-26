import axios from 'axios';

class UserService{
    static login(email, password){
        return axios.get(`/api/users/${email}/${password}`)
    }
    static getUsers(){
        return new Promise ((resolve, reject)=>{
            axios.get("/api/users/").then((res)=>{
                const data = res.data;
                resolve(
                    data.map(users =>({
                        _id:users._id,
                        username:users.username,
                        email:users.email,
                        password:users.password
                    }))
                );
            })
            .catch((err)=>{
                reject(err);
            })
        });
    }
}

export default UserService;
