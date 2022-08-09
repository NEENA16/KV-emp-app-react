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
    endpoints: () => ({}),
   
})
