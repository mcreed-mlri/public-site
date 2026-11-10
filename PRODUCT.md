# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

An even mix, with no single group leading (confirmed):

- Legal aid attorneys in their first years of practice, advocates and paralegals, who may join the pilot or take courses later.
- The organizations that train and support them: directors and training leads deciding whether to involve staff.
- Funders and partners judging whether the center is real and worth backing.

They arrive before the learning platform is open. There is nothing to sign up for yet.

## Product Purpose

The public site for a new learning center for legal aid advocates, a project of the Massachusetts Law Reform Institute (MLRI). The center is building an online learning platform of short, self-paced, skills-based courses, curated resources and practice tools that fit around real casework.

Success for this site (confirmed): a visitor leaves understanding the idea, meaning what is different about short, skills-based training built around casework.

## Positioning

Training for legal aid work that is built around the pace of day-to-day practice: short, self-paced, designed around how adults learn, and shared across organizations rather than scattered inside each one. Built with and for the Massachusetts legal aid community; the site goes all in on Massachusetts (confirmed).

## Operating Context

- The site is a pre-launch sketch. The platform is still being built. The page explains the idea, shows an illustrative workday, reports where things stand in a four-step roadmap (Done, In progress, Next, Later; restored at the user's request), and lists who can get involved: learners, legal aid supervisors, faculty and contributors, funders and partners.
- First courses cover legal foundations, pretrial skills and trial skills.
- A design firm is producing the name, visual identity and design guide. The current design work is an interim look that ships now and is re-skinned when the guide arrives (confirmed), so structure and layout should survive a change of colours and fonts.
- Non-developers update the page by editing single lines in `index.html`, such as the Get involved rows.

## Capabilities and Constraints

- Today: one page of plain HTML and CSS, no build step, no JavaScript, self-hosted fonts, intended for Cloudflare Pages. None of these are fixed (confirmed): JavaScript, more pages and revised copy are all open if the design needs them.
- All colour, font, size and radius values live in `css/tokens.css` so the design guide can be applied in one file.
- Placeholders are wrapped in `<span data-todo>` and must stay findable until filled.
- Undecided: center name, contact email address, destinations for the Get involved rows, learning platform URL, sign-up and eligibility, mission statement, funder acknowledgment.
- Writing rules: short and direct, no em dashes. No launch dates, statistics or course counts; roadmap items carry no dates. Do not mention the LMS vendor, security work or CLE credit. Massachusetts is the stated focus. Any plan beyond Massachusetts is private for now and is never mentioned or hinted at on the site (confirmed).

## Brand Commitments

- A project of the Massachusetts Law Reform Institute; the MLRI attribution and link stay.
- No name, logo or palette is committed yet. The current colours and fonts are placeholders.

## Evidence on Hand

- Real: the page copy in `index.html`, the roadmap items and their status, and the MLRI relationship. The workday table is an illustration and is labelled as one.
- Absent, not to be fabricated: learner numbers, course counts, dates, testimonials, funder names, photography, a logo.

## Product Principles

1. Explain the idea before anything else; a visitor should grasp what is different about this training.
2. Say only what is true today. Progress is shown as it stands, with no invented proof and no dates.
3. Stay easy to hand over: a non-developer can update the page, and the design firm can re-skin from tokens.
4. Serve advocates, organizations and funders with one plain account rather than three pitches.

## Accessibility & Inclusion

Text colours meet a contrast ratio of at least 4.5 to 1 against their background. Keyboard access, a skip link and visible focus are already in place and stay.
