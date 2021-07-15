import { extendTheme } from "@chakra-ui/react"

const Button = {
    // The styles all button have in common
    baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "base", // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
      sm: {
        fontSize: "sm",
        px: 4, // <-- px is short for paddingLeft and paddingRight
        py: 3, // <-- py is short for paddingTop and paddingBottom
      },
      md: {
        fontSize: "md",
        px: 6, // <-- these values are tokens from the design system
        py: 4, // <-- these values are tokens from the design system
      },
    },
    // Two variants: outline and solid
    variants: {
      outline: {
        border: "2px solid",
        borderColor: "blue.2",
        color: "white",
      },
      solid: {
        bg: "blue.2",
        color: "white",
      },
    },
    // The default size and variant values
    defaultProps: {
      size: "md",
      variant: "outline",
    },
  }


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
    components: {
        Button,
      },
})
export default themeSomosMas