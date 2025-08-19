/* =================================================================== */
/* JAVASCRIPT PARA TODA A INTERATIVIDADE                             */
/* =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELEÇÃO DE ELEMENTOS ---
    const allSections = document.querySelectorAll('section, footer');
    const catSection = document.getElementById('cat-section');
    const startOverlay = document.getElementById('start-overlay');

    const classicalMusic = document.getElementById('classical-music');
    const sovietAnthem = document.getElementById('soviet-anthem');
    const funkMusic = document.getElementById('funk-music');
    const jurassicMusic = document.getElementById('jurassic-music');
    const fireworksSounds = document.querySelectorAll('.fireworks-sound-effect');

    const allAudios = [classicalMusic, sovietAnthem, funkMusic, jurassicMusic, ...fireworksSounds];

    let state = {
        chaosStarted: false,
        jokesStarted: false,
        dinosStarted: false,
        catsStarted: false,
        finaleStarted: false
    };

    // --- LINKS PARA OS SEUS FICHEIROS ---
    const emojiLinks = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAIwC5KuORkXQ_mZzRznZ5OAeGXESXCVhNQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAIwC5KuORkXQ_mZzRznZ5OAeGXESXCVhNQ&s',
      'https://ih1.redbubble.net/image.504603318.5213/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8kQllv82_foNHYAqhvYX-QCPZsvI2xF4Sw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEQZIZp15o1LJVYkQbLVz2HnzFixCFie20Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtro2Yk7EEyzF9umkwif875OZwIpUn7N3Sg&s',
      'https://pbs.twimg.com/ext_tw_video_thumb/1325926720218730497/pu/img/zfI09QMilvYb1akD.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iMjl-gPzSygEVcIxNYceVlJ92rdME7ASPQ&s',
      'https://64.media.tumblr.com/7df368b8fdbd3fa024452b306823fd20/71696731d9211e72-dc/s400x600/569573f5440ed63a71f35221a9b5527df2a6bd1c.png',    
      'https://ih1.redbubble.net/image.1011699592.7504/raf,360x360,075,t,fafafa:ca443f4786.jpg',  
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAIwC5KuORkXQ_mZzRznZ5OAeGXESXCVhNQ&s',
      'https://ih1.redbubble.net/image.504603318.5213/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8kQllv82_foNHYAqhvYX-QCPZsvI2xF4Sw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEQZIZp15o1LJVYkQbLVz2HnzFixCFie20Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtro2Yk7EEyzF9umkwif875OZwIpUn7N3Sg&s',
      'https://pbs.twimg.com/ext_tw_video_thumb/1325926720218730497/pu/img/zfI09QMilvYb1akD.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iMjl-gPzSygEVcIxNYceVlJ92rdME7ASPQ&s',
      'https://64.media.tumblr.com/7df368b8fdbd3fa024452b306823fd20/71696731d9211e72-dc/s400x600/569573f5440ed63a71f35221a9b5527df2a6bd1c.png',    
      'https://ih1.redbubble.net/image.1011699592.7504/raf,360x360,075,t,fafafa:ca443f4786.jpg',  
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxzSt-CFhW3qvNwvhTkWUGV0ugxo-TcGr8Q&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAIwC5KuORkXQ_mZzRznZ5OAeGXESXCVhNQ&s',
      'https://ih1.redbubble.net/image.504603318.5213/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8kQllv82_foNHYAqhvYX-QCPZsvI2xF4Sw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEQZIZp15o1LJVYkQbLVz2HnzFixCFie20Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtro2Yk7EEyzF9umkwif875OZwIpUn7N3Sg&s',
      'https://pbs.twimg.com/ext_tw_video_thumb/1325926720218730497/pu/img/zfI09QMilvYb1akD.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iMjl-gPzSygEVcIxNYceVlJ92rdME7ASPQ&s',
      'https://64.media.tumblr.com/7df368b8fdbd3fa024452b306823fd20/71696731d9211e72-dc/s400x600/569573f5440ed63a71f35221a9b5527df2a6bd1c.png',    
      'https://ih1.redbubble.net/image.1011699592.7504/raf,360x360,075,t,fafafa:ca443f4786.jpg',  
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAIwC5KuORkXQ_mZzRznZ5OAeGXESXCVhNQ&s',
      'https://ih1.redbubble.net/image.504603318.5213/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8kQllv82_foNHYAqhvYX-QCPZsvI2xF4Sw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEQZIZp15o1LJVYkQbLVz2HnzFixCFie20Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtro2Yk7EEyzF9umkwif875OZwIpUn7N3Sg&s',
      'https://pbs.twimg.com/ext_tw_video_thumb/1325926720218730497/pu/img/zfI09QMilvYb1akD.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iMjl-gPzSygEVcIxNYceVlJ92rdME7ASPQ&s',
      'https://64.media.tumblr.com/7df368b8fdbd3fa024452b306823fd20/71696731d9211e72-dc/s400x600/569573f5440ed63a71f35221a9b5527df2a6bd1c.png',    
      'https://ih1.redbubble.net/image.1011699592.7504/raf,360x360,075,t,fafafa:ca443f4786.jpg',  
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxzSt-CFhW3qvNwvhTkWUGV0ugxo-TcGr8Q&s'
    ];
    const catMemeLinks = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7uz88YDtZ7qvbp-G1wglmJEWZz_0FeGTmw&s', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_OnnNWRipITQo-bd-dGcXJzonSdG-M8YmQ&s',
        'https://i.redd.it/kg82lbnu0ste1.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_iJ0hDHRx0YhaUqvcqC1cExS4SRCCgcP5g&s',
        'https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1',
        'https://stickershop.line-scdn.net/stickershop/v1/product/25565991/LINEStorePC/main.png?v=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmundl1Ns7N1eKNIjdlbg-3G6nVEVPn7sFFKKHsT9ETWisMS4UNu2aGB9204Ljg9_Ku9w&usqp=CAU',
        'https://media.tenor.com/uavHvpMwWSEAAAAM/cat-cat-meme.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirF4wiO1zuJyKTFnaM-dFij4SbDQjNXdcKg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgXV83U-cLF2i2RMfDYEp5qWGZPk-Gt4J_w&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7uz88YDtZ7qvbp-G1wglmJEWZz_0FeGTmw&s', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_OnnNWRipITQo-bd-dGcXJzonSdG-M8YmQ&s',
        'https://i.redd.it/kg82lbnu0ste1.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_iJ0hDHRx0YhaUqvcqC1cExS4SRCCgcP5g&s',
        'https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1',
        'https://stickershop.line-scdn.net/stickershop/v1/product/25565991/LINEStorePC/main.png?v=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmundl1Ns7N1eKNIjdlbg-3G6nVEVPn7sFFKKHsT9ETWisMS4UNu2aGB9204Ljg9_Ku9w&usqp=CAU',
        'https://media.tenor.com/uavHvpMwWSEAAAAM/cat-cat-meme.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirF4wiO1zuJyKTFnaM-dFij4SbDQjNXdcKg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgXV83U-cLF2i2RMfDYEp5qWGZPk-Gt4J_w&s'
          
    ];
    const catBackgroundLink = 'https://i.imgur.com/uO9PREz.jpeg';

    // --- 2. LÓGICA DE ÁUDIO (MAIS ROBUSTA) ---
    function playAudio(audioToPlay, startTime = 0) {
        allAudios.forEach(audio => {
            if (audio !== audioToPlay) {
                audio.pause();
            }
        });

        if (audioToPlay) {
            const playFromPosition = () => {
                audioToPlay.currentTime = startTime;
                const playPromise = audioToPlay.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => console.error(`Erro ao tocar ${audioToPlay.id}:`, error));
                }
                // Remove o "ouvinte" depois de o usar para evitar execuções múltiplas
                audioToPlay.removeEventListener('canplay', playFromPosition);
            };

            // readyState 4 (HAVE_ENOUGH_DATA) significa que o áudio está pronto.
            if (audioToPlay.readyState >= 3) {
                playFromPosition();
            } else {
                // Se não estiver pronto, espera pelo evento "canplay".
                audioToPlay.addEventListener('canplay', playFromPosition, { once: true });
            }
        }
    }

    startOverlay.addEventListener('click', () => {
        console.log('Áudio desbloqueado. Iniciando a experiência.');
        startOverlay.style.opacity = '0';
        setTimeout(() => { startOverlay.style.display = 'none'; }, 500);

        classicalMusic.volume = 0.3;
        playAudio(classicalMusic);
    }, { once: true });

    // --- 3. OBSERVERS (ACIONADORES AO ROLAR) ---
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const target = entry.target;

            // COLE ESTE BLOCO DE CÓDIGO

            // --- NOVO OBSERVADOR ESPECÍFICO PARA A CORREÇÃO ---
            const correctionTrigger = document.getElementById('correction-trigger');
            const correctionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        // Para de observar depois de acionar para economizar recursos
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.7 }); // Aciona quando 70% está visível
        
            // Inicia a observação do elemento de correção
            if (correctionTrigger) {
                correctionObserver.observe(correctionTrigger);
            }
            if (target.id === 'chaos-section' && !state.chaosStarted) {
                state.chaosStarted = true;
                target.classList.add('activated');
                sovietAnthem.volume = 0.7;
                playAudio(sovietAnthem);
            }
            if (target.id === 'jokes-section' && !state.jokesStarted) {
                state.jokesStarted = true;
                funkMusic.volume = 0.7;
                playAudio(funkMusic);
                startEmojiChaos();
            }
            const dinoSection = document.getElementById('dino-section');
            const dinoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !state.dinosStarted) {
                        state.dinosStarted = true;
                        jurassicMusic.volume = 0.5;
                        playAudio(jurassicMusic, 89); // O tempo de início que você definiu
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05 }); // Aciona quando 5% está visível
            
            // Inicia a observação da secção dos dinossauros
            if (dinoSection) {
                dinoObserver.observe(dinoSection);
            }
            if (target.id === 'cat-section' && !state.catsStarted) {
                state.catsStarted = true;
                playAudio(funkMusic, 40);
                document.body.style.backgroundImage = `url(${catBackgroundLink})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundAttachment = 'fixed';
                startCatChaos();
                startCatChaos();
                startCatChaos();
                state.finaleStarted = true;
                
                const fireworksInterval = setInterval(() => {
                    const randomSound = fireworksSounds[Math.floor(Math.random() * fireworksSounds.length)];
                    randomSound.currentTime = 0;
                    randomSound.volume = 1.0;
                    randomSound.play();
                }, 450);

                setTimeout(() => clearInterval(fireworksInterval), 10000);
                startFireworks();
                observer.unobserve(target);
            }
        });
    };
    // Linha corrigida
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.2 });
    allSections.forEach(section => observer.observe(section));

    // --- 4. FUNÇÕES DE EFEITOS VISUAIS ---
    function startConfetti() { for (let i = 0; i < 200; i++) createConfettiPiece(); }
    function createConfettiPiece() { const c = document.createElement('div'); c.classList.add('confetti'); const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f']; c.style.left = `${Math.random()*100}vw`; c.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]; c.style.animationDelay=`${Math.random()*5}s`; document.getElementById('chaos-section').appendChild(c); }
    
    function startEmojiChaos() { emojiLinks.forEach(link => { const e = document.createElement('div'); e.classList.add('distorted-emoji'); e.style.backgroundImage=`url(${link})`; e.style.top=`${Math.random()*100}%`; e.style.left=`${Math.random()*100}%`; e.style.setProperty('--x-end',`${(Math.random()-.5)*80}vw`); e.style.setProperty('--y-end',`${(Math.random()-.5)*80}vh`); e.style.animationDuration=`${Math.random()*10+5}s`; document.getElementById('jokes-section').appendChild(e); }); }

    function startCatChaos() {
        setInterval(() => {
            if (catMemeLinks.length === 0) return;
            const cat = document.createElement('img');
            cat.src = catMemeLinks[Math.floor(Math.random() * catMemeLinks.length)];
            cat.classList.add('cat-meme');
            cat.style.left = `${Math.random() * 90}vw`;
            cat.style.animationDelay = `${Math.random() * 2}s`;
            catSection.appendChild(cat);
            setTimeout(() => cat.remove(), 7900);
        }, 500);
    }

    function startFireworks() {
        const container = document.querySelector('.fireworks-container');
        const intervalId = setInterval(() => createFirework(container), 400);
        setTimeout(() => clearInterval(intervalId), 10000);
    }

    function createFirework(container) {
        const x = Math.random() * 100 + '%';
        const y = Math.random() * 80 + '%';
        const hue = Math.random() * 360;
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('firework');
            particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            particle.style.left = x;
            particle.style.top = y;
            const angle = Math.random() * 360;
            const distance = Math.random() * 150 + 50;
            particle.style.animation = `explode 1s ease-out forwards`;
            particle.style.transform = `rotate(${angle}deg) translateX(${distance}px) scale(1)`;
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }
});
