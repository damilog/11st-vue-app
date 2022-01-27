import axios from 'axios'


export default {
  install(app) {
    
    app.config.globalProperties.$fetch = async options => {
      const END_POINT = 'https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName='
      const {requestName} = options
      const { data } = await axios({
        url: `${END_POINT}${requestName}`,
        method:'GET'
      })
      return data
    }
  }
}
