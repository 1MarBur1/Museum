import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { text } from 'stream/consumers';

const MainPage = (): JSX.Element => {
	const [width, setWidth] = useState<string>('75px');
	const [height, setHeight] = useState<string>('75px');
	const [top, setTop] = useState<string>('0');

	const [textOpacity, setTextOpacity] = useState<number>(100);
	const [currentTextID, setCurrentTextID] = useState<number>(-1);

	const texts = [
		'Привет!',
		'Рады видеть тебя в новом музее от Уральской Резиденции Образования!',
		'В этом музее ты можешь увидеть различные онлайн экспонаты на тему образования',
		'Мы подготавливали его для того, чтобы ты смог посетить первый в мире онлайн музей посвященный образованию',
		'Надеемся, что тебе понравится, приятного просмотра!',
		'А если захочешь увидеть все вживую, приходи в наш музей'
	];

	const onClick = () => {
		if (width != '3000px') {
			setWidth('3000px');
			setHeight('3000px');
			setTop('-300px');
			setCurrentTextID(0);
		}
	};
	
	useEffect(() => {
		if ((currentTextID >= 0) && (width === '3000px') && (currentTextID < texts.length)) {
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
				className={'bg-black inline-block rounded-full duration-1000 absolute' + (width === '3000px' ? ' cursor-default' : '')}
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

			<div className='flex items-center px-20'>
				<h1 
					className={'text-white font-bold z-10 text-5xl duration-500 text-center ' + (width === '3000px' ? 'block' : 'hidden')}
					style={{
						opacity: textOpacity,
					}}	
				>
					{texts[currentTextID]}
				</h1>

			</div>
			{currentTextID >= 0 && currentTextID < texts.length && (
				<h2 className='text-white z-10 text-xl absolute bottom-4'>
					{currentTextID+1}
					/
					{texts.length}
				</h2>
			)}
		</div>
	)
};

export default MainPage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
