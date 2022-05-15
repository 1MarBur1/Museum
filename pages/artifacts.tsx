import Artifact from '../components/Artifact';
import { Slide } from 'react-awesome-reveal';
import BackArrow from '../assets/BackArrow.svg';
import BigArrow from '../assets/BigArrow.svg';
import { useRouter } from 'next/router';

const ArtifactsPage = (): JSX.Element => {
	const router = useRouter();

	return(
		<div className='w-screen min-h-screen bg-lightBlack px-28 py-16'>
			<Slide triggerOnce direction='left' duration={1500}>
				<div className='flex items-center gap-8'>
					<button onClick={() => router.push('/')}>
						<BackArrow />
					</button>
					<h1 className='text-7xl font-bold text-white ml-6'>
						Музей
					</h1>
					<h2 className='text-2xl mt-2 font-bold text-darkGray mr-6'>
						Уральская образовательная резиденция
					</h2>
					<button onClick={() => router.push('/technologies')}>
						<BigArrow />
					</button>
				</div>
			</Slide>

			<Slide triggerOnce direction='up' duration={1500}>
				<div className='mt-8 flex flex-wrap gap-4'>
					<Artifact src='/Time.png' title='Спираль времени' />
					<Artifact src='/Test.png' title='Тест: Кем бы ты был в истории?' />
					<Artifact src='/City.png' title='Город инновационных професий' />
				</div>
			</Slide>
		</div>
	);
};

export default ArtifactsPage;
