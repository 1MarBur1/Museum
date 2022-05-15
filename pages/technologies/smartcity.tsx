import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const SmartcityPage = (): JSX.Element => {
	const [opacity, setOpacity] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			setOpacity(100);
		}, 200);
	}, []);
	return(
		<div 
			className='h-screen w-screen bg-white duration-500' 
			style={{
				opacity: opacity,
			}}
		>
			<TechnologyInfo 
				src={'/Smartcity.png'}
				title='Умный город' 
				description={`Городская среда и производственная инфраструктура в наше время оснащена 
				датчиками для сбора информации и предопределения процента нагрузки на системы обслуживания. 
				Благодаря этому, теперь возможно оптимизировать потоки муниципального транспорта, 
				снабжение электричеством и водой, тщательнее следить за качеством товаров, поставляемых на рынок. `} />

		</div>
	);
};

export default SmartcityPage;
