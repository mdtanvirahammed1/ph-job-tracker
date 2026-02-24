const jobs = [
    { id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile apps using React Native." },
    { id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", description:"Design modern websites for high-profile clients." },
    { id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA", type:"Full-time", salary:"$125,000 - $165,000", description:"Transform complex data into compelling dashboards." },
    { id:4, company:"CloudNet", position:"Cloud Engineer", location:"New York, NY", type:"Full-time", salary:"$140,000 - $180,000", description:"Manage AWS cloud infrastructure systems." },
    { id:5, company:"InnovateX", position:"Frontend Developer", location:"Remote", type:"Contract", salary:"$90,000 - $110,000", description:"Develop modern UI components with React." },
    { id:6, company:"TechBridge", position:"Backend Engineer", location:"Austin, TX", type:"Full-time", salary:"$120,000 - $150,000", description:"Build scalable backend services." },
    { id:7, company:"Bright Labs", position:"UI/UX Designer", location:"Seattle, WA", type:"Full-time", salary:"$95,000 - $125,000", description:"Design clean and intuitive user interfaces." },
    { id:8, company:"NextGen AI", position:"Machine Learning Engineer", location:"San Francisco, CA", type:"Full-time", salary:"$160,000 - $200,000", description:"Develop AI-based predictive systems." }
];

let currentTab = "all";
let interview = [];
let rejected = [];

const container = document.getElementById("jobsContainer");

function renderJobs() {
    container.innerHTML = "";

    let data = currentTab === "all" ? jobs :
               currentTab === "interview" ? interview :
               rejected;

    document.getElementById("tabCount").innerText = data.length + " Jobs";

    if (data.length === 0) {
        document.getElementById("empty").classList.remove("hidden");
        updateDashboard();
        return;
    }

    document.getElementById("empty").classList.add("hidden");

    data.forEach(job => {
        const div = document.createElement("div");
        div.classList.add("job-card");

        let statusClass = "not";
        let statusText = "NOT APPLIED";

        if (interview.indexOf(job) !== -1) {
            statusClass = "interview";
            statusText = "INTERVIEW";
        } else if (rejected.indexOf(job) !== -1) {
            statusClass = "rejected";
            statusText = "REJECTED";
        }

        div.innerHTML = `
            <div class="delete-btn" onclick="deleteJob(${job.id})">
                <i class="fa-solid fa-trash"></i>
            </div>

            <div class="job-company">${job.company}</div>
            <div class="job-position">${job.position}</div>
            <div class="job-meta">
                ${job.location} • ${job.type} • ${job.salary}
            </div>

            <div class="status ${statusClass}">
                ${statusText}
            </div>

            <div class="job-desc">
                ${job.description}
            </div>

            <div class="buttons">
                <button class="btn-interview" onclick="markInterview(${job.id})">INTERVIEW</button>
                <button class="btn-rejected" onclick="markRejected(${job.id})">REJECTED</button>
            </div>
        `;

        container.appendChild(div);
    });

    updateDashboard();
}

function markInterview(id) {
    const job = jobs.find(j => j.id === id);
    const alreadyInInterview = interview.indexOf(job) !== -1;

    if (alreadyInInterview === false) { 
        interview.push(job);
        rejected = rejected.filter(j => j.id !== id);
    }
    renderJobs();
}

function markRejected(id) {
    const job = jobs.find(j => j.id === id);
    const alreadyRejected = rejected.indexOf(job) !== -1;

    if (alreadyRejected === false) {  
        rejected.push(job);
        interview = interview.filter(j => j.id !== id);
    }
    renderJobs();
}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {  
        jobs.splice(index, 1);
        interview = interview.filter(j => j.id !== id);
        rejected = rejected.filter(j => j.id !== id);
    }
    renderJobs();
}

function updateDashboard() {
    document.getElementById("allCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = interview.length;
    document.getElementById("rejectedCount").innerText = rejected.length;
}


document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        currentTab = this.dataset.tab;
        renderJobs();
    });
});

renderJobs();