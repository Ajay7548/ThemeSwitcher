import { createContext ,useContext} from "react";

export const themeContext = createContext({
    //for creating default theme
    themeMode:'light',
    darkTheme:()=>{},  // they are method  ssssssss
    lightTheme:()=>{}
}) 

export const ThemeProvider=themeContext.Provider


// custome Hooks
export default function useTheme(){
    return useContext(themeContext)
}