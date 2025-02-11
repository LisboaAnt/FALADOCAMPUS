import { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const [theme, setTheme] = useState(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Função para converter HSL para RGB
        function hslToRgb(hslString) {
            const match = hslString.match(/(\d+)[,\s]+(\d+)%?[,\s]+(\d+)%?/);
            if (!match) return [0, 0, 0];

            let [, h, s, l] = match.map(Number);
            s /= 100;
            l /= 100;

            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));

            return [
                Math.round(f(0) * 255),
                Math.round(f(8) * 255),
                Math.round(f(4) * 255)
            ];
        }

        // Função para obter a cor com base no tema
        const getThemeColor = () => {
            return getComputedStyle(document.documentElement)
                .getPropertyValue("--primary")
                .trim(); // Pegamos a cor do tema
        };

        // Classe de Partículas
        class Particle {
            constructor() {
                this.reset();
                this.updateColor();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }

            updateColor() {
                const themeColor = getThemeColor();
                this.rgbColor = hslToRgb(`hsl(${themeColor})`);
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                    this.reset();
                }
            }

            draw() {
                const [r, g, b] = this.rgbColor;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b},${this.size / 3})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Função para atualizar partículas com nova cor ao mudar o tema
        const updateParticlesColor = () => {
            particles.forEach(p => p.updateColor());
        };

        // Detectar mudança de tema
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
            setTheme(newTheme);
            updateParticlesColor();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Configuração do Canvas
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Inicialização das partículas
        const particles = [];
        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        // Animação das partículas
        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        };

        setCanvasSize();
        initParticles();
        animateParticles();

        // Atualizar o tamanho ao redimensionar
        window.addEventListener("resize", setCanvasSize);

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
};

export default AnimatedBackground;
