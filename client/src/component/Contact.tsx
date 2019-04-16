import * as React from 'react'
import axios from 'axios'

const { useEffect, useState } = React
const GRAPHQL_URI = '/graphql'
const INITIAL_DATA: {} = {
  items: [],
};
const Contact = () => {
  const [query, setQuery] = useState('name')
  const [data, setData] = useState(INITIAL_DATA)

  useEffect(() => {
    const graphql = async (query: string) => {
      const resp = await axios.post(GRAPHQL_URI, {
        query: `query User($id: ID!){
          user(id: $id) {
            name
            id
          }
        }`,
        variables: {
          id: 1
        },
      })
      setData(resp.data.data.user.name)
    }

    graphql(query)
  }, []);

  return (
    <div>
      please contact us
      {JSON.stringify(data)}
    </div>
  )
}

export default Contact
