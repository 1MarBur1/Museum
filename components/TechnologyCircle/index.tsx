import { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Props } from './TechnologyCircle.props';

const TechnologyCircle = ({ title, size, className = '', onClick, ...props }: Props): JSX.Element => {
	const [newSize, setNewSize] = useState<string>('0px');
	const [top, setTop] = useState<string>('0');

	useEffect(() => {
		setNewSize(`${size*4}px`);
	}, []);

	const fillScreen = () => {
		if (newSize != '4000px') {
			setNewSize('4000px');
			setTop('-1000px');
			setTimeout(onClick, 1000);
		}
	};

	return(
		<button 
			className={'rounded-full bg-white text-lightBlack duration-[1500ms] font-bold text-xl p-4 ' 
				+ className + (newSize === '4000px' ? ' absolute' : '')}
			style={{
				width: newSize,
				height: newSize,
				top: top,
				left: top,
			}}
			onClick={fillScreen}
			{...props}
		>
			{newSize!='4000px' && title}
		</button>
	);
};

export default TechnologyCircle;
