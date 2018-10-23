import axios from 'axios'

const baseURL = 'https://cnodejs.org/api/v1'

// 获取话题的 API 封装
function getTopics (obj) {
  let params = {
    page: 1,
    limit: 20
  }
  params = obj || params
  return new Promise((resolve, reject) => {
    axios.get(baseURL + '/topics', {params: params})
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export {
  getTopics
}