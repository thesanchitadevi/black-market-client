/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Pages/Shared/Loading/Loading';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    

    const handleDeleteDoctor = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${user.name} Deleted successfully.`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>All Users</h1>
            </div>
            <div class="rounded-lg border border-gray-200 w-full ">
                <table class="w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    ID
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Name
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Email
                                </div>
                            </th>
                            
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Role
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Action
                                </div>
                            </th>

                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {i + 1}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user.name}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                    

                                    <td class="whitespace-nowrap px-4 py-2">
                                        {user.role}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                        {
                                            user?.role !== "admin" &&
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                            onClick={() => {
                                                setShowModal(true);
                                                setDeletingDoctor(user)

                                            }}
                                        >
                                            Delete

                                        </button>
                                        }
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                showModal && deletingDoctor && <ConfirmationModal
                    setOpenModal={setShowModal}
                    title={`Are you sure you want to delete?`}
                    
                    handleDeleteDoctor={handleDeleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;