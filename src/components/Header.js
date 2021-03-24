import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(8)
  }
}))

function Header() {
  const classes = useStyles()
  const theme = useTheme
  return (
    <AppBar color={theme.primary}>
      <Toolbar>
        <Typography className={classes.title} variant="h5" component="h1">
          Siin on kõik ilus
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
