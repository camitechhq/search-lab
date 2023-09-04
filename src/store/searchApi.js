import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const searchApi = createApi({
    reducerPath: "search",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3003"
    }),
    endpoints(builder) {
        return {
            fetchSearch: builder.query({
                query: () => {
                    return {
                        url: "/aboutWidget",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchSearchQuery } = searchApi;
export { searchApi };