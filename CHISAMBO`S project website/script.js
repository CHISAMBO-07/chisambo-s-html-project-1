// Small interactions: dropdown, quiz checker
document.addEventListener('click', function(e){
    // close dropdowns if clicked outside
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(d => {
        if(!d.contains(e.target) && !d.previousElementSibling?.contains(e.target)){
            d.style.display = '';
        }
    });
});

function checkAnswer(choice){
    const result = document.getElementById('quiz-result');
    if(!result) return;
    if(choice === 'body'){
        result.textContent = 'Correct , GOOD JOB ✅';
        result.style.color = 'green';
    } else {
        result.textContent = 'OOPS , Try again ❌';
        result.style.color = 'red';
    }
}

/* Language selection: set document language and persist choice */
function setLanguage(lang){
    try{
        document.documentElement.lang = lang;
        localStorage.setItem('site-language', lang);
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // apply translations
        translatePage(lang);
    }catch(e){console.warn('setLanguage error', e)}
}

const TRANSLATIONS = {
    en: {
        'nav.home':'Home',
        'nav.courses':'Courses',
        'nav.inspiration':'Inspiration',
        'nav.tools':'Tools',
        'tools.profile':'Profile',
        'tools.settings':'Settings',
        'tools.language':'Language',
        'main.welcome':'Welcome to the Beginner\'s HTML Learning Guide',
        'main.description':'This website helps beginners learn HTML step-by-step. Use the navigation to browse courses and lessons.',
        'featured.basics.title':'Basics of HTML',
        'featured.basics.desc':'Learn structure, tags, lists, images, forms, and more.',
        'featured.basics.btn':'Open Basics',
        'featured.css.title':'Styling with CSS',
        'featured.css.desc':'Learn how to style pages using CSS.',
        'featured.css.btn':'View Course',
        'footer.text':'Chisambo`s web development for begineers iwd.icu.2026',
        'courses.title':'Courses',
        'courses.list.basics':'Basics of HTML',
        'courses.list.intro':'Intro to HTML',
        'courses.list.css':'CSS Basics',
        'css.title':'CSS Basics',
        'lesson.title':'Intro to HTML',
        'javascript.title':'JavaScript Fundamentals',
        'inspiration.title':'Inspiration',
        'basics.title':'Basics of HTML'
    },
    es: {
        'nav.home':'Inicio',
        'nav.courses':'Cursos',
        'nav.inspiration':'Inspiración',
        'nav.tools':'Herramientas',
        'tools.profile':'Perfil',
        'tools.settings':'Ajustes',
        'tools.language':'Idioma',
        'main.welcome':'Bienvenido a la guía de aprendizaje de HTML para principiantes',
        'main.description':'Este sitio ayuda a los principiantes a aprender HTML paso a paso. Use la navegación para explorar cursos y lecciones.',
        'featured.basics.title':'Fundamentos de HTML',
        'featured.basics.desc':'Aprende estructura, etiquetas, listas, imágenes, formularios y más.',
        'featured.basics.btn':'Abrir Fundamentos',
        'featured.css.title':'Estilizado con CSS',
        'featured.css.desc':'Aprende a diseñar páginas usando CSS.',
        'featured.css.btn':'Ver Curso',
        'footer.text':'Desarrollo web de Chisambo para principiantes iwd.icu.2026',
        'courses.title':'Cursos',
        'courses.list.basics':'Fundamentos de HTML',
        'courses.list.intro':'Introducción a HTML (ejemplo)',
        'lesson.title':'Introducción a HTML',
        'javascript.title':'Fundamentos de JavaScript',
        'inspiration.title':'Inspiración',
        'basics.title':'Fundamentos de HTML'
    },
    fr: {
        'nav.home':'Accueil',
        'nav.courses':'Cours',
        'nav.inspiration':'Inspiration',
        'nav.tools':'Outils',
        'tools.profile':'Profil',
        'tools.settings':'Paramètres',
        'tools.language':'Langue',
        'main.welcome':'Bienvenue dans le guide d\'apprentissage HTML pour débutants',
        'main.description':'Ce site aide les débutants à apprendre HTML étape par étape. Utilisez la navigation pour parcourir les cours et les leçons.',
        'featured.basics.title':'Bases du HTML',
        'featured.basics.desc':'Apprenez la structure, les balises, les listes, les images, les formulaires et plus.',
        'featured.basics.btn':'Ouvrir les bases',
        'featured.css.title':'Styliser avec CSS',
        'featured.css.desc':'Apprenez à styliser les pages en utilisant CSS.',
        'featured.css.btn':'Voir le cours',
        'footer.text':'Développement web de Chisambo pour débutants iwd.icu.2026',
        'courses.title':'Cours',
        'courses.list.basics':'Bases du HTML',
        'courses.list.intro':'Introduction au HTML (exemple)',
        'lesson.title':'Introduction au HTML',
        'javascript.title':'Notions de base JavaScript',
        'inspiration.title':'Inspiration',
        'basics.title':'Bases du HTML'
    },
    pt: {
        'nav.home':'Início',
        'nav.courses':'Cursos',
        'nav.inspiration':'Inspiração',
        'nav.tools':'Ferramentas',
        'tools.profile':'Perfil',
        'tools.settings':'Configurações',
        'tools.language':'Idioma',
        'main.welcome':'Bem-vindo ao Guia de Aprendizado HTML para Iniciantes',
        'main.description':'Este site ajuda iniciantes a aprender HTML passo a passo. Use a navegação para explorar cursos e lições.',
        'featured.basics.title':'Noções básicas de HTML',
        'featured.basics.desc':'Aprenda estrutura, tags, listas, imagens, formulários e mais.',
        'featured.basics.btn':'Abrir Noções básicas',
        'featured.css.title':'Estilizando com CSS',
        'featured.css.desc':'Aprenda a estilizar páginas usando CSS.',
        'featured.css.btn':'Ver Curso',
        'footer.text':'Desenvolvimento web de Chisambo para iniciantes iwd.icu.2026',
        'courses.title':'Cursos',
        'courses.list.basics':'Noções básicas de HTML',
        'courses.list.intro':'Introdução ao HTML (exemplo)',
        'lesson.title':'Introdução ao HTML',
        'javascript.title':'Fundamentos do JavaScript',
        'inspiration.title':'Inspiração',
        'basics.title':'Noções básicas de HTML'
    },
    sw: {
        'nav.home':'Nyumbani',
        'nav.courses':'Kozi',
        'nav.inspiration':'Msumba',
        'nav.tools':'Vifaa',
        'tools.profile':'Profaili',
        'tools.settings':'Mipangilio',
        'tools.language':'Lugha',
        'main.welcome':'Karibu kwenye Mwongozo wa Kujifunza HTML kwa Waanziaji',
        'main.description':'Tovuti hii inawasaidia waanziaji kujifunza HTML hatua kwa hatua. Tumia urambazaji kuvinjari kozi na masomo.',
        'featured.basics.title':'Misingi ya HTML',
        'featured.basics.desc':'Jifunze muundo, lebo, orodha, picha, fomu na zaidi.',
        'featured.basics.btn':'Fungua Misingi',
        'featured.css.title':'Kupamba kwa CSS',
        'featured.css.desc':'Jifunze jinsi ya kupamba kurasa kwa kutumia CSS.',
        'featured.css.btn':'Tazama Kozi',
        'footer.text':'Maendeleo ya wavuti ya Chisambo kwa waanziaji iwd.icu.2026',
        'courses.title':'Kozi',
        'courses.list.basics':'Misingi ya HTML',
        'courses.list.intro':'Utangulizi wa HTML (mfano)',
        'lesson.title':'Utangulizi wa HTML',
        'javascript.title':'Misingi ya JavaScript',
        'inspiration.title':'Msumba',
        'basics.title':'Misingi ya HTML'
    }
};

function translatePage(lang){
    if(!TRANSLATIONS[lang]) lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = TRANSLATIONS[lang][key];
        if(typeof txt === 'string') el.textContent = txt;
    });
}

document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem('site-language') || 'en';
    // attach handlers
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', ()=> setLanguage(btn.dataset.lang));
    });
    setLanguage(saved);
});
