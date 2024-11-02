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
      <img src='amazon-logo.png' alt='amazon-logo' height='40px' />
      <main>{children}</main>
    </Grid2>
  )
}

export default AuthLayout