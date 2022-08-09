// import { empApi } from './emptySplitApi'
import { empApi } from "../../services/BaseApi"

const cardApi = empApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployeeById: builder.mutation({
                query: (id) => {
                    return ({ url: `employee/${id}`, method: 'DELETE'})},
                    invalidatesTags: ["EmployeeList"],
            }),
  }),
  overrideExisting: false,
})

export const { useDeleteEmployeeByIdMutation } = cardApi