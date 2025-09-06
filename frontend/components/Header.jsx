import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const navigations = [
    {
      name: 'Workout Buddy',
      href: '/',
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex space-x-12 flex-row">
      {navigations.map((item) => {
        return (
          <div key={item.name} className="hidden md:block mb-10">
            <NavLink className="text-4xl" to={item.href}>
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
