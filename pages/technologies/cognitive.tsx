import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const CognitivePage = (): JSX.Element => {
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
				src={'/Cognitive.png'}
				title='Когнитивные исследования' 
				description={`Когнитивные исследования включают в себя знакомство с механизмами познания в широком смысле: 
					естественными мыслительными процессами у человека и 
					животных, моделированием этих процессов в системах искусственного интеллекта.`} />

		</div>
	);
};

export default CognitivePage;
