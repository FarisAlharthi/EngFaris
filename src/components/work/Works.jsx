import { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WorksItems';
const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-work' : ''} work__item`}
            key={navItem.name} // استخدام الاسم كـ key
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((project) => (
          <WorksItems item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
