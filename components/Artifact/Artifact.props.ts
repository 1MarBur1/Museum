import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	src: string;
	title: string;
};

export type {
	Props,
};
