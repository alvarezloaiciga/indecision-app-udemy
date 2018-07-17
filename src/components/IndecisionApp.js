import React from "react"
import ReactDOM from "react-dom"

import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const options = JSON.stringify(this.state.options)
      localStorage.setItem("options", options)
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    const { options } = this.state
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    alert(option)
  }

  handleAddOption = (option) => {
    const { options } = this.state

    if (!option) {
      return 'Enter valid value to add item'
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  handleDeleteOption = (optionToRemove) => {
    const { options } = this.state

    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove != option)
    }))
  }

  render() {
    const title = "Indecision"
    const subtitle = "Put your life in hands of a computer"
    const { options } = this.state

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}
