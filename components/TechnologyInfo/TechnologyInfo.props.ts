import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	description: string;
	src: string;
};

export type {
	Props,
};
