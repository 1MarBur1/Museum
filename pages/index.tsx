import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Arrow from '../assets/Arrow.svg';
import { Slide } from 'react-awesome-reveal';

const MainPage = (): JSX.Element => {
	const [width, setWidth] = useState<string>('0px');
	const [height, setHeight] = useState<string>('0px');
	const [top, setTop] = useState<string>('0');
	const [bgColor, setBgColor] = useState<string>('white');
	const [divStatus, setDivStatus] = useState<string>('block');

	const router = useRouter();

	const [textOpacity, setTextOpacity] = useState<number>(100);
	const [currentTextID, setCurrentTextID] = useState<number>(-1);

	const texts = [
		'Привет!',
		'Рады видеть тебя в новом музее от Уральской Резиденции Образования!',
		'В этом музее ты можешь увидеть различные онлайн экспонаты на тему образования',
		'Мы подготовили его для того, чтобы ты смог посетить первый в мире онлайн музей посвященный образованию',
		'А если захочешь увидеть все вживую, приходи в наш музей',
		'Надеемся, что тебе понравится, приятного просмотра!',
	];

	useEffect(() => {
		if (width != '4000px') {
			setWidth('4000px');
			setHeight('4000px');
			setTop('-800px');
			setCurrentTextID(0);

			setTimeout(() => {
				setBgColor('lightBlack');
			}, 1500);
		}
	}, []);

	useEffect(() => {
		if ((currentTextID >= 0) && (width === '4000px') && (currentTextID < texts.length)) {
			setTimeout(() => {
				setTextOpacity(0);
				setTimeout(() => {
					setTextOpacity(100);
					setCurrentTextID(currentTextID+1);
				}, 450);
			}, 3000);
		}

		if (currentTextID === texts.length)
			localStorage.setItem('hasShowed', '1');

		if (typeof window !== 'undefined' && localStorage.getItem('hasShowed') === '1')
			setDivStatus('hidden');
	}, [currentTextID]);

	if (typeof window !== 'undefined') {
		return(
			<div className={'w-screen min-h-screen ' + (localStorage.getItem('hasShowed') === '1' ? 
				'bg-lightBlack' : `bg-${bgColor}`)}
			>
				<div 
					className={'w-screen h-screen flex justify-center ' 
					+ divStatus}
				>
					<div
						className={`bg-lightBlack inline-block rounded-full 
						duration-[1500ms] absolute justify-self-center `
							+ (bgColor === 'lightBlack' ? 'hidden' : 'block')}
						style={{
							width: width,
							height: height,
							top: top,
						}} />
					
					{currentTextID >= 0 && currentTextID < texts.length && localStorage.getItem('hasShowed') === '0' && (
						<div className='flex items-center px-20'>
							<h1 
								className={'text-white font-bold z-10 text-5xl duration-500 text-center ' 
									+ (width === '4000px' ? 'block' : 'hidden')}
								style={{
									opacity: textOpacity,
								}}	
							>
								{texts[currentTextID]}
							</h1>
	
						</div>
					)}
					
					{currentTextID >= 0 && currentTextID < texts.length && localStorage.getItem('hasShowed') === '0' && (
						<h2 className='text-white z-10 text-xl absolute bottom-4'>
							{currentTextID+1}
							/
							{texts.length}
						</h2>
					)}
				</div>
	
				{(currentTextID === texts.length || localStorage.getItem('hasShowed') === '1') && (
					<div className='text-white px-28 py-20 pr-40'>
						<Slide direction='down' duration={1500}>
							<div className='flex items-center gap-8'>
								<h1 className='text-7xl font-bold'>
									Музей
								</h1>
								<h2 className='text-2xl mt-2 font-bold text-darkGray'>
									Уральская образовательная резиденция
								</h2>
							</div>
						</Slide>

						<Slide duration={1500}>
							<div className='font-bold mt-16 flex text-darkGray gap-20'>
								<button className='flex gap-8' onClick={() => router.push('/artifacts')}>
									<h2 className='text-4xl font-medium text-white'>
										Экспонаты
									</h2>
									<Arrow />
								</button>
		
								<div className='text-lg'>
									<p>
										Узнай на какую значимую в его истории личность ты похож, и чье мышление совпадает с твоим
									</p>
									<p className='mt-3'>
										Пройди спираль времени, от разнообразного мировосприятия 
										современного человека, до единого первого
									</p>
									<p className='mt-3'>
										Попробуй себя в новой роли и пройди профориентацию в городе профессий
									</p>
								</div>
							</div>
						</Slide>

						<Slide direction='right' duration={1500}>
							<div className='font-bold mt-16 flex text-darkGray gap-20'>
								<button className='flex gap-8' onClick={() => router.push('/technologies')}>
									<h2 className='text-4xl font-medium text-white'>
										Технологии
									</h2>
									
									<Arrow />
								</button>

								<div className='text-lg'>
									<p>
										Передовые производственные технологии
									</p>
									<p className='mt-3'>
										Нанотехнологии
									</p>
									<p className='mt-3'>
										Агропромышленные и биотехнологии
									</p>
									<p className='mt-3'>
										Большие данные, искусственный интеллект
									</p>
									<p className='mt-3'>
										Умный город
									</p>
								</div>
							</div>
						</Slide>
					</div>
				)}
			</div>
		);
	}
	else return null;
};

export default MainPage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
