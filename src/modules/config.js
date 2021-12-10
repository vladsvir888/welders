/**
 * Global component config
 * Example using for Form component:
 * const config = {
 *    form: {
 *        title: 'Test'
 *    }
 * }
 */
 const config = {
  lightCountdown: {
       animation: "animate__animated animate__flipInX"
  }
}

/**
* Merge global config with window.APP_CONFIG if provided
*/
const appConfig = window.APP_CONFIG || {}

export default {
  ...config,
  ...appConfig
}