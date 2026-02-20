import type { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-2 my-2 min-h-[calc(100vh-1rem)] w-[calc(100%-1rem)] md:mx-auto md:max-w-6xl">
      {children}
    </div>
  )
}

export default Layout
