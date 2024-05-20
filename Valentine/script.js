function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === 'xylia') {
        askQuestions();
    } else {
        alert('密碼錯誤，請再試一次。');
    }
}

function askQuestions() {
    let isLoved = true;
    for (let i = 0; i < 3; i++) {
        if (!confirm(`你真的愛我嘛${'!'.repeat(i + 1)}`)) {
            isLoved = false;
            break;
        }
    }
    if (isLoved) {
        const canvas = document.getElementById('heartCanvas');
        const ctx = canvas.getContext('2d');
        canvas.style.display = 'block';
        drawHeart(ctx);
    } else {
        alert('錯誤！請重新開始。');
    }
}

function drawHeart(ctx) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 10;
    let progress = 0;
    const maxProgress = Math.PI * 2;

    function draw() {
        progress += 0.05; // 加快繪畫速度
        if (progress > maxProgress) {
            showAlert();
            return;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();

        for (let angle = 0; angle <= progress; angle += 0.01) {
            const x = centerX + scale * 16 * Math.pow(Math.sin(angle), 3);
            const y = centerY - scale * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
            if (angle === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();
        requestAnimationFrame(draw);
    }

    draw();
}

function showAlert() {
    alert('我也愛你喔!!!! 500天快樂');
    window.close(); // 關閉窗口
}
