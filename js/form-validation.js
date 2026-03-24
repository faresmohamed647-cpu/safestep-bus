// ===================================
// FORM VALIDATION
// ===================================

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Password strength check
function checkPasswordStrength(password) {
    const strength = {
        score: 0,
        message: ''
    };
    
    if (password.length >= 8) strength.score++;
    if (/[a-z]/.test(password)) strength.score++;
    if (/[A-Z]/.test(password)) strength.score++;
    if (/[0-9]/.test(password)) strength.score++;
    if (/[^a-zA-Z0-9]/.test(password)) strength.score++;
    
    if (strength.score <= 2) {
        strength.message = 'Weak';
        strength.color = '#ef4444';
    } else if (strength.score <= 3) {
        strength.message = 'Medium';
        strength.color = '#f59e0b';
    } else {
        strength.message = 'Strong';
        strength.color = '#22c55e';
    }
    
    return strength;
}

// Show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group') || input.parentElement;
    
    // Remove existing error
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error class
    input.classList.add('error');
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        animation: fadeIn 0.3s ease-out;
    `;
    
    formGroup.appendChild(errorDiv);
}

// Clear error
function clearError(input) {
    input.classList.remove('error');
    const formGroup = input.closest('.form-group') || input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
}

// Validate field
function validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const required = input.hasAttribute('required');
    
    clearError(input);
    
    if (required && !value) {
        showError(input, 'This field is required');
        return false;
    }
    
    if (value) {
        if (type === 'email' && !isValidEmail(value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
        
        if (type === 'tel' && !isValidPhone(value)) {
            showError(input, 'Please enter a valid phone number');
            return false;
        }
        
        if (input.name === 'password' && value.length < 8) {
            showError(input, 'Password must be at least 8 characters');
            return false;
        }
        
        if (input.name === 'confirmPassword') {
            const password = document.querySelector('input[name="password"]');
            if (password && value !== password.value) {
                showError(input, 'Passwords do not match');
                return false;
            }
        }
    }
    
    return true;
}

// Initialize form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        // Validate on blur
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Clear error on input
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearError(this);
                }
            });
        });
        
        // Validate on submit
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Form is valid
                const formType = form.getAttribute('data-form-type');
                
                if (formType === 'login') {
                    handleLogin(form);
                } else if (formType === 'register') {
                    handleRegister(form);
                } else if (formType === 'contact') {
                    handleContact(form);
                } else {
                    // Generic form submission
                    if (window.showNotification) {
                        window.showNotification('Form submitted successfully!', 'success');
                    } else {
                        alert('Form submitted successfully!');
                    }
                    form.reset();
                }
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    });
}

// Handle login
function handleLogin(form) {
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate login
    if (window.showNotification) {
        window.showNotification('Login successful! Redirecting...', 'success');
    }
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

// Handle registration
function handleRegister(form) {
    if (window.showNotification) {
        window.showNotification('Registration successful! Please check your email to verify your account.', 'success');
    }
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Handle contact form
function handleContact(form) {
    if (window.showNotification) {
        window.showNotification('Thank you for your message! We will get back to you soon.', 'success');
    }
    
    form.reset();
}

// Password visibility toggle
function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            
            // Update icon
            const icon = this.querySelector('svg');
            if (type === 'text') {
                icon.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                `;
            } else {
                icon.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                `;
            }
        });
    });
}

// Password strength indicator
function initPasswordStrength() {
    const passwordInputs = document.querySelectorAll('input[name="password"]');
    
    passwordInputs.forEach(input => {
        const indicator = document.createElement('div');
        indicator.className = 'password-strength';
        indicator.style.cssText = `
            margin-top: 0.5rem;
            font-size: 0.875rem;
            display: none;
        `;
        
        const bar = document.createElement('div');
        bar.style.cssText = `
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 0.5rem;
        `;
        
        const fill = document.createElement('div');
        fill.style.cssText = `
            height: 100%;
            width: 0%;
            transition: all 0.3s ease;
        `;
        
        bar.appendChild(fill);
        indicator.appendChild(bar);
        
        const text = document.createElement('div');
        indicator.appendChild(text);
        
        input.parentElement.appendChild(indicator);
        
        input.addEventListener('input', function() {
            const value = this.value;
            
            if (value) {
                indicator.style.display = 'block';
                const strength = checkPasswordStrength(value);
                
                fill.style.width = (strength.score * 20) + '%';
                fill.style.background = strength.color;
                text.textContent = 'Password strength: ' + strength.message;
                text.style.color = strength.color;
            } else {
                indicator.style.display = 'none';
            }
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initFormValidation();
    initPasswordToggle();
    initPasswordStrength();
});

// Search functionality
function initSearch() {
    const searchInputs = document.querySelectorAll('[data-search]');
    
    searchInputs.forEach(input => {
        const targetSelector = input.getAttribute('data-search');
        
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll(targetSelector);
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Filter functionality
function initFilters() {
    const filterSelects = document.querySelectorAll('[data-filter]');
    
    filterSelects.forEach(select => {
        const targetSelector = select.getAttribute('data-filter');
        const filterAttribute = select.getAttribute('data-filter-by') || 'data-category';
        
        select.addEventListener('change', function() {
            const filterValue = this.value;
            const items = document.querySelectorAll(targetSelector);
            
            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute(filterAttribute) === filterValue) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Initialize search and filters
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initFilters();
});

// Table sorting
function initTableSort() {
    const tables = document.querySelectorAll('table[data-sortable]');
    
    tables.forEach(table => {
        const headers = table.querySelectorAll('th[data-sort]');
        
        headers.forEach(header => {
            header.style.cursor = 'pointer';
            header.style.userSelect = 'none';
            
            header.addEventListener('click', function() {
                const sortKey = this.getAttribute('data-sort');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));
                
                const currentOrder = this.getAttribute('data-order') || 'asc';
                const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
                
                // Remove order from all headers
                headers.forEach(h => h.removeAttribute('data-order'));
                this.setAttribute('data-order', newOrder);
                
                // Sort rows
                rows.sort((a, b) => {
                    const aValue = a.querySelector(`[data-value="${sortKey}"]`)?.textContent || '';
                    const bValue = b.querySelector(`[data-value="${sortKey}"]`)?.textContent || '';
                    
                    if (newOrder === 'asc') {
                        return aValue.localeCompare(bValue);
                    } else {
                        return bValue.localeCompare(aValue);
                    }
                });
                
                // Reorder rows
                rows.forEach(row => tbody.appendChild(row));
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initTableSort);
