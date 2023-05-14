// Import the BrowserRouter component from the react-router-dom library
import { BrowserRouter } from 'react-router-dom';
// Import the AllRoutes component from the current directory's index file
import { AllRoutes } from './index';

// Define the Routes component
const Routes = () => {
    // The component returns the BrowserRouter component wrapping the AllRoutes component
    return (
        // BrowserRouter is a router implementation that uses HTML5 history API
        // (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
};

// Export the Routes component as the default export from this module
export default Routes;
