import {
  Card,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Typography
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(16),
    marginTop: theme.spacing(7),
    background: theme.palette.secondary.main
  }
}))

function AddPost() {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <Typography variant="h5" component="h3">
        Add som content
      </Typography>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="write-post">Write post</InputLabel>
        <Input id="write-post" />
      </FormControl>
    </Card>
  )
}

export default AddPost
