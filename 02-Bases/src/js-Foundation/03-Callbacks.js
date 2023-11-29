const usars = [
    {
        id:1,
        name:'John Doe',
    },
    {
        id:1,
        name:'John Doe',
    }
]


function getUserById( id ){
    URLSearchParams.find( function(user){
        return user.id === id;
    });

    console.log({ user: user});
}

