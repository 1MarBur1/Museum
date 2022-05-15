import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import '../styles/font.css';
import '../styles/custom.css';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const queryClient = new QueryClient();
	
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>
					Museum
				</title>
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default App;
