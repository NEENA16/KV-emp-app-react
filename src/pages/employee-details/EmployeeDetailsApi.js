import { empApi } from "../../services/BaseApi"

const employeeDetailsApi = empApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
              query: id =>`employee/${id}`,
          }),
  }),
  overrideExisting: false,
})

export const { useGetEmployeeQuery} = employeeDetailsApi