import { ReactNode } from "react"

import { Grid2 } from "@mui/material"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid2 
      sx={{p: 2}} 
      container 
      direction='column' 
      justifyContent='flex-start' 
      alignItems='center'>
      <img src='amazon-icon.webp' alt='amazon-logo' height='100px' />
      <main>{children}</main>
    </Grid2>
  )
}

export default AuthLayout