# 🏥 Healthcare Appointment Booking Interface

A responsive web application to search for doctors, view profiles, and book appointments with real-time validation using React, TypeScript, and Tailwind CSS.

---

## 🔗 GitHub Repository

[Click here to view the repo](https://github.com/SalaNagaSivaVinay/Healthcare_Appointment_Booking)

---

## 🧰 Tools & Libraries Used

| Technology        | Purpose                                      |
|-------------------|----------------------------------------------|
| React.js          | Frontend framework                           |
| TypeScript        | Type safety & better developer experience    |
| Tailwind CSS      | Utility-first CSS framework                  |
| React Router DOM  | Routing across multiple pages                |
| useState/useEffect| State & lifecycle management                 |
| LocalStorage      | Temporary appointment storage                |

---

## 🚀 Features

- 🔍 Doctor search bar with real-time filtering
- 📄 Detailed doctor profile view
- 📆 Appointment booking form
- ✅ Form validation for all fields (name, email, date, time)
- 📱 Fully responsive layout using Tailwind CSS
- ❌ Cancel button to remove appointments
- 🕒 Countdown timer until appointment (based on booked date/time)

---

## 🧪 Challenges Faced & Solutions

| Challenge                                   | Solution                                                       |
|--------------------------------------------|----------------------------------------------------------------|
| Countdown not syncing with selected time   | Dynamically calculated time difference on form submission      |
| Cancel button style not appearing          | Fixed Tailwind class application and re-verified JSX rendering |
| Search bar disappearing after routing      | Limited search to home page only using React Router control    |
| Form validation inconsistencies            | Used React hooks to manage field-level errors                  |

---

## 🌱 Improvements With More Time

- 🔄 Integrate a real backend using **Node.js + Express**
- 💾 Store appointment data in **MongoDB** or **JSON Server**
- 🔐 Add patient authentication & login
- 📩 Enable booking confirmation emails
- 🗓️ Add calendar view of booked appointments
- ☁️ Deploy app on **Vercel** or **Netlify**

---

## 📂 Folder Structure

src/
├── components/
│ ├── BookingForm.tsx
│ ├── BookingInfo.tsx
│ ├── BookingModal.tsx
│ ├── DoctorCard.tsx
│ ├── Header.tsx
│ └── SearchBar.tsx
├── data/
│ └── doctors.json
├── pages/
│ ├── BookAppointment.tsx
│ ├── DoctorDetails.tsx
│ ├── DoctorProfile.tsx
│ └── DoctorsList.tsx
├── routes/
│ └── AppRoutes.tsx
├── App.tsx
├── App.css
├── main.tsx
└── index.css

✨ Author
👤 Sala Naga Siva Vinay


Let me know if you’d like this auto-pushed to your GitHub repo or want to add screenshots/preview section too!
