
export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123sss555',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "SIGNUP": {
         
            console.log("in dispacth reducer",action.payload);
            let usersClone=state.users.slice(0);
            usersClone.push(action.payload)
            console.log("checking",usersClone);

            return {
                ...state,
                users:usersClone
                
            }
            
        }
        case "LOGIN": {    
            console.log("in dispacth reducer",action.payload);
            let usersClone=state.users.slice(0);
            let authUSer=usersClone.filter((user)=>user.email === action.payload.email && user.password === action.payload.password)
            let p = authUSer[0]
            console.log(p,'after');
         
            return {
                ...state,
            }
            
        }
        default:
            return state;

    }
}

