import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

export default function TextInput() {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" />
      <MagnifyingGlass
        size={24}
        className="cursor-pointer hover:text-primary duration-500"
      />
    </label>
  )
}
