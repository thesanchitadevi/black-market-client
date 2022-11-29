import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleVerified = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Verified' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Congratulation for being verified seller');
                    refetch();
                }
            })
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>All Sellers</h1>
            </div>
            <div class="rounded-lg border border-gray-200 w-full ">
                <table class="w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            
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
                                    Admin
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Role
                                </div>
                            </th>

                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {
                            users.map((user, i) =>
                                user?.role === "seller" && 
                                <tr key={user._id}>
                                   
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user.name}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {
                                                user?.role !== 'admin' && <button onClick={() => handleVerified(user._id)}>
                                                    <strong
                                                        class="rounded bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700"
                                                    >
                                                        {user?.status ? user?.status : 'Verify'}

                                                    </strong>
                                                </button>
                                            }
                                    </td>

                                    <td class="whitespace-nowrap px-4 py-2">
                                        {user.role}
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;