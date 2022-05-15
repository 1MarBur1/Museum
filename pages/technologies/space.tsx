import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const SpacePage = (): JSX.Element => {
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
				src={'/Space.png'}
				title='Космос' 
				description={`Космические технологии сегодня очень востребованы на Земле: 
				фотографии Земли из космоса, обеспечение навигации и связи. 
				До освоения других планет ещё далеко, но сама идея сейчас представляет собой своего рода 
				локомотив развития технологий, 
				она будоражит умы и становится мощным трендом, объединяющим человечество.`} />

		</div>
	);
};

export default SpacePage;
