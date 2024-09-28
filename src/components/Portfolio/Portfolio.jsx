import { useState } from 'react';
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';

export const Portfolio = (props) => {
  const { projects } = props;

  const [selected, setSelected] = useState("All");

  const handleSelectFilter = (filter) => {
    setSelected(filter);
  };

  const getFilteredProjects = () => {
    if (selected === "All") {
      return projects;
    }
    return projects.filter(project => project.category === selected);
  };

  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const filteredProjects = getFilteredProjects();

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}
