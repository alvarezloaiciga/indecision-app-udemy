import React from "react"

const Option = ({ optionText, handleDeleteOption }) => {
  return (
    <div>
      { optionText }
      <button onClick={(e) => { handleDeleteOption(optionText) }}>Remove</button>
    </div>
  )
}

export default Option
