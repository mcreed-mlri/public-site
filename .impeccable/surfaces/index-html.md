---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: home page (index.html)

Mode: Persuade. Audience: an even mix of learners, legal aid supervisors, faculty and contributors, funders and partners. Job: understand the idea (short, self-paced training that fits around casework) and see how they might get involved. Proof on hand: the page copy and the MLRI relationship only. Constraints: interim look until the design firm's guide arrives; all values re-skinnable from `css/tokens.css`; Massachusetts only; no dates or counts; placeholders stay marked with `data-todo`.

Page order (current; the workday table and roadmap were later removed, and the user chose a lesson wireframe over the workday illustration): hero (headline beside one drawn lesson screen with Learn, Practice and Refer back areas, labelled as an illustration; the example is a client conversation, not courtroom work, because most legal aid work happens outside court), Legal Aid Litigation Skills (four skill areas), Get involved (four linked rows with arrows, each leading to Contact until it has its own page), About and Contact, footer.

Unresolved: center name, contact inbox, destinations for the four Get involved rows.

## Direction contract

THESIS: The page is a plain-spoken build sheet for Massachusetts legal aid training, set in the flat colour and heavy black outline of an instruction booklet. It refuses the white program page with a hero, a button and three feature cards, and it refuses the navy and gold of MLRI's public help site, Mass Legal Help, which an earlier navy version sat too close to.

OWN-WORLD: Sky-blue field (#b8d8ee) alternating with white bands, black lettering (#111111), 3px black rules and outlines, generous side margins. Yellow (#f2cf3a) marks where the visitor acts and appears only on the Practice area of the lesson wireframe and on any button. The headline highlight behind Massachusetts was removed at the user's request. No red and no other accent. Rubik in heavy weights at display scale. A drawn arrow ends each Get involved row. No cards, icon tiles, brick drawings or shadows.

STORY: The visitor reads what this is beside one lesson screen that teaches, tests and hands over a reference, sees the litigation skills the first program covers, finds their own row under Get involved, and learns who is behind it and how to write.

FIRST VIEWPORT: Masthead with the center name over "A project of the Massachusetts Law Reform Institute" and four nav links, a white rule, then two columns: the headline "Practical training for Massachusetts legal aid staff" at up to 80px in black (the audience stays in the headline, which also separates the site from MassLegalHelp), the line "Short, self-paced lessons that fit around real casework", and the yellow button "Explore the training" linking to the program preview; beside it the sample lesson, labelled "Sample lesson · Urgent intake calls" at the top, with Learn as one line naming the skill, a yellow Practice block holding a time-pressured triage scenario (a referred client with a Housing Court hearing on Monday) and a "See how a Massachusetts housing advocate would prioritize" reveal. The scenario must never cast doubt on the client, and must show judgment and Massachusetts practice that a chatbot could not supply (a no-JavaScript details element; no answer box, so the hero never feels like an assignment), and Refer back as one footer line. The supporting line names Massachusetts. No answer is marked correct: a quiz with an obvious answer made the training look too easy to supervisors, so the sample shows judgment rather than recall. A trainer should replace the scenario with a real one. The page does not claim every lesson includes all three; the sample only illustrates the format. Below 64rem the wireframe stacks under the text.

FORM: The directory structure of the assigned grounded direction (courthouse directory, position 4 on the grounded list) carried in the palette and outline of the dealt challenger the user adopted, games-toys-physics-play-brick-build-instructions; the user chose this fusion and the yellow highlight in words. seed:9598290318c6f082. Build path: code-led; the user-approved sketch `.impeccable/mocks/decision/combined.html` is the composition the build matches. Signature element: the yellow Practice area of the lesson wireframe; motion is limited to anchor scrolling and the Get involved rows easing right on hover. Bands alternate: blue hero, white Litigation Skills, blue Get involved, white About and Contact, blue footer.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
