import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getStorage } from './util';
export const empApi = createApi({
    reducerPath: 'empApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: (headers) =>{
        const token = getStorage("idToken");
        if (token) {
            headers.set('authorization',`Bearer ${token}`)
        }
        return headers
    },
}),
    refetchOnMountOrArgChange:true,
    employeelist: ["EmployeeList"],
    endpoints: (builder) => ({
        getallEmployee: builder.query({
            query: ( )=>'employee',
            providesTags:["EmployeeList"],
        }),
        getEmployee: builder.query({
            query: id =>`employee/${id}`,
        }),
        deleteEmployeeById: builder.mutation({
            query: (id) => {
                return ({ url: `employee/${id}`, method: 'DELETE'})},
                invalidatesTags: ["EmployeeList"],
        }),
        createEmployee: builder.mutation({
            query: (payload) =>{
                return ({
                    url: 'employee', 
                    method: 'POST',
                    body: payload
                })},
                invalidatesTags: ["EmployeeList"],
        }),
        updateEmployee: builder.mutation({
            query: ({id,payload}) =>{
                return ({
                    url: `employee/${id}`, 
                    method: 'PUT',
                    body: payload
                })},
                invalidatesTags: ["EmployeeList"],
        }),
        loginEmployee: builder.mutation({
                query: (payload) =>{
                    return({
                        url: 'employee/login',
                        method: 'POST',
                        body: payload
                    })
                }
        })
    }),
})
export const { useGetallEmployeeQuery,useGetEmployeeQuery,useDeleteEmployeeByIdMutation,useCreateEmployeeMutation,useUpdateEmployeeMutation,useLoginEmployeeMutation} = empApi;
