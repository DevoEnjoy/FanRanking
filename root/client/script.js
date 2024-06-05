document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const scoreboard = document.getElementById('scoreboard');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.textContent = `${user.username}: ${user.watchTime} hours`;
                scoreboard.appendChild(userDiv);
            });
        });
});

document.addEventListener('DOMContentLoaded', () => {
    // 예제 데이터
    const rankingData = [5, 4, 3, 4, 2];

    // 차트 초기화
    const ctx = document.getElementById('rankingChart').getContext('2d');
    const rankingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1주', '2주', '3주', '4주', '5주'],
            datasets: [{
                label: '주간 랭킹',
                data: rankingData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    reverse: true // 높은 순위가 위로 가도록 반전
                }
            }
        }
    });
});
