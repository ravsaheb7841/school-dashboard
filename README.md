# School Management Dashboard

A complete school management system built with **HTML**, **CSS**, **Bootstrap 5**, and **Vanilla JavaScript**.

## 📋 Project Structure

```
school-dashboard/
├── index.html              # Dashboard homepage
├── students.html           # Student management page
├── teachers.html           # Teacher management page
├── classes.html            # Classes management page
├── attendance.html         # Attendance records page
├── results.html            # Exam results page
├── css/
│   └── style.css           # Custom CSS styling
└── js/
    └── script.js           # JavaScript functions
```

## 🎯 Features

### 1. **Dashboard (index.html)**
- 4 Summary cards showing:
  - Total Students (1,245)
  - Total Teachers (85)
  - Total Classes (28)
  - Total Fees Collected ($98,450)
- Quick access links to all modules
- Responsive design with grid layout

### 2. **Student Management (students.html)**
- View all students in a responsive table
- Add New Student button with form modal
- Edit student functionality
- Delete student with confirmation
- Form validation (name, email, phone, class, DOB)
- Success/Error alerts on operations
- Dummy data with 5 sample students

### 3. **Teacher Management (teachers.html)**
- View all teachers in a responsive table
- Add New Teacher button with form modal
- Edit teacher functionality
- Delete teacher with confirmation
- Form includes: Name, Email, Phone, Department, Qualification
- Success/Error alerts on operations
- Dummy data with 5 sample teachers

### 4. **Classes Management (classes.html)**
- Display classes in card grid layout
- Class information includes:
  - Class Name
  - Assigned Teacher
  - Number of Students
  - Room Number
  - Class Capacity
  - Status Badge
- Add, Edit, Delete class functionality
- Form modal with validation

### 5. **Attendance Records (attendance.html)**
- Comprehensive attendance table with:
  - Student ID, Name, Class
  - Attendance Date
  - Attendance Status (Present, Absent, Late)
  - Remarks
- Filter by class and month
- Attendance statistics cards:
  - Total Present
  - Total Absent
  - Late Arrivals
- Dummy data with various attendance statuses

### 6. **Exam Results (results.html)**
- Exam results table showing:
  - Student ID, Name, Class
  - Subject
  - Exam Type
  - Marks Obtained / Total Marks
  - Percentage
  - Grade
- Filter by class and exam type
- Grade distribution statistics:
  - Grade A+ count
  - Grade A count
  - Grade B count
  - Grade C or Below count
- Color-coded grades (A+, A, B+, B, C)

### 7. **Navigation Bar**
- Responsive Bootstrap navbar
- School Logo/Name
- Links: Dashboard, Students, Teachers, Classes
- Logout button
- Mobile hamburger menu

## 🎨 Design Features

### Colors & Styling
- Primary Color: #0d6efd (Blue)
- Success Color: #198754 (Green)
- Danger Color: #dc3545 (Red)
- Warning Color: #ffc107 (Yellow)
- Clean card-based layout
- Smooth hover effects and transitions

### Bootstrap 5 Components Used
- **Buttons**: btn, btn-primary, btn-success, btn-danger, btn-warning, btn-secondary, btn-sm
- **Alerts**: alert, alert-success, alert-danger, alert-warning, alert-info
- **Badges**: badge, bg-success, bg-danger, bg-warning, bg-info
- **Tables**: table, table-striped, table-hover, table-responsive
- **Cards**: card, card-body, card-title
- **Forms**: form-control, form-select, form-label, form-check
- **Modals**: modal, modal-dialog, modal-content, modal-header, modal-body, modal-footer
- **Grid System**: container-fluid, row, col-md-3, col-md-4, col-md-6, col-12

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet (768px) and mobile (576px)
- Grid layout adapts to screen size
- Hamburger menu for mobile navigation
- Responsive tables with horizontal scroll on small screens

## 🚀 JavaScript Functions

### Alert System
- `showAlert(message, type)` - Display alerts (success, danger, warning, info)
- `closeAlert(alertId)` - Close specific alert
- Auto-dismiss alerts after 5 seconds

### Student Management
- `addStudent()` - Add new student with validation
- `editStudent(studentId)` - Edit student record
- `deleteStudent(studentId, studentName)` - Delete student with confirmation

### Teacher Management
- `addTeacher()` - Add new teacher with validation
- `editTeacher(teacherId)` - Edit teacher record
- `deleteTeacher(teacherId, teacherName)` - Delete teacher with confirmation

### Class Management
- `addClass()` - Add new class with validation
- `editClass(className)` - Edit class record
- `deleteClass(className)` - Delete class with confirmation

### Other Functions
- `filterAttendance()` - Filter attendance records
- `filterResults()` - Filter exam results
- `logout()` - Logout with confirmation
- `validateEmail(email)` - Email validation
- `validatePhone(phone)` - Phone number validation
- `formatDate(date)` - Format date helper

## ✨ Data Validation

### Student Form
- ✅ Full Name (required)
- ✅ Email (required, email format validation)
- ✅ Phone Number (required, 10+ digits)
- ✅ Class (required, dropdown selection)
- ✅ Date of Birth (required)

### Teacher Form
- ✅ Full Name (required)
- ✅ Email (required, email format validation)
- ✅ Phone Number (required)
- ✅ Department (required, dropdown selection)
- ✅ Qualification (required)

### Class Form
- ✅ Class Name (required)
- ✅ Assign Teacher (required)
- ✅ Room Number (required)
- ✅ Class Capacity (required, numeric validation)

## 🎓 Dummy Data

### Students (5 sample records)
- Ahmed Hassan (Grade 10A)
- Fatima Khan (Grade 9B)
- Ali Mohammed (Grade 11C)
- Zainab Ahmed (Grade 10A)
- Omar Ibrahim (Grade 12A)

### Teachers (5 sample records)
- Dr. Mahmoud Ahmed (Mathematics)
- Aisha Khan (English)
- Hassan Ali (Science)
- Noor Ibrahim (History)
- Dr. Ahmed Saleh (Biology)

### Classes (6 classes)
- Grade 9A, 9B, 10A, 10B, 11A, 11C, and 12A

### Attendance Records (10+ dummy records)
- Various statuses: Present, Absent, Late
- Different dates in February 2026

### Exam Results (10 dummy records)
- Multiple subjects per student
- Grades: A+, A, B+, B, C
- Different exam types: Midterm, Final, Practical

## 📱 How to Use

### Opening the Project
1. Open `index.html` in a web browser
2. Click on navigation links to navigate between pages
3. Each page loads independently

### Adding Records
1. Click "Add New [Item]" button
2. Fill in the form fields
3. Click "Add [Item]" button
4. Success alert will appear
5. New record will be added to the table/list

### Editing Records
- Click "Edit" button on any record
- Currently shows a notification (ready for full implementation)

### Deleting Records
- Click "Delete" button on any record
- Confirm deletion in popup
- Record will be removed from the table
- Success alert will appear

### Filtering
- Use filter dropdowns and buttons
- Applies filter criteria to records

### Logout
- Click "Logout" in navbar
- Confirm logout
- User will be redirected to dashboard

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Bootstrap 5** - Responsive framework
- **JavaScript (Vanilla)** - No dependencies
- **Bootstrap CDN** - For CSS and JS libraries

## 💄 Styling Features

### Custom CSS
- 2800+ lines of custom CSS
- Animations and transitions
- Custom scrollbar
- Responsive breakpoints
- Card hover effects
- Button animations
- Modal styling
- Alert animations

### Bootstrap Integration
- Full Bootstrap 5 components
- Bootstrap grid system (12-column)
- Bootstrap utility classes
- Bootstrap modals
- Bootstrap forms
- Bootstrap alerts
- Bootstrap badges

## 📊 Performance

- Single-file CSS (no multiple stylesheets)
- Optimized JavaScript (all in one file)
- CDN-hosted Bootstrap (faster loading)
- Minimal animations (smooth and fast)
- No external dependencies except Bootstrap
- Efficient DOM manipulation

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All data is stored locally in the browser (client-side)
- Data will be reset on page refresh
- For production, integrate with a backend API
- Add proper authentication and authorization
- Database integration needed for persistent storage
- Consider adding sorting and search functionality
- Add export to PDF/CSV features

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Database integration
- [ ] User authentication
- [ ] Role-based access control
- [ ] Data persistence
- [ ] Advanced filtering and search
- [ ] Excel/PDF export
- [ ] Charts and analytics
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Mobile app version

## 📄 License

This project is free to use and modify for educational purposes.

## 👨‍💻 Author

Created as a complete school management dashboard template.

---

**Version:** 1.0  
**Last Updated:** February 13, 2026

For questions or improvements, feel free to modify the code!
