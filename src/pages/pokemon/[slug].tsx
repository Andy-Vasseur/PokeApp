import Navigation from "@/components/Navigation";
import Stats from "@/components/stats";
import type { Pokemon } from "@/types/pokemon";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const router = useRouter();

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${router.query.slug}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  }, [router.query.slug]);

  if (!pokemon) return <div>Chargement...</div>;

  return (
    <>
        <Head>
            <title>PokeApp - {pokemon.slug}</title>
        </Head>
      <Navigation />
      <div className="h-screen overflow-y-auto tracking-widest">
        <h1 className="mt-5 mb-8 text-6xl text-white text-center font-bold drop-shadow-md">{pokemon.slug}</h1>
        <div className='shadow-sm max-w-4xl bg-white mx-auto mt-2 rounded-md p-1'>
          <div className="flex flex-col items-center bg-pokeblue rounded-sm md:justify-center md:flex-row">
            <div>
              <img className="w-96" src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
            </div>
            <div className="col-span-2 text-center md:ml-8">
              <h2 className="text-xl font-bold text-white my-3">
                #{pokemon.pokedexId} {pokemon.name}
              </h2>
              <div className="flex justify-center items-center">
                {pokemon.apiTypes.map((type) => (
                  <img
                    className="w-6"
                    key={type.name}
                    src={type.image}
                    alt={type.name}
                    title={type.name}
                  />
                ))}
              </div>
              <div className="mt-3">
                <h3 className="text-base font-bold text-white">Statistique</h3>
                <div className="grid gap-2 grid-cols-2 py-2">
                  <Stats value={pokemon.stats.HP} label="PV" />
                  <Stats value={pokemon.stats.attack} label="Attaque" />
                  <Stats value={pokemon.stats.defense} label="Défense" />
                  <Stats
                    value={pokemon.stats.special_attack}
                    label="Attaque spécial"
                  />
                  <Stats
                    value={pokemon.stats.special_defense}
                    label="Défense spécial"
                  />
                  <Stats value={pokemon.stats.speed} label="Vitesse" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-1 drop-shadow [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            <Link href="/pokemons">Revenir à la liste</Link>
          </div>
        </div>
      </div>
    </>
  );
}
