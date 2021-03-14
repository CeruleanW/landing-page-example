import '../styles/globals.css';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Curtains } from 'react-curtains';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Curtains autoRender={false} >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Curtains>
  );
}

export default MyApp;
