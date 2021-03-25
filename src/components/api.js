/* import { request, gql } from "graphql-request"
import { useQuery } from "react-query" */

const endpoint = process.env.REACT_APP_ENDPOINT

export async function addPost(post, user) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation($post: String, $user: String) {
          insert_kiri(objects: { post: $post, user: $user }) {
            returning {
              id
              post
              user
            }
          }
        }
      `,
      variables: post,
      user
    })
  })
  const data = await response.json()
  return data
}

export async function deletePost(id) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation($id: uuid!) {
          delete_kiri(where: { id: { _eq: $id } }) {
            returning {
              id
              post
              user
            }
          }
        }
      `,
      variables: id
    })
  })
  const data = await response.json()
  return data
}

export async function getPost() {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query getContent {
        kiri {
          id
          post
          user
        }
      }
      `
    })
  })
  const data = await response.json()
  return data
}
