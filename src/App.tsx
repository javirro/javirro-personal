import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import enMessages from "./locales/en.json"
import espMessages from "./locales/esp.json"
import { useSelector } from "react-redux"
import { IntlProvider } from "react-intl"
import Landing from "./routes/Landing/Landing"

import "./App.css"

function App() {
  const language = useSelector((s: any) => s.language)
  return (
    <IntlProvider locale={language === "en" ? "en" : "esp"} messages={language === "en" ? enMessages : espMessages}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  )
}

export default App
