import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../partials/Header';
import { UserContext } from './UseContext';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    const user = users.find(uId => uId.id === id);

    console.log(user.isLoggedIn);

    const history = useHistory();

    const handleUpdate = (event) => {
        event.preventDefault();
        history.push('/userUpdate/'+user.id);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        history.push('/userDelete/'+user.id);
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-5">
                            <h3 className="h3 my-5">Welcome, {user.name}.</h3>
                        </div>
                        <div className="w-6xl mx-10 mb-5 rounded justify-center items-center">
                            <table class="table-fixed border border-black mx-20">
                                <tbody>
                                    <tr class="bg-white">
                                        <th className="w-60 h-10">Name:</th>
                                        <td className="w-80">{user.name}</td>
                                    </tr>
                                    <tr class="bg-black text-white h-10">
                                        <th>Email:</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr class="bg-white h-10">
                                        <th>Date of Birth:</th>
                                        <td>{user.date}</td>
                                    </tr>
                                    <tr class="bg-black text-white h-10">
                                        <th>Profession:</th>
                                        <td>{user.profession}</td>
                                    </tr>
                                    <tr class="bg-white h-10">
                                        <th>Password:</th>
                                        <td>{user.password}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex my-10">
                            <div className="flex">
                                <button onClick={handleUpdate} className="py-5 px-20 bg-blue-500 text-white rounded mx-5">Update Profile</button>
                            </div>
                            <div>
                                <button onClick={handleDelete} className="py-5 px-20 bg-red-500 text-white rounded mx-5">Delete Profile</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Profile;