
    function login() {
        var userName = document.getElementById('Name').value;
        var password = document.getElementById('Password').value;

        console.log("UserName: " + userName + "Password:" + password )

        if(userName === 'admin' && password === '1234') {
            alert("Login Sucess")
        } else {
            alert("Invalid Credentials")
        }

    }