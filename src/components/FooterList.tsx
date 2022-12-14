interface Props {
  menuList: { title: string; features: string[] };
}

const FooterList = ({ menuList: { title, features } }: Props) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul className="list">
        {features.map((item, i) => (
          <li key={i}>
            <a href="!#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
