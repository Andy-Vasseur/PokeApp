import Navigation from '@/components/Navigation'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeApp</title>
        <meta name="description" content="PokeApp - Retrouvez tout vos pokémons favoris !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen p-2 text-center overflow-y-auto'>
        <Navigation />
        <header className='text-white tracking-widest text-center cursor-default'>
          <h1 className="mt-5 text-8xl font-bold drop-shadow-md">
            PokeApp
          </h1>
          <p className='mt-2 text-2xl'>
            Bienvenue sur votre pokédex rien qu&apos;à vous !
          </p>
        </header>
      </main>
    </>
  )
}
