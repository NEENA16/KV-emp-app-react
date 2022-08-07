import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const empApi = createApi({
    reducerPath: 'empApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        getallEmployee: builder.query({
            query: ( )=>'employee',
        }),
        getEmployee: builder.query({
            query: id =>`employee/${id}`,
        }),
        deleteEmployeeById: builder.mutation({
            query: (id) => {
                return ({ url: `employee/${id}`, method: 'DELETE'})}
        }),
    }),
})
export const { useGetallEmployeeQuery,useGetEmployeeQuery,useDeleteEmployeeByIdMutation} = empApi;
