import React from "react"

interface Props {
  value: number
}

export const Result: React.FC<Props> = ({ value }) => {
  return (
    <>
      <p>{value}</p>
    </>
  )
}