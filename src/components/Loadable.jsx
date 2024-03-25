import { Suspense } from 'react'

// project import
import Loader from './Loader'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => {
    const LoadableComponent = (props) => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    )

    LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`

    return LoadableComponent
}

export default Loadable
