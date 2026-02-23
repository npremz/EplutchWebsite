import type { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-2 my-2 min-h-[calc(100vh-1rem)] w-[calc(100%-1rem)] md:mx-auto md:my-6 md:w-[calc(100%-3rem)] lg:my-16 lg:w-[calc(100%-8rem)] md:max-w-[1250px] 2xl:max-w-[2100px]">
      {children}
    </div>
  )
}

export default Layout
