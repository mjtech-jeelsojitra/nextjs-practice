import Link from "next/link"
import Home from "./components/home"

const page = () => {
  return (
    <main>
      <div className="p-4 text-2xl">Welcome to the Home Page</div>
      <Link href="/about">
        <Home />
      </Link>
    </main>
  )
}

export default page