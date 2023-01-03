export const thothApiRootUrl = import.meta.env.PROD
  ? (import.meta.env.REACT_APP_API_ROOT_URL_PROD as string)
  : (import.meta.env.REACT_APP_API_ROOT_URL as string)

export const oAuthClientId = import.meta.env.REACT_APP_OAUTH_CLIENT_ID

export const appRootUrl = import.meta.env.REACT_APP_SITE_ROOT_URL

// coercing this into a boolean
export const feathers = import.meta.env.REACT_APP_FEATHERS === 'true'
export const feathersUrl = 'http://localhost:3030'
export const websocketUrl = 'ws://localhost:8080'