import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const App = () => (
	<ChakraProvider>
		<Header></Header>
		<Home></Home>
		<Footer></Footer>
	</ChakraProvider>
);
