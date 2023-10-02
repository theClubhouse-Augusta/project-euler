# theClubhou.se Project Euler
![Project Euler Logo](https://projecteuler.net/themes/logo_default.png)
Welcome to theClubhou.se Project Euler repository! This project is dedicated 
to solving Project Euler problems using various programming languages. If you 
enjoy mathematical and algorithmic challenges, you're in the right place.

## About theClubhou.se
theClubhou.se is a community-driven organization dedicated to fostering 
innovation, learning, and collaboration in the field of technology and 
programming. Our mission is to provide a supportive and creative environment 
for developers, designers, makers, and tech enthusiasts of all levels.

### Some Of What We Do
- **Project Euler Challenges:** Our Project Euler initiative aims to enhance 
problem-solving skills and programming proficiency. We regularly tackle 
challenging mathematical and computational problems from Project Euler, 
sharing solutions and insights across various programming languages.
- **Workshops and Hackathons:** We organize workshops and hackathons to 
encourage hands-on learning and creativity. Whether you're a beginner or an 
experienced developer, our events offer opportunities to expand your skills 
and work on exciting projects.
- **Tech Talks and Knowledge Sharing:** Knowledge sharing is at the core of 
theClubhou.se. We host tech talks, presentations, and discussions on a wide 
range of topics, including software development, data science, artificial 
intelligence, and more.
- **Open Source Collaboration:** We actively contribute to open source 
projects and promote collaboration within the open source community. Our 
members are encouraged to participate in open source development and make 
meaningful contributions.

### Join Us
We welcome individuals from diverse backgrounds and skill levels to join 
our community. Whether you're a student looking to learn or an experienced 
professional seeking collaboration, theClubhou.se provides a welcoming space 
for tech enthusiasts.
- **Connect:** Join our online forums and social media channels to connect 
with like-minded individuals, ask questions, and share your knowledge. See 
Contact Us section.
- **Participate:** Attend our events, workshops, and challenges. Contribute to 
open source projects, and engage in discussions to expand your horizons.
- **Collaborate:** Collaborate with fellow members on projects, learn from each 
other, and inspire innovation.

### Contact Us
Have questions or want to get in touch? Check out 
[theClubhou.se](https://theClubhou.se) or feel free to reach out to us through
our [Director of Technology](https://github.com/blister) or 
[Repo Initiator](https://github.com/asterihoku). You can also connect
with us on [LinkedIn](https://www.linkedin.com/company/theclubhou-se/) 
and [Facebook](https://www.facebook.com/theClubhouseAugusta).

We look forward to having you as part of our community at theClubhou.se! 

## About Project Euler
[Project Euler](https://projecteuler.net/) is a collection of challenging 
computational problems meant to be solved with computer programs. These 
problems range from simple to complex and cover a wide range of mathematical 
and computational topics. As you progress through the problems, you'll have 
the opportunity to improve your problem-solving skills and programming 
knowledge.

## Euler Problem Solutions
In this repository, you'll find solutions to Project Euler problems 
implemented in different programming languages. Each problem is solved in its 
own directory, organized by problem number. Inside each e directory are 
subdirectories of the languages that have been used to solve the 
problems. You can explore and learn from various programming approaches used to 
solve these problems. Feel welcome to reach out or discuss in theClubhou.se discord
[#programming](https://discord.com/channels/1088482651742146750/1090640789287219241). See contact options in theClubhou.se about section.

## Getting Started (QuickStart)
To get started with this repository, follow these steps:

## Fork Method 
If you want a full and separate version of this repository to exist in
**your** GitHub profile, use the Fork Method. This will give you a full
clone of the entire repository and let you show off your work on your
GitHub profile.

**Note**: If you are **not** a member of [theClubhouse-Augusta](https://github.com/theClubhouse-Augusta)
you have to use the **Fork** method to participate. If you would like to
be added to theClubhouse-Augusta organization, ask for perms in the 
[#programming](https://discord.com/channels/1088482651742146750/1090640789287219241) channel in theClubhou.se Discord
server.

### 1. Fork the Repository
Fork the [main repository](https://github.com/theClubhouse-Augusta/project-euler) into
your Github repositories.

### 2. Clone Locally
Then, clone that repository to your computer to start solving.
 ```console
git clone git@github.com:YOUR_USERNAME/project-euler.git
```

### 3. Run the installation script
```console
npm install 
```

### 4. Initial Setup (only once)
Now that you have everything installed, you can start solving immediately.
The first time you run the Project Euler script, it will perform a setup
function and ask you a few questions about your preferences.
```console
npm run euler
```
![image](https://github.com/theClubhouse-Augusta/project-euler/assets/124588/7a06281b-69f2-424d-8945-138259145f8f)

### 5. Code Your Solution (for each problem)
Start a new Project Euler solution by 1 of 2 options:

   * run the command `npm run euler` or `node index.js`
   * provide command-line arguments to the script to skip interactive mode
       Examples: `npm run euler 5 javascript` `node index.js 9 cpp`

Either option will create all of the correct files and
folders, and a README file in your solution directory. Keep your
work inside your own solution directory.

### 6. Submit PR
Once you're happy with your solution, submit a PR to the main repository
at [theClubhouse-Augusta/project-euler](https://github.com/theClubhouse-Augusta/project-euler) to get your branch
merged in to the primary repository. 

## Contributor Method (best)
If you are a member of theClubhou.se and want a slightly easier workflow,
we recommend the **Contributor Method**. If you are already a member of the
GitHub [theClubhouse-Augusta organization](https://github.com/theClubhouse-Augusta/members), then you can 
skip the **Fork the Repository* step above and work directly from the main
repository.

**Note**: If you are an **active** member of [theClubhouse-Augusta](https://theclubhou.se) and
need to be added to the GH Organization, ask to be added in the Discord server at
[#programming](https://discord.com/channels/1088482651742146750/1090640789287219241).

## Contributions other than Euler problems
This repository is meant to be focused on Euler problem solving and a wide range of 
programming languages. Adding input on problems, solutions, and languages is welcome 
inside any readme file within the eulers directory. Anyone can contribute reviews to PRs.
Discussions on theClubhou.se Discord server [#programming](https://discord.com/channels/1088482651742146750/1090640789287219241) are welcome.

Other contributions will only be considered once there are tests in place to ensure
persisting functionality for all existing features. If you are interested in assisting
with that, reach out to [Repo Initiator](https://github.com/asterihoku) to discuss. *ONLY AFTER tests are in place:*

If you have a different idea for a new feature or contribution:
1. Create a separate branch just for this work
2. Submit a PR to the main repository with:
   * Details about your contribution
   * Proof of tests passing

## Administrative
If you ever need to "resync" our local list of problems with Project Euler,
you can run the command listed below to pull down the most recent list of 
problems.
```console
npm run sync
```
This command will fetch the full list of problems from 
https://projecteuler.net/minimal=problems and store them as a JSON object in
`problems.js`.
