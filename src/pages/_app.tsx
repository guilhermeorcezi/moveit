import GlobalStyle from '../styles/global'

import {ChallengesContext} from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
  <ChallengesContext.Provider value={}>
  <GlobalStyle/>
  <Component {...pageProps} />
  </ChallengesContext.Provider>
  )
}

export default MyApp
