// theme.js
// export default {
//     colors: {
//       transparent: "transparent",
//       black: "#000",
//       white: "#fff",
//       blue: {
//         1: "#9AC9FB",
//         2: "#264F7A",
//         3: "#799FC7",
//         4: "#4EA1FB",
//         5: "#4B627A"
//       }
//     }
//   }
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const themeSomosMas = extendTheme({
    colors: {
        blue: {
            1: "#9AC9FB",
            2: "#264F7A",
            3: "#799FC7",
            4: "#4EA1FB",
            5: "#4B627A"
        }
    },
})
export default themeSomosMas