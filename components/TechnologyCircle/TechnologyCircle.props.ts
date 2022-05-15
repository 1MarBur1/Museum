import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size: number;
	title: string;
};

export type {
	Props,
};
