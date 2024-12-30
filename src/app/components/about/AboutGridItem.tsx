import style from './AboutGridItem.module.css';

type AboutId = 'exp' | 'aws' | 'ui' | 'leadership' | 'edu';

const AboutIdColorMap: Record<AboutId, string> = {
  exp: 'linear-gradient(90deg, #00bfff, #3e84f2)',
  aws: 'linear-gradient(90deg, #FF9900, #FFB84D)',
  ui: 'linear-gradient(90deg, #fd5e53, #fd8953)',
  leadership: 'linear-gradient(90deg, rgb(53, 169, 138) 0%, rgb(109, 212, 0))',
  edu: 'linear-gradient(90deg, #9D4EDD, #D186F5)'
};

interface Props {
  gridId: AboutId;
  title: string | string[];
  description: string | string[];
}

export default function AboutGridItem({ gridId, title, description }: Props) {
  return (
    <div
      className={style.item}
      style={{
        gridArea: gridId
      }}
    >
      {Array.isArray(title) ? (
        <h4
          style={{
            background: AboutIdColorMap[gridId],
            backgroundClip: 'text',
          }}
        >
          {title[0]}
          <br />
          {title[1]}
        </h4>
      ) : (
        <h4
          style={{
            background: AboutIdColorMap[gridId],
            backgroundClip: 'text',
          }}
        >
          {title}
        </h4>
      )}
      {Array.isArray(description) ? (
        <div className={style.itemText}>
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.itemText}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
