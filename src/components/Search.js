import React, { useState } from 'react'
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from '../hooks/useDropdown';

const Search = () => {
    const [location, setLocation] = useState("Sao Paulo, SP")
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS)
    const [breed, BreedDropdown] = useDropdown("Raca", "", breeds)

    return (
        <div className="search">
            <form>
                <label htmlFor="location">
                    <input type="text" id="locaion" value={location} placeholder="localizacao" onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                {/* <label htmlFor="animal">Animal</label>
                <select name=" " id="animal" value={animal} onChange={e => setAnimal(e.target.value)} onBlur={e => setAnimal(e.target.value)}>
                    <option>Todos</option>
                    {ANIMALS.map(animal => <option value={animal} key={animal}>{animal}</option>)}
                </select>
                <select name=" " id="breed" value={breed} onChange={e => setBreed(e.target.value)} onBlur={e => setBreed(e.target.value)}
                    disabled={!breed.length}>
                    <option>Todos</option>
                    {breeds.map(breedStr => <option value={breedStr} key={breedStr}>{breedStr}</option>)}
                </select> */}
                <button type="submit">pesquisar</button>
            </form>
        </div>
    )
}

export default Search