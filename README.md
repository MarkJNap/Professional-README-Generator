# Professional README Generator

## Description

This application was created to streamline the creation of a new README, This is important as it allows project creators to spend more time working on their applications. A strong README helps make the application itself look more professional and well developed. In the process of making this app I got to experience using Node, Inquirer, fs and learnt about  license information. I quickly understood the technologies needed for developing this app and it all came together fairly easily.

## Installation

Requires:
* Node.js v16
* GitBash or equivalent

After cloning repository and navigating to correct folder in GitBash the user needs to run 
> npm install

to ensure it downloads all needed packages/dependencies. 

## Usage

To use this program type the command in GitBash
> node index.js 

This will begin to show the prompts a user must input to create a professional README.
The questions they will be asked are:
* What is the Title of your project?
* Give a description of your project:
* Enter the installation instructions for your project:
* Explain the usage of this application:
>* Select the license you have for your project: 
>(At this step the user is given a list to select a license from)
* Enter the contribution guidelines:
* Enter test instructions:
* Type your github username:
* Enter your email to contant you for questions:

Once they have completed these steps the text:
"Successfully created your README!" Will be displayed and the program will stop running

The newly generated README will appear in the folder GeneratedReadmes

Link to Demo Video:

## Credits

Mark Napolitano

## License

MIT License

---