---
layout: post
title: UX Learning
categories: Design
tags: learning development apis sketch
---
I recently went through [Joel Marsh](http://thehipperelement.com/)'s _crash course_ on UX fundamentals. It's an extremely introductory, high-level guide...but still a useful and worthwhile exercise nonetheless.

As usual, I jotted some notes on certain concepts to revisit. Here are the main takeaways:

---

### Key Concepts

#### 1. Defining UX

- The goal of a UX designer is to make users **effective**
- Accomplishes goals (for the user and business)
- Happiness (for the user) is not necessarily the goal
- Scientific (as with other lean principles):

> We do research to understand the users, we develop ideas to solve the users’ needs — and the needs of the business — and we build and measure those solutions in the real world to see if they work.

#### 2. Two types of goals

- User (needs)
- Business (KPIs, metrics)
- Align goals so business benefits when user reaches their goal

#### 3. UX Ingredients

- Psychology (motivation, expectation, rewards) -- unconscious
- Usability (logic vs intuition, clear vs clever, mistakes) -- conscious
- Design (design is **how it works**, not a matter of style) -- trusting, representative, helpful?
- Copywriting (brand copy supports image, ux copy gets shit done) -- helpful, motivating
- Analysis (using data for learning, understying the *why*, measurability)

---

### Understanding Users

#### 4. User Research

- Early and often
- Subjective (often qualitative, no right answer)
- Objective (often quantitative interpretation of subjective questions "80 of 100 say it's 'bad'")

#### 5. Asking Questions

- Types
    - (1) Open questions ("how would you describe...x?")
    - (2) Leading questions ("what are the best features?")
        - May exclude answers you want to know
    - (3) Closed/Direct questions ("which is better, x or y?")
        - If the options are stupid, the results will be stupid too
- Interviews, Observations (usability), focus groups (be careful), surveys, card-sorting, google.
- Ask same questions, in the same way, to everyone
- Avoid interpretting questions or suggesting answers
- Take good notes

#### 6. User Profiles

- These are _NOT_:
    - personality types
    - demographics
    - characters in your brand story
    - shallow or 1-dimensional
    - stereotypes
    - predictions
- Describes goals, expectations, motivations, behavior of real people
- Back info up with research and data

#### 7. Designing for Devices 

- (1) How does it like to be touched? 
- (2) Start small
- (3) What special powers does this device have? (consistency vs different thinking)
- (4) Consider the software (mac vs pc)
- (5) Be responsive (any device)
- (6) Think about more than one screen at a time

#### 8. Design Patterns

- "Good" patterns are common _and_ usable
- Tools: [GoodUI](https://goodui.org/), PatternTap, mobile-patterns.com

---

### Information Architecture

#### 9. What is IA?

- Don't make it fancy
- Just because it's simple, doesn't mean it makes sense
- Deep or flat, not both
- Make sure user knows where they are at all times and how to navigate elsewhere

#### 10. User Stories & Types of IA

- Describes _flows_ -- sequences and choices, not the implementation or UI.
- Simple & effective
- Ways to organize
    - Categories (content types)
    - Tasks (focus on user goals)
    - Search (youtube, etc)
    - Time (inbox, reddit, news feed)
    - People (facebook, designed by who the information is about)

#### 11. Wireframing

- Technical blueprint

> A wireframe may only take an hour to draw, but it can take weeks or months to plan. It is important that your colleagues and clients understand that.

---

### Visual Design Principles

#### 12. Visual weight, contrast, depth

- All relative
- Depth and size (even if your design is flat)

> That’s why it’s wrong to “make the logo bigger”. Unless you want users to stare at your logo instead of buying something.

#### 13. Color

- Sometimes color = function (traffic lights, popsicles)
- Recede vs. advance (quiet vs loud)

#### 14. Repetition & Pattern-Breaking

- We focus on pattern breaks 
- (don't just notice them, we think about them differently)
- Can also take the eye away from important elements

#### 15. Line Tension & Edge Tension

- "Do you see 12 ducks...or a box made of ducks?"
- Our brains are super good at identifying/focusing on patterns
- Visual paths leading to a button to click, etc
- 1 mental thing vs 12 separate things
- [combine] Gradient lists

#### 16. Alignment & Proximity

- Perception of organization, separation, leading, direction
- Understanding of related elements without reading anything

---

### Functional Layout Design

#### 17. Z-Pattern, F-Pattern, and Visual Heirarchy

- Users scan, they don't read
- Z = boring (newspaper)
- F = draw attention to important elements
- top-left get more clicks than top-right...which will get more than bottom-left...etc
- Create a design that users can scan easily
- Better design doesn't necessarily look better, it's just easier to scan

#### 18. Browsing vs. Searching vs. Discovery

- Browsing: make scanning easy & keep the content quick & visual. Don't overcrowd. Focus on emotional appeal. Style? photos. Power? info via labels. Brands? logos. Craftsmanship? magnify details. etc.
- Searching: they'll ignore lots of stuff, focus on attributes, highlight ones that are likely critical, avoid clutter, focus on what the user wants out of it.
- Discovery: users click on menu items if they are looking for those things. nobody discovers stuff via the menu. More experienced users also explore less. Instead, let them find what they are already looking for. Add relevant stuff so they can then discover it. It might feel like you're hiding it...but you're making it visible to the right people.

#### 19. Page Framework

- Footers -- infinite scroll? Ensure that info is somewhere else.
- Menus -- most to least popular, always
- Mega-menus are lazy
- Create navigation and footers that work for all of the pages/screens in your app before you get into content

#### 20. The Fold, Images, & Headlines

- 60-80% of users will scroll if they expect something useful
- If you need a graphic that says "(anything)", your design is weak
- People looking in the direction of your content...works
- Use headlines to direct users to what matters most

#### 21. The Axis of Interaction

- Human attention is extremely limited
- Find edges, users will focus on the first one, then the next
- Put CTAs on or near an axis of interaction

#### 22. Forms

- Generally, shorter the better
- Make them _feel_ simple 
- Know when to make answers selective
- Ensure they're smart ((000)000-000 vs 000 000 0000 vs 000.000.0000)
- Use inline error handling (immediate validation)
- Make sure they can see errors
- Simple questions? Label goes above and aligned with axis of interaction
- Complex questions? Slow users down by putting the label to the left of the input

#### 23. CTAs, Instructions, & Labels

- CTA = VERB + BENEFIT + URGENT TIME (now, free) or PLACE (here)
- Instructions: short, literal, direct (no cleverness, not too wordy, not soft)
- Labels: common, easy, simple as possible &mdash; avoid cleverness or uniqueness 

#### 24. Primary & Secondary buttons

- Primary actions are helpful for goals, secondary actions are not
- High contrast, on/near axis of interaction
- Primary style vs secondary position (delete acct, etc)
- Special buttons for unique action types (like button, pin it, etc)

---

### User Psychology

#### 25. Conditioning

- Repetition for rewards, avoidance for punishment
- Feelings, not things
- Create a feedback loop
    - Motivation > Action > Feedback > Motivation
    - (post baby pic on facebook, get likes, do it again)
    - Punishment? Dead crops in farmville for staying away too long

#### 26. Persuasion

- 8 Common Methods (of 40 different types of persuaders)
    - Credibility/Trust: don't say it, show it.
    - Know your audience: understand what they want and care about
    - Open & disarm: engage interest immediately
    - Create rapport: familiar language, showing commonalities in other users
    - Isolate: Remove competing information (see amazon)
    - Convince: may need to add waves of info or frame information better
    - Close: ask for commitment without complicating it (publish, confirm purchase, share)
    - Summarize with bias: follow up to continue showcasing that you care, remind them what they can do, suggest further development, etc.
- Motivations (14 in real life, 4 on the internet)
    - Status: gamification (points, trophies, symbols of power/appreciation). Users are motivated to feel superior. Attach those achievements to your business goals.
    - Affiliation: creates a sense of pride, sense of belonging, identity.
    - Justice: design a way for underdogs to get noticed, or to find evil and destory it...and they will.
    - Understanding: motivation to learn, _deserve_ to know more, 
- Money is not on this list because it is not motivating in itself (what does it provide though? status? options?).

#### 27. How Experience Changes Experience

- Power users are the minority
- Design for distracted idiots, not obsessed geniuses
- Hidden vs. Visible: Understand simplicity vs crippling your feature set
- Recognition vs. Memory: don't make me think (or at worst, _remind me where to look_)
- Learning is slow. Habits are fast: create a "fast way" to do key features.

---

### Designing with Data

#### 28. What is data?

- Never lies, but also doesn't account for context
- Interpretation is where mistakes can happen
- Tools: [Clicktale](https://www.clicktale.com/), [Segment](http://segment.io)
- Search logs (review history of search terms to improve experience)

#### 29. Summary Statistics

- (1 & 2) Sessions (total visits) and Users (unique visits)
    - High quality: total > uniques
    - High quantity: total ≈ uniques ; uniques are rising
    - Both: uniques are higher ; total is much higher
    - Niether: uniques are lower, total ≈ uniques
    - _Uniques are a more authentic rep of your traffic_
- (3) Pageviews
    - Counted whenever a visitor loads a page
    - General indicator of traffic
    - Ads vs. content
- (4) Pages-per-visit
    - Better for sites focused on tasks or social interactions
    - Might want this to be as low as possible (Google)
- (5) Time-per-visit
    - indication of quality and navigation (when compared to ppv)
- (6) Bounce rate
    - Not always a rejection (come to the blog for specific content)
- (7) New vs. Return
    - Indication of quality, growth, etc

#### 30. Graph Shapes

- People don't suddenly change behavior without being provoked
- Exponential / long tail 
    - Big drop = big problem
    - Understanding of user behavior, engagement, etc.

#### 31. A/B Test

- Depends on traffic, time, etc
- Must be run at the same time (nothing new here)
- Tools: [Optimizely](https://www.optimizely.com/resources/ab-testing-tool/), [VWO](http://vwo.com), [FiveSecondTest](http://fivesecondtest.com)

---

## Other Takeaways

Every section of this outline could serve as the starting point for in-depth study &mdash; user research, wireframing, interaction design, copywriting, visual design, psychology, project planning, data analysis, testing, etc. The list goes on and on, which is partly why it's such an interesting and exciting field.

---

## Next up?

Some books that seem like clear winners:

- [UX Strategy](http://www.amazon.com/dp/1449372864/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=KPQC8B675F4Z&coliid=I2BQ2H47CTAAL6) by Jaime Levy
- [Articulating Design Decisions](http://www.amazon.com/Articulating-Design-Decisions-Communicate-Stakeholders/dp/1491921560/ref=pd_sim_14_1?ie=UTF8&dpID=51jLAKsaFgL&dpSrc=sims&preST=_AC_UL160_SR107%2C160_&refRID=1HQXDHDXS9GVCG3XWEYP) by Tom Greever
- [100 Things Every Designer Needs to Know About People](http://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535/ref=sr_1_1?ie=UTF8&qid=1458609349&sr=8-1&keywords=100+things+every+designer+needs+to+know+about+people) by Susan Weinschenk
- [About Face](http://www.amazon.com/About-Face-Essentials-Interaction-Design/dp/1118766571/ref=wl_mb_wl_huc_mrai_3_dp) by Alan Cooper & others
- [Simple and Usable](http://www.amazon.com/dp/0321703545/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=KPQC8B675F4Z&coliid=I2BYOBV304ZM07) by Giles Colborne

Others worth mentioning here:

- [Don't Make Me Think](http://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/ref=sr_1_1?ie=UTF8&qid=1458618561&sr=8-1&keywords=don%27t+make+me+think) - classic from Steve Krug
- [Project Guide to UX Design](http://www.amazon.com/Project-Guide-Design-experience-designers/dp/0321815386/ref=sr_1_1?ie=UTF8&qid=1458618600&sr=8-1&keywords=ux+design+project) - a practical start-to-finish outline
- [Designing with the Mind in Mind](http://www.amazon.com/Designing-Mind-Second-Understanding-Guidelines/dp/0124079148/ref=sr_1_1?ie=UTF8&qid=1458618836&sr=8-1&keywords=designing+with+the+mind+in+mind) - a solid companion to Krug's book that puts an emphasis on the _why_ of effective user interfaces
