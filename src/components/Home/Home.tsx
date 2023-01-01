import { Box, Flex, Heading, Image, Link, chakra } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import Users from './Users';

const Home = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		fetch('userData.json')
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return (
		<Container maxW="7xl">
			<Heading as="h1" size="xl" noOfLines={1} textAlign="center" p="6">
				Interview Details
			</Heading>
			<Users users={users}></Users>
		</Container>
	);
};

export default Home;
