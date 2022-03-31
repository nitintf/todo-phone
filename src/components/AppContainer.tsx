import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import theme from "../styles/theme"

interface AppContainerProps {}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}

export default AppContainer
