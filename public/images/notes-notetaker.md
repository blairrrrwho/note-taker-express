- Starter Code: 
    https://github.com/coding-boot-camp/miniature-eureka

User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

Acceptance Criteria
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


ToDo: 
- next time: 
        - don't do a develop folder
        - edit gitignore first; adding package-lock.json, etc. 
        - do all installs first
- installs: 
    1st: npm init or npm init -y (basic package.json setup)
    2nd: npm i express (installs express library)
    3rd: nodemon -- save as dev dependency: 
        npm i --save-dev nodemon
        allows you to restart your server anytime you make changes (automatically)
        delete: "test": "echo \"Error: no test specified\" && exit 1", in package.json
        add: "devStart": "nodemon server.js"
    Then create your server.js file
        server code goes here
    Command: npm run devStart
        runs all the code in our server.js bc of the devStart we created
        and when we make changes, it's logging those in the terminal and automatically rerunning our server.js file
    4th: require path and fs
    5th: npm i uuid


deleted from package.json:
  "scripts": 
    "test": "echo \"Error: no test specified\" && exit 1",





<!-- APP.GET TESTING -->
// route get path 
<!-- app.get('/', (req, res) => { -->
    // console.log('here');
    // res.status(500).send('hi');
    // res.status(500).json({ message: "Error" })
    // res.send('hi'); 
    // send is good for testing purposes
    // res.download('server.js')


// to make the server run
// app.listen(3000)
// console.log("server is now listening on port$");

