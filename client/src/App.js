import './App.css';
import Search from './components/input'
import CityCard from "./components/Card";
import {useState} from "react";
import {useGetCity} from './api/getCity'
import SkelatonCard from './components/Skelaton'
import {useGetCities} from "./api/getAllCities";

function App() {
    const [search, setSearch] = useState("")
    const {city, isLoading} = useGetCity(search)
    const {cities, loading} = useGetCities()
    return (
        <div className="App">
            <Search setSearch={setSearch}/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {isLoading ? <SkelatonCard/> : search.length > 0 &&
                    <CityCard city={city}/>
                }
                {
                    loading ? <SkelatonCard/> :
                        cities?.length > 0 &&
                        cities.map(city => {
                            return <CityCard city={city}/>
                        })
                }
            </div>
        </div>
    );
}

export default App;

