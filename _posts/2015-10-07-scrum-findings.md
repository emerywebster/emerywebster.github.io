---
layout: post
title: Scrum Findings
categories: PM
---
As far as learning goes...I'm all over the place lately. Yesterday I dove deep into `git` concepts, before that I was expoloring ruby/rails...and today I predictably have more notes to share on yet another (albeit certainly related) topic.

I don't have a completely clear answer as to why I'm going down all of these avenues...other than to say that _I am enjoying each of them_. I'm certainly a lifelong and infinitely curious about multiple topics...and don't see any problem with that. I've always wanted to learn more about this process and (agile development in general). In the past I worked within a number of modified waterfall approaches (due primarily to the nature of client services work) but can see how agile would be preferable in most product-based business models.

So, below is a collection of notes gathered after sweeping through the [Scrum Training Series](http://scrumtrainingseries.com/). I'm most certainly talking to myself alone when I say...enjoy!

---

# Scrum Notes
---

## Module 1 : Intro

### General

Scrum is a framework for learning about products and the processes we use to build them.

Frequently demonstrating working products is needed to **accelerate understanding of user's real needs**.

### Roles

- Product Owner (responsible for **vision** and **ROI**)
- Development team (ideally 4-9 people collaborating)
- ScrumMaster (facilitator)
    - No actual management authority
    - Keeps from distractions
    - Facilitates process
    - Promotes improved engineering practices
    - Teaches people how to use scrum
    - Enforces timeboxes
    - By definition not the project manager
    - [Checklist](http://www.scrummasterchecklist.org/pdf/ScrumMaster_Checklist_12_unbranded.pdf)

- "Project management" is intentionally left out of scrum...and is shared by product team and dev team

Four values of agile:

- **Individuals and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

### Artifacts

- Product Backlog
    - Customer-centric features prioritized by Product Owner
    - If it's not in backlog it doesn't exist
    - Anyone can add items; scrummaster has to make them visible
    - PBI (items) user stories or use case scenarios
    - Force ranked
- Spring Backlog
    - Backlog items committed to finish right now (has end date)
        - Tasks Not started
        - Tasks In progress

### Meetings

1. Sprint Planning (start ~x hrs)
    - Team & Produt owner negotiate which items will be committed on the sprint
    - Team pulls top=priority items and puts them in sprint log
    - Team break items into smaller tasks (typically)
    - Team plans 1 sprint and determines clarity of execution, time
2. Daily Scrum (15 mins)
    - Team reports to each other
    - What did I accomplish, what are my blockers
3. Sprint Review
    - Demonstrate potentially shippable product increment to owner and any potential stakeholders
    - Product owner will declare which are done and which did not meet their acceptance criteria
    - Measure velocity and look at feedback from stakeholders
4. Sprint Retrospective
    - Team can inspect and adapt their own process for better iterations
    - What went well, what could be improved, feedback to each other
    - Team eventually takes ownership of their own process
5. Backlog Refinement/Grooming
    - Team and PM look ahead at next few items/candidates for upcoming sprints
    - Clarify itemss and break larger items (epics) into smaller items (user stories) to imagine doing a few of them in one sprint
    - Consider dependencies
    - Get input about prioritization

---

## Module 2 : Backlog Refinement Meeting

- Purpose
    - Help get the product owner to get the top of the product backlong ready for the next sprint planning
        - If first then you'll need more time for this during sprint planning
    - Estimation of effort
    - Clarification of requirements
    - Decomposition of epics into smaller PBIs (as with user stories)

- ~2 hrs, a couple work days before the next meetings
- Create PBIs that **INVEST**:
    - Independent: product owner gains ability to prioritize by business value rather than technical efficienies
    - Negotiable: business people and engineering must work together daily
    - Valuable: PBI is customer-centric, so the business value is clear
    - Estimable: if we can't agree on an estimate for a PBI then it's a clue that we don't yet understand it
    - Small: should be no bigger than a quarter of the team effort for one sprint. Ideally ~1-2 team days.
    - Testable: should have a clear finish line agreed between the team andn PO
- Dev team and PO should refine requirements together; working collaboratively on a daily basis throughout the project
- Often useful to identify **who**, **what**, and **why** in a PBI.
    - As a [who] I can [what] so that [why].
- Include _Acceptance Criteria_ (performed on IE8+, etc)
- Anticipated Effort (S/M/L/WTF)
- aka "Product Backlog Grooming" 
- aka "Backlog Estimation"
- aka "Story time"

---

## Module 3 : Sprint Planning Meeting

- Purpose: [1]for Product Owner and development team agree to sprint goals and which items from PB will be committed to the sprint backlog; [2] identify tasks necessary to complete the committed PBIs
- Two weeks recommended...no longer than 30 days
- What is 'done'?
    - properly tested
    - refactored
    - potentially shippable
- Limit Work in Progress
- PO can attend daily meetings to help clarify requirements, etc

---

## Module 4: Daily Scrum Meeting (in middle of sprint execution)

- Same time/day/place standing up for 15 minutes
    - What did I do yesterday (or since prev meeting)?
    - What will I do today (or before next meeting)?
    - What impedes me?
- Sidebar topics that fall outside of this meeting (immediately after if necessary with only those needed)
- PO can attend or not attend 
- Team is responsible for everyone's input

---

## Module 5: Sprint Review Meeting

1. Product Demonstration
2. Product Owner declares what's done according to acceptance criteria
3. Measure velocity (optional)
4. Stakeholder feedback

Avoid praise/applause. Keep things neutral. 

ScrumMaster tracks candidates of potential PBIs for future sprints

Tally of small/medium/large tasks done to forecast velocity.

---

## Module 6: Sprint Retrospective Meeting

- Chance to inspect and review their process
- Not adhere to stale processes...but rather define them
- ScrumMasters goal is to create an environment for a learning team
    - Does not intervene directly in content
    - Sometimes use _status leveling_ techniques
    - **Safety Check** : if someone feels safe...they usually think others feel safe when that may not be the case.
- 'Pluses' (what went well?) and 'Deltas' (what could be improved?)
    - What did we learn? // What still puzzles us?
- Members often begin solving problems by suggesting solutions before agreeing on the problem or its causes. ScrumMasters can help by:
    - **O**bjective questions (what happened?)
    - **R**eflective questions (how do we feel about it?)
    - **I**nterpretive questions (what does it mean?)
    - **D**ecision questions (what are we going to do about it?)
    - Focus on interests rather than positions (or outcomes)
    - Write observations on previous sprint on post it notes (not categorized...and can be good/bad/neutral)
        - Can then categorize them
        - Write down agreeable actions between each other
        - Can also introduce timeline retrospectives (between planning meeting and now / retro meeting) -- could be done for sprints, release, or team history.

---

## More Resources

- [Obstacles to Enterprise Agility](http://scrumreferencecard.com/7-obstacles-to-enterprise-agility/) (from scrumreferencecard.com)
- [What really motivates us](https://www.youtube.com/watch?v=u6XAPnuFjJc) (YouTube video)
- [Meeting 'Safety checks'](http://stevenmsmith.com/ar-safety-check/) (Write-up from Steven M. Smith)
- [Agile Manifesto's 12 Principles](http://www.agilemanifesto.org/principles.html)
- Books
    - [Agile Retrospectives](http://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649) - Esther Derby & Diana Larsen
    - [Facilitator's Guide to Participatory Decision Making](http://www.amazon.com/Facilitators-Participatory-Decision-Making-Jossey-Bass-Management/dp/1118404955/ref=sr_1_1?s=books&ie=UTF8&qid=1444255342&sr=1-1&keywords=facilitator%27s+guide+to+participatory+decision-making) - Sam Kaner
    - [The Skilled Facilitator](http://www.amazon.com/Skilled-Facilitator-Comprehensive-Consultants-Facilitators/dp/0787947237/ref=sr_1_1?s=books&ie=UTF8&qid=1444255369&sr=1-1&keywords=The+skilled+facilitator) - Roger Schwarz

[^1]:    I'm still continuing each of them separately and plan to add further findings/accomplishments to this site as well