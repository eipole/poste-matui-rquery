import {
  Button,
  Card,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core"
import React, { useState } from "react"
import { useMutation } from "react-query"
import { addPost } from "./api"
import { queryClient } from "./queryClient"
import { isTextValid } from "../utils/validate"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
    padding: theme.spacing(2)
  },
  cardContainer: {
    background: theme.palette.primary.main
  },
  title: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(9)
  },
  button: {
    background: theme.palette.secondary.main
  }
}))

function AddPost() {
  const [postid, setPost] = useState({ post: "", user: "" })
  const [disabled, setDisabled] = useState(Boolean)
  const classes = useStyles()

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    }
  })

  async function handleSubmit() {
    const { post, user } = postid
    try {
      if (disabled) return
      setDisabled(true)
      await mutation.mutate({ post, user })
      setPost({ post: "", user: "" })
      setDisabled(true)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setDisabled(!isTextValid(value))
    setPost((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <Paper className={classes.container}>
      <Card className={classes.cardContainer}>
        <Typography
          className={classes.title}
          align="center"
          variant="h5"
          component="h3"
        >
          Add som content
        </Typography>
        <form>
          <TextField
            color="secondary"
            onChange={(event) => handleChange(event)}
            value={postid.post}
            margin="dense"
            name="post"
            label="AddPost"
            fullWidth
          />
          <TextField
            color="secondary"
            onChange={(event) => handleChange(event)}
            value={postid.user}
            margin="dense"
            name="user"
            label="User"
            fullWidth
            // error={handleError("title")}
            // helperText={handleError("title") && "Täida ära"}
          />

          <Button
            disabled={disabled}
            fullWidth
            className={classes.button}
            onClick={handleSubmit}
          >
            Add Post
          </Button>
        </form>
      </Card>
    </Paper>
  )
}

export default AddPost
