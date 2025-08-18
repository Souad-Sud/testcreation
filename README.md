Application about Movies 
The app is a single application that displays two main components:
In the left side I have a component HomePresentation that displays some content and that will be rplaced by MoviesDetails component
In the right side I have DisplayRandomMovies component that displays some movies dynamically from my data folder
In the top I have a search bar that allows us to fin a movie with the first letter and when click it displays the movieDetails in the left side and a button to go back to the home page 

![Screenshot of the app](imagesScreenshot/Capture d’écran_16-8-2025_191520_localhost.jpeg)


Header
1  Test that header exist in the page
2  Test that H1 is inside the header
3  Test that H1 display the correct text.

HomePresentation
1  Test the header with the correct text 
2  Test the span with the correct text 
3  Test the image exists in the DOM 
4  Test The src attribute points to the correct source 
5  optionally, the alt text is correct for accessibility 
6  Test the paragraph with the correct text

SearchMovie
1  Test the search input if it displays the correct paceholder and if it containes a placeholder
2  Test if it shows filtred movies when typing
3  Test if ul list exists 
4  Test onSelectMovie and clears input when clicking a movie
5  Test the firlist that should disappear 
6  Test if it does not render list if search is empty


DisplayRandomMovie
1 All movies render: Make sure every movie in the movies array shows up.
2 Movie info is displayed correctly: Test that the name, releaseDate, and mainActors appear correctly.
3 Image alt text exists: Ensures accessibility (alt should match movie name).
4 check that the component renders content without problems
Interaction test
5 check that onSelectMovie is called when we click on the right movie's image


HomePage
1  Check if the HomePresentation component and DisplayRandomMovies are displayed
2  Check selected movie details when a movie is selected
3  Check in the div with the header is displayed with the close button


MoviePage
1  Check if HomePresentation and MoviesDetails is desplayed
2  Check MoviesDetails when a movie is clicked
3  Check if the stat is initialised when closing MoviesDetails
4  Check if it goes back to the initial stat 