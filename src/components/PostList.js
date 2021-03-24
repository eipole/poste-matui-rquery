import { CircularProgress, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { useQuery } from "react-query"
import { newFetch } from "./api"
import Post from "./Post"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
    padding: theme.spacing(4),
    color: theme.palette.primary.main.light
  }
}))

function PostList() {
  // fetchPost()
  const { data, isLoading, isError } = useQuery("posts", newFetch)
  const classes = useStyles()
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <CircularProgress />
      </div>
    )
  }
  if (isError) return <h2>Pole siin miskit posti</h2>
  return (
    <Paper className={classes.container}>
      {data.data.kiri.map((elem) => (
        <Post key={elem.id} elem={elem} />
      ))}
    </Paper>
  )
}
export default PostList
