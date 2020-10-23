import fetch from "node-fetch"

exports.faunaFetch = async (query, variables) => {
  console.log("IN THE FUNC")
  return await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then(res => console.log("RAN IT"))
    .catch(err => console.error(JSON.stringify(err, null, 2)))
}
