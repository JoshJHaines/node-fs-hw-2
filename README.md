# A-Node-FS

## Start Server
- [x] Create directory called node-fs-hw in terminal
- [x] In terminal, cd into node-fs-hw, then git init
- [x] Create a repo in github add the repository to this assignment. Remember to git add, git commit and git push. Will be submitting this assignment through github.
- [x] In terminal, touch server.js
- [x] In terminal, npm init -y, then npm i
- [x] Make sure the package.json main is server.js - [x] In server.js, create and listen to server 3000

## URLs and CRUD
- [x] Using fs module inside createServer callback:
  
- [x] If request.url === “/create-directory” create a directory called content using fs method and it should log 'content folder created'
  
- [x] If request.url === “/create-text” create a file using fs method called randomText.txt that lives outside the content directory randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.

- [ ] if request.url === “/new-folder-and-file write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
  
- [ ] Now create a separate setTimeout function that after 7 seconds deletes the content directory using fs methods (inside /new-folder-and-file)


***methods to look into fs.mkdir, fs.unlinkSync, fs.rmdir


- [ ] Submit Github link for hw submission in the essay section. Will look at the number of commits made! Commit every time you're done with one function.
















