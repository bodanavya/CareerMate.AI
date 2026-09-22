function careerPathFinder() {
    const skills = prompt(
        "Enter your skills (example: Python, SQL, Excel):"
    );

    if (skills) {
        alert(
            "Based on your skills: " + skills +
            "\n\nCareer paths you can explore:\n" +
            "• Data Analyst\n" +
            "• Software Developer\n" +
            "• Web Developer\n" +
            "• AI/ML Engineer"
        );
    }
}
function skillGapAnalyzer() {
    const career = prompt(
        "Enter your target career:\n\n" +
        "Examples: Data Analyst, Java Developer, Web Developer, AI/ML Engineer"
    );

    if (!career) return;

    const c = career.toLowerCase();
    let skills;

    if (c.includes("data analyst") || c.includes("data analysis")) {
        skills =
            "• Python\n" +
            "• SQL\n" +
            "• Excel\n" +
            "• Power BI\n" +
            "• Statistics\n" +
            "• Data Visualization";
    }
    else if (c.includes("java")) {
        skills =
            "• Java\n" +
            "• OOP\n" +
            "• DSA\n" +
            "• SQL\n" +
            "• Git/GitHub\n" +
            "• Problem Solving";
    }
    else if (c.includes("web")) {
        skills =
            "• HTML\n" +
            "• CSS\n" +
            "• JavaScript\n" +
            "• React\n" +
            "• Git/GitHub\n" +
            "• Responsive Design";
    }
    else if (c.includes("ai") || c.includes("machine learning") || c.includes("ml")) {
        skills =
            "• Python\n" +
            "• NumPy\n" +
            "• Pandas\n" +
            "• Machine Learning\n" +
            "• Statistics\n" +
            "• TensorFlow";
    }
    else {
        skills =
            "• Programming\n" +
            "• SQL\n" +
            "• DSA\n" +
            "• Problem Solving\n" +
            "• Communication\n" +
            "• Git/GitHub";
    }

    alert(
        "Skills recommended for " + career + ":\n\n" + skills
    );
}
function resumeAnalyzer() {
    const skills = prompt(
        "Enter the skills mentioned in your resume:\n\n" +
        "Example: Java, SQL, Python, Excel"
    );

    if (!skills) return;

    alert(
        "Resume Analysis\n\n" +
        "Skills detected:\n" +
        skills +
        "\n\nSuggestions to improve your resume:\n" +
        "• Add measurable project achievements\n" +
        "• Mention relevant technical skills\n" +
        "• Highlight internships and certifications\n" +
        "• Keep your resume concise and professional\n" +
        "• Add GitHub and LinkedIn links"
    );
}
function aiCareerAssistant() {
    const question = prompt(
        "Ask your career question:",
        "What skills do I need for Data Analyst?"
    );

    if (!question) return;

    const q = question.toLowerCase();

    let guidance = "";

    if (q.includes("data analyst") || q.includes("data analysis")) {
        guidance =
            "Career guidance for Data Analyst:\\n\\n" +
            "• Learn Excel and advanced Excel\\n" +
            "• Learn SQL for data querying\\n" +
            "• Learn Python with Pandas and NumPy\\n" +
            "• Learn Power BI or Tableau\\n" +
            "• Practice data cleaning and EDA\\n" +
            "• Build 2–3 data analytics projects\\n" +
            "• Improve statistics fundamentals\\n" +
            "• Create a strong analytics portfolio";
    }
    else if (
        q.includes("software developer") ||
        q.includes("software engineer") ||
        q.includes("java developer")
    ) {
        guidance =
            "Career guidance for Software Developer:\\n\\n" +
            "• Learn Java fundamentals\\n" +
            "• Practice DSA regularly\\n" +
            "• Learn OOP concepts\\n" +
            "• Improve SQL and database skills\\n" +
            "• Build practical projects\\n" +
            "• Practice coding problems\\n" +
            "• Prepare for technical interviews\\n" +
            "• Improve communication skills";
    }
    else if (q.includes("web developer")) {
        guidance =
            "Career guidance for Web Developer:\\n\\n" +
            "• Learn HTML, CSS and JavaScript\\n" +
            "• Learn responsive web design\\n" +
            "• Learn Git and GitHub\\n" +
            "• Learn a frontend framework such as React\\n" +
            "• Learn backend fundamentals\\n" +
            "• Build real-world web projects\\n" +
            "• Create a GitHub portfolio";
    }
    else if (q.includes("ai") || q.includes("machine learning")) {
        guidance =
            "Career guidance for AI/ML:\\n\\n" +
            "• Learn Python\\n" +
            "• Learn NumPy and Pandas\\n" +
            "• Learn statistics and mathematics\\n" +
            "• Learn machine learning fundamentals\\n" +
            "• Practice with scikit-learn\\n" +
            "• Build ML projects\\n" +
            "• Learn model evaluation\\n" +
            "• Create an AI/ML portfolio";
    }
    else {
        guidance =
            "General career guidance:\\n\\n" +
            "• Choose a target career\\n" +
            "• Learn the required technical skills\\n" +
            "• Practice regularly\\n" +
            "• Build practical projects\\n" +
            "• Create a strong resume\\n" +
            "• Build your GitHub portfolio\\n" +
            "• Prepare for interviews\\n" +
            "• Improve communication skills";
    }

    alert(
        "AI Career Assistant\\n\\n" +
        "Your question: \"" + question + "\"\\n\\n" +
        guidance
    );
}sss

// Interview Preparation
function interviewPreparation() {
    const role = prompt(
        "Enter the job role you want to prepare for:",
        "Software Developer"
    );

    if (role) {
        alert(
            "Interview Preparation\n\n" +
            "Preparation for: " + role +
            "\n\n" +
            "Focus on:\n" +
            "• Technical fundamentals\n" +
            "• Java programming\n" +
            "• DSA and problem solving\n" +
            "• SQL and databases\n" +
            "• Projects on your resume\n" +
            "• HR and behavioral questions\n" +
            "• Communication skills"
        );
    }
}


// Job Recommendations
function jobRecommendations() {
    const skills = prompt(
        "Enter your skills:",
        "Java, DSA, SQL, Python"
    );

    if (skills) {
        alert(
            "Job Recommendations\n\n" +
            "Based on your skills:\n" +
            skills +
            "\n\n" +
            "Possible job roles:\n" +
            "• Software Developer\n" +
            "• Java Developer\n" +
            "• Junior Software Engineer\n" +
            "• Data Analyst\n" +
            "• Web Developer"
        );
    }
}
function aiCareerAssistant() {
    let chatBox = document.getElementById("aiChatBox");

    if (!chatBox) {
        chatBox = document.createElement("div");
        chatBox.id = "aiChatBox";
        chatBox.className = "ai-chat-box";

        chatBox.innerHTML = `
            <div class="chat-header">
                🤖 CareerMate AI
                <button onclick="closeAIChat()">✕</button>
            </div>

            <div id="chatMessages" class="chat-messages">
                <div class="bot-message">
                    Hi! 👋 I'm CareerMate AI.<br>
                    Ask me about careers, skills, projects, or placements!
                </div>
            </div>

            <div class="chat-input">
                <input
                    type="text"
                    id="chatInput"
                    placeholder="Ask your career question..."
                >
                <button onclick="sendChatMessage()">Send</button>
            </div>
        `;

        document.body.appendChild(chatBox);
    }

    chatBox.style.display = "flex";
}
function closeAIChat() {
    const chatBox = document.getElementById("aiChatBox");

    if (chatBox) {
        chatBox.style.display = "none";
    }
}

function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (!input || !messages) return;

    const question = input.value.trim();

    if (question === "") return;

    messages.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    messages.innerHTML += `
        <div class="bot-message">
            🤖 CareerMate AI: Great question! I recommend focusing on
            relevant skills, practical projects, and interview preparation.
        </div>
    `;

    input.value = "";
}
function openCareerChat() {
    let box = document.getElementById("careerChatPopup");

    if (!box) {
        box = document.createElement("div");
        box.id = "careerChatPopup";

        box.innerHTML = `
            <div style="
                background:white;
                width:350px;
                max-width:90%;
                padding:20px;
                border-radius:15px;
                box-shadow:0 5px 25px rgba(0,0,0,0.3);
                font-family:Arial;
            ">
                <h2>🤖 CareerMate AI</h2>

                <p>Hello! 👋 Ask me anything about careers, skills, projects or placements.</p>

                <input
                    id="careerQuestion"
                    type="text"
                    placeholder="Ask your career question..."
                    style="width:90%; padding:10px;"
                >

                <button onclick="askCareerAI()" style="margin-top:10px;">
                    Send
                </button>

                <button onclick="closeCareerChat()" style="margin-top:10px;">
                    Close
                </button>

                <p id="careerAnswer"></p>
            </div>
        `;

        box.style.position = "fixed";
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -50%)";
        box.style.zIndex = "99999";

        document.body.appendChild(box);
    }

    box.style.display = "block";
}

function closeCareerChat() {
    const box = document.getElementById("careerChatPopup");

    if (box) {
        box.remove();
    }
}

function askCareerAI() {
    const question = document.getElementById("careerQuestion").value;

    if (question.trim() === "") {
        return;
    }

    document.getElementById("careerAnswer").innerHTML =
        "🤖 CareerMate AI: Great question! Focus on relevant skills, practical projects, and interview preparation.";
}