fetch("http://localhost:3000/")
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log("Error fetching:" + error)
    })