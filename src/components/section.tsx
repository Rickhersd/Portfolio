import React from 'react'

interface sectionInterface {
  children: JSX.Element
}

export default function Section({children}:sectionInterface) {
  return (
    <section>{children}</section>
  )
}
