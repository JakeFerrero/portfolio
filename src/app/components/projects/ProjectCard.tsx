import Image from 'next/image';
import githubIcon from '../../images/github.png';
import nextjsIcon from '../../images/nextjs.png';
import nodejsIcon from '../../images/nodejs.png';
import reactIcon from '../../images/react.png';
import tsIcon from '../../images/typescript.png';
import style from './projects.module.css';

type Tool = 'Typescript' | 'NodeJS' | 'React' | 'NextJS';

interface Props {
  name: string;
  tools: Tool[];
  link: string;
}

export default function ProjectCard({ name, tools, link }: Props) {
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
      <div className={style.itemWrapper}>
        <div className={style.itemGlow}>
          <a href={link} role="button">
            <div className={style.item}>
              <div className={style.icons}>{toolIcons}</div>
              <h3>{name}</h3>
              <div className={style.github}>
                <span className="small-text" style={{ fontWeight: 400 }}>
                  View on GitHub&nbsp;
                  <Image key="github" src={githubIcon} alt="GitHub" width={24} height={24} />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
  );
}
