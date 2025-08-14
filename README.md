# Airtable Timeline

View items in a compact lane timeline, built with React, MUI, date-fns, and Parcel. Includes tooltips and basic testing with Jest and the React Testing Library.

---

## ✅ Requirements

* Node.js 18+ (LTS recommended)
* npm 8+

> Tip: Check your version with node -v and npm -v.

---

## 🚀 Getting Started (Clone and Run)

```bash
# 1) Clone the repository
git clone [<your-repo-or-fork-URL>](https://github.com/DanielTrybe/Airtable-Engineering-test.git)

# 2) Enter the project folder
cd airtable-timeline

# 3) Install the dependencies
npm install

# 4) Run in development mode with Parcel
npm run start
```

> **Why `start2`?** The project uses Parcel in the `start2` script (`parcel src/index.html --open`). If you prefer to use `npm start`, you can modify the `start` script in `package.json` to use Parcel as well.

### 💡 Alternative: Adjust `package.json`

If you want to default to `npm start`, edit your `package.json` and change the scripts to:

```json
{
"scripts": {
"start": "parcel src/index.html --open",
"build": "parcel build src/index.html --public-url ./",
"test": "jest"
}
}
```

Then run:

```bash
npm start
```

---

## 🧪 Running the tests

The project uses **Jest** + **React Testing Library** and **JSDOM**.

# Run tests

```bash
npm test
```

---

## 🛠️ Available scripts

* `npm run start` — starts the dev server with Parcel and opens it in the browser.
* `npm run build` — production build with Parcel (generates `dist/`).
* `npm test` — runs the test suite.

---

## 📁 Structure (summary)

```
src/
index.html
index.js
routes/
index.js
pages/
Home/
components/
atoms/
ToolTipText.jsx
molecules/
RenderEvents.jsx
RenderLanes.jsx
organisms/
CustomModal.jsx (optional)
timelineItems.js
assignLanes.js
setupTests.js
```

---

## 🧩 How it works (summary)

* `assignLanes.js`: distributes items into lanes without overlapping. * `RenderLanes`: Calculates the total interval (min → max) and renders each lane.
* `RenderEvents`: Transforms each lane into blocks (gray gaps + green events), with **Tooltip** (MUI) and date formatting via **date-fns**.

---

## 📝 Quick Notes

* Dates are `YYYY-MM-DD` strings in the original dataset, but internally they can be transformed to `Date` as needed for calculations with `date-fns`.
* For responsiveness, blocks use width proportional to the number of days (e.g., `%` based on `totalDays`).

---

## 💡 Implementation Notes

### What I liked about my implementation
I am happy with the compact lane design that avoids overlapping events while keeping the timeline clear and easy to read. The combination of **React**, **MUI**, and **date-fns** allows for a flexible and responsive UI. Tooltips provide additional information without cluttering the timeline view.

### What I would change if I were to do it again
If I were to redo the project, I would add support for zooming and panning on the timeline for better navigation with large datasets. I would also implement drag-and-drop editing of events to make the timeline more interactive. Additionally, I might refactor the lane and event rendering logic to make it more reusable and modular. I didn't have time to implement additional features, such as zooming or editing information directly in the lanes

### Design decisions
I focused on simplicity and readability. I looked at popular timelines components for inspiration. This helped guide decisions on block sizing, spacing, and color coding.

### Testing approach
Given more time, I would expand the test coverage.
