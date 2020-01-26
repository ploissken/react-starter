export class Api {
  post (data) {
    return new Promise(resolve => {
      const persistenceTime = Array.isArray(data) ? 3000 : 1000
      setTimeout(() => resolve(data), persistenceTime)
    })
  }
}

export default function (url) {
  return new Api(url)
}
