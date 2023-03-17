# Artistic Innovations App

This React app represents the Artistic Innovations website, which showcases various artistic services of Deborah Stair of New Jersey.

## Dependencies

This project uses the following dependencies:

React: JavaScript library for building user interfaces.
@mui/material: React UI framework for building responsive and accessible web applications.
./components/: Custom components created for the Artistic Innovations website.

### Available Scripts

In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

## App Structure

The App.js file contains the main React component for the Artistic Innovations website. The component imports custom components, including hero, navbar, footer, artisticinnovations, murals, commercialwindowart, customandcommercial, and contact.

The currentPage state is used to keep track of the currently displayed page. The handlePageChange function is used to update the currentPage state when the user navigates to a different page. The isLoading state is used to display a loading screen while the app components are being loaded.

The renderPage function is used to determine which component to display based on the current currentPage state. This function renders the corresponding component based on the current currentPage state.

The styles object contains the styles for the app components, including the container, hero, navBarContainer, navBar, artisticInnovations, and footer.

The App component returns the app container, which includes the hero, navbar, main content, and footer. The main content is determined by the current currentPage state. If the isLoading state is true, the LoadingScreen component is displayed.

### GitHub Repository

You can find the GitHub repository for this project at https://github.com/willg1991/ArtisticInnovations. Please feel free to contribute, open issues, or submit pull requests.

### Homepage

The Artistic Innovations website is hosted on GitHub pages at http://willg1991.github.io/ArtisticInnovations.

