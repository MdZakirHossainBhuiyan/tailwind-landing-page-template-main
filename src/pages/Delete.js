import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from './UseContext';
import Header from '../partials/Header'

const Delete = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const history = useHistory();

    const userDetail = users.find(uId => uId.id === id);

    const handleCancel = (event) => {
        event.preventDefault();
        history.push('/user/'+id);
    }

    const handleDelete = () => {
        const user = users.filter((user) => user.id !== id);
        setUsers([...user]);
        history.push('/signup');
      };

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            <Header />

            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1 font-mono">Are You sure?</h1>
                            </div>
                            <div className="flex mx-20 px-20">
                                <div className="bg-white flex flex-center justify-center items-center">
                                    <button onClick={handleCancel} className="mx-20 py-4 px-20 bg-green-500 text-white rounded text-2xl">Cancel</button>
                                </div>
                                <div className="bg-white flex flex-center justify-center items-center">
                                    <button onClick={handleDelete} className="mx-20 py-4 px-20 bg-red-500 text-white rounded text-2xl">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Delete;