import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from '../partials/Header';
import { UserContext } from './UseContext';

function Update() {
  const [users, setUsers] = useContext(UserContext);
  const history = useHistory();

  const {id} = useParams();
  const userDetail = users.find(uId => uId.id === id);

  const uId = id-1

  const [user, setUser] = useState({
    name: '',
    email: '',
    date: '',
    profession: '',
    password: '',
  })

  const handleBlur = (event) => {
    let isFieldValid = true;

    if (event.target.name === 'name') {
      isFieldValid = true;
    }
    else if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    else if (event.target.name === 'date') {
      isFieldValid = true;
    }
    else if (event.target.name === 'profession') {
      isFieldValid = true;
    }
    else if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 4;
      const isPasswordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && isPasswordHasNumber;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(user.name && user.email && user.date && user.profession && user.password){
        users[uId].name = user.name;
        users[uId].email = user.email;
        users[uId].date = user.date;
        users[uId].profession = user.profession;
        users[uId].password = user.password;
        history.push('/user/'+id);
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Update Your Info.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-red-600">*</span></label>
                      <input name="name" id="name" type="text" className="form-input w-full text-gray-800" placeholder={userDetail.name} onBlur={handleBlur} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input name="email" id="email" type="email" className="form-input w-full text-gray-800" placeholder={userDetail.email} onBlur={handleBlur} required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="date">Date of Birth <span className="text-red-600">*</span></label>
                      <input name="date" id="date" type="date" className="form-input w-full text-gray-800" placeholder={userDetail.date} onBlur={handleBlur} required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="profession">Profession <span className="text-red-600">*</span></label>
                      <input name="profession" id="profession" type="profession" className="form-input w-full text-gray-800" placeholder={userDetail.profession} onBlur={handleBlur} required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input name="password" id="password" type="password" className="form-input w-full text-gray-800" placeholder={userDetail.password} onBlur={handleBlur} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <input className="h-10 text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit" value="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Update;