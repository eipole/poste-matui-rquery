import {
  Button,
  Card,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core"
import React, { useState } from "react"
import { QueryClient, useMutation } from "react-query"
import { addPost } from "./api"
// import {istTextValid} from '../utils/validate'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),

    background: theme.palette.secondary.main
  },
  title: {
    paddingBottom: theme.spacing(9)
  }
}))

function AddPost() {
  const [postid, setPost] = useState({ post: "", user: "" })
  // const [disabled, setDisabled] = useState(Boolean)

  const classes = useStyles()

  const queryClient = new QueryClient({
    onError: (error) => {
      console.log(error)
    }
  })

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.refetchQueries("posts")
      // queryClient.invalidateQueries("posts")
    }
  })

  function handleSubmit() {
    const { post, user } = postid
    try {
      mutation.mutate({ post, user })
      setPost({ post: "", user: "" })
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setPost((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <Card className={classes.container}>
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
          onChange={(event) => handleChange(event)}
          value={postid.post}
          margin="dense"
          name="post"
          label="AddPost"
          fullWidth
        />
        <TextField
          onChange={(event) => handleChange(event)}
          value={postid.user}
          margin="dense"
          name="user"
          label="User"
          fullWidth
          // error={handleError("title")}
          // helperText={handleError("title") && "Täida ära"}
        />

        <Button onClick={handleSubmit}>Add Post</Button>
      </form>
    </Card>
  )
}

export default AddPost
