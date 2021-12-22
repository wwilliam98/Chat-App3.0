import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to Chat App</h1>

      <button onClick={logout} className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse">Logout</button>
    </div>
  )
}
