---
layout: page
title: Account Management
permalink: work/truecoach/account
---

:point_down: Here is the TLDR. You'll find more context below.

**Problem –** Customers were unable to upgrade their payment plan beyond a set of entry-level options. This caused frustration, slowed revenue growth, and added unnecessary support costs.

**Solution –** Through internal/external research and testing, we designed a series of simple, helpful, and flexible improvements to the `activate` and `manage` account experience.

**Outcome –** We reduced 99% of related support costs and saw a slight improvement in average revenue per user and conversion (~1%).

<a class="mb-16" href="https://www.figma.com/proto/WwEFrpYyYurKdCNAI3zBpB/Activate-and-Upgrade-Copy?node-id=1%3A43&viewport=537%2C376%2C0.03125930204987526&scaling=min-zoom&hide-ui=1" target="_blank">
  <img class="rounded-2xl shadow-md transition duration-200 ease-in-out transform hover:shadow-lg scale-1" src="https://user-images.githubusercontent.com/178044/96373580-b6511d80-112a-11eb-9bce-1597d7ad6630.png" alt="Placeholder image for TrueCoach account management prototype" />
</a>

---

#### My Role

I led the design of the "activate and upgrade" experience between October 2019 and April 2020. I collaborated with another <a href="http://twitter.com/joeymurdah" class="link--highlight" target="_blank">talented designer</a> for routine feedback, mobile considerations, and visual design improvements.

Early in the project, we partnered with representatives from marketing, customer success, and engineering (front and back end) to fully understand the problem and discover potential solutions together.

We tested and validated our hypotheses on actual customers with prototypes and usability testing sessions. During this time we uncovered additional account management problems that weren't as visible to our internal team.

As we moved into development, I worked alongside the engineering team to define and incrementally ship solutions to our customers. We also established benchmark metrics to measure the effectiveness of each feature.

---

#### Discovery

TrueCoach's pricing model is based on the number of clients within an organization. Originally, we provided these options within the product and marketing site:

<div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
  <ul class="list-disc list-inside">
    <li><span class="font-bold">1 to 5 clients</span>: $</li>
    <li><span class="font-bold">6 to 25 clients</span>: $$</li>
    <li><span class="font-bold">26 to 50 clients</span>: $$$</li>
    <li class="mb-3"><span class="font-bold">More than 50 clients</span>: Contact us</li>
    <small>-> The familiar SaaS pricing model that you see pretty much everywhere.</small>
  </ul>
</div>

We learned from our Customer Success team that we actually offered ~15 additional pricing tiers beyond these three (for up to 1000+ clients). Typically, we only unveiled these plans whenever customers and prospects asked about them. Why not make the majority of these plans available to existing and potential customers?

---

#### Deeper Insights

While conducting interviews and usability tests with customers, we also uncovered a number of problems within the user journey:

🤔 Frustration around monthly vs yearly pricing (also a common operating cost).<br>
😕 Difficulty converting from a free trial.<br>
😕 Difficulty understanding our pricing options.<br>
😕 Difficulty changing a pricing plan.<br>
😕 Difficulty canceling an account.<br>
🤷‍♀️ Lack of data to understand why certain customers left.

With this additional research and understanding around the problem, we were able to reframe the problem in ways that benefited both the business and our customers.

---

#### Ideation

Armed with these insights, we held a design studio with our cross-functional representatives (some tuned in remotely). Many sticky-notes later, a few common themes emerged:

- Introduce UI patterns that enable users to review a larger set of pricing plans -> sliders, dropdowns, and input fields all started as our initial candidates.
- During free trials, persist the "Activate now" call-to-action in the `nav` -> always visible and provides sense of urgency with countdown.
- Add "what you'll pay today" language on "review and confirm" page -> avoid accidental charges and frustration.
- Add invoice history section -> improve transparency.
- Collect zip code information to billing section -> avoid complications surrounding disputes.
- Upon activation, provide celebratory confirmation with access to additional onboarding materials (newsletters, webinars, help center, etc) -> set customers up for success.
- Ask for optional `reason` when canceling an account -> learn what drives churn.

---

#### Putting it together

**Wireframes**

Next, we wanted to visualize some of the competing solutions introduced during our design studio. Our learning goal was to determine which concepts seemed like the best bet within the context of our coaches day-to-day flows (rather than hypotheticals discussed in front of a whiteboard).

After presenting each low-fidelity concept, we debated the pros and cons amongst our team and ultimately voted on the most compelling solutions. Each member of the team was asked to vocalize their reasoning behind their votes.

<div class="mb-16 mt-12">
  <img class="shadow-lg border border-gray-200" src="https://user-images.githubusercontent.com/178044/97215018-8c7ea300-1789-11eb-9617-137ae2b84ed8.png" alt="Wireframe concept for activate/upgrade project">
  <p class="text-sm italic text-center">"Pro plan variation" wireframe concept (abandoned, not clear enough).</p>
</div>

<div class="mb-16">
  <img class="shadow-lg border border-gray-200" src="https://user-images.githubusercontent.com/178044/97215032-90122a00-1789-11eb-85e5-d10b410e749d.png" alt="Wireframe concept for activate/upgrade project">
  <p class="text-sm italic text-center">"Slider" wireframe concept (successfully advanced to prototyping and testing).</p>
</div>

**Moving to high fidelity and prototyping**

From here we were able to refine our user flows and move directly into high fidelity prototypes to de-risk any lingering unknowns with actual customers.

<div class="mb-16">
  <img class="shadow-lg border border-gray-200" src="https://user-images.githubusercontent.com/178044/97218618-89d27c80-178e-11eb-9f04-d1fe46a8051b.png" alt="Wireframe concept for activate/upgrade project">
  <p class="text-sm italic text-center">What we ultimately delivered to customers.</p>
</div>

<a class="mb-16" href="https://www.figma.com/proto/WwEFrpYyYurKdCNAI3zBpB/Activate-and-Upgrade-Copy?node-id=1%3A43&viewport=537%2C376%2C0.03125930204987526&scaling=min-zoom&hide-ui=1" target="_blank">
  <img class="rounded-2xl shadow-md transition duration-200 ease-in-out transform hover:shadow-lg scale-1" src="https://user-images.githubusercontent.com/178044/96373580-b6511d80-112a-11eb-9bce-1597d7ad6630.png" alt="Placeholder image for TrueCoach account management prototype" />
</a>

---

#### Shipping

Working with our agile project manager and engineering teams, we split our design concepts into a series of **epics** to prioritize and deliver to customers, which looked something like this.

{: .list-decimal .list-inside }
1. Persistent "activate now" call-to-action + countdown in nav bar.
2. Replace three-tiered pricing page with new slider design.
3. Add optional `reason` dialog to cancelation flow.
4. Add _"You will be charged $[amount] today"_ section to confirmation view.
5. Add billing details view (collect zip codes).
6. Add invoice history view.

As of mid-2020, we successfully released the first three solutions to customers. The remaining projects remain relevant but are growing a bit stale in the backlog. If they are re-prioritized in development then we will likely spend some time rebuilding context and updating our designs to align with any relevant product changes.

---

#### Impact & lessons learned

- Trimmed related conversations in <a href="www.intercom.com" target="_blank" class="link--highlight">Intercom</a> by nearly 100%.
- Saw a slight increase in average revenue per user and conversation rates (although this might be attributable to external factors related to the pandemic).
- Sharing the problem and solution as a team helped us generate better ideas, increase momentum for the work, and keep the rest of the company informed about the project along the way.
- Prioritizing and shipping the project incrementally helped us deliver the right solutions faster.
- Some product decisions changed throughout the project and weren't documented well. This led to some confusion and wasted revisions while iterating through the wireframe and prototyping phase.
