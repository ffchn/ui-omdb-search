import { PropsWithChildren } from "react"

export default function PageWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex flex-col max-w-[80%] mx-auto py-[60px] prose">
        {children}
      </div>
    </>
  )
}
