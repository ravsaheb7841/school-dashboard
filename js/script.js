// ==========================================
// School Management Dashboard - JavaScript
// ==========================================

// Alert Container Function
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) return;

    const alertId = 'alert-' + Date.now();
    const alertHTML = `
        <div id="${alertId}" class="alert alert-${type}" role="alert">
            <div class="d-flex justify-content-between align-items-center">
                <span>${message}</span>
                <span class="alert-close-btn" onclick="closeAlert('${alertId}')">&times;</span>
            </div>
        </div>
    `;

    alertContainer.innerHTML += alertHTML;

    // Auto-remove alert after 5 seconds
    setTimeout(() => {
        closeAlert(alertId);
    }, 5000);
}

function closeAlert(alertId) {
    const alert = document.getElementById(alertId);
    if (alert) {
        alert.classList.add('fade-out');
        setTimeout(() => {
            alert.remove();
        }, 500);
    }
}

// ==========================================
// Student Management Functions
// ==========================================

function addStudent() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;
    const classVal = document.getElementById('studentClass').value;
    const dob = document.getElementById('studentDOB').value;

    // Validate inputs
    if (!name || !email || !phone || !classVal || !dob) {
        showAlert('Please fill in all fields!', 'danger');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address!', 'danger');
        return;
    }

    // Validate phone format
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 10) {
        showAlert('Please enter a valid phone number!', 'danger');
        return;
    }

    // Success message
    showAlert(`Student "${name}" has been added successfully!`, 'success');

    // Clear form
    document.getElementById('addStudentForm').reset();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addStudentModal'));
    modal.hide();

    // Add to table (simulated)
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const studentId = '00' + (table.rows.length);
    const formattedDob = new Date(dob).toISOString().split('T')[0];

    newRow.innerHTML = `
        <td>${studentId}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${classVal}</td>
        <td>${formattedDob}</td>
        <td>${new Date().toISOString().split('T')[0]}</td>
        <td><span class="badge bg-success">Active</span></td>
        <td>
            <button class="btn btn-sm btn-warning" onclick="editStudent('${studentId}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteStudent('${studentId}', '${name}')">Delete</button>
        </td>
    `;
}

function editStudent(studentId) {
    showAlert(`Edit functionality for Student ${studentId} - Coming Soon!`, 'info');
}

function deleteStudent(studentId, studentName) {
    if (confirm(`Are you sure you want to delete ${studentName}?`)) {
        showAlert(`Student "${studentName}" has been deleted successfully!`, 'success');
        // Simulated delete - in real app would remove from table
        const table = document.getElementById('studentsTable');
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[0].textContent === studentId) {
                table.deleteRow(i);
                break;
            }
        }
    }
}

// ==========================================
// Teacher Management Functions
// ==========================================

function addTeacher() {
    const name = document.getElementById('teacherName').value;
    const email = document.getElementById('teacherEmail').value;
    const phone = document.getElementById('teacherPhone').value;
    const dept = document.getElementById('teacherDept').value;
    const qual = document.getElementById('teacherQual').value;

    // Validate inputs
    if (!name || !email || !phone || !dept || !qual) {
        showAlert('Please fill in all fields!', 'danger');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address!', 'danger');
        return;
    }

    // Success message
    showAlert(`Teacher "${name}" has been added successfully!`, 'success');

    // Clear form
    document.getElementById('addTeacherForm').reset();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addTeacherModal'));
    modal.hide();

    // Add to table (simulated)
    const table = document.getElementById('teachersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const teacherId = 'T' + (table.rows.length + 5);

    newRow.innerHTML = `
        <td>${teacherId}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${dept}</td>
        <td>${qual}</td>
        <td>${new Date().toISOString().split('T')[0]}</td>
        <td><span class="badge bg-success">Active</span></td>
        <td>
            <button class="btn btn-sm btn-warning" onclick="editTeacher('${teacherId}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteTeacher('${teacherId}', '${name}')">Delete</button>
        </td>
    `;
}

function editTeacher(teacherId) {
    showAlert(`Edit functionality for Teacher ${teacherId} - Coming Soon!`, 'info');
}

function deleteTeacher(teacherId, teacherName) {
    if (confirm(`Are you sure you want to delete ${teacherName}?`)) {
        showAlert(`Teacher "${teacherName}" has been deleted successfully!`, 'success');
        // Simulated delete
        const table = document.getElementById('teachersTable');
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[0].textContent === teacherId) {
                table.deleteRow(i);
                break;
            }
        }
    }
}

// ==========================================
// Class Management Functions
// ==========================================

function addClass() {
    const className = document.getElementById('className').value;
    const teacher = document.getElementById('classTeacher').value;
    const room = document.getElementById('classRoom').value;
    const capacity = document.getElementById('classCapacity').value;

    // Validate inputs
    if (!className || !teacher || !room || !capacity) {
        showAlert('Please fill in all fields!', 'danger');
        return;
    }

    // Validate capacity
    if (isNaN(capacity) || capacity <= 0) {
        showAlert('Please enter a valid capacity!', 'danger');
        return;
    }

    // Success message
    showAlert(`Class "${className}" has been added successfully!`, 'success');

    // Clear form
    document.getElementById('addClassForm').reset();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addClassModal'));
    modal.hide();
}

function editClass(className) {
    showAlert(`Edit functionality for ${className} - Coming Soon!`, 'info');
}

function deleteClass(className) {
    if (confirm(`Are you sure you want to delete ${className}?`)) {
        showAlert(`Class "${className}" has been deleted successfully!`, 'success');
    }
}

// ==========================================
// Attendance and Results Functions
// ==========================================

function filterAttendance() {
    const filterClass = document.getElementById('filterClass').value;
    const filterMonth = document.getElementById('filterMonth').value;

    showAlert(`Filtering attendance records for ${filterClass} in ${filterMonth || 'all months'}`, 'info');
}

function filterResults() {
    const filterClass = document.getElementById('filterExamClass').value;
    const filterExam = document.getElementById('filterExam').value;

    showAlert(`Filtering results for ${filterClass} - ${filterExam}`, 'info');
}

// ==========================================
// Logout Function
// ==========================================

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        showAlert('You have been logged out successfully!', 'success');
        setTimeout(() => {
            // Redirect to login page (if exists) or home
            window.location.href = 'index.html';
        }, 1500);
    }
}

// ==========================================
// Page Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded successfully!');
    
    // Add any additional initialization code here
    // For example, load data from API, set up event listeners, etc.
});

// ==========================================
// Form Validation Helper
// ==========================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function validateForm(formData) {
    for (let field in formData) {
        if (!formData[field]) {
            return false;
        }
    }
    return true;
}

// ==========================================
// Utility Functions
// ==========================================

function formatDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

function getCurrentDate() {
    return formatDate(new Date());
}

function getRandomId() {
    return Math.floor(Math.random() * 10000);
}

// Prevent form submission on Enter key when not intended
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
        if (event.target.classList.contains('form-control') || 
            event.target.classList.contains('form-select')) {
            // Allow form submission or prevent if needed
        }
    }
});
