---
layout: portfolio-item
title: BiggerPockets MVP Product Strategy
permalink: work/biggerpockets
intro: In 2016, I interviewed for a Product Management role with BiggerPockets.com - a real estate investing network & information hub. Prior to meeting the team, they asked me to present an MVP launch strategy for this product.
quote: Consider a hypothetical web/mobile tool to track net worth, stocks, bonds, bank accounts, real estate, other random investments. It should be simple, easy to use, and tap into 3rd party APIs. It should have the ability to display graphs with snapshots of one's net worth over time - that is the ultimate goal for the product. How would you research, model, design, spec, and create timelines for developing this project? (assume you've got 3 devs, 1 designer, and any other stakeholders at your disposal).
---
Let’s frame the product within a **customer → problem → solution context**. This will allow the team and stakeholders to better understand product development decisions (i.e. we are building feature _X_ to address problem _Y_, which is a known need for customer segment _Z_).

# 1. Customer → Problem

<p class="tp"><strong>Thought process</strong>: we want to establish an understanding of our customers before building anything. If we start developing a product without understanding customer problems/needs, then we run the risk of wasting time and pursuing the wrong solutions. We also want to document any learning throughout the product life cycle so we can better shape our solution in the future.</p>

### Questions & Assumptions
			
Let’s assume we spend ~2-3 weeks performing customer (and technical) research on the following:

#### Does the market need another way to view/analyze net worth?

- Yes, we’ve identified a clear need.

#### What app features do users care the most about?

1. Security!
2. Easy setup process
3. Quick understanding of net worth (current snapshot, historical data, composition, trends)
4. Access to tools/knowledge that allow them to make better financial decisions (derived from #3)

#### What other features do users care about?

- We’ll identify them once we have a working MVP, with real customers and real data.

#### Who is our target customer?

- **Rhonda Realtor**: 37 year old real estate juggernaut and active user of [our company]. Loves seeing her numbers go up and understanding trends in her history. She’s most interested in ease-of-use and tools to help her make better decisions.
- Marty Manager: 54 year old middle-class executive with a myriad of investments and little time to track them all. Needs a single, secure place to quickly stay up to speed with his number (for retirement, etc).
- Scott Super Saver: 29 year old professional who is starting to get serious about life, saving, and diversifying. He plays with stocks constantly and is saving for his first house. He wants steady updates/reminders of his number and also wants to learn to invest better.

#### Can we collect data from our users’ financial institutions (and keep them up-to-date)?

- Yes, this is technically feasible.

#### Are all features going to be free? What aspects can we monetize now / in the future?

- Everything will be free for the initial release. We may identify premium features in future iterations of the product (or make available only to ‘Pro members’).
			
### Potential Risks

- **Security &amp; retaining customer trust**: Since we know this is a strong need for our customers, we’ll need to dedicate time to ensuring a well-guarded solution. We’ll also need to clearly communicate this within the user experience. This is a top-priority for the app.
- **Ease of use &amp; customers buy in (acquisition)**: If users become confused or stuck, they’re not going to continue using our product. It needs to be simple and require minimal effort.
- **Accuracy &amp; ensuring customer value (retention)**: If the product doesn’t solve specific customer needs, they will not see any value, and we will not be able to retain for repeat use.
- **Reliance on third-party APIs**: This will require a close eye on general code maintenance and is an expected cost of development throughout the product life cycle.

---

# 2. Problem → Solution

### Timeline

<p class="tp"><strong>Thought process</strong>: No matter how much research/testing is performed during discovery/development, we won’t be able to truly validate our product-solution until we have real customers, connecting real accounts, and generating real data. The sooner we can get there, the better.</p>

Our goal is to get a working MVP in production as quickly as possible (based upon learning/testing from customer discovery phase).

As such, we’re aiming for a ~4 week release schedule (1 long sprint). These estimates would need to be confirmed with the team during sprint planning.

**Week 0** (includes the above assumptions)

- Company already has great personas built, we largely understand our initial customer needs
- Sprint planning meeting with team to share learning, goals, etc.
- Landing page in place to gauge interest; collect emails for announcements, surveys, potential user testing

**Week 1**

- Product: Create low-level prototypes of user workflow, validate assumptions with customers
- Engineering: Research financial institution sign-on (technical implementation planning + security); Zillow integration, other property valuation tools.
- Design: Draft working HTML (static) for sign up, login, and import views based on wireframes &amp; customer knowledge.

**Week 2**

- Product: Share learning from week 1; test sign up &amp; import views on customers (working prototype via InVision).
- Engineering: (1 solo) Build &amp; test signup and login processes. (2, pair coding) Integrate account import functionality.
- Design: Craft working HTML for profile/summary views.

**Week 3**

- Product: Share learning from week 2, test import functionality with target customers.
- Engineering: (2, pair coding) Implement net worth summary view (charts)
- Design: Refine look &amp; feel based on customer feedback from product.


**Week 4**

- All: Remaining bug fixes and minor changes based on user feedback.
- Product: ensure all items meet acceptance criteria.
- Ensure relevant analytics are in place / working.
- Push to production

**Week 5-6+**

- Shorten sprint cycle to 2 weeks for next feature release
- Backlog refinement meeting (based on product backlog - history, trends, customer feedback)
- Review analytics daily — share learning (user behavior) with the team
- Stakeholder management:
	- Meet with marketing/sales to craft product announcements, messaging, etc. Make this a fairly routine practice as the product matures.
	- Meet with leadership to ensure business needs are continually met — discuss strategic goals and learning regarding customers, users, market, team, etc.

### Necessary Resources

Organizational communication tools (PivotalTracker, JIRA, Slack, etc.)

- To ensure clear communication and visibility within the product roadmap or development plan — particularly regarding user/feature goals, backlog prioritization, workflow, acceptance criteria, and projections.
- No ‘right answer’ here — whatever works best for the team.


### Customer research

- Interviews and usability testing
- Coffee shops, professional networks, existing users (via email marketing), volunteers
	
### Idea/feature validation

- Low fidelity prototypes (paper, Balsamiq, hallway tests)
- High fidelity prototypes (functional, InVision)

### Scaling &amp; Optimizing

- A/B testing (Optimizely, Segment.io, etc.)

### Development methodology

- Agile + Lean (we need to iterate quickly, which should make this a good fit)
-Can be scrum/kanban, whichever will work best for the team. Some modification of scrum seems like an appropriate choice as it aligns with our goals (daily stand up, emphasis on user needs, maximizing ROI, testing ideas in working software as quickly as possible, etc).

We'll also need a firm understanding of stakeholder needs: marketing, sales, leadership, etc.


# 3. MVP (Feature Spec + User Stories + 8 Features for Engineering)

<p class="tp"><strong>Thought process</strong>: We want each feature to match a user story (which points to a specific customer problem/need). Some of them may need to be further refined or specified during sprint planning. I’ve just included a few of the key wireframes for this process (sign up, import/connect, and net worth summary).</p>

### 1. Sign Up

**User Story**: As a new user, I want to sign up, so I can become an active user within the app.

- Input field for Email, Password
- Enforce strong password requirements
- Verify/Activate email
- Integrate with existing user database (allowing upsells, opt-ins for other services)


<img src="http://wp-ux.sites.dev/wp-content/uploads/2016/04/nw-signup.png" alt="nw-signup" width="871" height="570" class="aligncenter size-full wp-image-175" />

### 2. Login

- [Standard / same as above]
- Existing user? Allow login from existing database.

### 3. Import Accounts (via oauth login / financial institution APIs)

**User story**: As a user, I want to easily and securely import my financial accounts, so I can view them together.

- Find my account (Search + Popular institutions, e.g. Chase, Wells Fargo, PayPal)
- Login/connect → Success/failure
- Add another OR Continue to ‘Add Property’

<img src="http://wp-ux.sites.dev/wp-content/uploads/2016/04/nw-import1.png" alt="Step 1 of 3" width="871" height="570" class="size-full wp-image-174" />

Caption: Import: Step 1 of 3

<img src="http://wp-ux.sites.dev/wp-content/uploads/2016/04/nw-import2.png" alt="nw-import2" width="871" height="570" class="aligncenter size-full wp-image-173" />

Caption: Import: Step 2 of 3

<img src="http://wp-ux.sites.dev/wp-content/uploads/2016/04/nw-import3.png" alt="nw-import3" width="871" height="570" class="aligncenter size-full wp-image-172" />

### 4. Add property
**User Story**: As a user, I want to add/edit various types of property so that my Net Worth will accurately include my major assets & debt.

- Home (find via Zillow, add manually)
- Vehicles (cars, boats, etc, add manually)
- Loan balances
- Other (artwork, furniture, equipment, add manually)


### 5. Dashboard/Snapshot

**User Story**:As a user, I want to view and understand my net worth over time

- Current composition (line item) view + historical line chart

<img src="http://wp-ux.sites.dev/wp-content/uploads/2016/04/nw-profile.png" alt="nw-profile" width="871" height="570" class="aligncenter size-full wp-image-171" />

### 6. Net Worth Composition (diversification)

**User Story**: As a user, I want to be able to see what % of my assets (and debt) make up the entirety of my net worth.

- Pie chart
- Relevant percentages
- Color designation / legend

### 7. View History

**User Story**: As a user, I want to zoom into my net worth to better understand my history and make more informed financial decisions in the future.

- Timeline (YOY net worth + composition)
- High/low spending periods
- Events (indicate large purchases, add major life changes)

### 8. Trends
**User Story**: As a user, I want to identify patterns in my financial history so that I can make better decisions in the future.

- Income expectations/changes
- Savings contributions/changes


_[Product backlog items (and epics) that did not make the cut for initial release — to re-prioritize once we understanding our next set of users goals are most important]_

- Introductory walk-through views (after sign-up)
- Profile completeness or progress bar (“you’re 80% done!” Add detail)
- Integrate other tools for saving, learning, diversifying
- Transactions View
	- Zoom into spending history
	- Categorize individual purchases for budgeting, history, etc.
- Planning/Goals
	- Save for purchase/event (retirement, pay off loans, buy home/car)
- iOS app
- Android app
- Invite collaborators (accountants, family)
	- Limit view/update permissions
- Premium feature gateway

---

## Additional scenarios

> Engineering tells you 2 of your requirements are not possible, but they can implement the other 6.

Is this a timeline constraint? Can we accomplish 1-6 in the list above within it? If so, let’s push 7 & 8 to our next release. 1-6 are critical to the MVP based on our customer needs and initial problem-solution. We do not have a working app without them.

Also, are there technical constraints that we need to prepare for (and research further)? Can we leverage other technologies for now? Can we build a landing page to gauge interest?

<p class="tp"><strong>Thought process</strong>: Understand why these aren’t possible so you can help work through the problem and reach some solution. Get creative with your resources. What *can* we do in the meantime? Take this as an opportunity to bring value to your engineering team and foster a trusting relationship.</p>

> They also say they would like to add two additional requirements of their own. How do you respond?

Quickly assess if these requests overlay any of our existing customer data. What exactly are they suggesting (and why)? Does this address any of our customer needs/problems? Should we reprioritize our backlog because of this?

If yes (and there is time/budget): review and re-prioritize the backlog accordingly. As the product manager / product owner, you are ultimately responsible for the backlog (as you are providing the voice of the customer.

If yes, but we don’t have time/budget: These are great suggestions — they even align with our customer needs/data. Unfortunately, all of the other features are a higher priority for this sprint. I’ve added them to the backlog and we will revisit them during the next planning meeting.

If we don’t know: These are great suggestions —but we need to ensure that they fit a customer need. We’ll work them into our next set of customer interviews (or other form of customer feedback). Once we have enough supporting data, we’ll revisit this and re-prioritize our product backlog / roadmap accordingly.

If we don’t know, and we don’t have time/budget: These are great suggestions — unfortunately we don’t have time to validate these ideas for this sprint. We also need to ensure that they fit a customer need before introducing them to the backlog. I’ll work on that ASAP so we can potentially introduce them in the next sprint (or determine that they’re not a worthwhile use of development effort).

If no: Based on our understanding of our customer needs (include supporting data), this feature won’t enhance the user experience or provide any immediate/long-term value to the customer. I completely understand why you think it’s a great idea, but we need to tailor our product to our customers...and the data tells us that they don’t really care about features y and z. Still, I’ll keep an eye on it and let you know if the landscape changes in any way.

<p class="tp"><strong>Thought process</strong>: A big part of product management is knowing when to say “no” (but also understanding when suggestions might match up with your customer needs). This is best accomplished when you have supporting data to determine if product decisions are good or bad. You need to validate every decision with customer data — qualitative problem solving in the beginning of a product/feature (customer interviews, prototyping, etc), quantitative validation once those features are gathering useful analytics data (A/B testing, etc for growth and optimization). Again, you are providing expertise in customer needs...so it’s important to communicate the ‘why’ behind all product decisions.</p>

## Summary

The goal of this plan is to set the tone for rapid learning, execution, and iteration (the more we understand our customer and their problem, the better we can shape our product and build a successful business). It also allows us to quickly update our project planning, product backlog, and shared understanding of both strategic and tactical decisions. It’s far from perfect, but it should serve as a reasonable starting point.