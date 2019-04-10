import React from 'react'
import ReactDOM from 'react-dom'
import Index from './views/Index'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'unstated'
import { tableContainer } from './state'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
	typography: { useNextVariants: true },
})

ReactDOM.render(
	<Provider inject={[tableContainer]}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Index />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
