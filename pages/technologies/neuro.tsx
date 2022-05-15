import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const NeuroPage = (): JSX.Element => {
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
				src={'/Neuro.png'}
				title='Нейротехнологии' 
				description={`Нейроинтерфейс, в широком смысле слова, это система, осуществляющая 
					взаимодействие между мозгом человека и машиной, 
					что позволяет производить обмен информацией. В современном мире используются 
					однонаправленные нейроинтерфейсы, когда человек посылает сигналы и команды для компьютера. 
					А вот, двунаправленные интерфейсы, позволяющие осуществлять обоюдное взаимодействие - пока 
					дело будущего, хоть и ближайшего.`} />

		</div>
	);
};

export default NeuroPage;
