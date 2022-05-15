import { useEffect, useState } from 'react';
import TechnologyInfo from '../../components/TechnologyInfo';

const BplaPage = (): JSX.Element => {
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
				src={'/Bpla.png'}
				title='Беспилотники' 
				description={`Беспилотный транспорт помогает в решения задач из области  мониторинга, логистики, 
				конструкторских решений, энергетических и автоматизированных систем, 
				алгоритмов управления, новых материалов, картографии.`} />

		</div>
	);
};

export default BplaPage;
