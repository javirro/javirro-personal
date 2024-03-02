import React from "react"
import logo from "./logo.svg"
import enMessages from "./locales/en.json"
import espMessages from "./locales/esp.json"
import { useSelector } from "react-redux"
import { IntlProvider } from "react-intl"
import "./App.css"

function App() {
  const language = useSelector((s: any) => s.language)
  return (
    <IntlProvider locale={language === "en" ? "en" : "esp"} messages={language === "en" ? enMessages : espMessages}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </IntlProvider>
  )
}

export default App
