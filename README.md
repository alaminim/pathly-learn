# Pathly Learn
 
**Learning that works with little or no internet, with an optional AI study buddy.**
 
Pathly Learn is a website that students can install on their phone like an app. Students read short, clear lessons, practise, take a quiz at the end of each topic, and keep studying even when the internet is off. If they want extra help, they can ask **Pally, their learning buddy**.
 
*This document is based on the Pathly Learn Product Requirements Document (version 1.0, 15 November 2026).*
 
---
 
## 1. Where the project is today
 
This is a **working preview (prototype)** of the website. It shows what the finished product will look and feel like. It is **not** the finished product yet.
 
| What you see in the preview | Is it real yet? |
|---|---|
| Sign up and sign in screens | Screens only. No real accounts are created. |
| Pally AI chat | Pre-written sample conversations. There is no live AI yet. |
| "Pally is paused during quizzes" | A visual demonstration. The real protection is still to be built. |
| Offline learning | An illustration. Lessons do not yet save to the phone. |
| Student progress and scores | Sample numbers, not real students. |
 
### A few things to fix before showing this to the client
 
1. **Too many subjects.** The agreed plan has **three** subjects: Mathematics, English Language and Computer Studies. The preview also shows Basic Science and Civic Studies. These two should be removed unless the client approves adding them.
2. **Claims that are not proven yet.** The page mentions things like "95% less data than video", "thousands of students", exam alignment (WAEC, NECO, BECE) and an "84% readiness" score. These are placeholders. They should not be presented as facts until they are checked.
3. **Not yet installable.** The "install on your phone" and "works offline" features are planned but not built.
 
---
 
## 2. What Pathly Learn does
 
### The promise
Students study lessons in **Mathematics, English Language and Computer Studies**. They practise, take a quiz at the end of each topic, keep learning with saved lessons when offline, and can ask Pally for help when they are online.
 
### What we want to achieve
 
| Goal | In plain words |
|---|---|
| Easy-to-access learning | Lessons are mostly text, so students do not need video or fast internet |
| Learning that continues | Lessons already saved on the phone still open without internet |
| Proof of understanding | A quiz at the end of every topic, with results to review |
| Optional AI help | Pally explains things when the student is online and asks for help |
| Clear progress | Students can see what they have finished and what is saved |
| Safe and responsible | Student information is protected, and Pally is switched off during quizzes |
 
### Guiding rules
 
- **Reading comes first.** Text is the main way to learn. Video is never needed.
- **Pally is optional.** Students can sign up and learn without ever using it.
- **Pally needs internet.** It works through an online service, not on the phone itself.
- **Quizzes are fair.** Pally is completely unavailable during a quiz.
- **We are honest about offline.** Saved lessons work offline. Pally, signing up for the first time, and first-time downloads need internet.
- **We collect as little personal information as possible.**
 
---
 
## 3. A student's journey
 
1. **Sign up** (needs internet) and choose their class, such as JSS2 or SS1.
2. **Pick a subject** from Mathematics, English Language or Computer Studies.
3. **Open a topic** and read the lesson. Lessons have clear headings, short paragraphs, worked examples, diagrams and key terms. Students can also have the text read aloud on supported phones.
4. **Practise** with exercises that give feedback.
5. **Ask Pally** if something is confusing (when online).
6. **Take the topic quiz.** Pally is switched off during the quiz.
7. **See results** and review the answers. Pally becomes available again to explain anything they got wrong.
8. **Progress is saved** on the phone first, then updated online once the internet returns.
 
---
 
## 4. Meet Pally
 
**Pally is the student's learning buddy.** It is an optional AI helper that only works when the student is online.
 
### Two ways Pally can help
 
- **Lesson helper.** While reading a lesson, the student can ask Pally to explain something more simply, give an example, go step by step, or give a hint. Pally only sees the lesson the student is on.
- **Study helper.** Outside quizzes, students can ask general school questions, get study tips, plan a revision timetable, or get general WAEC preparation advice. Pally must **not** make up exam dates, rules or syllabus changes. If it does not have reliable information, it says so.
 
### Example
 
> **Student:** I don't understand what computer hardware means. Can you explain it more simply?
> **Pally:** Hardware means the physical parts of a computer, the parts you can see and touch. A keyboard lets you type, a screen shows information, and a processor carries out instructions.
> **Pally:** Would you like an everyday example?
 
*This is only an example. Real answers will be tested for accuracy and suitability for students' ages.*
 
### The most important rule: no Pally during quizzes
 
While a student is taking a quiz, Pally must be **completely unavailable**: no chat button, no shortcut, no old conversation, nothing. This must be enforced by the system itself, not just by hiding a button. Pally returns only after the quiz is submitted.
 
### What Pally does when things go wrong
 
| Situation | What the student sees |
|---|---|
| Student has not turned Pally on | A short explanation of what Pally is. Lessons work as normal. |
| No internet | "Pally is not available offline." Saved lessons stay open. |
| The AI service has a problem | An error message and a retry button. The question is kept if possible. |
| Daily limit reached | A friendly note, with a button to return to the lesson |
| During a quiz | Pally is blocked completely |
| Unsafe or off-topic request | A short, age-appropriate refusal or a redirect to helpful topics |
 
Pally always makes clear that its answers come from AI, not from a teacher.
 
---
 
## 5. Working offline, in simple terms
 
- A student must **sign in once with internet** and download their lessons.
- After that, saved lessons open **without internet**.
- Whatever the student does (finishing a lesson, a quiz score) is **saved on the phone first**.
- When the internet comes back, it is **sent to the server automatically**.
- Each item shows its status: **Saved on this device**, **Waiting to sync**, **Synced**, or **Sync failed**.
- An item only counts as "Synced" once the server confirms it. Nothing is counted twice if it is retried.
- **Be aware:** if a phone clears its storage before progress is synced, that progress can be lost. The app must warn students about this.
 
---
 
## 6. Protecting students
 
Many students are under 18, so safety is part of the product, not an extra.
 
- Collect only the information that is really needed.
- Never show full names or emails in web addresses or public lists.
- Never send a student's full profile to the AI. Share only what is needed to answer a question.
- Keep AI passwords and keys on the server, never in the app.
- Use secure connections (HTTPS) everywhere.
- Test Pally before launch for accuracy, suitability for children, and attempts to trick it into giving quiz answers.
- Give a way to report bad AI answers, with a named person responsible for reviewing them.
- Set limits on AI use to control cost.
- Decide, with the client, how long chats are kept and how a student's data can be deleted.
 
---
 
## 7. What is included, and what is not
 
### Included in the first version (MVP)
- Three subjects, split into topics
- Reading-based lessons with read-aloud on supported devices
- Practice exercises and a quiz for each topic, with results
- Progress tracking
- Lessons saved for offline use, with automatic syncing
- Pally (optional, online only) in both lesson-helper and study-helper modes
- A simple area for approved staff to manage lesson content
- A website that works on phones, tablets and computers and can be installed
 
### Not included (unless the client agrees separately)
- Every class, topic or exam syllabus
- Video lessons, live classes, social features or chat between students
- AI that works offline
- An AI that answers anything on the internet, or a guarantee that every AI answer is correct
- Pally helping during quizzes
- Teacher dashboards, parent portals or school management tools
- Android or iPhone store apps (this version is a website)
- Official WAEC registration or exam scheduling
- Proof that students' grades improve (this needs a separate study)
- Legal advice, content licence fees or support after handover
 
---
