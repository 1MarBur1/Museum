import Image from 'next/image';
import { Props } from './Artifact.props';

const Artifact = ({ src, title }: Props): JSX.Element => {
	return(
		<div>
			<Image src={src} alt={title} width={360} height={400} className='rounded-lg' />

			<h2 
				className='text-2xl text-white font-bold mt-4' 
				style={{
					width: 360,
				}}
			>
				{title}
			</h2>
		</div>
	);
};

export default Artifact;
