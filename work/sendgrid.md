---
layout: portfolio-item
title: SendGrid Email Marketing
permalink: work/sendgrid
intro: In early 2017, I interviewed with SendGrid - a communication platform for transactional (API-based) and marketing emails. As part of the interview process, they asked me to spend 4-6 hours on a design challenge to present to their team.
quote: Imagine that you are a design intern at a new marketing agency. Your boss has asked at the last minute that you put together an email to send to about 100 clients announcing your upcoming holiday event. You have very limited experience with HTML or sending emails and the agency doesn’t have an email tool in place yet. So you set off to Google to find a tool and stumble upon SendGrid.
---

# Overview 

### The Challenge

1. Perform a light heuristic/expert evaluation of your experience.
2. Identify a specific usability or information architecture problem that you feel is important to solve and tell us why.
2. Create a new design for that problem, showing us as much of your process and design evolution as possible from low to high fidelity.
3. Describe a plan for how you might validate the efficacy of your proposed solution.

### The Approach

Prior to tackling this problem, I’d like to learn as much as possible about our persona (and the general needs of prospective marketing customers in general):

What matters most to this type of user?
Do they typically shop around? Are we always being compared to other competitors? Do we understand how/why their product is chosen over ours?
Is this type of user also a decision-maker/buyer (or influencer)?
What is this user’s technical aptitude? Are they intimidated or confused by the complexity of SendGrid’s transactional offering?

I’d also like to gather as much existing data on user behavior within the website and the app itself:

- What is the typical customer journey (from acquisition, activation, retention, revenue, referral). Where do potential customers drop off in this process? Do we have feedback around why they leave or continue?
- Do users struggle with onboarding? Do we have specifics (so we can prioritize them with the product team)?
- Do we have customer feedback/requests that will lead to actual revenue (and don’t conflict with the overall product strategy? 

The goal of gathering all of this data is to narrow our assumptions as best as possible. **We want to understand the problems and needs of the user so that we can build meaningful solutions that lead to revenue** – and of course, we want to provide an amazing customer experience (and treat it as a competitive advantage for our product).

---

# UX Review

For this review, I wanted to empathize with our marketing intern (referred to as _Meghan the Marketer_) as much as possible – What is her day-to-day like? Is she often asked to review products like this? How much influence does she have on the recommendation and purchas of products like ours? What is her technical aptitude? What does she care most about?

Here's a quick recap of my experience:

- :smile: Sign Up - pleasant & effective
- :neutral_face: Onboarding - helpful, yet time-consuming
- :confused: Dashboard - lots of features for transactional product (not relevant to our persona), could be overwhleming for her
- :neutral_face: Create email campaign / Template editor - easy to build emails, fun switch from visual to `code` editors
- :confused: Send a test email - difficult to find

Overall, the process is a bit lengthier and more involved than Meghan might expect (**this is a huge assumption**). She just wants to draft and send a test email (to show her boss) as quickly as possible - if all goes well, she’ll keep digging and evaluate SendGrid further. 

In my case, reaching this simple goal took much longer than expected.

> I’d love to look at some user data to understand the typical behavior here. Do others find this to be a similar stopping point? Where do they typically go from here? Are they mostly prepared to follow the setup guide? Or do they start seeking out specific features of the product?

### Potential Focus Areas for Improvement

Below are some notes that I took during the UX review. Again, this is all based on my experience alone - both qualitative and quantitative data should be reviewed to help understand and prioritize design work.

- Empty states could be more helpful (or provide an opportunity to add a bit of personality and make the product slightly more enjoyable).
- There's some overlap with the transational and marketing product features. Separating the products seems like a large but potentially beneficial effort.
- Provide editorial history (or a more obvious way to _undo_ actions)
- Ensure users understand the ‘Preview’ features
- Make it easier / more obvious to send a test email

---

# Problem → Solution

Overall, I found the simple task of **sending a test email** to be a fairly large problem. Improving it will (potentially) require little effort and also result in a high impact for both the user and the business.

Again, our marketing intern just wants to quickly sign up, build an email, and send a test. If she becomes intimidated or confused at any point in the process, she'll go elsewhere and SendGrid will lose the opportunity.

> Before building anything, I want to ensure that these assumptions are correct. If we build something that people don’t really care about (or has low impact), then it’s all a waste of time and we should’ve focused our efforts elsewhere.

But let’s keep going as though we’ve already validated this need. Here’s a user story to spell out the work a bit more specifically:

**As a marketer, I want to send a test email from within the editor, so I can quickly evaluate the product for continual use and/or purchase.**

---

# Process

Presumably, I’ve already done quite a bit of research and can also gather enough data to make informed decisions on how to proceed.

Next, I want to shift into the following:

1. Ideation/brainstorming (whiteboarding session with colleagues, stakeholders)
2. Hypothesize potential solutions to test (refine the whiteboarding session into wireframes, shareable documentation, or initial mocks)
3. Build interactive prototypes (in this case, we don't need to use anything overly complex).
4. Test potential solutions to validate/refine/iterate
5. Push to production and begin gathering real customer data
6. Continue to measure and iterate the solution as necessary

During the whiteboarding discussion, we also decide that there’s an opportunity to also improve the usability of the _Preview_ feature. One option is to add a ‘Send Test’ icon to the right of the other three preview options, and also add a hover-state tooltip for context (perhaps during user testing we learn that there’s pretty low recognition for the fact that those icons actual represent preview actions).

A high-fidelity mock of this concept might look something like this:

![alt01-icons-hover](https://cloud.githubusercontent.com/assets/178044/24765164/fea9dcaa-1ab3-11e7-97d2-40dd73a53d6e.png)

<p style="font-family: avenir, montserrat, proxima-nova, helvetica, sans-serif; font-size:14px; text-align:center; color: #a4a4a4; margin-top: -10px; margin-bottom: 20px;">A potential solution where we consider adding an icon next to the other <i>Preview</i> actions</p>

We also explore an option to remove the preview icons altogether, and instead opt for a simple ‘Preview and Test’ dropdown in the top navigation. This would allow room to add some helper text that might help users quickly understand the preview actions AND quickly send a test email. 

We also discuss trade-offs, including the effort required from the engineering team and the additional user action required to select a preview mode (hover/click). Ultimately, we decide that this is our leading concept to test.

From here, we can quickly move into high-fidelity workflow:

1. Main view (new navigation element)
2. Dropdown menu
3. Email modal
4. Success message (same treatment as current success messages)

We can string this all together in a quick interactive prototype through Invision:

<a href="https://invis.io/6KB765FJN" target="_blank"><img src="https://cloud.githubusercontent.com/assets/178044/24765338/afacb5fe-1ab4-11e7-86ba-8e11546e2f4e.png" alt="view invision prototype" /></a>
<p style="font-family: avenir, montserrat, proxima-nova, helvetica, sans-serif; font-size:14px; text-align:center; color: #a4a4a4; margin-top: -10px; margin-bottom: 20px;">A simple, interactive prototype to demonstrate the user flow</p>

---

# Next Steps

As mentioned above, we’ll need to validate that these solutions are provide a great experience for our users:

1. Is the solution effective? (does it solve the problem?)
2. Is it easy to use? (is there room for improvement?)
3. Is it enjoyable? (does/should it create an emotional response?)
4. Does it have full buy-in from stakeholders?

#### Always Be Testing

The best way to answer the above questions is with user testing. For this particular problem/solution, the process might look like this:

1. If needed, build our solution into a simple prototype via [InVision](http://invisionapp.com), [Proto.io](http://proto.io), or [Framer](http://framer.com) (in this case, something like Proto or Invision makes the most sense since we're showcasing a simple workflow with some interactive elements).
2. To quickly replicate the 'first time user' experience, we can draft usability tests on sites like [UserTesting.com](http://usertesting.com). Within a matter of hours we can better understand user expectations and answer some of the 'is this a great experience?' questions. We'll also want to specify screening critera for participants who closely match our marketing persona.
3. Conduct additional in-person testing with prospective customers, stakeholders, or people in our professional network.
4. Work with a User Researcher to help coordinate and conduct in-person usability sessions.
5. Gather feedback from existing customers (work with account management team or users who have _opted in_ for user testing feedback).

Once we've ensured that we're providing a great (and investment-worthy) experience for our users, let's ship it as quickly as possible. 

### Working with Product & Engineering

This is (one of many scenarios) where communication is critical as a designer. We need to share learning with the team early and often – always understanding and providing the _'why'_ behind our product strategy.

So how do we do this?

- If possible, involve them in the design process.
- Distill learning/findings into simple, sharable content (one-pagers, brief presentations, user testing video/audio feedback, data summaries, etc).
- Create high-fidelity prototypes to help explain the preferred experience (and limit gaps between design and development).
- Instill confidence in the team by understanding their workflow, limitations, and expectations at all stages of the development process.

### What if there's a time crunch?

We never want to release a bad experience, but I believe that it's (usually) better to release a so-so product feature quickly (so you can learn from real customer data) than to wait for perfection. 

Still, if there's a high risk that this feature will not receive any iteration time from engineering once it's in production, then we'll want to do whatever we can to ensure that our solution provides a great experience.

### How do we ensure the solution is successful?

First, you'll need to ensure you have baseline analytics to measure against. If there's no relevant data _before_ launching the feature, then it's going to be more difficult to understand whether or not it's successful.

Which metrics are you trying to move? In our case we're likely looking at the following:

- Retention rate (are users more likely to continue to use the product?)
- Conversion rate (are users more likely to pay for the product?
- Reduction in operational costs (does our solution reduce custmer service issues?)
- Engagement (how much time do users spend onboarding and using the product?)
- Change to NPS (or any other metric that quantifies the customer experience)

### Other considerations

- In the above concept, I used the same 'paper plane' icon for the _send test_ action (which is already used for the _send campaign_ action). This might confuse some users, and we may want to consider replacing it with something else (e.g. a common 'share' icon...or no icon at all). In either case, we should be able to clarify the best option with both usability and evaluative test feedback.

---

## Questions?

I'd love to hear your thoughts on this project. Please feel free to [contact me](/contact) if you have any additional ideas or questions. :smile:
