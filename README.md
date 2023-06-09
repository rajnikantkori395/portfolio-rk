# Website Coding Guidelines

- Only styled-components to be used for styling
- No UI Library to be used for any components on website

# Folder Structure

- pages - for routing - all the initial data fetching will be done in getStaticProps or getServerSideRenderedProps and passed down as props - Data manipulation if needed to be done inside these functions only - Head data to be entered in this file only
- containers - one folder for every route which received props and passes it on to further smaller components - useState, useEffect if needed to be declared in these containers only
- components - one folder for each component - have to make our page as modular as possible and break down into as simple components as possible - no use of useState or useEffect hooks here, meant to only receive props and display them without any manipulation

# Component/Container Structure

- {component-name-in-small-case-with-hyphen-as-separator}.jsx - kebab case - React Component as default export
- {component-name-in-small-case-with-hyphen-as-separator}.styles.jsx - kebab case - style file for the respective component/container

# Naming Convention

- For components - PascalCase
- For variables/functions - camelCase
- For Constants - UPPER_SNAKE_CASE

# Import Statements Order

- Imports from React Library
- Imports from Next Library
- Imports from other Libraries
- Imports from Local Components
- Imports from styled-components
- Function Declarations
- Constant Declarations
