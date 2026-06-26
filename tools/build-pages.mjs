import { mkdir, writeFile } from "node:fs/promises";

const diagnoses = [
  {
    id: "sacroiliitis",
    title: "Suspicious Active Sacroiliitis",
    subtitle: "Possible active inflammation on a chronic sacroiliitis background",
    category: "Rheumatology",
    priority: "High priority",
    severity: 8,
    certainty: "Needs specialist confirmation",
    icon: "flame",
    color: "amber",
    report: "7102793657.pdf and hip MRI",
    summary:
      "MRI describes chronic bilateral sacroiliac joint changes, worse on the left, plus left-sided T2 signal suspicious for active sacroiliitis.",
    description:
      "Sacroiliitis means inflammation of the sacroiliac joints, where the lower spine connects to the pelvis. The chronic changes suggest this may not be a brand-new process, while the left-sided signal raises concern for current inflammation.",
    findings: [
      "Cortical irregularities and subcortical sclerosis in both sacroiliac joints.",
      "More pronounced changes on the left side.",
      "Linear T2 hyperintensities adjacent to left-sided sclerosis, suspicious for active inflammation.",
      "X-rays were normal, which can happen when inflammatory changes are better seen on MRI."
    ],
    symptoms: [
      "Low back, buttock, hip, or groin pain.",
      "Morning stiffness or pain after rest.",
      "Pain that may improve with movement.",
      "Tenderness when pressure is applied over the sacroiliac joints."
    ],
    shortImpact:
      "Pain, disturbed sleep, trouble sitting or standing, and compensation that can worsen hip, knee, and lumbar mechanics.",
    longImpact:
      "If inflammatory arthritis is confirmed and not treated, recurrent inflammation can become chronic and may reduce mobility over time.",
    untreated:
      "Persistent pain, reduced function, delayed treatment of a possible inflammatory arthritis, and higher risk of chronic pain patterns.",
    causes: [
      "Axial spondyloarthritis or ankylosing spondylitis.",
      "Psoriatic arthritis or inflammatory bowel disease-related arthritis.",
      "Mechanical stress or prior injury.",
      "Rarely infection, especially if fever or severe systemic symptoms are present."
    ],
    plan: [
      "Book rheumatology evaluation and bring the MRI report/images.",
      "Review inflammatory back pain pattern, psoriasis, eye inflammation, bowel symptoms, and family history.",
      "Discuss labs such as CRP, ESR, HLA-B27, CBC/CMP, and infection screening if clinically indicated.",
      "Start targeted physical therapy for SI stability and mobility.",
      "Use NSAIDs only under clinician guidance; consider advanced therapy only if inflammatory disease is confirmed."
    ],
    urgent:
      "Seek urgent care for fever, severe rapidly worsening pain, new leg weakness, numbness in the saddle area, or bladder/bowel changes."
  },
  {
    id: "hip-fai",
    title: "Right Cam-Type FAI With Labral Irregularity",
    subtitle: "Hip impingement pattern with labral signal change",
    category: "Orthopedics",
    priority: "Moderate priority",
    severity: 6,
    certainty: "MRI-supported",
    icon: "bone",
    color: "sky",
    report: "7102790650.pdf",
    summary:
      "MRI reports cam-type femoroacetabular impingement on the right, right anterosuperior labral irregularity, and bilateral peritrochanteric soft-tissue edema.",
    description:
      "Cam-type femoroacetabular impingement means the femoral head-neck shape can pinch against the hip socket during flexion and rotation. The labrum is the cartilage rim around the socket; irregularity can reflect irritation or a tear.",
    findings: [
      "Loss of offset at the femoral head-neck junction consistent with cam-type FAI.",
      "T2 hyperintensity and contour irregularity in the right anterosuperior labrum.",
      "Bilateral peritrochanteric soft-tissue edema.",
      "Hip joint spaces and articular surfaces were reported as normal."
    ],
    symptoms: [
      "Groin or front-of-hip pain.",
      "Pain with sitting, squatting, stairs, pivoting, or internal rotation.",
      "Clicking, catching, stiffness, or reduced rotation.",
      "Outer hip tenderness if peritrochanteric tissues are irritated."
    ],
    shortImpact:
      "Hip pain may alter walking mechanics and increase stress on the lower back, SI joints, and knees.",
    longImpact:
      "Persistent impingement can keep irritating the labrum and cartilage, contributing to chronic hip pain and possible earlier degenerative change.",
    untreated:
      "Ongoing pain, activity limitation, worsening labral symptoms, and compensatory overload of the knee/back.",
    causes: [
      "Developmental hip bone shape.",
      "Repetitive deep hip flexion, pivoting, or athletic loading.",
      "Movement patterns that repeatedly place the hip into pinch positions.",
      "Secondary tendon or bursa irritation around the greater trochanter."
    ],
    plan: [
      "Start FAI-aware physical therapy focused on hip control, glute strength, and avoiding pinch positions.",
      "Temporarily reduce deep squats, prolonged sitting, hill running, and pivoting if they reproduce pain.",
      "Review pain-control options with orthopedics or primary care.",
      "Consider diagnostic or therapeutic injection if the pain source remains unclear.",
      "If 8-12 weeks of PT fails, discuss hip arthroscopy/labral options with an orthopedic hip specialist."
    ],
    urgent:
      "Seek care quickly for inability to bear weight, fever, severe trauma, or rapidly worsening hip pain."
  },
  {
    id: "right-knee",
    title: "Right Knee Effusion, Baker Cyst, Grade 1 ACL/Meniscus Findings",
    subtitle: "Inflammatory-mechanical knee pattern without a major tear reported",
    category: "Orthopedics",
    priority: "Moderate priority",
    severity: 5,
    certainty: "MRI-supported",
    icon: "circle-dot",
    color: "cyan",
    report: "7102790656.pdf",
    summary:
      "MRI shows suprapatellar fat pad edema, synovial thickening, slight effusion, a 5 cm Baker cyst, lateral patellar tilt, grade 1 ACL sprain, and grade 1 medial meniscus degenerative signal.",
    description:
      "The knee report suggests irritation and extra fluid rather than a major structural tear. A Baker cyst is fluid collecting behind the knee, usually because something inside the knee is inflamed.",
    findings: [
      "Suprapatellar fat pad edema with synovial thickening and slight effusion.",
      "5 cm lobulated Baker cyst.",
      "Lateral tilt of the patella.",
      "Grade 1 ACL sprain with preserved ligament integrity.",
      "Grade 1 intrameniscal degenerative signal in the posterior horn of the medial meniscus."
    ],
    symptoms: [
      "Pain or pressure above or behind the kneecap.",
      "Jumping, clicking, fullness, stiffness, or swelling behind the knee.",
      "Pain with stairs, squats, kneeling, or long walking.",
      "A sense of instability from swelling or quadriceps inhibition."
    ],
    shortImpact:
      "Swelling can reduce quadriceps control, worsen patellar tracking, and make the knee feel less reliable.",
    longImpact:
      "Repeated inflammation can make the cyst recur and may accelerate meniscus or cartilage symptoms if mechanics are not corrected.",
    untreated:
      "Persistent pain, recurrent swelling, reduced activity tolerance, and rarely cyst rupture causing calf swelling that can mimic a blood clot.",
    causes: [
      "Patellar tracking problems.",
      "Suprapatellar fat pad irritation.",
      "Meniscus irritation or early degeneration.",
      "Inflammatory joint disease if sacroiliitis is confirmed."
    ],
    plan: [
      "Use relative rest, ice, compression, and clinician-approved anti-inflammatory medication during flares.",
      "Begin physical therapy for quadriceps, hip strength, patellar tracking, and mobility.",
      "Avoid deep flexion and high-load squatting while swelling is active.",
      "Follow orthopedics if swelling persists, locking develops, or instability occurs.",
      "Consider aspiration/injection only if clinically appropriate and symptoms persist."
    ],
    urgent:
      "Seek urgent care for sudden calf swelling, redness, severe calf pain, fever, inability to bear weight, or suspected clot-like symptoms."
  },
  {
    id: "lumbar-discopathy",
    title: "Lumbar Degenerative Discopathy",
    subtitle: "L4-5 and L5-S1 disc changes without significant nerve compression",
    category: "Spine",
    priority: "Moderate priority",
    severity: 5,
    certainty: "MRI-supported",
    icon: "scan-line",
    color: "blue",
    report: "7102790659.pdf",
    summary:
      "MRI reports reduced lumbar lordosis, thoracolumbar asymmetry, early disc degeneration, L4-5 bulge with narrowing, and L5-S1 bulge, without significant neural compression.",
    description:
      "Degenerative discopathy means the lower back discs show early wear, dehydration, or bulging. The reassuring part is that the report does not describe major nerve compression.",
    findings: [
      "Reduced lumbar lordosis.",
      "Thoracolumbar transition rotoscoliosis/asymmetry.",
      "Early degenerative signal loss in lumbar discs.",
      "L4-5 diffuse bulging with canal/foraminal narrowing but no significant neural compression.",
      "L5-S1 diffuse bulging without obvious neural compression."
    ],
    symptoms: [
      "Low back pain, stiffness, or muscle spasm.",
      "Pain with bending, lifting, or prolonged sitting.",
      "Leg pain, numbness, or tingling only if nerve irritation develops.",
      "Overlap with SI and hip pain patterns."
    ],
    shortImpact:
      "Back pain can limit sleep, sitting, lifting, exercise tolerance, and daily movement confidence.",
    longImpact:
      "Many disc bulges improve with conservative care, but repeated flares can lead to weakness, avoidance, and chronic pain patterns.",
    untreated:
      "Persistent pain, reduced conditioning, and compensation that can worsen hip, knee, or SI symptoms.",
    causes: [
      "Disc dehydration and mechanical loading.",
      "Repetitive bending, lifting, or prolonged sitting.",
      "Reduced core and hip strength.",
      "Altered gait from hip or SI pain.",
      "Genetic tendency toward early disc change."
    ],
    plan: [
      "Start physical therapy focused on core endurance, hip strength, graded activity, and directional preference exercises.",
      "Break up prolonged sitting and improve lifting mechanics.",
      "Use medications only under clinician guidance, especially if using diclofenac.",
      "Build walking tolerance and general conditioning gradually.",
      "Escalate to spine specialist if neurological symptoms appear or pain remains disabling."
    ],
    urgent:
      "Urgent care is needed for new weakness, saddle numbness, bladder/bowel changes, fever, major trauma, or cancer-related red flags."
  },
  {
    id: "telogen-effluvium",
    title: "Telogen Effluvium",
    subtitle: "Diffuse hair shedding with scalp itch and temporal thinning",
    category: "Dermatology",
    priority: "Lower urgency",
    severity: 3,
    certainty: "Preliminary dermatology diagnosis",
    icon: "sprout",
    color: "emerald",
    report: "7102750361.pdf",
    summary:
      "Dermatology noted temporal hair thinning, scalp itch, stress, sleep disturbance, and ordered labs including CBC, ferritin, B12, folate, vitamin D, thyroid tests, CRP, ESR, and biotin.",
    description:
      "Telogen effluvium is temporary diffuse hair shedding after a body stressor. It can be emotionally distressing, but regrowth is common once the trigger is found and corrected.",
    findings: [
      "Temporal hair thinning on exam.",
      "Scalp itching reported.",
      "Stress and sleep disturbance reported.",
      "Increased chin hair growth noted, which may justify hormonal discussion.",
      "Broad lab workup was ordered."
    ],
    symptoms: [
      "Increased shedding in shower, brush, or pillow.",
      "Diffuse thinning rather than isolated scarring patches.",
      "Scalp itch or irritation.",
      "Hair density changes that may become more noticeable over months."
    ],
    shortImpact:
      "Visible shedding, anxiety, and scalp discomfort.",
    longImpact:
      "Usually improves after the trigger is corrected, but shedding can persist if iron, thyroid, nutritional, stress, or hormonal drivers remain.",
    untreated:
      "Missed correctable deficiencies or thyroid/hormonal issues, ongoing shedding, and avoidable distress.",
    causes: [
      "Psychological stress or sleep disruption.",
      "Recent illness, surgery, weight loss, or diet change.",
      "Iron, B12, folate, vitamin D, or thyroid abnormalities.",
      "Medication changes.",
      "Hormonal contributors such as androgen excess or PCOS."
    ],
    plan: [
      "Complete the ordered labs, especially CBC, ferritin, TSH/FT4, B12, folate, vitamin D, CRP, and ESR.",
      "Correct deficiencies only with clinician guidance.",
      "Evaluate scalp itch for seborrheic dermatitis, psoriasis, or fungal disease.",
      "Discuss chin hair growth and whether androgen/PCOS screening is appropriate.",
      "Follow up with dermatology in 3-6 months; discuss minoxidil only if appropriate."
    ],
    urgent:
      "Prompt dermatology review is advised for sudden patchy hair loss, scarring, pain, pus, fever, or rapidly progressive shedding."
  },
  {
    id: "pityriasis-versicolor",
    title: "Pityriasis Versicolor",
    subtitle: "Superficial yeast-related discoloration on trunk skin",
    category: "Dermatology",
    priority: "Lower urgency",
    severity: 2,
    certainty: "Preliminary dermatology diagnosis",
    icon: "palette",
    color: "lime",
    report: "7102750361.pdf",
    summary:
      "Dermatology noted red varicolored macules on the inframammary region and back, with preliminary diagnosis of pityriasis versicolor.",
    description:
      "Pityriasis versicolor is a common superficial yeast overgrowth that changes skin pigmentation and can cause fine scale or mild itch.",
    findings: [
      "Red varicolored macules on the inframammary region and back.",
      "Diagnosis recorded as preliminary.",
      "Typical location for pityriasis versicolor."
    ],
    symptoms: [
      "Light, dark, pink, copper, or red-brown patches.",
      "Fine scale.",
      "Mild itch or no symptoms.",
      "Color contrast can become more visible after sun exposure."
    ],
    shortImpact:
      "Itching or cosmetic concern; usually not medically dangerous.",
    longImpact:
      "Recurrence is common in warm or humid conditions, but prevention can reduce flares.",
    untreated:
      "Patches may spread or persist, and pigment changes can remain noticeable even after active yeast clears.",
    causes: [
      "Malassezia yeast that normally lives on the skin.",
      "Heat, humidity, sweating, and oily skin.",
      "Recurrence-prone skin environment."
    ],
    plan: [
      "Confirm with dermatology if uncertain, often by exam or KOH scraping.",
      "Use topical selenium sulfide or azole shampoo/cream as directed.",
      "Expect pigment normalization to lag behind yeast clearance.",
      "Consider preventive monthly topical use if recurrence is frequent.",
      "Reserve oral antifungals for extensive or recurrent cases under clinician supervision."
    ],
    urgent:
      "Not usually urgent; seek care if rash is painful, rapidly spreading, blistering, infected, or diagnosis is uncertain."
  },
  {
    id: "eustachian-rhinitis",
    title: "Eustachian Tube Obstruction With Seasonal Allergic Rhinitis",
    subtitle: "Ear clicking and hearing complaint linked to nasal allergy inflammation",
    category: "ENT",
    priority: "Watch / routine",
    severity: 3,
    certainty: "Preliminary ENT diagnosis",
    icon: "ear",
    color: "violet",
    report: "7109790416.pdf and RASHA BAKAR.pdf",
    summary:
      "ENT noted long-standing left ear clicking and hearing complaints, congested turbinates with mucoid discharge, normal otoscopy, and ordered audiometry plus Eustachian tube testing. Rinoclenil nasal spray was prescribed.",
    description:
      "The Eustachian tube equalizes pressure between the middle ear and the nose/throat. Allergic nasal inflammation can block it, causing clicking, popping, pressure, or muffled hearing.",
    findings: [
      "Long-standing left ear clicking with hearing complaint.",
      "Normal otoscopy.",
      "Congested turbinates and mucoid discharge.",
      "Pure tone audiometry and Eustachian tube function tests ordered.",
      "Nasal steroid spray prescribed."
    ],
    symptoms: [
      "Ear clicking, popping, fullness, or pressure.",
      "Muffled or fluctuating hearing.",
      "Nasal congestion, sneezing, runny nose, or postnasal drip.",
      "Symptoms may worsen with allergies, flying, or pressure change."
    ],
    shortImpact:
      "Annoying ear fullness/clicking and fluctuating hearing, especially during allergy flares or travel.",
    longImpact:
      "Persistent dysfunction can contribute to middle-ear fluid, recurrent infections, or chronic hearing symptoms.",
    untreated:
      "Ongoing hearing complaints may go unmeasured, and recurrent congestion can keep the tube blocked.",
    causes: [
      "Seasonal allergic rhinitis.",
      "Viral upper respiratory infections.",
      "Sinus or nasal inflammation.",
      "Pressure changes from flying or diving.",
      "Less commonly structural blockage."
    ],
    plan: [
      "Complete pure tone audiometry and Eustachian tube function testing.",
      "Use nasal steroid consistently and with correct technique.",
      "Consider saline rinses and allergen reduction.",
      "Follow up with ENT for persistent, unilateral, painful, or worsening hearing symptoms.",
      "Seek more urgent evaluation for vertigo, drainage, severe pain, or sudden hearing loss."
    ],
    urgent:
      "Sudden hearing loss, severe vertigo, ear drainage, facial weakness, or severe ear pain requires prompt medical evaluation."
  },
  {
    id: "incidental-findings",
    title: "Incidental Sacral, Coccyx, and Pelvic Findings",
    subtitle: "Mostly context findings unless symptoms match",
    category: "Incidental / Gynecology",
    priority: "Watch / context",
    severity: 2,
    certainty: "MRI-described findings",
    icon: "scan",
    color: "rose",
    report: "7102793657.pdf",
    summary:
      "MRI noted anterior angulation/distortion of the distal coccyx, a small 3 mm osseous fragment suggesting old sequelae, a small S2 Tarlov cyst, retroverted uterus, and a 2 cm left ovarian follicular cyst.",
    description:
      "These findings are often incidental or old/healed changes. They matter most if symptoms directly match them, such as tailbone pain with sitting or pelvic symptoms.",
    findings: [
      "Anterior angulation and anatomical distortion of the distal coccyx.",
      "3 mm osseous fragmentation near Cocx 4-5, described as sequelae.",
      "Small Tarlov cyst at posterior S2 vertebral body.",
      "Retroverted uterus.",
      "2 cm left ovarian follicular cyst."
    ],
    symptoms: [
      "Tailbone pain with sitting if coccyx finding is symptomatic.",
      "Rare sacral nerve symptoms from Tarlov cysts.",
      "Pelvic pain or abnormal bleeding if gynecologic findings are symptomatic.",
      "Often no symptoms at all."
    ],
    shortImpact:
      "Usually none if asymptomatic; coccyx pain can make sitting uncomfortable.",
    longImpact:
      "Generally monitored only if symptoms develop or pelvic symptoms persist.",
    untreated:
      "If symptomatic issues are ignored, pain or pelvic symptoms may persist without targeted care.",
    causes: [
      "Prior coccyx trauma or anatomical variation.",
      "Small Tarlov cysts are often incidental.",
      "Follicular ovarian cysts are commonly physiologic in menstruating women."
    ],
    plan: [
      "No urgent action if asymptomatic.",
      "Use a coccyx cushion and avoid prolonged pressure if tailbone pain exists.",
      "Ask gynecology about pelvic pain, abnormal bleeding, or persistent cyst concern.",
      "Review sacral nerve symptoms with a clinician if numbness, bladder/bowel symptoms, or radiating sacral pain appears."
    ],
    urgent:
      "Seek urgent care for severe pelvic pain, fainting, heavy bleeding, fever, or new bladder/bowel or neurological symptoms."
  }
];

const colorMap = {
  amber: {
    soft: "bg-amber-50 border-amber-200 text-amber-900",
    solid: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800",
    ring: "ring-amber-200",
    gradient: "from-amber-500/18"
  },
  sky: {
    soft: "bg-sky-50 border-sky-200 text-sky-900",
    solid: "bg-sky-500",
    badge: "bg-sky-100 text-sky-800",
    ring: "ring-sky-200",
    gradient: "from-sky-500/18"
  },
  cyan: {
    soft: "bg-cyan-50 border-cyan-200 text-cyan-900",
    solid: "bg-cyan-500",
    badge: "bg-cyan-100 text-cyan-800",
    ring: "ring-cyan-200",
    gradient: "from-cyan-500/18"
  },
  blue: {
    soft: "bg-blue-50 border-blue-200 text-blue-900",
    solid: "bg-blue-500",
    badge: "bg-blue-100 text-blue-800",
    ring: "ring-blue-200",
    gradient: "from-blue-500/18"
  },
  emerald: {
    soft: "bg-emerald-50 border-emerald-200 text-emerald-900",
    solid: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-800",
    ring: "ring-emerald-200",
    gradient: "from-emerald-500/18"
  },
  lime: {
    soft: "bg-lime-50 border-lime-200 text-lime-900",
    solid: "bg-lime-500",
    badge: "bg-lime-100 text-lime-800",
    ring: "ring-lime-200",
    gradient: "from-lime-500/18"
  },
  violet: {
    soft: "bg-violet-50 border-violet-200 text-violet-900",
    solid: "bg-violet-500",
    badge: "bg-violet-100 text-violet-800",
    ring: "ring-violet-200",
    gradient: "from-violet-500/18"
  },
  rose: {
    soft: "bg-rose-50 border-rose-200 text-rose-900",
    solid: "bg-rose-500",
    badge: "bg-rose-100 text-rose-800",
    ring: "ring-rose-200",
    gradient: "from-rose-500/18"
  }
};

const plainCopy = {
  sacroiliitis: {
    subtitle: "Possible inflammation in the joints where the spine meets the pelvis",
    summary: "The MRI suggests irritation in the pelvis-spine joints, especially on the left. A rheumatologist should confirm what is causing it.",
    description: "This means the joints between the lower spine and pelvis may be inflamed. The scan suggests some older changes plus possible active irritation now.",
    findings: [
      "Both pelvis-spine joints show signs of older stress or inflammation.",
      "The left side looks more affected.",
      "The MRI signal suggests there may be active inflammation on the left.",
      "The X-rays were normal, which can happen because MRI sees inflammation better."
    ],
    symptoms: [
      "Lower back, buttock, hip, or groin pain.",
      "Stiffness in the morning or after sitting/resting.",
      "Pain that feels better after moving around.",
      "Tenderness over the pelvis-spine joints."
    ],
    causes: [
      "An inflammatory arthritis condition.",
      "Psoriasis-related or bowel-inflammation-related joint disease.",
      "Mechanical stress or old injury.",
      "Rarely, infection if fever or severe illness is present."
    ],
    shortImpact: "Can cause pain, poor sleep, and trouble sitting or standing.",
    longImpact: "If this is inflammatory arthritis and it is not treated, pain and stiffness can become more persistent.",
    untreated: "The biggest risk is missing a treatable inflammatory condition and letting pain become chronic.",
    plan: [
      "See a rheumatologist and bring the MRI images/report.",
      "Tell the doctor about morning stiffness, eye inflammation, psoriasis, bowel symptoms, and family history.",
      "Ask which blood tests are needed, such as inflammation markers and HLA-B27.",
      "Start physical therapy focused on the pelvis, back, and hips.",
      "Use anti-inflammatory medicines only with clinician guidance."
    ],
    urgent: "Get urgent care for fever, severe worsening pain, new leg weakness, numbness in the groin/saddle area, or bladder/bowel changes."
  },
  "hip-fai": {
    subtitle: "Hip pinching pattern with possible irritation of the socket rim",
    summary: "The right hip shape may pinch during certain movements, and the cartilage rim around the socket looks irritated.",
    description: "The shape of the right hip may cause pinching when the hip bends or rotates. This can irritate the soft rim of cartilage around the hip socket.",
    findings: [
      "The right hip has a shape linked with pinching during movement.",
      "The front-upper cartilage rim of the socket looks irritated or irregular.",
      "Soft tissues around both outer hips show mild swelling/irritation.",
      "The main hip joint spaces were reported as normal."
    ],
    symptoms: [
      "Front hip or groin pain.",
      "Pain with sitting, squatting, stairs, or twisting.",
      "Clicking, catching, stiffness, or limited rotation.",
      "Outer hip soreness if nearby tendons/bursa are irritated."
    ],
    causes: [
      "Hip bone shape that developed over time.",
      "Repeated deep bending, pivoting, or athletic loading.",
      "Movements that repeatedly put the hip into a pinch position.",
      "Irritation of nearby tendons or bursa."
    ],
    shortImpact: "Can change how you walk and make the back, SI joints, or knees work harder.",
    longImpact: "If the pinching continues, hip pain may become more persistent.",
    untreated: "Pain and limited activity can continue, and other areas may compensate.",
    plan: [
      "Start physical therapy that understands hip impingement.",
      "Temporarily avoid movements that pinch the hip.",
      "Review pain-control options with a clinician.",
      "Consider an injection only if the pain source is unclear.",
      "If PT does not help after 8-12 weeks, see a hip specialist."
    ],
    urgent: "Get care quickly if you cannot bear weight, have fever, had a major injury, or pain rapidly worsens."
  },
  "right-knee": {
    subtitle: "Knee swelling and irritation without a major tear reported",
    summary: "The knee has swelling/irritation, a fluid cyst behind the knee, and mild ligament/meniscus changes.",
    description: "The MRI suggests the knee is irritated and holding extra fluid. The cyst behind the knee usually happens because fluid is being produced inside the knee.",
    findings: [
      "There is swelling above the kneecap area.",
      "There is a 5 cm fluid cyst behind the knee.",
      "The kneecap tilts slightly to the side.",
      "The ACL has a mild sprain, but it is still intact.",
      "The medial meniscus has early mild wear/irritation."
    ],
    symptoms: [
      "Pain or pressure around the kneecap.",
      "Fullness, stiffness, or swelling behind the knee.",
      "Pain with stairs, squats, kneeling, or long walks.",
      "A wobbly feeling when swelling affects muscle control."
    ],
    causes: [
      "Kneecap tracking issues.",
      "Irritation inside the knee.",
      "Early meniscus wear.",
      "Inflammation from a broader joint condition."
    ],
    shortImpact: "Swelling can make the thigh muscle work poorly and make the knee feel unreliable.",
    longImpact: "Repeated swelling can keep the cyst coming back and limit activity.",
    untreated: "Pain, swelling, and activity limits can continue.",
    plan: [
      "Calm swelling with rest, ice, compression, and clinician-approved medicine.",
      "Start PT for thigh, hip, and kneecap control.",
      "Avoid deep squats while swollen.",
      "See orthopedics if swelling, locking, or instability continues.",
      "Discuss injection or drainage only if symptoms persist."
    ],
    urgent: "Get urgent care for sudden calf swelling, redness, severe calf pain, fever, or inability to bear weight."
  },
  "lumbar-discopathy": {
    subtitle: "Lower back disc wear without a major pinched nerve reported",
    summary: "The lower back discs show early wear and bulging, but the report does not describe major nerve compression.",
    description: "The cushions between the lower back bones show early wear and bulging. The reassuring part is that no major pinched nerve was reported.",
    findings: [
      "The natural curve of the lower back is reduced.",
      "There is mild spine asymmetry.",
      "The lower discs show early wear.",
      "L4-5 and L5-S1 have disc bulges.",
      "No significant nerve compression was reported."
    ],
    symptoms: [
      "Low back pain or stiffness.",
      "Pain with bending, lifting, or sitting.",
      "Leg symptoms only if a nerve becomes irritated.",
      "Pain may overlap with hip or SI joint pain."
    ],
    causes: [
      "Normal disc wear over time.",
      "Mechanical load, sitting, bending, or lifting.",
      "Weak core/hip support.",
      "Changed walking pattern from hip or SI pain."
    ],
    shortImpact: "Can limit sitting, sleep, lifting, and exercise.",
    longImpact: "Most cases improve, but repeated flares can lead to weakness and chronic pain patterns.",
    untreated: "Pain and deconditioning can continue and affect nearby joints.",
    plan: [
      "Start PT for core endurance and hip strength.",
      "Take breaks from prolonged sitting.",
      "Use pain medicines only with clinician guidance.",
      "Build walking and activity gradually.",
      "See a spine specialist if nerve symptoms or disabling pain develops."
    ],
    urgent: "Get urgent care for new weakness, groin/saddle numbness, bladder/bowel changes, fever, major trauma, or cancer-related red flags."
  },
  "telogen-effluvium": {
    subtitle: "Temporary hair shedding pattern",
    summary: "The hair shedding may be related to stress, sleep, nutrition, thyroid, iron, or hormonal factors.",
    description: "This is a common type of shedding that can happen after stress on the body. Hair often improves after the trigger is found and corrected.",
    findings: [
      "Thinning was seen near the temples.",
      "Scalp itching was reported.",
      "Stress and sleep problems were noted.",
      "Chin hair growth was noted, which may need hormone discussion.",
      "A broad lab workup was ordered."
    ],
    symptoms: [
      "More hair shedding in the shower or brush.",
      "Diffuse thinning rather than a single bald patch.",
      "Scalp itching or irritation.",
      "Hair density changes over months."
    ],
    causes: [
      "Stress or poor sleep.",
      "Recent illness, surgery, weight change, or diet change.",
      "Low iron, vitamins, or thyroid problems.",
      "Medication changes.",
      "Hormone imbalance."
    ],
    shortImpact: "Can be upsetting and uncomfortable.",
    longImpact: "Often improves once the cause is corrected, but can continue if the trigger remains.",
    untreated: "Correctable lab or hormone problems may be missed.",
    plan: [
      "Complete the ordered blood tests.",
      "Correct deficiencies only with clinician guidance.",
      "Have the scalp itch evaluated.",
      "Ask whether hormone/PCOS screening makes sense.",
      "Follow up with dermatology in 3-6 months."
    ],
    urgent: "Seek prompt dermatology care for sudden patchy loss, scarring, pain, pus, fever, or very rapid shedding."
  },
  "pityriasis-versicolor": {
    subtitle: "Common yeast-related skin discoloration",
    summary: "The skin patches are likely from a common surface yeast that can change skin color and mildly itch.",
    description: "This is a common, usually harmless yeast overgrowth on the skin that can cause lighter, darker, pink, or reddish patches.",
    findings: [
      "Colored patches were seen on the chest/under-breast area and back.",
      "The diagnosis was listed as preliminary.",
      "The location fits this condition."
    ],
    symptoms: [
      "Light, dark, pink, or reddish patches.",
      "Fine scaling.",
      "Mild itch or no symptoms.",
      "More noticeable color changes after sun exposure."
    ],
    causes: [
      "A yeast that normally lives on skin.",
      "Heat, humidity, sweating, and oily skin.",
      "A tendency for the rash to come back."
    ],
    shortImpact: "Mostly itching or cosmetic concern.",
    longImpact: "It can come back, especially in warm/humid conditions.",
    untreated: "Patches may spread or stay visible.",
    plan: [
      "Confirm with dermatology if uncertain.",
      "Use topical antifungal treatment as directed.",
      "Expect color to take longer to normalize than the yeast takes to clear.",
      "Consider prevention if it keeps coming back.",
      "Use oral medicine only if a clinician recommends it."
    ],
    urgent: "Usually not urgent; seek care if painful, blistering, infected, or rapidly spreading."
  },
  "eustachian-rhinitis": {
    subtitle: "Ear pressure/clicking likely linked to nasal allergies",
    summary: "Allergy-related nasal swelling may be affecting ear pressure and hearing comfort.",
    description: "The tube that equalizes ear pressure may not be opening well because the nose/allergy tissues are swollen.",
    findings: [
      "Long-standing left ear clicking and hearing complaint.",
      "Ear exam looked normal.",
      "Nasal tissues were congested with mucus.",
      "Hearing and tube-function tests were ordered.",
      "A nasal steroid spray was prescribed."
    ],
    symptoms: [
      "Ear clicking, popping, fullness, or pressure.",
      "Muffled or changing hearing.",
      "Nasal congestion, sneezing, or postnasal drip.",
      "Worse symptoms with allergies or flying."
    ],
    causes: [
      "Seasonal allergies.",
      "Colds or sinus inflammation.",
      "Pressure changes.",
      "Less commonly, a structural blockage."
    ],
    shortImpact: "Can cause annoying pressure and hearing changes.",
    longImpact: "If persistent, it can contribute to fluid, infections, or ongoing hearing symptoms.",
    untreated: "Hearing symptoms may remain unexplained or untreated.",
    plan: [
      "Complete hearing and Eustachian tube testing.",
      "Use the nasal spray consistently and correctly.",
      "Consider saline rinses and allergy trigger reduction.",
      "Follow up with ENT if symptoms persist or are one-sided.",
      "Seek urgent care for sudden hearing loss or severe vertigo."
    ],
    urgent: "Sudden hearing loss, severe vertigo, drainage, facial weakness, or severe ear pain needs prompt care."
  },
  "incidental-findings": {
    subtitle: "Extra scan findings that usually matter only if symptoms match",
    summary: "The scan also noted tailbone, small cyst, uterus position, and ovarian follicle findings that are often incidental.",
    description: "These are extra findings from the scan. They usually do not need urgent action unless they match symptoms.",
    findings: [
      "The tailbone is angled and looks like it may have old changes.",
      "There is a tiny old-looking bone fragment near the tailbone.",
      "There is a small Tarlov cyst near S2.",
      "The uterus is tilted backward.",
      "There is a 2 cm follicular cyst in the left ovary."
    ],
    symptoms: [
      "Tailbone pain with sitting.",
      "Rare nerve symptoms from a Tarlov cyst.",
      "Pelvic pain or abnormal bleeding if gynecologic findings matter.",
      "Often no symptoms."
    ],
    causes: [
      "Old tailbone injury or normal variation.",
      "Tarlov cysts are often incidental.",
      "Small ovarian follicular cysts are often normal during cycles."
    ],
    shortImpact: "Usually none if there are no symptoms.",
    longImpact: "Usually monitored only if symptoms develop.",
    untreated: "If symptoms are present, ignoring them may allow pain or pelvic issues to continue.",
    plan: [
      "No urgent action if there are no symptoms.",
      "Use a coccyx cushion if sitting hurts.",
      "Ask gynecology about pelvic pain, bleeding, or cyst concerns.",
      "Discuss nerve symptoms with a clinician if they appear."
    ],
    urgent: "Get urgent care for severe pelvic pain, fainting, heavy bleeding, fever, or new bladder/bowel or nerve symptoms."
  }
};

function baseHead(title) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'] },
          colors: { ink: '#0f172a', muted: '#64748b', line: '#e2e8f0', stripe: '#635bff', mint: '#00d4aa' },
          boxShadow: { soft: '0 8px 24px rgba(15, 23, 42, 0.05)', lift: '0 14px 34px rgba(15, 23, 42, 0.08)' }
        }
      }
    }
  </script>
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  <style>
    html { scroll-behavior: smooth; }
    body { background: #fff; }
    .grid-bg { display: none; }
    .section-anchor { scroll-margin-top: 104px; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .table-wrap table { min-width: 760px; }
    [data-mode-button][aria-pressed="true"] { background: #0f172a; color: #fff; border-color: #0f172a; }
    @media (max-width: 760px) { .table-wrap { overflow-x: auto; } }
  </style>
</head>`;
}

function header(active = "home", depth = ".") {
  const homeHref = depth === "." ? "index.html" : "../index.html";
  return `<header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
  <div class="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
    <a href="${homeHref}" class="flex items-center gap-3">
      <span class="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-xs font-black text-white">RB</span>
      <span>
        <span class="block text-sm font-black text-slate-950">Rasha Bakar</span>
        <span class="block text-xs font-semibold text-slate-500">Clinical dashboard</span>
      </span>
    </a>
    <nav class="no-scrollbar hidden items-center gap-2 overflow-x-auto md:flex">
      <a class="${navClass(active === "home")}" href="${homeHref}">Home</a>
      <a class="${navClass(active === "plan")}" href="${homeHref}#start-plan">Start Plan</a>
      <a class="${navClass(active === "evidence")}" href="${homeHref}#evidence">Evidence</a>
    </nav>
    <div class="hidden items-center rounded-md border border-slate-200 bg-white p-1 sm:flex" aria-label="Reading mode">
      <button type="button" data-mode-button="clinical" class="rounded px-3 py-1.5 text-xs font-black text-slate-600" aria-pressed="true">Clinical</button>
      <button type="button" data-mode-button="plain" class="rounded px-3 py-1.5 text-xs font-black text-slate-600" aria-pressed="false">Plain</button>
    </div>
    <a href="${homeHref}#diagnoses" class="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800">
      Diagnoses
      <i data-lucide="arrow-right" class="h-4 w-4"></i>
    </a>
  </div>
  <div class="border-t border-slate-200 px-4 py-2 sm:hidden">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-3">
      <span class="text-xs font-black uppercase tracking-wide text-slate-500">Reading mode</span>
      <div class="flex items-center rounded-md border border-slate-200 bg-white p-1" aria-label="Reading mode">
        <button type="button" data-mode-button="clinical" class="rounded px-3 py-1.5 text-xs font-black text-slate-600" aria-pressed="true">Clinical</button>
        <button type="button" data-mode-button="plain" class="rounded px-3 py-1.5 text-xs font-black text-slate-600" aria-pressed="false">Plain</button>
      </div>
    </div>
  </div>
</header>`;
}

function navClass(active) {
  return active
    ? "rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white"
    : "rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50";
}

function layout({ title, body, depth = ".", active = "home" }) {
  return `${baseHead(title)}
<body class="font-sans text-ink antialiased">
  <div class="grid-bg pointer-events-none fixed inset-x-0 top-0 h-[520px]"></div>
  ${header(active, depth)}
  ${body}
  <footer class="border-t border-slate-200 bg-white">
    <div class="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <p>Educational synthesis from translated medical PDFs. Bring this to treating clinicians for confirmation and personalization.</p>
      <p class="font-semibold">Not emergency advice. Seek urgent care for severe new symptoms.</p>
    </div>
  </footer>
  <script>
    function setReadingMode(mode) {
      document.documentElement.dataset.readingMode = mode;
      localStorage.setItem('readingMode', mode);
      document.querySelectorAll('[data-mode-text]').forEach((node) => {
        node.textContent = mode === 'plain' ? node.dataset.plain : node.dataset.clinical;
      });
      document.querySelectorAll('[data-mode-button]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.modeButton === mode));
      });
    }
    document.querySelectorAll('[data-mode-button]').forEach((button) => {
      button.addEventListener('click', () => setReadingMode(button.dataset.modeButton));
    });
    setReadingMode(localStorage.getItem('readingMode') || 'clinical');
    lucide.createIcons();
  </script>
</body>
</html>`;
}

function homePage() {
  const homeTabs = diagnoses
    .map((d) => {
      const c = colorMap[d.color];
      return `<a href="diagnoses/${d.id}.html" class="inline-flex shrink-0 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
        <span class="h-2 w-2 rounded-full ${c.solid}"></span>
        ${escapeHtml(shortTitle(d.title))}
      </a>`;
    })
    .join("\n");
  const snapshotRows = [
    {
      label: "Confirm first",
      value: "Possible active sacroiliitis",
      detail: "Rheumatology review is the highest-value next step because it may change long-term treatment.",
      plainDetail: "Start here. A rheumatologist can confirm whether this is an inflammatory joint problem.",
      color: "amber",
      href: "diagnoses/sacroiliitis.html"
    },
    {
      label: "Rehab focus",
      value: "Hip, knee, SI joint, and lumbar mechanics",
      detail: "One integrated PT plan is more useful than treating each painful area separately.",
      plainDetail: "The hip, knee, lower back, and pelvis can affect each other. Physical therapy should look at the whole movement pattern.",
      color: "sky",
      href: "diagnoses/hip-fai.html"
    },
    {
      label: "Finish tests",
      value: "Derm labs, lymph node follow-up, hearing tests",
      detail: "These are not the most urgent issues, but they prevent guessing and missed correctable causes.",
      plainDetail: "These are routine, but still worth finishing so treatable causes are not missed.",
      color: "emerald",
      href: "diagnoses/telogen-effluvium.html"
    },
    {
      label: "Monitor",
      value: "Skin rash, ENT/allergy, incidental pelvic/coccyx findings",
      detail: "Usually routine unless symptoms worsen or new warning signs appear.",
      plainDetail: "These can usually be followed calmly unless symptoms get worse or new warning signs appear.",
      color: "violet",
      href: "diagnoses/eustachian-rhinitis.html"
    }
  ]
    .map((row) => {
      const c = colorMap[row.color];
      return `<a href="${row.href}" class="block border-b border-slate-200 px-4 py-5 last:border-b-0 hover:bg-slate-50">
        <div class="grid gap-2 md:grid-cols-[160px_1fr]">
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full ${c.solid}"></span>
            <p class="text-xs font-black uppercase tracking-wide text-slate-500">${escapeHtml(row.label)}</p>
          </div>
          <div>
            <p class="font-black text-slate-950">${escapeHtml(row.value)}</p>
            <p class="mt-1 text-sm leading-6 text-slate-600">${modeText(row.detail, row.plainDetail)}</p>
          </div>
        </div>
      </a>`;
    })
    .join("\n");

  return layout({
    title: "Rasha Bakar - Clinical Dashboard",
    body: `<main class="relative">
  <section class="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
    <div class="max-w-3xl">
      <div class="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-indigo-700">
        <i data-lucide="sparkles" class="h-4 w-4"></i>
        Medical report intelligence
      </div>
      <h1 class="break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">${modeText("Clinical report summary", "Plain-language health summary")}</h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">${modeText("A concise overview of the main findings, follow-up priorities, and treatment sequence to discuss with clinicians.", "A simpler overview of what the reports found, what matters first, and what to ask the doctors next.")}</p>
      <div class="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div class="text-3xl font-black">8</div><p class="mt-1 text-sm font-semibold text-slate-500">diagnosis pages</p></div>
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div class="text-3xl font-black">1</div><p class="mt-1 text-sm font-semibold text-slate-500">high priority workup</p></div>
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div class="text-3xl font-black">5</div><p class="mt-1 text-sm font-semibold text-slate-500">first steps</p></div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-200 bg-white">
    <div class="no-scrollbar mx-auto flex w-full max-w-5xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
      ${homeTabs}
    </div>
  </section>

  <section id="diagnoses" class="section-anchor border-y border-slate-200 bg-slate-50/60 py-10">
    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="mb-5">
        <p class="text-sm font-black uppercase tracking-wide text-indigo-600">At a glance</p>
        <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">What matters most</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">${modeText("A practical scan of what to confirm, what to treat together, and what can be monitored routinely.", "A quick view of what needs attention first and what can be followed more calmly.")}</p>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white shadow-sm">${snapshotRows}</div>
    </div>
  </section>

  <section id="start-plan" class="section-anchor mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p class="text-sm font-black uppercase tracking-wide text-indigo-600">Start sequence</p>
      <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Suggested order of operations</h2>
      <div class="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        ${step("01", "stethoscope", "Rheumatology", "Evaluate suspected active/chronic sacroiliitis and inflammatory arthritis pattern.", "See a rheumatologist first to confirm whether the pelvis-spine joint finding is inflammatory.")}
        ${step("02", "dumbbell", "Integrated PT", "Treat SI, lumbar, hip, and knee mechanics as one movement system.", "Start physical therapy that looks at the back, pelvis, hip, and knee together.")}
        ${step("03", "user-round-check", "Orthopedics", "Follow hip FAI/labrum and knee effusion/Baker cyst if symptoms persist.", "Follow up with orthopedics if hip or knee pain, swelling, locking, or instability continues.")}
        ${step("04", "test-tube-2", "Derm labs", "Complete hair-loss labs and lymph node ultrasound if still planned.", "Finish the hair-loss blood tests and any lymph-node follow-up that was ordered.")}
        ${step("05", "audio-lines", "ENT testing", "Finish hearing and Eustachian tube tests; continue allergy treatment as directed.", "Finish the hearing/ear-pressure tests and keep using allergy treatment as prescribed.")}
      </div>
    </div>
  </section>

  <section id="evidence" class="section-anchor border-t border-slate-200 bg-white py-12 text-slate-950">
    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <p class="text-sm font-black uppercase tracking-wide text-indigo-600">Report evidence</p>
      <h2 class="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Key findings from the PDFs.</h2>
      <div class="table-wrap mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <table class="w-full border-collapse text-left text-sm">
          <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th class="px-5 py-4">Area</th><th class="px-5 py-4">Report</th><th class="px-5 py-4">Key finding</th></tr></thead>
          <tbody class="divide-y divide-slate-200 text-slate-700">
            ${diagnoses.map((d) => `<tr><td class="px-5 py-4 font-bold text-slate-950">${escapeHtml(d.title)}</td><td class="px-5 py-4">${escapeHtml(d.report)}</td><td class="px-5 py-4">${escapeHtml(d.summary)}</td></tr>`).join("\n")}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</main>`
  });
}

function diagnosisPage(d) {
  const c = colorMap[d.color];
  const p = plainFor(d);
  const diagnosisTabs = diagnoses
    .map((item) => {
      const itemColor = colorMap[item.color];
      const active = item.id === d.id;
      return `<a href="${item.id}.html" class="inline-flex shrink-0 items-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${active ? `${itemColor.badge} border-transparent` : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}">
        <span class="h-2 w-2 rounded-full ${itemColor.solid}"></span>
        ${escapeHtml(shortTitle(item.title))}
      </a>`;
    })
    .join("\n");
  return layout({
    title: `${d.title} - Rasha Bakar`,
    depth: "..",
    active: "diagnosis",
    body: `<main class="relative">
  <section class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
    <a href="../index.html#diagnoses" class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50">
      <i data-lucide="arrow-left" class="h-4 w-4"></i>
      Back to all diagnoses
    </a>
    <div class="mt-8 border-b border-slate-200 pb-8">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <span class="grid h-10 w-10 place-items-center rounded-md ${c.solid} text-white"><i data-lucide="${d.icon}" class="h-5 w-5"></i></span>
        <span class="rounded-md ${c.badge} px-3 py-1 text-xs font-black">${escapeHtml(d.priority)}</span>
        <span class="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-600">Severity ${d.severity}/10</span>
        <span class="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-600">${escapeHtml(d.category)}</span>
      </div>
      <h1 class="max-w-3xl break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">${escapeHtml(d.title)}</h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${modeText(d.subtitle, p.subtitle)}</p>
    </div>
  </section>

  <section class="sticky top-[73px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="no-scrollbar mx-auto flex w-full max-w-5xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
      ${diagnosisTabs}
    </div>
  </section>

  <section class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
    <article class="grid gap-4">
      ${section("Overview", "file-text", `<p>${modeText(d.description, p.description)}</p><p class="mt-4"><span class="font-bold text-slate-950">${modeText("Possible causes:", "What could cause it:")}</span> ${modeText(joinClean(d.causes), joinClean(p.causes))}.</p><p class="mt-4"><span class="font-bold text-slate-950">${modeText("Report source:", "Where this came from:")}</span> ${escapeHtml(d.report)}.</p>`)}
      ${section("Key Findings", "clipboard-list", list(pairedList(d.findings, p.findings)))}
      ${section("Symptoms", "heart-pulse", list(pairedList(d.symptoms, p.symptoms)))}
      <section class="section-anchor rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="mb-4 flex items-center gap-3">
          <span class="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-white"><i data-lucide="trending-up" class="h-5 w-5"></i></span>
          <h2 class="text-xl font-black tracking-tight text-slate-950">Impact</h2>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <div><p class="text-xs font-black uppercase tracking-wide text-slate-400">${modeText("Short term", "Soon")}</p><p class="mt-2 text-sm leading-7 text-slate-600">${modeText(d.shortImpact, p.shortImpact)}</p></div>
          <div><p class="text-xs font-black uppercase tracking-wide text-slate-400">${modeText("Long term", "Later")}</p><p class="mt-2 text-sm leading-7 text-slate-600">${modeText(d.longImpact, p.longImpact)}</p></div>
          <div><p class="text-xs font-black uppercase tracking-wide text-slate-400">${modeText("If ignored", "If not handled")}</p><p class="mt-2 text-sm leading-7 text-slate-600">${modeText(d.untreated, p.untreated)}</p></div>
        </div>
      </section>
      ${section("Treatment Plan", "list-checks", ordered(pairedList(d.plan, p.plan)))}
      <div class="rounded-lg border border-rose-200 bg-rose-50 p-5 text-rose-950">
        <div class="flex items-start gap-3">
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-rose-500 text-white"><i data-lucide="siren" class="h-5 w-5"></i></span>
          <div>
            <h2 class="text-lg font-black">Urgent warning signs</h2>
            <p class="mt-2 text-sm leading-6">${modeText(d.urgent, p.urgent)}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</main>`
  });
}

function metric(label, value, icon) {
  return `<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-400"><i data-lucide="${icon}" class="h-4 w-4"></i>${escapeHtml(label)}</div>
    <p class="mt-3 break-words text-lg font-black leading-tight text-slate-950">${escapeHtml(value)}</p>
  </div>`;
}

function section(title, icon, content) {
  return `<section class="section-anchor rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-center gap-3">
      <span class="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-white"><i data-lucide="${icon}" class="h-5 w-5"></i></span>
      <h2 class="text-xl font-black tracking-tight text-slate-950">${escapeHtml(title)}</h2>
    </div>
    <div class="text-sm leading-7 text-slate-650 text-slate-600">${content}</div>
  </section>`;
}

function miniPanel(title, icon, text) {
  return `<div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
    <div class="flex items-center gap-3">
      <span class="grid h-9 w-9 place-items-center rounded-md bg-white text-indigo-600 shadow-sm"><i data-lucide="${icon}" class="h-5 w-5"></i></span>
      <h2 class="text-lg font-black text-slate-950">${escapeHtml(title)}</h2>
    </div>
    <p class="mt-4 text-sm leading-7 text-slate-600">${escapeHtml(text)}</p>
  </div>`;
}

function step(n, icon, title, text, plainText = text) {
  return `<div class="grid gap-3 p-4 sm:grid-cols-[72px_1fr] sm:items-start">
    <div class="flex items-center gap-3">
      <span class="text-xs font-black text-slate-400">${n}</span>
      <span class="grid h-8 w-8 place-items-center rounded-md bg-slate-50 text-indigo-600"><i data-lucide="${icon}" class="h-4 w-4"></i></span>
    </div>
    <div>
      <h3 class="text-base font-black text-slate-950">${escapeHtml(title)}</h3>
      <p class="mt-1 text-sm leading-6 text-slate-600">${modeText(text, plainText)}</p>
    </div>
  </div>`;
}

function list(items) {
  return `<ul class="space-y-2">${items.map((item) => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></span><span>${modeText(item.clinical ?? item, item.plain ?? item)}</span></li>`).join("")}</ul>`;
}

function ordered(items) {
  return `<ol class="space-y-3">${items.map((item, index) => `<li class="flex gap-3"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-600 text-xs font-black text-white">${index + 1}</span><span>${modeText(item.clinical ?? item, item.plain ?? item)}</span></li>`).join("")}</ol>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

function modeText(clinical, plain) {
  return `<span data-mode-text data-clinical="${escapeAttr(clinical)}" data-plain="${escapeAttr(plain)}">${escapeHtml(clinical)}</span>`;
}

function pairedList(clinicalItems, plainItems) {
  return clinicalItems.map((item, index) => ({ clinical: item, plain: plainItems[index] ?? item }));
}

function plainFor(d) {
  return plainCopy[d.id] ?? d;
}

function joinClean(items) {
  return items.map((item) => String(item).replace(/[.;]\s*$/, "")).join("; ");
}

function shortTitle(value) {
  return String(value)
    .replace("Suspicious Active ", "")
    .replace("Right Cam-Type FAI With Labral Irregularity", "Hip FAI")
    .replace("Right Knee Effusion, Baker Cyst, Grade 1 ACL/Meniscus Findings", "Right Knee")
    .replace("Lumbar Degenerative Discopathy", "Lumbar Spine")
    .replace("Eustachian Tube Obstruction With Seasonal Allergic Rhinitis", "ENT / Rhinitis")
    .replace("Incidental Sacral, Coccyx, and Pelvic Findings", "Incidental");
}

await mkdir("diagnoses", { recursive: true });
await writeFile("index.html", homePage(), "utf8");
for (const diagnosis of diagnoses) {
  await writeFile(`diagnoses/${diagnosis.id}.html`, diagnosisPage(diagnosis), "utf8");
}
