import { Dropdown } from 'react-bootstrap';

const ExploreCategories = ({ categories }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="navbarDropdown">
        Explore Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category, index) => (
          <Dropdown.Item key={index} href="#">
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ExploreCategories;
