// import { empApi } from './emptySplitApi'

import { empApi } from "../../services/BaseApi"

const createEmployeeApi = empApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
        query: (payload) =>{
            return ({
                url: 'employee', 
                method: 'POST',
                body: payload
            })},
            invalidatesTags: ["EmployeeList"],
    }),
    getEmployee: builder.query({
                query: id =>`employee/${id}`,
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
  }),
  overrideExisting: false,
})

export const { useCreateEmployeeMutation,useGetEmployeeQuery,useUpdateEmployeeMutation } = createEmployeeApi