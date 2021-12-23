import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-white to-orange-900 overflow-hidden">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* h-screen to make the scrollbar appear, y-scroll is to make the whole screen scroll */}
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        <Messages />

        {/* Footer */}
      </div>
    </div>
  )
}
