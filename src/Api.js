export class Api {
  get () {
    return new Promise(resolve => {
      setTimeout(() => resolve('ok'), 6000)
    })
  }
}

export default function (url) {
  return new Api(url)
}
