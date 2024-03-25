import { useRoutes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'

export default function ThemeRoutes() {
    return useRoutes([ProtectedRoutes, PublicRoutes])
}
