"use client"

import { FormEvent, useCallback } from "react"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function TextInput() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value

    if (value.length > 2) {
      params.set("search", e.currentTarget.value.trim())
      replace(`${pathname}?${params.toString()}`)
    } else {
      params.delete("search")
    }
  }

  return (
    <label className="input input-bordered input-primary flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        onChange={handleInputChange}
        defaultValue={searchParams.get("search") || ""}
      />
      <MagnifyingGlass
        size={24}
        className="cursor-pointer hover:text-primary duration-500"
      />
    </label>
  )
}
