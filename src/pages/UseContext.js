import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        {id: "1", name: "zakir", email: "zakir@gmail.com", date: "6/14/1997", profession: "student", password: "1234a", isLoggedIn: false},
        {id: "2", name: "sabbir", email: "sabbir@gmail.com", date: "1/6/1993", profession: "web developer", password: "1234b", isLoggedIn: false},
        {id: "3", name: "kamal", email: "kamal@gmail.com", date: "9/20/1998", profession: "Software Engineer", password: "1234c", isLoggedIn: false},
    ]);

    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}