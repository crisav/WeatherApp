import React, { useState } from 'react'

const UnitContext = React.createContext({
  temperatureUnit: 'celsius',
  onTemperatureUnitUpdate: (unit) => {}
})

export const UnitContextProvider = ({ children }) => {
  const [unit, setUnit] = useState('celsius')

  const updateUnitHandler = (unit) => {
    setUnit(unit)
  }

  return (
    <UnitContext.Provider
      value={{
        temperatureUnit: unit,
        onTemperatureUnitUpdate: updateUnitHandler
      }}
    >
      {children}
    </UnitContext.Provider>
  )
}

export default UnitContext
