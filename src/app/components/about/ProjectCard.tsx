import Image from 'next/image';
import githubIcon from '../../public/github.png';
import nextjsIcon from '../../public/nextjs.png';
import nodejsIcon from '../../public/nodejs.png';
import reactIcon from '../../public/react.png';
import tsIcon from '../../public/typescript.png';

type Tool = 'Typescript' | 'NodeJS' | 'React' | 'NextJS';

interface Props {
  name: string;
  description: string;
  tools: Tool[];
  link: string;
}

export default function ProjectCard({ name, description, tools, link }: Props) {
  const toolIcons = new Set<any>();
  for (const tool of tools) {
    switch (tool) {
      case 'Typescript':
        toolIcons.add(<Image key="ts" src={tsIcon} alt={tool} width={24} height={24} />);
        break;
      case 'NodeJS':
        toolIcons.add(<Image key="node" src={nodejsIcon} alt={tool} width={24} height={24} />);
        break;
      case 'React':
        toolIcons.add(<Image key="react" src={reactIcon} alt={tool} width={24} height={24} />);
        break;
      case 'NextJS':
        toolIcons.add(<Image key="next" src={nextjsIcon} alt={tool} width={24} height={24} />);
        break;
    }
  }

  return (
    <a href={link} role='button' className="card" style={{width: '100%', background: '#dadada', textDecoration: 'none' }}>
      <div className="card-body">
        <h5>{name}</h5>
        <p style={{ marginBottom: '8px', overflowY: 'auto', maxHeight: '70px' }}>{description}</p>
        <div style={{ display: 'flex', width: '100%' }}>
          <span style={{ flex: 1 }}>{toolIcons}</span>
          <span>View on GitHub&nbsp;</span>
          <Image key="github" src={githubIcon} alt="GitHub" width={20} height={20} />
        </div>
      </div>
    </a>
  );
}
