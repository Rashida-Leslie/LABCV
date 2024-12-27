const timelineData = [
    {
        date: '2019',
        title: 'Foundation',
        description: 'Company established'
    },
    {
        date: '2020',
        title: 'Growth',
        description: 'Expanded to new markets'
    },
    {
        date: '2021',
        title: 'Innovation',
        description: 'Launched new product line'
    },
    {
        date: '2022',
        title: 'Expansion',
        description: 'Opened international offices'
    },
    {
        date: '2023',
        title: 'Achievement',
        description: 'Reached 1M customers'
    },
    {
        date: '2024',
        title: 'Future',
        description: 'Setting new goals'
    }
];

function createTimelineItem(item) {
    return `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `;
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timelineData
        .map(item => createTimelineItem(item))
        .join('');
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', renderTimeline);