import { GithubLogo } from "@phosphor-icons/react/dist/ssr"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 max-w-[80%] mx-auto justify-between items-center">
        <a className="text-xl font-bold">OMDB Movie Search</a>
        <a href="https://github.com/ffchn">
          <GithubLogo size={32} className="hover:text-primary duration-500" />
        </a>
      </div>
    </div>
  )
}
