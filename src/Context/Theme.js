import { createContext ,useContext} from "react";

export const ThemeContext = createContext({
    //for creating default theme
    themeMode:'light',
    darkTheme:()=>{},  // they are method  ssssssss
    lightTheme:()=>{}
}) 

export const ThemeProvider=ThemeContext.Provider


// custome Hooks
export default function useTheme(){
    return useContext(ThemeContext)
}