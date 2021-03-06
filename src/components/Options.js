import React from "react"

import Option from "./Option"

const Options = ({ options, handleDeleteOption, handleDeleteOptions }) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      { options.length === 0 && <p>Please add an option to get started</p> }
      { options.map( (option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}/>
      ) )}
    </div>
  )
}

export default Options
