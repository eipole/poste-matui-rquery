import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react"
import { useMutation } from "react-query"
import { deletePost } from "./api"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
    display: "flex",
    background: theme.palette.secondary.main
  }
}))

function Post({ elem }) {
  const mutation = useMutation(deletePost)
  console.log(mutation)
  const classes = useStyles()

  function handleClick(id) {
    //
    try {
      console.log(id)
      mutation.mutate({ id })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {elem.user}
        </Typography>
        <Typography>{elem.post}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleClick(elem.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
