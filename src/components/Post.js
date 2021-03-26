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
import { queryClient } from "./queryClient"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
    display: "flex",
    background: theme.palette.secondary.main
  }
}))

function Post({ elem }) {
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    }
  })
  const classes = useStyles()
  function handleClick(id) {
    //
    try {
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
