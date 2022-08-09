import { empApi } from "../../services/BaseApi"

const employeeListApi = empApi.injectEndpoints({
  endpoints: (builder) => ({
    getallEmployee: builder.query({
                query: ( )=>'employee',
                providesTags:["EmployeeList"],
            }),
  }),
  overrideExisting: false,
})

export const { useGetallEmployeeQuery } = employeeListApi