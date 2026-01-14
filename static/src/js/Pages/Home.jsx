import React from 'react'
import { Link } from '@inertiajs/react'

export default function Home() {
  return (
    <main>
      <h1>
        Welcome to my site! <br />
        <small>Powered by Django and Inertia.js React</small>
        I love you miss promise ange
      </h1>

      <Link href="/contact/">Contact</Link>
    </main>
  )
}
