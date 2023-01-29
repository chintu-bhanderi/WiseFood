const { data: res }  = await axios.get(`http://localhost:8000/api/slot`)
        return res.slots;