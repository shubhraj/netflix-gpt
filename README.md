worklogs

1. create-react-app 
2. configure tailwind
3. build login page
4. configure routing using react-router-dom -> createBrowserRouter and RouterProvider
5. create login form
6. sign up form ( using existing login form ) -> make use of useState hook to render JSX conditionally
7. add form validations -> useRef hook 
8. Firebase Setup
    - setup project in firebase
    - add authentication
    - add signup and signin logic in the app using firebase docs : https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0
    - deploy the app 
        - Project Console: https://console.firebase.google.com/project/netflixgpt-ee1bd/hosting/sites/netflixgpt-ee1bd
        - Hosting URL: https://netflixgpt-ee1bd.web.app/
    - create signup -> create user account in firebase
9. setup redux store with userSlice to store user login info 
10. signout workflow and update user data
11. Bugfix :
      secure the routes : 
        a. if not logged in then user should not be able to navigate to "/browse" route.
        b. if user is logged in then should not be able to navigate to "/login" route.
12. Unsubscribed to the onAuthStateChanged Callback.    
13. use constants file and store URLs/HardCoded values in that file
14. fetch movie from TMDB : https://developer.themoviedb.org/reference/movie-now-playing-list
15. Setup the browse page 
16. Render trailer in background of main container
17. create movie suggestion list (secondary list)
18. populate list of different movies like : now playing, popular, top rated, etc 
    API : https://developer.themoviedb.org/reference/movie-upcoming-list
19. 
 