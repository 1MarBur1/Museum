import Image from 'next/image';
import { Props } from './TechnologyInfo.props';
import BlackArrow from '../../assets/BlackArrow.svg';
import { useRouter } from 'next/router';

const TechnologyInfo = ({ title, description, src }: Props): JSX.Element => {
	const router = useRouter();

	return(
		<div className='w-screen h-screen'>
			<div className='flex items-center px-24 py-12 gap-8'>
				<button onClick={() => router.push('/technologies')}>
					<BlackArrow />
				</button>
				<h1 className='text-7xl font-bold'>
					{title}
				</h1>
				<h2 className='text-2xl mt-2 font-bold text-darkGray'>
					Уральская образовательная резиденция
				</h2>
			</div>

			<p className='text-sm px-24 font-bold w-2/3 mt-4 mb-6'>
				{description}
			</p>

			<Image src={src} className='absolute' alt='Image' width={1500} height={300} />
		</div>
	);
};

export default TechnologyInfo;
