import { FiActivity, FiFileText, FiHeart, FiHome, FiMail, FiUsers } from 'react-icons/fi';

export const links = [
  {
    route: '/',
    name: 'Inicio',
    id: 1,
    icon: FiHome,
  },
  {
    route: '/nosotros',
    name: 'Nosotros',
    id: 2,
    icon: FiUsers,
  },
  {
    route: '/actividades',
    name: 'Actividades',
    id: 3,
    icon: FiActivity,
  },
  {
    route: '/novedades',
    name: 'Novedades',
    id: 4,
    icon: FiFileText,
  },
  {
    route: '/testimonios',
    name: 'Testimonios',
    id: 5,
    icon: FiHeart,
  },
  {
    route: '/contacto',
    name: 'Contacto',
    id: 6,
    icon: FiMail,
  },
];
