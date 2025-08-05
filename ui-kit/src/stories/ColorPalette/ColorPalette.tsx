import styled from 'styled-components';
import { theme } from '../../config';

export const ColorPalette = () => {
	const handleCopyColor = ({ color }: { color: string }) => {
		navigator.clipboard.writeText(color);
	};

	return (
		<Container>
			{/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
			{Object.entries(theme.colors).map(([, colors]) =>
				Object.entries(colors).map(([name, color]) => (
					<Flex>
						<Circle backgroundColor={color} onClick={() => handleCopyColor({ color })} />
						<span>{name}</span>
						<i>({color})</i>
					</Flex>
				))
			)}
		</Container>
	);
};

// TODO: Ne bi trebalo da bude string, nego nijansa
const Circle = styled.div<{ backgroundColor: string }>`
	cursor: pointer;
	width: 3rem;
	height: 3rem;

	border-radius: 50%;
	border: 1px solid ${theme.colors.black.black100};
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
`;

// TODO: Dodaj sledece propove
// ! justify-content, align-items, gap, flex-wrap, flex-direction
const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
