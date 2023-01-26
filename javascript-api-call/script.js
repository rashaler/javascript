fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        if (res.ok) {
            console.log("Post Successful")
        } else {
            console.log("POST Not Successful")
        }
        return res.json()
    })
    .then(data => console.log(data))

fetch('https://reqres.in/api/users', {
    method: 'GET',
    headers: {
        "Content-Type": 'application/json'
    }
})
    .then(res => {
        if (res.ok) {
            console.log("GET Successful")
        } else {
            console.log("GET Not Successful")
        }
        return res.json()
    })
    .then(data => console.log(data))