export default function ({ $axios, redirect }) {
  const $store = require('../store/index')
  const user = require('../store/user')

  $axios.onRequest(config => {
    // set auth header
    //$axios.setHeader('Authorization', `Bearer ${user.state().authToken}`)
    $axios.setToken(user.state().authToken, 'Bearer')
    //console.log('Making request to ' + config.url)
  })

  $axios.onResponse(response => {
    console.log('Receiving response: ' + JSON.stringify(response.headers["X-New-Token"]))
    if(response?.headers?.["X-New-Token"]){
      user.mutations.setAuthToken( response.headers["X-New-Token"] )
    }
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}