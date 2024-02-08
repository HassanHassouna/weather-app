import axios from 'axios'
import useSwr from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export const useGetCities = () => {
    const {data, error} = useSwr(`http://localhost:4200/api/v1/cities`, fetcher)
    return {
        cities: data,
        loading: !error && !data,
        isError: error
    }
}
