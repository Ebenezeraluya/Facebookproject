//DATABASE OF 10 USERS>
var database = [
    {
        username: 'Ebeco',
        password: 'Ebenezer'
    },
    {
        username: 'Grace',
        password: 'Ose'
    },
    {
        username: 'Kenny',
        password: 'Bukky'
    },
    {
        username: 'Esele',
        password: 'Nehemiah',
    },
    {
        username: 'Mabel',
        password: 'Aluya',
    },
    {
        username: 'Idemudian',
        password: 'Paul',
    },
    {
        username: 'Williams',
        password: 'Kumuyi',
    },
    {
        username: 'Victor',
        password: 'Gtext',
    },
    {
        username: 'Jonathan',
        password: 'Shekwonya',
    },
    {
        username: 'Joshua',
        password: 'Selman',
    },
    ]
    var newsfeed = [{
        username: 'Ebekonnect!!!',
        timeline: 'YOU ARE WELCOME, FEEL FREE TO COMMUNICATE!',
    },
        {
        username: 'Ebeco2',
        timeline: 'WELCOME ON BOARD!',
    },
        {
        username: 'Ebeco3',
        timeline: 'WE MOVE!',
    }
    ];
    
    function UserValid(username, password){
        for (var i=0; i < database.length; i++) {
            if(database[i].username === username.value &&
                database[i].password === password.value) {
                    return true;
                } 
            }
            return false;
    }
    function signIn(username, password) {
        if (UserValid(username, password)){
            console.log(newsfeed);
            alert(newsfeed [0].username + '\n' + newsfeed[0].timeline);
            location=("indexfeed.html")
        } else {
            alert("Unknown User");
        }
    }
    
    var userNamePrompt = document.getElementById('search1');
    var passWordPrompt = document.getElementById('search2');
    var submit = document.getElementById('submit')

