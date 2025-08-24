import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { bindShortcuts } from './utils/shortcuts'
import A11yProvider from './a11y/A11yProvider'
import AccessibilityButton from './components/UI/AccessibilityButton'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  React.useEffect(() => {
    const cleanup = bindShortcuts();
    return cleanup;
  }, []);

  return (
    <A11yProvider>
      <GlobalStyle></GlobalStyle>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header></Header>
      <Main id="main" />
      <Footer></Footer>
      <AccessibilityButton />
    </A11yProvider>
  )
}

export default App
