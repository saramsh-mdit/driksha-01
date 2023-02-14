import { Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';


const NavLinkItem = ({ children, path }: { children: any; path: string }) => (
  <li className='list-none m-0 p-0'>
    <NavLink
      end
      to={path}
      className={({ isActive }) =>
        isActive ? 'text-blue-800' : 'text-gray-700'
      }
    >
      <p className='font-semibold p-0 leading-none'>{children}</p>
    </NavLink>
  </li>
);

const NavBar = () => {
  return (
    <nav className='p-0 m-0 px-8 flex justify-between items-center bg-blue-300'>
      <div>
    <Text className='font-semibold text-xl'>Drikshya</Text>
      </div>
      <div className="flex gap-10">
      <NavLinkItem path='/'>Home</NavLinkItem>
      <NavLinkItem path='/about'>About</NavLinkItem>
      <NavLinkItem path='/form'>Forms</NavLinkItem>
      </div>
    </nav>
  );
};

export default NavBar;
