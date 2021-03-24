import { Container, Grid } from "@material-ui/core"
import React from "react"
import AddPost from "./components/AddPost"
import Header from "./components/Header"
import PostList from "./components/PostList"
function App() {
  return (
    <Grid container spacing={3}>
      {/*       <Grid item xs={12}>
        <Header />
      </Grid> */}
      <Container maxWidth="md">
        <AddPost />
      </Container>
      <Container maxWidth="sm">
        <PostList />
      </Container>
    </Grid>
  )
}

export default App
/*          <Grid item xs={6}>
        <PostList />
      </Grid>    */
