import Navigation from "@/components/Navigation";
import type { Pokemon } from "@/types/pokemon";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const [pageNumber, setPageNumber] = useState(0);
  const [numberPerPage, setNumberPerPage] = useState(20);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  const pokemonsFiltered = useMemo(() => {
    const indexStart = pageNumber * numberPerPage;
    const indexEnd = indexStart + numberPerPage;

    return pokemons?.slice(indexStart, indexEnd);
  }, [pageNumber, numberPerPage, pokemons]);

  return (
    <>
      <Head>
        <title>Pokédex - Liste des pokémon</title>
        <meta name="description" content="Mon super pokédex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen p-2 text-center overflow-y-auto">
        <Navigation />
        <h1 className="mt-5 text-8xl text-white font-bold drop-shadow-md">Pokemons</h1>
        <div className="text-center">
          <label htmlFor="numberPerPage" className="text-white">Nombre de pokémon par page </label>
          <select className="rounded-md" id="numberPerPage" onChange={(e) => setNumberPerPage(Number(e.target.value))}>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex justify-center mb-6 gap-2 my-2">
          <button
            className="bg-white p-2 rounded-md shadow-sm disabled:bg-gray-500"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            Page précédente
          </button>
          <button
            className="bg-white p-2 rounded-md shadow-sm disabled:bg-gray-500"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pokemonsFiltered?.length !== numberPerPage}
          >
            Page suivante
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {pokemonsFiltered?.map((pokemon) => (
            <Link href={`/pokemon/${pokemon.slug}`} key={pokemon.id} className="bg-white hover:scale-95 ease-in-out duration-300 rounded-xl drop-shadow-lg">
              <h3 className="text-center">
                #{pokemon.pokedexId} {pokemon.name}
              </h3>
              <div className="flex gap-2 justify-center">
                {pokemon.apiTypes.map((type: any) => (
                  <Image
                    key={type.name}
                    src={type.image}
                    alt={type.name}
                    title={type.name}
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <div>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  title={pokemon.name}
                  width={370.5}
                  height={370.5}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2 my-2">
          <button
            className="bg-white p-2 rounded-md shadow-sm disabled:bg-gray-500"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            Page précédente
          </button>
          <button
            className="bg-white p-2 rounded-md shadow-sm disabled:bg-gray-500"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pokemonsFiltered?.length !== numberPerPage}
          >
            Page suivante
          </button>
        </div>
      </main>
    </>
  );
}