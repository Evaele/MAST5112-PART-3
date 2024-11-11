Features

Home Screen: Displays a welcome message and average price per course.

Course Selection Screen: Allows the user to choose a course (e.g., Starters, Main Course, Dessert).

Menu Page: Lists menu items for the selected course, with options to add or edit dishes.

Add Menu Item Page: Enables users to add new dishes to the selected course.

Edit Menu Item Page: Allows users to update or remove an existing dish.

Dish Details Page: Shows detailed information about a selected dish.

Changelog

v1.1.0

Navigation Setup: Integrated React Navigation using @react-navigation/native and @react-navigation/stack.
Added NavigationContainer to App.tsx for centralized navigation management.
Configured a stack navigator with screens: Home, CourseSelection, MenuPage, AddMenuItemPage, EditMenuItemPage.

v1.0.1

Bug Fixes:
Fixed an import issue where AddMenuItemPage was incorrectly named (add menu items psge -> AddMenuItemPage).
Fixed screen names in the stack navigator to match the correct component names.
Resolved issues with navigation types in TypeScript by defining RootStackParamList.

v1.0.0

Initial Release:
Basic structure for the app with screens: Home, Course Selection, Menu, Add Menu Item, Edit Menu Item, and Dish Details.
Implemented core functionalities for managing dishes within courses.
Added functions for calculating average course price and filtering dishes by course.
Refactoring Notes
During refactoring, the following changes were made to improve code structure, readability, and maintainability:

Navigation Structure:

Moved navigation setup to App.tsx and wrapped it in NavigationContainer.
Created a TypeScript type definition, RootStackParamList, to ensure type safety for navigation between screens.
Updated all screen components to use StackNavigationProp to ensure TypeScript correctly infers navigation types.
Screen Component Organization:

Renamed screen files to follow consistent naming conventions (e.g., home screen.tsx to HomeScreen.tsx).
Verified that each screen component was properly exported and imported into App.tsx to avoid module resolution errors.
State Management and Props:

Refactored state handling in App.tsx by moving selected course and dish details into more manageable pieces.
Improved type annotations for state variables and props, particularly in relation to dish and course data.
General Code Cleanup:

Removed unused variables and streamlined functions.
Used more descriptive names for buttons and components to improve readability.
Added comments to clarify each function's purpose within App.tsx.
Error Handling:

Added default values and checks to prevent navigation errors and unexpected screen states.
Refactored calculateAveragePrice function to handle cases where there are no dishes for a course.
