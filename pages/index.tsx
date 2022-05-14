import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

const MainPage = (): JSX.Element => {
	const [width, setWidth] = useState<string>('75px');
	const [height, setHeight] = useState<string>('75px');
	const [top, setTop] = useState<string>('0');

	const [textOpacity, setTextOpacity] = useState<number>(100);
	const [currentTextID, setCurrentTextID] = useState<number>(0);

	const texts = [
		'Привет!',
		'Рады видеть тебя в новом музее от Уральской Резиденции Образования!'
	];

	const onClick = () => {
		if (width != '3000px') {
			setWidth('3000px');
			setHeight('3000px');
			setTop('-300px');
		}
	};
	
	useEffect(() => {
		if (currentTextID >= 0) {
			setTimeout(() => {
				setTextOpacity(0);
				setTimeout(() => {
					setTextOpacity(100);
					setCurrentTextID(currentTextID+1);
				}, 450);
			}, 2000)
		}
	}, [currentTextID]);

	return(
		<div className='w-screen h-screen flex justify-center'>
			<button
				onClick={onClick} 
				className='bg-black inline-block rounded-full duration-1000 absolute' 
				style={{
					width: width,
					height: height,
					top: top,
				}}
			>
				<h1 className={'text-white font-semibold ' + (width === '3000px' ? 'hidden' : 'block')}>
					Музей
				</h1>
			</button>

			<div className='flex items-center'>
				<h1 
					className={'text-white font-bold z-10 text-5xl duration-500 text-center ' + (width === '3000px' ? 'block' : 'hidden')}
					style={{
						opacity: textOpacity,
					}}	
				>
					{texts[currentTextID]}
				</h1>
			</div>
		</div>
	)
};

export default MainPage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
