import axios from 'axios'
import useSwr from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export const useGetCity = (cityName) => {
    const {data, error} = useSwr(`http://localhost:4200/api/v1/cities/${cityName}`, fetcher)
    return {
        city: data,
        isLoading: !error && !data,
        isError: error
    }
}
