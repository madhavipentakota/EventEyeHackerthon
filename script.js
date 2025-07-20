document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Add experience
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceContainer = document.getElementById('experience-container');
    
    addExperienceBtn.addEventListener('click', () => {
        const newExperience = document.createElement('div');
        newExperience.className = 'experience-item';
        newExperience.innerHTML = `
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="exp-title" placeholder="Senior Developer">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="exp-company" placeholder="Tech Corp Inc.">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="month" class="exp-start">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="month" class="exp-end">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="exp-description" rows="3" placeholder="Developed and maintained web applications..."></textarea>
            </div>
            <button class="remove-btn">Remove</button>
        `;
        experienceContainer.appendChild(newExperience);
        
        // Add event listener to the new remove button
        newExperience.querySelector('.remove-btn').addEventListener('click', () => {
            experienceContainer.removeChild(newExperience);
            updateResumePreview();
        });
        
        // Add input listeners for real-time update
        addInputListeners(newExperience);
        updateResumePreview();
    });
    
    // Add education
    const addEducationBtn = document.getElementById('add-education');
    const educationContainer = document.getElementById('education-container');
    
    addEducationBtn.addEventListener('click', () => {
        const newEducation = document.createElement('div');
        newEducation.className = 'education-item';
        newEducation.innerHTML = `
            <div class="form-group">
                <label>Degree</label>
                <input type="text" class="edu-degree" placeholder="Bachelor of Science">
            </div>
            <div class="form-group">
                <label>Institution</label>
                <input type="text" class="edu-institution" placeholder="University of Technology">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="month" class="edu-start">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="month" class="edu-end">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="edu-description" rows="2" placeholder="Major in Computer Science..."></textarea>
            </div>
            <button class="remove-btn">Remove</button>
        `;
        educationContainer.appendChild(newEducation);
        
        // Add event listener to the new remove button
        newEducation.querySelector('.remove-btn').addEventListener('click', () => {
            educationContainer.removeChild(newEducation);
            updateResumePreview();
        });
        
        // Add input listeners for real-time update
        addInputListeners(newEducation);
        updateResumePreview();
    });
    
    // Add skill
    const addSkillBtn = document.getElementById('add-skill');
    const skillsContainer = document.getElementById('skills-container');
    
    addSkillBtn.addEventListener('click', () => {
        const newSkill = document.createElement('div');
        newSkill.className = 'skill-item';
        newSkill.innerHTML = `
            <div class="form-group">
                <label>Skill Name</label>
                <input type="text" class="skill-name" placeholder="JavaScript">
            </div>
            <div class="form-group">
                <label>Proficiency</label>
                <select class="skill-level">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
            <button class="remove-btn">Remove</button>
        `;
        skillsContainer.appendChild(newSkill);
        
        // Add event listener to the new remove button
        newSkill.querySelector('.remove-btn').addEventListener('click', () => {
            skillsContainer.removeChild(newSkill);
            updateResumePreview();
        });
        
        // Add input listeners for real-time update
        addInputListeners(newSkill);
        updateResumePreview();
    });
    
    // Add project
    const addProjectBtn = document.getElementById('add-project');
    const projectsContainer = document.getElementById('projects-container');
    
    addProjectBtn.addEventListener('click', () => {
        const newProject = document.createElement('div');
        newProject.className = 'project-item';
        newProject.innerHTML = `
            <div class="form-group">
                <label>Project Name</label>
                <input type="text" class="project-name" placeholder="E-commerce Website">
            </div>
            <div class="form-group">
                <label>Technologies Used</label>
                <input type="text" class="project-tech" placeholder="React, Node.js, MongoDB">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="project-description" rows="3" placeholder="Developed a full-stack e-commerce platform..."></textarea>
            </div>
            <div class="form-group">
                <label>Project Link</label>
                <input type="url" class="project-link" placeholder="https://example.com">
            </div>
            <button class="remove-btn">Remove</button>
        `;
        projectsContainer.appendChild(newProject);
        
        // Add event listener to the new remove button
        newProject.querySelector('.remove-btn').addEventListener('click', () => {
            projectsContainer.removeChild(newProject);
            updateResumePreview();
        });
        
        // Add input listeners for real-time update
        addInputListeners(newProject);
        updateResumePreview();
    });
    
    // Add input listeners to all existing inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', updateResumePreview);
    });
    
    // Add input listeners to a specific element
    function addInputListeners(element) {
        element.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', updateResumePreview);
        });
    }
    
    // Update resume preview
    function updateResumePreview() {
        const template = document.getElementById('template-select').value;
        const resumePreview = document.getElementById('resume-preview');
        
        // Get all form data
        const resumeData = {
            personal: {
                name: document.getElementById('fullName').value,
                title: document.getElementById('jobTitle').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                linkedin: document.getElementById('linkedin').value,
                github: document.getElementById('github').value,
                summary: document.getElementById('summary').value,
                photo: document.getElementById('photo').files[0]
            },
            experiences: [],
            educations: [],
            skills: [],
            projects: []
        };
        
        // Get experiences
        document.querySelectorAll('.experience-item').forEach(exp => {
            resumeData.experiences.push({
                title: exp.querySelector('.exp-title').value,
                company: exp.querySelector('.exp-company').value,
                start: exp.querySelector('.exp-start').value,
                end: exp.querySelector('.exp-end').value,
                description: exp.querySelector('.exp-description').value
            });
        });
        
        // Get educations
        document.querySelectorAll('.education-item').forEach(edu => {
            resumeData.educations.push({
                degree: edu.querySelector('.edu-degree').value,
                institution: edu.querySelector('.edu-institution').value,
                start: edu.querySelector('.edu-start').value,
                end: edu.querySelector('.edu-end').value,
                description: edu.querySelector('.edu-description').value
            });
        });
        
        // Get skills
        document.querySelectorAll('.skill-item').forEach(skill => {
            resumeData.skills.push({
                name: skill.querySelector('.skill-name').value,
                level: skill.querySelector('.skill-level').value
            });
        });
        
        // Get projects
        document.querySelectorAll('.project-item').forEach(project => {
            resumeData.projects.push({
                name: project.querySelector('.project-name').value,
                tech: project.querySelector('.project-tech').value,
                description: project.querySelector('.project-description').value,
                link: project.querySelector('.project-link').value
            });
        });
        
        // Render the resume based on the selected template
        let resumeHTML = '';
        
        switch(template) {
            case 'modern':
                resumeHTML = renderModernTemplate(resumeData);
                break;
            case 'professional':
                resumeHTML = renderProfessionalTemplate(resumeData);
                break;
            case 'creative':
                resumeHTML = renderCreativeTemplate(resumeData);
                break;
            case 'minimal':
                resumeHTML = renderMinimalTemplate(resumeData);
                break;
            default:
                resumeHTML = renderModernTemplate(resumeData);
        }
        
        resumePreview.innerHTML = resumeHTML;
    }
    
    // Template rendering functions
    function renderModernTemplate(data) {
        let html = `
            <div class="resume-template modern-template">
                <div class="resume-header">
                    <div>
                        <h1 class="resume-name">${data.personal.name || 'Your Name'}</h1>
                        <p class="resume-title">${data.personal.title || 'Your Professional Title'}</p>
                    </div>
                    <div class="resume-contact">
                        <p>${data.personal.email || 'email@example.com'}</p>
                        <p>${data.personal.phone || '+1 234 567 890'}</p>
                        <p>${data.personal.address || 'City, Country'}</p>
                        ${data.personal.linkedin ? `<p><a href="${data.personal.linkedin}" target="_blank">LinkedIn</a></p>` : ''}
                        ${data.personal.github ? `<p><a href="${data.personal.github}" target="_blank">GitHub</a></p>` : ''}
                    </div>
                </div>
                
                ${data.personal.summary ? `
                <div class="resume-section">
                    <h2 class="section-title">SUMMARY</h2>
                    <p>${data.personal.summary}</p>
                </div>
                ` : ''}
                
                ${data.experiences.length > 0 ? `
                <div class="resume-section">
                    <h2 class="section-title">EXPERIENCE</h2>
                    ${data.experiences.map(exp => `
                        <div class="resume-item">
                            <div class="item-header">
                                <div>
                                    <h3 class="item-title">${exp.title || 'Job Title'}</h3>
                                    <p class="item-subtitle">${exp.company || 'Company Name'}</p>
                                </div>
                                <p class="item-date">${formatDate(exp.start)} - ${formatDate(exp.end) || 'Present'}</p>
                            </div>
                            <p class="item-description">${exp.description || 'Job responsibilities and achievements.'}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${data.educations.length > 0 ? `
                <div class="resume-section">
                    <h2 class="section-title">EDUCATION</h2>
                    ${data.educations.map(edu => `
                        <div class="resume-item">
                            <div class="item-header">
                                <div>
                                    <h3 class="item-title">${edu.degree || 'Degree'}</h3>
                                    <p class="item-subtitle">${edu.institution || 'Institution'}</p>
                                </div>
                                <p class="item-date">${formatDate(edu.start)} - ${formatDate(edu.end) || 'Present'}</p>
                            </div>
                            ${edu.description ? `<p class="item-description">${edu.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${data.skills.length > 0 ? `
                <div class="resume-section">
                    <h2 class="section-title">SKILLS</h2>
                    <div class="skills-container">
                        ${data.skills.map(skill => `
                            <span class="skill-tag">${skill.name || 'Skill'} ${skill.level ? `(${skill.level})` : ''}</span>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${data.projects.length > 0 ? `
                <div class="resume-section">
                    <h2 class="section-title">PROJECTS</h2>
                    ${data.projects.map(project => `
                        <div class="resume-item">
                            <div class="item-header">
                                <h3 class="item-title">${project.name || 'Project Name'}</h3>
                                ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
                            </div>
                            ${project.tech ? `<p class="item-subtitle">Technologies: ${project.tech}</p>` : ''}
                            <p class="item-description">${project.description || 'Project description and outcomes.'}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `;
        
        return html;
    }
    
    function renderProfessionalTemplate(data) {
        // Similar structure but with a more conservative design
        // Implement different styling through CSS classes
        return renderModernTemplate(data); // For now, use same content
    }
    
    function renderCreativeTemplate(data) {
        // More visual template with potential for sidebars, colors, etc.
        return renderModernTemplate(data); // For now, use same content
    }
    
    function renderMinimalTemplate(data) {
        // Very clean, sparse template
        return renderModernTemplate(data); // For now, use same content
    }
    
    // Helper function to format dates
    function formatDate(dateString) {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    }
    
    // Template selector
    document.getElementById('template-select').addEventListener('change', updateResumePreview);
    
    // Download PDF
    document.getElementById('download-pdf').addEventListener('click', async () => {
        const { jsPDF } = window.jspdf;
        const resumePreview = document.getElementById('resume-preview');
        
        // Use html2canvas to capture the resume
        const canvas = await html2canvas(resumePreview, {
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save('resume.pdf');
    });
    
    // Print resume
    document.getElementById('print-resume').addEventListener('click', () => {
        const resumePreview = document.getElementById('resume-preview').innerHTML;
        const originalContent = document.body.innerHTML;
        
        document.body.innerHTML = resumePreview;
        window.print();
        document.body.innerHTML = originalContent;
        
        // Reattach event listeners
        window.location.reload();
    });
    
    // Save resume data to localStorage
    document.getElementById('save-resume').addEventListener('click', () => {
        const resumeData = collectResumeData();
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert('Resume saved successfully!');
    });
    
    // Load resume data from localStorage
    document.getElementById('load-resume').addEventListener('click', () => {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            if (confirm('Load saved resume? This will overwrite current data.')) {
                loadResumeData(JSON.parse(savedData));
                updateResumePreview();
            }
        } else {
            alert('No saved resume found.');
        }
    });
    
   

    // Collect all resume data from the form
function collectResumeData() {
    const resumeData = {
        personal: {
            name: document.getElementById('fullName').value,
            title: document.getElementById('jobTitle').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value,
            summary: document.getElementById('summary').value,
            // Note: File handling would need additional implementation
            photo: document.getElementById('photo').files[0] ? 
                  document.getElementById('photo').files[0].name : null
        },
        experiences: [],
        educations: [],
        skills: [],
        projects: []
    };

    // Collect experiences
    document.querySelectorAll('.experience-item').forEach(exp => {
        resumeData.experiences.push({
            title: exp.querySelector('.exp-title').value,
            company: exp.querySelector('.exp-company').value,
            start: exp.querySelector('.exp-start').value,
            end: exp.querySelector('.exp-end').value,
            description: exp.querySelector('.exp-description').value
        });
    });

    // Collect education
    document.querySelectorAll('.education-item').forEach(edu => {
        resumeData.educations.push({
            degree: edu.querySelector('.edu-degree').value,
            institution: edu.querySelector('.edu-institution').value,
            start: edu.querySelector('.edu-start').value,
            end: edu.querySelector('.edu-end').value,
            description: edu.querySelector('.edu-description').value
        });
    });

    // Collect skills
    document.querySelectorAll('.skill-item').forEach(skill => {
        resumeData.skills.push({
            name: skill.querySelector('.skill-name').value,
            level: skill.querySelector('.skill-level').value
        });
    });

    // Collect projects
    document.querySelectorAll('.project-item').forEach(project => {
        resumeData.projects.push({
            name: project.querySelector('.project-name').value,
            tech: project.querySelector('.project-tech').value,
            description: project.querySelector('.project-description').value,
            link: project.querySelector('.project-link').value
        });
    });

    return resumeData;
}

// Load resume data into the form
function loadResumeData(data) {
    // Load personal info
    document.getElementById('fullName').value = data.personal.name || '';
    document.getElementById('jobTitle').value = data.personal.title || '';
    document.getElementById('email').value = data.personal.email || '';
    document.getElementById('phone').value = data.personal.phone || '';
    document.getElementById('address').value = data.personal.address || '';
    document.getElementById('linkedin').value = data.personal.linkedin || '';
    document.getElementById('github').value = data.personal.github || '';
    document.getElementById('summary').value = data.personal.summary || '';

    // Clear existing items
    document.getElementById('experience-container').innerHTML = '';
    document.getElementById('education-container').innerHTML = '';
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('projects-container').innerHTML = '';

    // Load experiences
    if (data.experiences && data.experiences.length > 0) {
        data.experiences.forEach(exp => {
            addExperienceItem(exp);
        });
    } else {
        // Add one empty experience item if none exist
        addExperienceItem();
    }

    // Load education
    if (data.educations && data.educations.length > 0) {
        data.educations.forEach(edu => {
            addEducationItem(edu);
        });
    } else {
        // Add one empty education item if none exist
        addEducationItem();
    }

    // Load skills
    if (data.skills && data.skills.length > 0) {
        data.skills.forEach(skill => {
            addSkillItem(skill);
        });
    } else {
        // Add one empty skill item if none exist
        addSkillItem();
    }

    // Load projects
    if (data.projects && data.projects.length > 0) {
        data.projects.forEach(project => {
            addProjectItem(project);
        });
    } else {
        // Add one empty project item if none exist
        addProjectItem();
    }
}

// Helper functions to add items with data
function addExperienceItem(data = {}) {
    const experienceContainer = document.getElementById('experience-container');
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item';
    newExperience.innerHTML = `
        <div class="form-group">
            <label>Job Title</label>
            <input type="text" class="exp-title" placeholder="Senior Developer" value="${data.title || ''}">
        </div>
        <div class="form-group">
            <label>Company</label>
            <input type="text" class="exp-company" placeholder="Tech Corp Inc." value="${data.company || ''}">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Start Date</label>
                <input type="month" class="exp-start" value="${data.start || ''}">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="month" class="exp-end" value="${data.end || ''}">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="exp-description" rows="3" placeholder="Developed and maintained web applications...">${data.description || ''}</textarea>
        </div>
        <button class="remove-btn">Remove</button>
    `;
    experienceContainer.appendChild(newExperience);
    
    newExperience.querySelector('.remove-btn').addEventListener('click', () => {
        experienceContainer.removeChild(newExperience);
        updateResumePreview();
    });
    
    addInputListeners(newExperience);
}

// Similar helper functions for education, skills, and projects
function addEducationItem(data = {}) {
    const educationContainer = document.getElementById('education-container');
    const newEducation = document.createElement('div');
    newEducation.className = 'education-item';
    newEducation.innerHTML = `
        <div class="form-group">
            <label>Degree</label>
            <input type="text" class="edu-degree" placeholder="Bachelor of Science" value="${data.degree || ''}">
        </div>
        <div class="form-group">
            <label>Institution</label>
            <input type="text" class="edu-institution" placeholder="University of Technology" value="${data.institution || ''}">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Start Date</label>
                <input type="month" class="edu-start" value="${data.start || ''}">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="month" class="edu-end" value="${data.end || ''}">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="edu-description" rows="2" placeholder="Major in Computer Science...">${data.description || ''}</textarea>
        </div>
        <button class="remove-btn">Remove</button>
    `;
    educationContainer.appendChild(newEducation);
    
    newEducation.querySelector('.remove-btn').addEventListener('click', () => {
        educationContainer.removeChild(newEducation);
        updateResumePreview();
    });
    
    addInputListeners(newEducation);
}

function addSkillItem(data = {}) {
    const skillsContainer = document.getElementById('skills-container');
    const newSkill = document.createElement('div');
    newSkill.className = 'skill-item';
    newSkill.innerHTML = `
        <div class="form-group">
            <label>Skill Name</label>
            <input type="text" class="skill-name" placeholder="JavaScript" value="${data.name || ''}">
        </div>
        <div class="form-group">
            <label>Proficiency</label>
            <select class="skill-level">
                <option value="beginner" ${data.level === 'beginner' ? 'selected' : ''}>Beginner</option>
                <option value="intermediate" ${data.level === 'intermediate' ? 'selected' : ''}>Intermediate</option>
                <option value="advanced" ${data.level === 'advanced' ? 'selected' : ''}>Advanced</option>
                <option value="expert" ${(!data.level || data.level === 'expert') ? 'selected' : ''}>Expert</option>
            </select>
        </div>
        <button class="remove-btn">Remove</button>
    `;
    skillsContainer.appendChild(newSkill);
    
    newSkill.querySelector('.remove-btn').addEventListener('click', () => {
        skillsContainer.removeChild(newSkill);
        updateResumePreview();
    });
    
    addInputListeners(newSkill);
}

function addProjectItem(data = {}) {
    const projectsContainer = document.getElementById('projects-container');
    const newProject = document.createElement('div');
    newProject.className = 'project-item';
    newProject.innerHTML = `
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" class="project-name" placeholder="E-commerce Website" value="${data.name || ''}">
        </div>
        <div class="form-group">
            <label>Technologies Used</label>
            <input type="text" class="project-tech" placeholder="React, Node.js, MongoDB" value="${data.tech || ''}">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="project-description" rows="3" placeholder="Developed a full-stack e-commerce platform...">${data.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>Project Link</label>
            <input type="url" class="project-link" placeholder="https://example.com" value="${data.link || ''}">
        </div>
        <button class="remove-btn">Remove</button>
    `;
    projectsContainer.appendChild(newProject);
    
    newProject.querySelector('.remove-btn').addEventListener('click', () => {
        projectsContainer.removeChild(newProject);
        updateResumePreview();
    });
    
    addInputListeners(newProject);
}
});