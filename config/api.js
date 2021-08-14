import axios from 'axios'

let api= axios.create({
    headers:{
    'Client-Id' : `${process.env.CLIENT_ID}`,
    'Authorization' : `Bearer ${process.env.ACCESS_TOKEN}`,
    }
  })

  export default api