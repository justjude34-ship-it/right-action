/* Right Action — original companion to Juno Jordan's personal-year method.
   Not a reprint of Your Right Action Number. Not affiliated with DeVorss. */
const KEY = "right-action-v1";
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const $ = (id) => document.getElementById(id);
const reduce = (n) => {
  n = Math.abs(n | 0);
  while (n > 9) n = String(n).split("").reduce((a, d) => a + Number(d), 0);
  return n || 9;
};
const py = (m, d, y) => reduce(reduce(m) + reduce(d) + reduce(y));
const pm = (yearNum, month) => reduce(yearNum + month);
const pd = (monthNum, day) => reduce(monthNum + day);

const AREA = {
  1: { name: "Begin", work: "Name the work and take the first step yourself.", money: "Open a new pot. Do not fund last cycle's leaks.", people: "Lead kindly. Do not wait for a committee.", home: "Clear a desk and a doorway for the new chapter.", body: "Start one small daily practice and keep it.", travel: "Short scouting trips beat grand tours.", dont: "Do not drag unfinished 9-year business into the seed bed." },
  2: { name: "Tend", work: "Partner, wait, refine. Results come through others.", money: "Shared accounts and slow agreements. No sudden bets.", people: "Listen twice. Diplomacy is the work.", home: "Soften the room. Details matter more than announcements.", body: "Rest the nervous system. Go gently.", travel: "Visit, don't relocate unless the second yes is clear.", dont: "Do not force a launch or swallow your own need." },
  3: { name: "Show", work: "Speak, write, show the work. Visibility is useful.", money: "Income through voice, craft, or company — not grinding silence.", people: "Gather people. Keep it light enough to move.", home: "Colour, guests, a table that talks.", body: "Joy is medicine. Play is not a waste.", travel: "Social trips, short hops, places that feed speech.", dont: "Do not scatter across ten stages and finish none." },
  4: { name: "Build", work: "Systems, timetables, the unglamorous job that compounds.", money: "Budgets, repairs, foundations. Count twice.", people: "Reliable people over exciting people.", home: "Fix the house. Order the papers. The body of the life.", body: "Bones, sleep, teeth, the desk chair. Maintenance.", travel: "Work trips. Moving house only with a plan.", dont: "Do not skip foundations or martyr the body to the plan." },
  5: { name: "Loosen", work: "Try the new version. Update what is stale.", money: "Flexible income, small experiments. Keep one root.", people: "New rooms, honest restlessness, fewer cages.", home: "Open windows. Travel light through the rooms.", body: "Movement, variety, fresh air.", travel: "Yes — this is the travel year. Go and come back wiser.", dont: "Do not smash the base for a thrill." },
  6: { name: "Repair", work: "Duty, service, the work that holds a household or a team.", money: "Family money, fair shares, paying what is owed.", people: "Home bonds, care, the people who belong to you.", home: "This is the home year. Beautify, host, mend.", body: "Care of others includes care of you.", travel: "Family visits more than far adventures.", dont: "Do not rescue everyone and abandon yourself." },
  7: { name: "Study", work: "Research, craft, the quiet expertise. Public launches can wait.", money: "Study the books. Do not force a harvest.", people: "Fewer, truer. Solitude with a purpose.", home: "A room of one's own. Less noise.", body: "Rest, nature, the inner weather.", travel: "Retreats, study trips, not spectacle.", dont: "Do not isolate into avoidance, or perform results you have not lived." },
  8: { name: "Measure", work: "Negotiate, organise, take the responsible risk.", money: "This is the money-and-power year. Face the figures.", people: "Peers, contracts, respect. No corner-cutting.", home: "Assets, titles, the solid things.", body: "Strength with limits. Ambition needs sleep.", travel: "Business, property, purposeful miles.", dont: "Do not win ugly. Power without integrity collapses." },
  9: { name: "Clear", work: "Finish, hand over, serve without starting a new empire.", money: "Give, settle, close accounts that are done.", people: "Forgive. Release. Love without possession.", home: "Clear the shelf. Leave space for next January's 1.", body: "Let the old story out of the muscles.", travel: "Farewell trips, wide views, not a new nest yet.", dont: "Do not plant a nine-year thing in a completion year." }
};

const YEAR = {
  1: { title: "A new nine-year chapter", gist: "The field has been cleared. What you plant now is what the next eight years will have to live with. Courage, a named direction, and a first step that cannot be undone by a mood.", problem: "If you are stuck, the right action is usually a beginning — smaller than you think, taken by you, today." },
  2: { title: "The seed is underground", gist: "Progress is quiet and relational. Tact, patience, and the second yes. Last year asked you to lead. This year asks you to wait without disappearing.", problem: "If you are stuck, the right action is usually to stop pushing and tend the relationship or the detail you have been skipping." },
  3: { title: "Colour returns", gist: "Voice, craft, and company want air. Put the work where people can see it. Joy is not a side dish this year; it is part of the method.", problem: "If you are stuck, the right action is usually to say the true sentence out loud, then take one visible step." },
  4: { title: "Timber and a timetable", gist: "Inspiration wants a body. Work the plan. Build the system. Count the money. Repair what last year's talk left unfinished.", problem: "If you are stuck, the right action is usually one practical task done to the end — a form, a shelf, a phone call, a budget line." },
  5: { title: "Windows open", gist: "Change is the teacher. Variety, travel, and honest restlessness. Keep one root in the ground so the freedom has somewhere to return.", problem: "If you are stuck, the right action is usually to loosen one stale rule and try a smaller new version." },
  6: { title: "The duty year", gist: "Home, people, and the obligations that make a life hold. Repair bonds. Make the room kinder. Service works; self-erasure does not.", problem: "If you are stuck, the right action is usually to do the fair thing for the household — including yourself as a member of it." },
  7: { title: "A sabbatical of mind", gist: "Much depends on a right state of mind. Study, rest, and a private compass. This is a poor year for loud launches and a good year for truth.", problem: "If you are stuck, the right action is usually to get quiet long enough to hear the answer you already have." },
  8: { title: "Ambition with a ledger", gist: "Material result is in season. Organise, negotiate, measure. Power used cleanly compounds. Power used carelessly costs the next cycle.", problem: "If you are stuck, the right action is usually to face the real numbers and make one adult decision about money or authority." },
  9: { title: "Clear the field", gist: "The cycle wants an ending so the next 1 can be clean. Finish, forgive, give away, serve. Do not start the thing that belongs to next January.", problem: "If you are stuck, the right action is usually to complete or release — not to invent a new beginning to avoid the ending." }
};

const MONTH_DO = {
  1: "Start one thing that belongs to this year.",
  2: "Pair up. Wait for the second yes.",
  3: "Speak, write, show, invite.",
  4: "Build the skeleton — hours, money, list.",
  5: "Change a route, a room, or a rule.",
  6: "Tend home and the people in it.",
  7: "Step back. Study. Listen inward.",
  8: "Transact. Price it. Make it real in the world.",
  9: "Finish or release. Leave space."
};

function loadPeople() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; }
}
function savePeople(list) { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 12))); }

function parseDob() {
  const v = $("dob").value;
  if (!v) return null;
  const [y, m, d] = v.split("-").map(Number);
  if (!m || !d) return null;
  return { y, m, d };
}
function lookYear() {
  const n = Number($("yearPick").value);
  return n >= 1900 && n <= 2100 ? n : new Date().getFullYear();
}

function monthGuide(yearNum, calMonth) {
  const monthNum = pm(yearNum, calMonth);
  const y = AREA[yearNum];
  const m = AREA[monthNum];
  return {
    calMonth,
    monthNum,
    title: MONTHS[calMonth - 1] + " · Personal Month " + monthNum + " · " + m.name,
    do: "In a " + y.name + " year, " + MONTH_DO[monthNum],
    work: m.work,
    people: m.people,
    home: m.home,
    dont: m.dont
  };
}

function renderToday() {
  const dob = parseDob();
  const box = $("todayOut");
  if (!dob) { box.innerHTML = "<p class=\"hint\">Add a birth date to read the year.</p>"; return; }
  const year = lookYear();
  const now = new Date();
  const yearNum = py(dob.m, dob.d, year);
  const monthNum = pm(yearNum, now.getMonth() + 1);
  const dayNum = pd(monthNum, now.getDate());
  const y = YEAR[yearNum];
  const a = AREA[yearNum];
  const da = AREA[dayNum];
  const who = ($("who").value || "You").trim();
  $("todayTitle").textContent = who + " · " + year;
  box.innerHTML =
    '<div class="strip">' +
      '<div class="num"><b>' + yearNum + '</b><span>Year · ' + a.name + '</span></div>' +
      '<div class="num"><b>' + monthNum + '</b><span>Month · ' + AREA[monthNum].name + '</span></div>' +
      '<div class="num"><b>' + dayNum + '</b><span>Day · ' + da.name + '</span></div>' +
    '</div>' +
    '<p class="today-line">Right action today: ' + MONTH_DO[dayNum] + '</p>' +
    '<div class="reading"><p><strong>' + y.title + '</strong> ' + y.gist + '</p>' +
    '<p>' + y.problem + '</p>' +
    '<p><em>Work.</em> ' + a.work + ' <em>People.</em> ' + a.people + ' <em>Home.</em> ' + a.home + '</p>' +
    '<p><em>Do not.</em> ' + a.dont + '</p></div>';
  renderYear(yearNum, year, who);
  renderMonths(yearNum, year);
  renderCycle(yearNum, year, dob);
}

function renderYear(yearNum, year, who) {
  const y = YEAR[yearNum];
  const a = AREA[yearNum];
  $("yearHead").textContent = (who || "This") + " · Personal Year " + yearNum + " · " + a.name + " · " + year;
  $("yearOut").innerHTML =
    '<p><strong>' + y.title + '</strong></p><p>' + y.gist + '</p>' +
    '<p>' + y.problem + '</p>' +
    '<p><strong>Work &amp; money.</strong> ' + a.work + ' ' + a.money + '</p>' +
    '<p><strong>Relationships.</strong> ' + a.people + '</p>' +
    '<p><strong>Home &amp; body.</strong> ' + a.home + ' ' + a.body + '</p>' +
    '<p><strong>Travel &amp; change.</strong> ' + a.travel + '</p>' +
    '<p><strong>What not to start.</strong> ' + a.dont + '</p>';
}

function renderMonths(yearNum, year) {
  const nowM = new Date().getMonth() + 1;
  const usingNow = lookYear() === new Date().getFullYear();
  $("monthOut").innerHTML = "";
  for (let m = 1; m <= 12; m++) {
    const g = monthGuide(yearNum, m);
    const art = document.createElement("article");
    art.className = "scard" + (usingNow && m === nowM ? " on" : "");
    art.innerHTML = '<span class="when">' + g.title + '</span><p>' + g.do + '</p><p><em>Work.</em> ' + g.work + ' <em>People.</em> ' + g.people + '</p><p><em>Home.</em> ' + g.home + '</p><p><em>Do not.</em> ' + g.dont + '</p>';
    $("monthOut").appendChild(art);
  }
}

function renderCycle(yearNum, year, dob) {
  $("cycleStrip").innerHTML = "";
  for (let n = 1; n <= 9; n++) {
    const offset = (n - yearNum + 9) % 9;
    const cal = year + (offset === 0 ? 0 : (n > yearNum ? n - yearNum : n - yearNum));
    const btn = document.createElement("button");
    btn.className = "cy" + (n === yearNum ? " on" : "");
    btn.type = "button";
    btn.innerHTML = "<b>" + n + "</b><span>" + AREA[n].name + "</span>";
    btn.onclick = () => {
      $("yearPick").value = String(year + (n - yearNum));
      renderToday();
      show("year");
    };
    $("cycleStrip").appendChild(btn);
  }
  const past = YEAR[yearNum === 1 ? 9 : yearNum - 1];
  const next = YEAR[yearNum === 9 ? 1 : yearNum + 1];
  $("cycleOut").innerHTML =
    '<p><strong>Last chapter.</strong> ' + past.title + ' — ' + past.gist + '</p>' +
    '<p><strong>This chapter.</strong> ' + YEAR[yearNum].title + ' — ' + YEAR[yearNum].gist + '</p>' +
    '<p><strong>Next chapter.</strong> ' + next.title + ' — ' + next.gist + '</p>' +
    '<p class="hint">The Personal Year number steps forward by one each calendar year. After 9 comes 1 again, a new octave.</p>';
}

function show(id) {
  ["today", "year", "months", "cycle", "about"].forEach((v) => {
    const el = $("view-" + v);
    if (el) el.hidden = v !== id;
  });
  document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("on", b.dataset.view === id));
  window.scrollTo(0, 0);
}

function renderProfiles() {
  const box = $("profiles");
  const list = loadPeople();
  box.innerHTML = "";
  list.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = p.who || p.dob;
    b.onclick = () => {
      $("who").value = p.who || "";
      $("dob").value = p.dob || "";
      renderToday();
    };
    box.appendChild(b);
  });
}

function savePerson() {
  const dob = $("dob").value;
  if (!dob) return;
  const list = loadPeople().filter((p) => p.dob !== dob);
  list.unshift({ who: ($("who").value || "").trim(), dob });
  savePeople(list);
  renderProfiles();
}

function init() {
  const now = new Date();
  if ($("yearPick") && !$("yearPick").value) $("yearPick").value = String(now.getFullYear());
  document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => show(b.dataset.view)));
  $("btnGo").addEventListener("click", renderToday);
  $("btnSave").addEventListener("click", savePerson);
  $["who", "dob", "yearPick"].forEach((id) => $(id).addEventListener("change", renderToday));
  renderProfiles();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
}
init();
