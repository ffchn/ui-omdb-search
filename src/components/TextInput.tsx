"use client"

import { debounce } from "lodash"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function TextInput() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  //todo: fix 'any' type, debounce doesnt receive a proper form event
  const handleInputChange = debounce((e: any) => {
    const value = e.target.value.trim()
    if (value.length > 2) {
      params.set("search", value)
      replace(`${pathname}?${params.toString()}`)
    } else {
      params.delete("search")
    }
    params.delete("page")
  }, 500)

  return (
    <label className="input input-bordered input-primary flex items-center gap-2">
      <MagnifyingGlass size={24} />
      <input
        type="text"
        className="grow"
        placeholder="Search"
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => handleInputChange(e)}
      />
    </label>
  )
}
