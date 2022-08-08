import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const empApi = createApi({
    reducerPath: 'empApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/'}),
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
                })}
        })
    }),
})
export const { useGetallEmployeeQuery,useGetEmployeeQuery,useDeleteEmployeeByIdMutation,useCreateEmployeeMutation} = empApi;
