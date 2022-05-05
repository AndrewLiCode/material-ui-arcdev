import React from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../src/ui/Theme'
import Header from '../src/ui/Header'
import Footer from '../src/ui/Footer'

ReactGA.initialize('UA-165983156-1')

export default function MyApp(props) {
  const {Component, pageProps} = props
  const [value, setValue] = React.useState(0)
  const [selected, setSelected] = React.useState(0)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header value={value} setValue={setValue} selected={selected} setSelected={setSelected} />
        <Component {...pageProps} setValue={setValue} setSelected={setSelected} />
        <Footer setValue={setValue} setSelected={setSelected} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
