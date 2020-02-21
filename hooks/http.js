import { useState, useEffect } from 'react'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const useEntries = (type, dependencies) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const contentType = await client.getContentType(type)
      const entries = await fetchEntriesForContentType(contentType)
      setData(entries)
    }

    fetchData()
  }, dependencies)

  const fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  return [data]
}

export const useEntry = (id, dependencies) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const entry = await client.getEntry(id)

      setData(entry ? entry.fields : false)
    }

    fetchData()
  }, dependencies)

  return [data]
}
