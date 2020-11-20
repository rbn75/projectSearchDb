
# ALIEN JOBS - Developed by __@ALIENROOM__ Computer Science ARCS :alien: :flying_saucer:

## Build Your Engineering Team

AlienRoom ( Software Dev Startup / CS Community / CS University ), the biggest CompSci Community in Central America with 3,000+ active members and growing, free to join and participate.

Alien Jobs is the easiest way to hire 
- Software Developers
- DevOps Engineers
- CyberSecurity Specialists
- Data Scienctists
- Engineering Leaders

Hire Quicker With 95% response rates, you can fill your pipeline and build your team quicker than your competitors, with our Push Notifications, Pinned Ads. 80% of companies hire within 4 weeks, meaning less time and money wasted for technical hiring managers.

- Hire the World's Best Engineers
- Innovative Recruitment of Tech Talent
- The workplace is changing. AlienRoom focuses on candidates that focus on new technologies
- ITJobs Ad or Ads would be posted many times in our groups this is not a 1 Ad post like a BlogPost

__What clients say about us:__

"This TEAM really works hard the extra mile"

"We love AR because it has put everything into one place and the team behind it is great! Thank you for creating a platform that's so easy to use and helping us hire a kickass developer." Client1 testimony

"AR gives us exclusive access to very talented and motivated software engineers from all over the world!" Client2 testimony

What is __ALIENROOM__?
- we help connect coders meet each others online/offline, using Group Apps like Telegram / Discord / Whatsapp / Slack .
- we post daily many education tutorials and papers about CS and technologies.
- we post remote jobs offers.
- we connect B2C, B2B and coders with projects.
- all this for FREE to the community.
- we launched AlienRoom in march/2019.

AlienRoom links:
This are the links please click and follow us:
Telegram: https://t.me/alienroom { Computer Science Community / University }
Telegram: https://t.me/JavaScriptX { JavaScript Community }
Discord: https://discord.alienroom.dev
Social media:
https://www.instagram.com/alienroom
https://www.twitter.com/alienroom
https://www.linkedin.com/company/alienroom/
- AlienRoom Apparel Store
https://merch.alienroom.dev

Feel free to donate to our open source project, free education community with what ever you can, https://www.paypal.me/alienbyte

# ALIEN JOBS
## Code in a Job You Love
AlienJobs is the only job developer-focused job platform that has a interactive and open community. Create a profile and let companies apply to you.

## Routes
- /landing
- /login
- /signup
- /signout
- /dashboard
- /calender
- /calender/week
- /calender/day
- /job-board
- /job-board/add-job
- /job-details/:jobId/overview
- /job-details/:jobId/contacts
- /job-details/:jobId/job-tasks
- /job-details/:jobId/notes
- /tasks/todo
- /tasks/todo/add-todo
- /tasks/challenges
- /tasks/challenges/addChallenge
- /tasks/learning
	- /tasks/learning/add-course
	- /tasks/learning/:courseId
- /preperation
- /preperation/interview-questions
	- /preperation/interview-questions/add-answer
- /preperation/interview-questions/add-question
- /preperation/hard-skills
	- /preperation/hard-skills/add-skill
- /preperation/career-goals
	- /preperation/career-goals/add-goal
- /preperation/pitch
	- /preperation/pitch/edit-pitch
- /preperation/soft-skills
	- /preperation/soft-skills/add-skill
- /preperation/preperation-notes
	- /preperation/preperation-notes/edit-preperation-notes
- /preperation/resumes
	- /preperation/resumes/add-resume-category
	- /preperation/resumes/add-resume-pdf
	- /preperation/resumes/add-resume-url
- /preperation/resumes/:categoryId
- /preperation/cover-letters
	- /preperation/cover-letters/add-cover-letter-category
	- /preperation/cover-letters/add-cover-letter-pdf
	- /preperation/cover-letters/add-cover-letter-url
- /preperation/cover-letters/:coverLetter:id
- /profile
- /profile/add-goal-monthly
- /profile/add-goal-weekly
- /profile/add-goal-daily
- /profile/edit-profile

## Pages

Landing
- Login
Signup
- Dashboad
- Calender 
	- Calender Week
	- Calender Day
- Job Board
- Job Details
	- Overview
	- Contacts
	- Job Tasks
	- Notes
- Tasks
	- Todo
	Challenges
	Learning
- Preperation
	- Interview Questions
	- Soft Skills
	- Pitch
	- Hard Skills
	- Career Goals
- Notes
- Resumes
	- Resume Category
- Cover Letters
	- Cover Letter Category

- Profile

## Components

- Navbar
- Graph
- Calender
- TextField
- SubModal
- Task
- Search
- functions
	- Functions.js
- JobModule
- JobDetailsNav
- TaskNav


## Models

Users

```
	name: string
	email: string
	linkedin: string
	github: string
	portfolio: string
	jobGoalsMonth: boolean
	jobGoalsWeek: boolean
	jobGoalsDay: boolean
```
	
Jobs

```
	jobName: string
	jobTitle: string
	jobDescription: string
	dateAdded: string
	jobContacts: array {
		name: string
		title: string
		linkedin: string
		email: string
		phone: number
}
jobTasks: array[string]
notes: string
tasksOpen: boolean
saved: boolean
applied: boolean
inContact: boolean
interview1: boolean
interview2: boolean
interview3: boolean
hired: boolean
denied: boolean
archived: boolean
```

Tasks

```
	todos: array {
content: string
notes: string
complete: boolean
}
	challenges: array {
		name: string
url: string
repo:string
completed: boolean
}

learning: array {
name: string
tutorialUrl: array[string]
dateAdded: string
completed: boolean
}

Preperation 
	interviewQuestions: array {
title: string
answer: string
}
hardSkills: array[string]
careerGoals: array[string]
pitch: string
softSkills: array[string]
preperationNotes: string
resumeCategory: array {
categoryName: string
resumeUrl: string
uploadUrl: string
}
coverLetterCategory: array {
categoryName: string
coverLetter: string
}
```

## Notes

- add suggestions for resume builders
- add suggestions for all components of preparation 



## Backlog

- Change Language Settings
- Email notifications


## Links

### Wireframes
[To be finsh]

### Trello
[To be finish]

__ALIENROOM__ :alien: :flying_saucer: :heart:
