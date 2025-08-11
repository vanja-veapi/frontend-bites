import styled, { css } from 'styled-components';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { theme } from '../../config';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({ children = 'MAJMUNCINO', className, ...props }: ButtonProps) => {
	return (
		<ButtonUI {...props} type="button" className={className}>
			{children}
		</ButtonUI>
	);
};

const buttonBaseCSS = css`
	padding: 0.5rem 2rem;
	border: unset;
	cursor: pointer;

	border-radius: 0.25rem;
`;

const ButtonUI = styled.button<{ className?: string; variant?: keyof typeof theme.palette }>`
	${buttonBaseCSS}

	${({ variant = 'primary' }) => css`
		color: ${theme.palette[variant].contrastText};

		background-color: ${theme.palette[variant].main};

		&:not(:disabled) {
			&:hover {
				background-color: ${theme.palette[variant].hover};
			}
			&:active {
				background-color: ${theme.palette[variant].pressed};
			}
		}
	`}
`;
