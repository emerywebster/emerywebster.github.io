---
layout: portfolio-item
title: SendGrid Email Marketing
permalink: work/sendgrid
intro: In early 2017, I took some time to review the email marketing experience for SendGrid - a communication platform for transactional (API-based) and marketing emails. 
quote: Imagine that you are a design intern at a new marketing agency. Your boss has asked at the last minute that you put together an email to send to about 100 clients announcing your upcoming holiday event. You have very limited experience with HTML or sending emails and the agency doesn’t have an email tool in place yet. So you set off to Google to find a tool and stumble upon SendGrid.
---

### The Challenge

{: .list-decimal .list-inside .mb-6 }
1. Perform a light heuristic/expert evaluation of your experience.
2. Identify a specific usability or information architecture problem that you feel is important to solve and tell us why.
3. Create a new design for that problem, showing us as much of your process and design evolution as possible from low to high fidelity.
4. Describe a plan for how you might validate the efficacy of your proposed solution.

---

### The Approach

Prior to tackling this problem, I’d like to learn as much as possible about our persona (and the general needs of prospective marketing customers in general):

What matters most to this type of user?
Do they typically shop around? Are we always being compared to other competitors? Do we understand how/why their product is chosen over ours?
Is this type of user also a decision-maker/buyer (or influencer)?
What is this user’s technical aptitude? Are they intimidated or confused by the complexity of SendGrid’s transactional offering?

I’d also like to gather as much existing data on user behavior within the website and the app itself:

{: .list-disc .list-inside .mb-6 }
- What is the typical customer journey (from acquisition, activation, retention, revenue, referral). Where do potential customers drop off in this process? Do we have feedback around why they leave or continue?
- Do users struggle with onboarding? Do we have specifics (so we can prioritize them with the product team)?
- Do we have customer feedback/requests that will lead to actual revenue (and don’t conflict with the overall product strategy? 

The goal of gathering all of this data is to narrow our assumptions as best as possible. **We want to understand the problems and needs of the user so that we can build meaningful solutions that lead to revenue** – and of course, we want to provide an amazing customer experience (and treat it as a competitive advantage for our product).

---

## UX Review

For this review, I wanted to empathize with our marketing intern (who we'll call 'Meghan the Marketer') as much as possible – What is her day-to-day like? Is she often asked to review products like this? How much influence does she have on the recommendation and purchas of products like ours? What is her technical aptitude? What does she care most about?

Here's a quick recap of my experience:

{: .block .mb-0 }
:smile: **Sign Up** - pleasant & effective
{: .block .my-0 }
:neutral_face: **Onboarding** - helpful, yet time-consuming
{: .block .my-0 }
:frowning: **Dashboard** - lots of features for transactional product (not relevant to our persona), could be overwhelming for her
{: .block .my-0 }
:smirk: **Create email campaign / Template editor** - easy to build emails, fun switch from visual to `code` editors
{: .block .my-0 }
:rage: **Send a test email** - difficult to find and use
{: .block .my-0 }

Overall, the process is a bit lengthier and more involved than Meghan might expect. She just wants to draft and send a test email as quickly as possible - if all goes well, she’ll keep digging and evaluate SendGrid further (_this is a huge assumption_). 

In my case, reaching this simple goal took much longer than expected.

> I’d love to look at some user data to understand the typical behavior here. Do others find this to be a similar stopping point? Where do they typically go from here? Are they mostly prepared to follow the setup guide? Or do they start seeking out specific features of the product?

### Potential Focus Areas for Improvement

Below are some notes that I took during the UX review. Again, this is all based on my experience alone - both qualitative and quantitative data should be reviewed to help understand and prioritize design work.

{: .list-disc .list-inside .mb-6 }
- Introduce helpful empty-states (to encourage engagement and add a bit of personality and make the product more enjoyable)
- Separate the transactional and marketing-specific products entirely (likely a large, but potentially beneficial, effort)
- Provide editorial history within the template editor (or a more obvious way to _undo_ actions)
- Improve usability of email _preview_ actions
- Improve usability of _send test email_ action

---

## Problem → Solution

My hypothesis is that improving the usability of _sending a test email_ will provide the greatest benefit to both Meghan and SendGrid.

[![sendgrid-problems](https://cloud.githubusercontent.com/assets/178044/25019639/8df159a8-2048-11e7-97ac-a9abecb613b4.png)](https://cloudup.com/cihPIC4IAi1)

To revisit the task - Meghan's goal is to quickly sign up and take the product for a test drive. If she becomes intimidated or confused at any point in the process, she will likely go elsewhere and SendGrid will fail to gain a new customer.

> Before building anything, I want to ensure that these assumptions are correct. If we build something that people don’t really care about (or has low impact), then it’s all a waste of time and we should’ve focused our efforts elsewhere.

But let’s keep going as though we’ve already validated this need. Here’s a user story to spell out the work a bit more specifically:

```
As a prospect, I want to quickly build and send a test email, so I can evaluate the product for continual use and/or purchase.`
```

---

## Process

Presumably, we’ve already done quite a bit of research and can gather enough data to make informed decisions on how to proceed.

Next, we want to shift into the following:

{: .list-decimal .list-inside .mb-6 }
1. Ideation/brainstorming (whiteboarding session with colleagues, stakeholders)
2. Hypothesize potential solutions to test (refine output from the whiteboarding session into mid-to-high fidelity mockups)
3. Build interactive prototypes to test on prospects and customers
4. Test potential solutions to validate/refine/iterate
5. Push our solutions to market and begin measuring customer data
6. Monitor and iterate the solution as necessary

During the whiteboarding discussion, the team may notice that there’s an opportunity to improve the usability of the _preview_ features as part of this solution. One concept is to add a ‘Send Test’ icon into the app's header (alongside the _preview_ options) and add a tooltip hover-state (perhaps during user testing we learn that there’s pretty low recognition for the fact that those icons actual represent preview actions).

A high-fidelity mock of this concept might look something like this:

![alt01-icons-hover](https://cloud.githubusercontent.com/assets/178044/24765164/fea9dcaa-1ab3-11e7-97d2-40dd73a53d6e.png)

<p style="font-family: avenir, montserrat, proxima-nova, helvetica, sans-serif; font-size:14px; text-align:center; color: #a4a4a4; margin-top: -10px; margin-bottom: 20px;">A potential solution where we consider adding an icon next to the other <i>Preview</i> actions</p>

We also explore a concept to remove the preview icons altogether, and instead opt for a simple ‘Preview and Test’ dropdown in the top navigation. This would allow room to add some helper text that might help users quickly understand the preview actions AND quickly send a test email. 

We then discuss trade-offs that may come with this solution, including the effort required from the engineering team and the additional user action required to select a preview mode (hover/click). Ultimately, we decide to move forward with 'Preview and Test' concept.

Since we have an existing styleguide, we can quickly build high-fidelity mockups and a working prototype to test. The workflow includes:

{: .list-decimal .list-inside .mb-6 }
1. Main view (new navigation element)
2. Dropdown menu
3. Email modal
4. Success message

<a href="https://invis.io/6KB765FJN" target="_blank"><img src="https://cloud.githubusercontent.com/assets/178044/24765338/afacb5fe-1ab4-11e7-86ba-8e11546e2f4e.png" alt="view invision prototype" /></a>
<p style="font-family: avenir, montserrat, proxima-nova, helvetica, sans-serif; font-size:14px; text-align:center; color: #a4a4a4; margin-top: -10px; margin-bottom: 20px;">A simple, interactive prototype to demonstrate the user flow</p>

---

## Next Steps

As mentioned above, we’ll need to validate that these solutions are provide a great experience for our users:

{: .list-decimal .list-inside .mb-6 }
1. Is the solution effective? (does it solve the problem?)
2. Is it easy to use? (is there room for improvement?)
3. Is it enjoyable? (does/should it create an emotional response?)
4. Does it have buy-in and support from the team and relevant stakeholders?

### Always Be Testing

The best way to answer the above questions is with user testing. For this particular problem/solution, the process might look like this:

{: .list-decimal .list-inside .mb-6 }
1. To quickly replicate the 'first time user' experience, we can draft usability tests on sites like [UserTesting.com](http://usertesting.com). Within a matter of hours we can better understand user expectations and answer some of the 'is this a great experience?' questions. We'll also want to specify screening critera for participants who closely match our marketing persona.
2. Conduct additional in-person testing with prospective customers, stakeholders, or people in our professional network.
3. Gather feedback from existing customers (work with account management team or users who have _opted in_ for user testing feedback) to understand how this will affect their current experience and email marketing workflow.

Our results will help determine what to do next. What did we learn? Are we ready to ship this solution? Do we need to refine the experience? Does this solution present any new problems? We can run through this same feedback loop until we're confident that the solution is ready for market.

### Working with Product & Engineering

As with any design project, communication and collaboration are critical to the entire process. We need to share learning with the team early and often - sharing an understanding of customer needs, problems, constraints, and potential solutions. We also want to provide a sense of shared ownership for the product design and encompassing customer experience.

So how do we do this?

{: .list-disc .list-inside .mb-6 }
- If possible, assemble a cross-functional team to participate in the design process.
- Expose the team to the user research process (test results, insights, feedback).
- Focus on outcomes, not output (communicate the _why_ behind design)
- Distill any learning/findings into simple, sharable content (one-pagers, brief presentations, user testing video/audio feedback, data summaries, etc).
- Provide deliverables that capture the intended user experience and limit gaps between design and development.
- Instill confidence in the engineering team by understanding their workflow, limitations, and expectations at all stages of the development process.

### What if there's a time crunch?

We never want to release a bad experience, but it's often better to release a 'good enough' feature quickly (so you can learn and iterate from real customer data) than to wait for perfection. 

However, if there's a strong chance that this feature will not receive any investment from engineering once it's in production, then we'll want to do whatever we can to ensure that our solution provides a great experience.

### How do we ensure the solution is successful?

Set benchmarks. If there's no relevant data _before_ launching the feature, then it's going to be more difficult to understand whether or not it's successful.

Some potential metrics to consider throughout this effort:

{: .list-disc .list-inside .mb-6 }
- Retention rate (are users more likely to continue to use the product?)
- Conversion rate (are users more likely to pay for the product?
- Reduction in operational costs (does our solution reduce custmer service issues?)
- Engagement (how much time do users spend onboarding and using the product?)
- Change to NPS (or any other metric that quantifies the customer experience)

### Other considerations

{: .list-disc .list-inside .mb-6 }
- In the above concept, I used the same 'paper plane' icon for the _send test_ action (which is already used for the _send campaign_ action). This might confuse some users, and we may want to consider replacing it with something else (e.g. an 'email envelope' icon...or maybe use text alone). In either case, we should be able to identify the best path through test feedback.

---

## Questions?

I'd love to hear your thoughts on this project. Please feel free to [contact me](/contact) if you have any additional ideas or questions. :smile:
