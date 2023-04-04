import { DesktopOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'


const menus = [
      {
            key: '/dashboard',
            icon: <DesktopOutlined />,
            // children: [],
            label: 'Dashboard',
      },
      {
            key: '/dashboard/foods',
            icon: <DesktopOutlined />,
            // children: [],
            label: 'Foods',
      },
      {
            key: '/dashboard/restaurants',
            icon: <DesktopOutlined />,
            // children: [],
            label: 'Restaurants',
      },
      {
            key: '/wishlist',
            icon: <DesktopOutlined />,
            // children: [],
            label: 'Wishlist',
      },
]

export const userMenus = [
      {
            key: '/',
            icon: <HomeOutlined />,
            // children: [],
            label: 'Home',
      },
      {
            key: '/signin',
            icon: <UserOutlined />,
            // children: [],
            label: 'Signin',
      },
      {
            key: '/signup',
            icon: '',
            // children: [],
            label: 'Signup',
      },
]

export default menus
