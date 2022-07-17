import React from "react"

interface Props {
  value?: number
}

export const Result: React.FC<Props> = ({ value }) => {
  return (
    <>
      <p data-testid="result-fragment" >Hasil: {value}</p>
    </>
  )
}