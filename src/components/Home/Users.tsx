import {
	Box,
	Flex,
	Image,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	WrapItem,
	chakra,
	useDisclosure
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

type UsersProps = {
	users: {
		id: string;
		name: string;
		image: string;
		email: string;
		phone: string;
		interviewDate: string;
		durationOfInterview: string;
		marks: number;
		profession: string;
	}[];
};

const Users = ({ users }: UsersProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box display="flex" alignItems="center" justifyContent="space-between">
			{users.map((user) => (
				<>
					<Box>
						<Flex
							bg="#edf3f8"
							_dark={{
								bg: '#3e3e3e'
							}}
							p={50}
							w="full"
							alignItems="center"
							justifyContent="center"
							mb="10"
						>
							<Box
								w="xs"
								bg="white"
								_dark={{
									bg: 'gray.800'
								}}
								shadow="lg"
								rounded="lg"
								overflow="hidden"
								mx="auto"
							>
								<Image
									w="full"
									h={56}
									fit="cover"
									src={user.image}
									alt="avatar"
								/>

								<Box py={5} textAlign="center">
									<Link
										display="block"
										fontSize="2xl"
										color="gray.800"
										_dark={{
											color: 'white'
										}}
										fontWeight="bold"
									>
										{user.name}
									</Link>
									<chakra.span
										fontSize="sm"
										color="gray.700"
										_dark={{
											color: 'gray.200'
										}}
									>
										{user.profession}
									</chakra.span>
									<WrapItem alignItems="center" justifyContent="center" my={3}>
										<Button onClick={onOpen} size="sm" colorScheme="blue">
											Interview Details
										</Button>
									</WrapItem>
								</Box>
							</Box>
						</Flex>
					</Box>
					<Box>
						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>{user.name}</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Image
										w="full"
										h={56}
										fit="cover"
										src={user.image}
										alt="avatar"
									/>
									<Text fontSize="lg">
										Interview Date: {user.interviewDate}
									</Text>
									<Text fontSize="lg">
										Interview Duration : {user.durationOfInterview}
									</Text>
									<Text fontSize="lg">Interview Marks: {user.marks}/70</Text>
								</ModalBody>

								<ModalFooter>
									<Button colorScheme="blue" mr={3} onClick={onClose}>
										Close
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</Box>
				</>
			))}
		</Box>
	);
};

export default Users;
