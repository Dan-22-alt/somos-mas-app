import React, { useRef, useState, useEffect } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	Circle,
	useToast,
} from "@chakra-ui/react";
import setColorsByVariant from "./setColorsByVariant";

const Alert = ({
	title = "",
	description = "",
	type = "success",
	isOpen,
	setIsOpen,
	onConfirm,
	hasFeedback = false,
	feedbackTitle = "",
	feedbackDescription = "",
	feedbackType = "success",
	confirmButtonText = "Aceptar",
	cancelButtonText = "Cancelar",
	feedbackDuration = 9000,
	...rest
}) => {
	//Variables
	const [variant, setVariant] = useState({});
	const cancelRef = useRef();
	const { Icon, color } = variant;
	const toast = useToast();

	//Functions
	const onClose = () => setIsOpen(false);

	const handleFeedback = () => {
		if (hasFeedback) {
			toast({
				title: feedbackTitle,
				description: feedbackDescription,
				status: feedbackType,
				duration: feedbackDuration,
				isClosable: true,
			});
		}
	};

	const handleConfirm = () => {
		onConfirm && onConfirm();
		onClose();
		handleFeedback();
	};

	const handleCancel = () => {
		onClose();
	};
	useEffect(() => {
		setColorsByVariant({ type, setVariant });
	}, []);

	return (
		<>
			<AlertDialog
				isCentered
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				{...rest}>
				<AlertDialogOverlay />
				<AlertDialogContent py="3rem" mx="1rem">
					<AlertDialogHeader mx="auto">
						<Circle size="5rem" bg={`${color}.400`} color="white">
							{Icon}
						</Circle>
					</AlertDialogHeader>
					<AlertDialogHeader fontSize="lg" fontWeight="bold" mx="auto">
						{title}
					</AlertDialogHeader>
					<AlertDialogBody mx="auto">{description}</AlertDialogBody>
					<AlertDialogFooter mx="auto">
						<Button ref={cancelRef} onClick={handleCancel}>
							{cancelButtonText}
						</Button>
						<Button colorScheme={color} onClick={handleConfirm} ml={3}>
							{confirmButtonText}
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default Alert;
