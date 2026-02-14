// Alert Container Function
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) return;

    const alertId = 'alert-' + Date.now();
    const alertHTML = `
        <div id="${alertId}" class="alert alert-${type}" role="alert" aria-live="polite">
            <div class="d-flex justify-content-between align-items-center">
                <span>${escapeHtml(message)}</span>
                <button type="button" class="alert-close-btn" onclick="closeAlert('${alertId}')" aria-label="Close alert">&times;</button>
            </div>
        </div>
    `;

    alertContainer.innerHTML += alertHTML;

    // Auto-remove alert after 5 seconds
    setTimeout(() => {
        closeAlert(alertId);
    }, 5000);
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

// Student Management Functions

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
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        showAlert('Please enter a valid phone number (minimum 10 digits)!', 'danger');
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
    const table = document.getElementById('studentsTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    if (!tbody) return;
    
    const newRow = tbody.insertRow();
    const studentId = String(tbody.rows.length + 1).padStart(3, '0');
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
    // TODO: Implement edit functionality
}

function deleteStudent(studentId, studentName) {
    if (confirm(`Are you sure you want to delete ${studentName}?`)) {
        showAlert(`Student "${studentName}" has been deleted successfully!`, 'success');
        // Simulated delete - in real app would remove from table
        const table = document.getElementById('studentsTable');
        const tbody = table.getElementsByTagName('tbody')[0];
        if (tbody) {
            for (let i = 0; i < tbody.rows.length; i++) {
                if (tbody.rows[i].cells[0].textContent.trim() === String(studentId).trim()) {
                    tbody.deleteRow(i);
                    break;
                }
            }
        }
    }
}

// Teacher Management Functions
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
    const table = document.getElementById('teachersTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    if (!tbody) return;
    
    const newRow = tbody.insertRow();
    const teacherId = 'T' + String(tbody.rows.length + 5).padStart(3, '0');

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
    // TODO: Implement edit functionality
}

function deleteTeacher(teacherId, teacherName) {
    if (confirm(`Are you sure you want to delete ${teacherName}?`)) {
        showAlert(`Teacher "${teacherName}" has been deleted successfully!`, 'success');
        // Simulated delete
        const table = document.getElementById('teachersTable');
        const tbody = table.getElementsByTagName('tbody')[0];
        if (tbody) {
            for (let i = 0; i < tbody.rows.length; i++) {
                if (tbody.rows[i].cells[0].textContent.trim() === String(teacherId).trim()) {
                    tbody.deleteRow(i);
                    break;
                }
            }
        }
    }
}

// Class Management Functions
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
    // TODO: Implement edit functionality
}

function deleteClass(className) {
    if (confirm(`Are you sure you want to delete ${className}?`)) {
        showAlert(`Class "${className}" has been deleted successfully!`, 'success');
    }
}

// Attendance and Results Functions
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

// Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    // initialize validation and page transitions
    initializeFormValidation();
    initPageTransitions();
});

function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                showAlert('Please fill in all required fields correctly!', 'danger');
            }
            form.classList.add('was-validated');
        }, false);
    });
}

// Page transition: intercept internal link clicks, animate out, then navigate
function initPageTransitions() {
    const duration = 300; // should match CSS --page-transition-duration

    // animate in
    document.body.classList.add('page-enter');
    requestAnimationFrame(() => {
        document.body.classList.add('page-enter-active');
        document.body.classList.remove('page-enter');
    });

    // delegate clicks on links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        // skip external links, anchors, mailto, JS links, and bootstrap toggles
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
        if (target === '_blank' || link.hasAttribute('data-bs-toggle')) return;

        // only handle internal .html page navigation
        const isInternalHtml = href.endsWith('.html') || href === '';
        if (!isInternalHtml) return;

        // perform animated navigation
        e.preventDefault();
        document.body.classList.add('page-exit');
        // force reflow then add active class
        void document.body.offsetWidth;
        document.body.classList.add('page-exit-active');

        setTimeout(() => {
            window.location.href = href;
        }, duration);
    }, {capture: true});
}
