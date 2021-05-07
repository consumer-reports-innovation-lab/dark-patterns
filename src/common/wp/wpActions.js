import axios from 'axios'
const token = process.env.GATSBY_REST_TOKEN
const restUrl = process.env.GATSBY_REST_URL


export async function createMediaFromFile({ file, metaData }) {
  // Create upload payload
  const data = new window.FormData()
  data.append('file', file, file.name || file.type.replace('/', '.'))
  // forEach(metaData, ((value, key) => data.append(key, value)))

  try {
    const media = await axios({
      method: 'post',
      headers: {
        authorization: `Bearer ${token}`
      },
      url: `${restUrl}/media`,
      data: data
    })
    return media

  } catch (error) {
    console.log(error)
  }

}

export async function createDraft(data) {

  try {
    const draft = await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      url: `${restUrl}/example`,
      data: JSON.stringify(data)
    })

    return draft

  } catch (error) {
    console.log(error)
  }

}