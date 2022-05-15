import { useRouter } from 'next/router';
import TechnologyCircle from '../../components/TechnologyCircle';
import { Fade } from 'react-awesome-reveal';

const TechnologiesPage = (): JSX.Element => {
	const router = useRouter();

	const routeToPage = (link) => {
		router.push(`/technologies/${link}`);
	};

	return(
		<div className='min-h-screen w-screen bg-lightBlack text-white px-28 py-20'>
			<Fade duration={1000}>
				<div className='flex items-center gap-8'>
					<h1 className='text-7xl font-bold'>
						Технологии
					</h1>
					<h2 className='text-2xl mt-2 font-bold text-darkGray'>
						Уральская образовательная резиденция
					</h2>
				</div>
			</Fade>

			<div className='flex flex-wrap mt-4'>
				<TechnologyCircle 
					size={56} 
					onClick={() => routeToPage('cognitive')}
					title='Когнитивные технологии' 
					className='mt-60 -ml-8' />
				<TechnologyCircle 
					size={36} 
					onClick={() => routeToPage('neuro')}
					title='Нейротех' 
					className='mt-8 -ml-24' />
				<TechnologyCircle 
					size={52} 
					onClick={() => routeToPage('bigdata')}
					title='Большие данные' 
					className='mt-40 ml-12' />
				<TechnologyCircle 
					size={56} 
					onClick={() => routeToPage('smartcity')}
					title='Умный город' 
					className='ml-12' />
				<TechnologyCircle 
					size={42} 
					onClick={() => routeToPage('bpla')}
					title='БПЛА' 
					className='mt-72 -ml-20' />
				<TechnologyCircle 
					size={48} 
					onClick={() => routeToPage('newmaterials')}
					title='Новые материалы' 
					className='mt-8' />
				<TechnologyCircle 
					size={42} 
					onClick={() => routeToPage('space')}
					title='Космотех' 
					className='mt-64 -ml-24' />
			</div>
		</div>	
	);
};

export default TechnologiesPage;
