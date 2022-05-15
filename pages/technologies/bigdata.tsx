import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const BigdataPage = (): JSX.Element => {
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
				src={'/Bigdata.png'}
				title='Большие данные' 
				description={`Big Data или большие данные — это структурированные или неструктурированные массивы данных 
                большого объема. Их обрабатывают при помощи специальных автоматизированных инструментов, 
                чтобы использовать для статистики, анализа, прогнозов и принятия решений.`} />

		</div>
	);
};

export default BigdataPage;
