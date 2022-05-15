import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const NewMaterialsPage = (): JSX.Element => {
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
				src={'/NewMaterials.png'}
				title='Новые материалы' 
				description={`Сегодня материаловедение - это наука, которая охватывает все сферы нашей жизнедеятельности 
				от бытового уровня до высокотехнологического производства биосовместимых материалов для протезов, 
				полупроводников для электроники, покрытий, повышающих коррозионную и износостойкость материалов и механизмов.`} />

		</div>
	);
};

export default NewMaterialsPage;
