import { request, gql } from "graphql-request"
import { useQuery } from "react-query"

const endpoint = process.env.REACT_APP_ENDPOINT
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
  console.log("data from api", data)
  return data
}

// export async function deletePost(postId) {
//   await request(
//     `${endpoint}`,
//     gql`
//       mutation($id: uuid!) {
//         delete_kiri(where: { id: { _eq: $id } }) {
//           returning {
//             id
//             post
//             user
//           }
//         }
//       }
//     `
//   )
// }

export async function newFetch() {
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
