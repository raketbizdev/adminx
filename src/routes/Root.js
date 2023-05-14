// Import the Navigate component from the react-router-dom library
import { Navigate } from 'react-router-dom';

// Define the Root component
const Root = () => {
    // Function to determine the root URL for the application
    const getRootUrl = () => {
        // Set the default root URL as 'dashboard/ecommerce'
        let url = 'dashboard/ecommerce';
        // Return the URL
        return url;
    };

    // Call the getRootUrl function and store its result in the url variable
    const url = getRootUrl();

    // Use the Navigate component to redirect to the root URL
    // The path for Navigate is set using a template literal (`${url}`), which allows us to insert our variable directly into the string
    // The '/' before `${url}` ensures that the path starts from the root of the domain
    return <Navigate to={`/${url}`} />;
};

// Export the Root component as the default export from this module
// This allows it to be imported using a simpler syntax in other files (import Root from './Root' instead of import { Root } from './Root')
export default Root;
