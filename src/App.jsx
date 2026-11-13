import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    comment: ""
  });

  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        setLightbox(null);
        setActiveService(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const services = [
    {
      icon: "✦",
      title: "Лечение зубов",
      description: "Современное лечение кариеса и других заболеваний зубов с вниманием к комфорту пациента.",
      detail: "Комплексная диагностика, лечение кариеса и восстановление зубов с использованием современных стоматологических технологий."
    },
    {
      icon: "◈",
      title: "Профессиональная чистка",
      description: "Комплексный уход за полостью рта и профессиональное удаление зубного налёта.",
      detail: "Профессиональная гигиена полости рта помогает поддерживать здоровье зубов и дёсен. Метод процедуры определяется после осмотра."
    },
    {
      icon: "✧",
      title: "Отбеливание зубов",
      description: "Помогаем вернуть улыбке естественную яркость и привлекательность.",
      detail: "Профессиональные процедуры осветления зубов под контролем стоматолога с предварительной оценкой состояния эмали."
    },
    {
      icon: "◇",
      title: "Имплантация",
      description: "Современные решения для восстановления отсутствующих зубов.",
      detail: "Планирование восстановления зубного ряда с учётом индивидуальной анатомии и состояния здоровья пациента."
    },
    {
      icon: "⬡",
      title: "Установка коронок",
      description: "Восстановление формы, функции и эстетики повреждённых зубов.",
      detail: "Подбор подходящего варианта коронки с учётом клинической ситуации, прикуса и пожеланий пациента."
    },
    {
      icon: "⌁",
      title: "Ортодонтия",
      description: "Коррекция прикуса и положения зубов для гармоничной улыбки.",
      detail: "Индивидуальное ортодонтическое планирование, диагностика прикуса и подбор подходящего метода коррекции."
    },
    {
      icon: "✣",
      title: "Удаление зубов",
      description: "Профессиональное удаление зубов с заботой о самочувствии пациента.",
      detail: "Осмотр, диагностика и выбор подходящего способа удаления с последующими рекомендациями по уходу."
    },
    {
      icon: "♡",
      title: "Детская стоматология",
      description: "Внимательное отношение и комфортная атмосфера для маленьких пациентов.",
      detail: "Профилактические осмотры, рекомендации по гигиене и стоматологическое лечение с учётом возраста ребёнка."
    },
    {
      icon: "✺",
      title: "Экстренная помощь",
      description: "Стоматологическая помощь при внезапной зубной боли в любое время.",
      detail: "Возможность обратиться за стоматологической помощью круглосуточно. Приём проводится с учётом доступности врача."
    }
  ];

  const features = [
    {
      icon: "◷",
      title: "Работаем 24/7",
      text: "Возможность обратиться за стоматологической помощью в любое время суток."
    },
    {
      icon: "⌘",
      title: "Современные технологии",
      text: "Ориентир на современные методы диагностики и стоматологического лечения."
    },
    {
      icon: "♡",
      title: "Комфорт пациента",
      text: "Внимательное отношение и забота на каждом этапе посещения."
    },
    {
      icon: "✧",
      title: "Индивидуальный подход",
      text: "Рекомендации и план лечения с учётом особенностей каждого пациента."
    },
    {
      icon: "▤",
      title: "Удобная запись",
      text: "Оставьте заявку на сайте, чтобы обсудить удобное время посещения."
    },
    {
      icon: "✦",
      title: "Разные направления",
      text: "Основные стоматологические услуги в одном месте."
    }
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85",
      title: "Пространство заботы",
      category: "Интерьер клиники"
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1100&q=85",
      title: "Современная стоматология",
      category: "Оборудование"
    },
    {
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85",
      title: "Комфорт и внимание",
      category: "Стоматологический кабинет"
    },
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1100&q=85",
      title: "Забота о деталях",
      category: "Стоматология"
    }
  ];

  const navItems = [
    ["Главная", "#home"],
    ["Услуги", "#services"],
    ["О клинике", "#about"],
    ["Преимущества", "#advantages"],
    ["Контакты", "#contacts"]
  ];

  const scrollTo = id => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      comment: ""
    });
  };

  const Icon = ({ children, className = "" }) => (
    <span className={`icon ${className}`} aria-hidden="true">{children}</span>
  );

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #102b46;
          --navy2: #173d5c;
          --teal: #36b7b0;
          --teal-dark: #209c98;
          --pale: #eff8fa;
          --muted: #738494;
          --white: #ffffff;
          --border: #e6edf1;
          --shadow: 0 18px 55px rgba(20, 52, 76, .09);
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; scroll-padding-top: 90px; }

        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          color: var(--navy);
          background: white;
          overflow-x: hidden;
        }

        button, input, select, textarea { font: inherit; }
        button { cursor: pointer; }
        a { color: inherit; text-decoration: none; }

        .site { overflow: hidden; }
        .container { width: min(1190px, calc(100% - 48px)); margin: auto; }

        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Manrope', sans-serif;
          line-height: 1;
        }

        .topbar {
          background: var(--navy);
          color: #d7e7f0;
          font-size: 12px;
          padding: 10px 0;
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .topbar-left, .topbar-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .top-item { display: flex; align-items: center; gap: 8px; }
        .top-item span:first-child { color: var(--teal); font-size: 15px; }

        .navbar {
          height: 83px;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(230,237,241,.8);
        }

        .nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-mark {
          width: 43px;
          height: 43px;
          background: var(--navy);
          color: white;
          display: grid;
          place-items: center;
          border-radius: 13px;
          font-size: 25px;
          font-weight: 800;
          position: relative;
          overflow: hidden;
        }

        .logo-mark:after {
          content: "";
          position: absolute;
          width: 17px;
          height: 17px;
          background: var(--teal);
          border-radius: 50%;
          right: -5px;
          bottom: -5px;
        }

        .logo-name {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 17px;
          letter-spacing: -.8px;
          line-height: 1.15;
        }

        .logo-sub {
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.1px;
          margin-top: 4px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links a {
          font-size: 13px;
          font-weight: 600;
          color: #52677a;
          transition: .25s;
        }

        .nav-links a:hover { color: var(--teal-dark); }

        .btn {
          border: 0;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: var(--teal);
          color: white;
          font-weight: 700;
          font-size: 13px;
          padding: 16px 23px;
          border-radius: 8px;
          transition: .3s;
          box-shadow: 0 8px 22px rgba(54,183,176,.18);
        }

        .btn:hover {
          background: var(--teal-dark);
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(54,183,176,.26);
        }

        .btn-dark {
          background: var(--navy);
          box-shadow: none;
        }

        .btn-dark:hover { background: var(--navy2); }

        .menu-toggle {
          display: none;
          border: 0;
          background: var(--pale);
          color: var(--navy);
          border-radius: 9px;
          width: 43px;
          height: 43px;
          font-size: 23px;
        }

        .hero {
          min-height: 680px;
          position: relative;
          background:
            radial-gradient(ellipse at 80% 30%, rgba(194,236,238,.45), transparent 35%),
            linear-gradient(120deg,#f8fbfc 0%,#eff8fa 100%);
          display: flex;
          align-items: center;
        }

        .hero:before {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(54,183,176,.15);
          border-radius: 50%;
          right: -140px;
          top: -190px;
        }

        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          padding: 75px 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--teal-dark);
          background: rgba(54,183,176,.10);
          padding: 9px 14px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 0 4px rgba(54,183,176,.12);
        }

        .hero h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(43px, 5.2vw, 67px);
          line-height: 1.13;
          letter-spacing: -3.5px;
          margin: 27px 0 21px;
          font-weight: 800;
        }

        .hero h1 span { color: var(--teal-dark); }

        .hero-desc {
          font-size: 16px;
          line-height: 1.9;
          color: #718291;
          max-width: 485px;
          margin-bottom: 30px;
        }

        .hero-actions { display: flex; gap: 13px; flex-wrap: wrap; }

        .btn-outline {
          color: var(--navy);
          background: white;
          border: 1px solid #dce8ec;
          box-shadow: none;
        }

        .btn-outline:hover { background: #f4fbfb; color: var(--navy); }

        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 40px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 11px;
          font-weight: 700;
          color: #637789;
        }

        .trust-check {
          width: 24px;
          height: 24px;
          background: white;
          color: var(--teal-dark);
          border-radius: 50%;
          display: grid;
          place-items: center;
          box-shadow: 0 3px 10px rgba(20,52,76,.07);
        }

        .hero-visual {
          position: relative;
          min-height: 480px;
        }

        .hero-image {
          position: absolute;
          inset: 0 0 0 15px;
          width: calc(100% - 15px);
          height: 100%;
          object-fit: cover;
          border-radius: 18px 100px 18px 18px;
          box-shadow: 0 30px 65px rgba(16,43,70,.17);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          border-radius: 18px 100px 18px 18px;
          background: linear-gradient(0deg,rgba(16,43,70,.20),transparent 50%);
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          background: white;
          border-radius: 13px;
          padding: 17px 20px;
          box-shadow: 0 15px 40px rgba(16,43,70,.14);
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .floating-one { bottom: 35px; left: -38px; }
        .floating-two { top: 40px; right: -24px; }

        .floating-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #eaf8f7;
          color: var(--teal-dark);
          font-size: 22px;
        }

        .floating-title { font-size: 12px; font-weight: 800; }
        .floating-sub { font-size: 10px; color: var(--muted); margin-top: 4px; }

        .availability {
          position: absolute;
          right: -15px;
          bottom: -23px;
          background: var(--navy);
          color: white;
          border-radius: 12px;
          padding: 15px 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 30px rgba(16,43,70,.2);
        }

        .availability strong { font-size: 24px; font-family: 'Manrope'; }
        .availability small { display: block; color: #a8c1ce; font-size: 9px; letter-spacing: 1px; }

        .stats {
          position: relative;
          margin-top: -1px;
          background: var(--navy);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          padding: 28px 0;
        }

        .stat {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          border-right: 1px solid rgba(255,255,255,.13);
        }

        .stat:last-child { border: 0; }
        .stat-icon { color: var(--teal); font-size: 25px; }
        .stat strong { font-family: 'Manrope'; font-size: 17px; display: block; }
        .stat small { display: block; color: #a9bdca; font-size: 10px; margin-top: 4px; }

        section { padding: 105px 0; }

        .section-heading {
          max-width: 650px;
          margin-bottom: 48px;
        }

        .section-heading.center { margin-left: auto; margin-right: auto; text-align: center; }

        .section-label {
          font-size: 11px;
          color: var(--teal-dark);
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .section-heading h2 {
          font-family: 'Manrope',sans-serif;
          font-size: clamp(31px,4vw,44px);
          letter-spacing: -1.8px;
          line-height: 1.22;
          margin: 0 0 16px;
        }

        .section-heading h2 span { color: var(--teal-dark); }

        .section-heading p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .services { background: white; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 19px;
        }

        .service-card {
          position: relative;
          background: white;
          padding: 30px 27px;
          border: 1px solid var(--border);
          border-radius: 12px;
          min-height: 242px;
          transition: .35s;
          overflow: hidden;
        }

        .service-card:before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(54,183,176,.07);
          top: -55px;
          right: -55px;
          transition: .35s;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(54,183,176,.5);
          box-shadow: var(--shadow);
        }

        .service-card:hover:before { transform: scale(2.1); }

        .service-icon {
          width: 51px;
          height: 51px;
          background: var(--pale);
          color: var(--teal-dark);
          display: grid;
          place-items: center;
          border-radius: 13px;
          font-size: 24px;
          margin-bottom: 23px;
          position: relative;
          transition: .3s;
        }

        .service-card:hover .service-icon {
          background: var(--teal);
          color: white;
        }

        .service-card h3 {
          font-family: 'Manrope';
          font-size: 16px;
          margin: 0 0 10px;
          font-weight: 800;
        }

        .service-card p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .text-link {
          color: var(--teal-dark);
          border: 0;
          background: transparent;
          padding: 0;
          font-size: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .text-link span { transition: .25s; }
        .text-link:hover span { transform: translateX(5px); }

        .about { background: #f5fafb; }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
        }

        .about-images {
          position: relative;
          min-height: 515px;
        }

        .about-main {
          position: absolute;
          width: 82%;
          height: 430px;
          object-fit: cover;
          top: 0;
          left: 0;
          border-radius: 12px 75px 12px 12px;
          box-shadow: var(--shadow);
        }

        .about-secondary {
          position: absolute;
          width: 48%;
          height: 220px;
          object-fit: cover;
          bottom: 0;
          right: 0;
          border: 9px solid #f5fafb;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }

        .about-number {
          position: absolute;
          bottom: 40px;
          left: 0;
          background: var(--navy);
          color: white;
          padding: 19px 24px;
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        .about-number strong { display: block; font-size: 25px; font-family: 'Manrope'; }
        .about-number small { font-size: 10px; color: #b7c9d4; }

        .about-copy h2 {
          font-family: 'Manrope';
          font-size: clamp(32px,4vw,43px);
          line-height: 1.25;
          letter-spacing: -1.8px;
          margin: 0 0 20px;
        }

        .about-copy h2 span { color: var(--teal-dark); }

        .about-copy > p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.95;
          margin-bottom: 27px;
        }

        .about-points { display: grid; gap: 17px; margin-bottom: 30px; }

        .about-point { display: flex; align-items: flex-start; gap: 13px; }

        .point-icon {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 9px;
          color: var(--teal-dark);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(20,52,76,.06);
        }

        .about-point strong { font-size: 13px; display: block; margin-bottom: 4px; }
        .about-point small { color: var(--muted); font-size: 11px; line-height: 1.7; }

        .advantages { background: white; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .feature {
          border: 1px solid var(--border);
          padding: 30px;
          border-radius: 12px;
          transition: .3s;
        }

        .feature:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow);
          border-color: #cce9e7;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #eaf8f7;
          color: var(--teal-dark);
          font-size: 23px;
          margin-bottom: 21px;
        }

        .feature h3 { font-size: 15px; font-family: 'Manrope'; margin: 0 0 10px; }
        .feature p { color: var(--muted); font-size: 12px; line-height: 1.8; margin: 0; }

        .banner {
          background: var(--navy);
          position: relative;
          overflow: hidden;
          color: white;
          padding: 65px 0;
        }

        .banner:after {
          content: "";
          position: absolute;
          right: -100px;
          top: -180px;
          width: 470px;
          height: 470px;
          border: 1px solid rgba(54,183,176,.3);
          border-radius: 50%;
          box-shadow: 0 0 0 45px rgba(54,183,176,.04),0 0 0 90px rgba(54,183,176,.03);
        }

        .banner-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
          position: relative;
          z-index: 1;
        }

        .banner h2 {
          font-family: 'Manrope';
          font-size: clamp(28px,4vw,39px);
          letter-spacing: -1px;
          margin: 0 0 12px;
        }

        .banner p { color: #b8cbd5; font-size: 13px; line-height: 1.8; margin: 0; max-width: 600px; }

        .gallery { background: #f5fafb; }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          grid-template-rows: 220px 220px;
          gap: 15px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          background: #dfeaed;
        }

        .gallery-item:first-child { grid-row: span 2; }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s;
        }

        .gallery-item:hover img { transform: scale(1.07); }

        .gallery-caption {
          position: absolute;
          inset: auto 0 0;
          padding: 35px 20px 19px;
          color: white;
          background: linear-gradient(transparent,rgba(9,29,47,.8));
          opacity: .95;
        }

        .gallery-caption small {
          display: block;
          font-size: 10px;
          color: #a8e3df;
          margin-bottom: 5px;
        }

        .gallery-caption strong { font-family: 'Manrope'; font-size: 14px; }

        .gallery-expand {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--navy);
          background: white;
          opacity: 0;
          transform: translateY(5px);
          transition: .3s;
        }

        .gallery-item:hover .gallery-expand { opacity: 1; transform: none; }

        .booking {
          background:
            radial-gradient(circle at 10% 80%,rgba(54,183,176,.10),transparent 30%),
            #fff;
        }

        .booking-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 75px;
          align-items: center;
        }

        .booking-copy h2 {
          font-family: 'Manrope';
          font-size: 43px;
          line-height: 1.2;
          letter-spacing: -2px;
          margin: 0 0 18px;
        }

        .booking-copy h2 span { color: var(--teal-dark); }
        .booking-copy > p { color: var(--muted); font-size: 14px; line-height: 1.9; }

        .booking-info { margin-top: 30px; display: grid; gap: 18px; }

        .booking-info-item { display: flex; gap: 13px; align-items: center; }

        .booking-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          background: var(--pale);
          color: var(--teal-dark);
          font-size: 19px;
        }

        .booking-info strong { display: block; font-size: 12px; margin-bottom: 4px; }
        .booking-info small { font-size: 11px; color: var(--muted); }

        .booking-form {
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 38px;
          box-shadow: 0 20px 65px rgba(20,52,76,.08);
        }

        .booking-form h3 { font-family: 'Manrope'; font-size: 23px; margin: 0 0 8px; }
        .form-sub { font-size: 12px; color: var(--muted); margin: 0 0 27px; }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field.full { grid-column: 1/-1; }

        .field label { font-size: 11px; font-weight: 700; color: #52677a; }

        .field input, .field select, .field textarea {
          border: 1px solid #e1e9ed;
          background: #fbfdfe;
          border-radius: 7px;
          padding: 13px 14px;
          font-size: 12px;
          color: var(--navy);
          outline: none;
          transition: .25s;
          width: 100%;
        }

        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(54,183,176,.1);
        }

        .field textarea { resize: vertical; min-height: 95px; }
        .form-submit { width: 100%; margin-top: 20px; }
        .form-note { font-size: 10px; line-height: 1.7; color: #93a1ad; text-align: center; margin: 13px 0 0; }

        .success {
          text-align: center;
          padding: 30px 5px;
        }

        .success-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 20px;
          background: #e8f8f4;
          color: #239e83;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 30px;
        }

        .success h3 { font-family: 'Manrope'; font-size: 25px; }
        .success p { color: var(--muted); font-size: 13px; line-height: 1.8; }

        .contacts { background: #f5fafb; }

        .contacts-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 55px;
        }

        .contact-cards { display: grid; gap: 13px; }

        .contact-card {
          display: flex;
          gap: 15px;
          padding: 19px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 10px;
        }

        .contact-card-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          background: #eaf8f7;
          color: var(--teal-dark);
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-size: 19px;
        }

        .contact-card strong { display: block; font-size: 12px; margin: 3px 0 6px; }
        .contact-card p { margin: 0; color: var(--muted); font-size: 11px; line-height: 1.7; }

        .socials { display: flex; gap: 10px; margin-top: 23px; }

        .social {
          width: 42px;
          height: 42px;
          border: 1px solid #dfe9ed;
          background: white;
          color: var(--navy);
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-size: 15px;
          font-weight: 800;
          transition: .25s;
        }

        .social:hover { background: var(--teal); color: white; border-color: var(--teal); }

        .map-placeholder {
          background: #e7f0f1;
          border-radius: 13px;
          min-height: 440px;
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-image:
            linear-gradient(30deg,transparent 48%,rgba(255,255,255,.7) 49%,rgba(255,255,255,.7) 51%,transparent 52%),
            linear-gradient(120deg,transparent 48%,rgba(255,255,255,.7) 49%,rgba(255,255,255,.7) 51%,transparent 52%);
          background-size: 85px 85px,110px 110px;
        }

        .map-center {
          position: relative;
          z-index: 1;
          background: white;
          padding: 28px 35px;
          border-radius: 13px;
          box-shadow: var(--shadow);
        }

        .map-pin {
          width: 47px;
          height: 47px;
          background: var(--teal);
          color: white;
          border-radius: 50% 50% 50% 5px;
          transform: rotate(-45deg);
          display: grid;
          place-items: center;
          margin: 0 auto 17px;
          font-size: 20px;
        }

        .map-pin span { transform: rotate(45deg); }
        .map-center h3 { font-family: 'Manrope'; font-size: 17px; margin: 0 0 8px; }
        .map-center p { color: var(--muted); font-size: 11px; line-height: 1.7; margin: 0 0 17px; }

        .footer {
          background: #0d243b;
          color: white;
          padding: 70px 0 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 45px;
          padding-bottom: 50px;
        }

        .footer .logo-name { color: white; }
        .footer .logo-sub { color: #a2b4c2; }

        .footer-about {
          color: #9fb1bf;
          font-size: 12px;
          line-height: 1.9;
          margin-top: 20px;
          max-width: 290px;
        }

        .footer h4 {
          font-family: 'Manrope';
          font-size: 13px;
          margin: 5px 0 23px;
        }

        .footer-links { display: grid; gap: 14px; }
        .footer-links a { color: #9fb1bf; font-size: 11px; transition: .2s; }
        .footer-links a:hover { color: var(--teal); }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.10);
          padding: 21px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: #7f96a7;
          font-size: 10px;
        }

        .back-top {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 80;
          width: 45px;
          height: 45px;
          background: var(--navy);
          color: white;
          border: 0;
          border-radius: 10px;
          box-shadow: var(--shadow);
          font-size: 20px;
          transition: .3s;
        }

        .back-top:hover { background: var(--teal); transform: translateY(-4px); }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(7,23,37,.72);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
          animation: fadeIn .2s;
        }

        .modal {
          width: min(480px,100%);
          background: white;
          padding: 35px;
          border-radius: 15px;
          position: relative;
          animation: modalIn .3s;
        }

        .modal-close {
          position: absolute;
          right: 17px;
          top: 17px;
          width: 33px;
          height: 33px;
          border: 0;
          border-radius: 8px;
          background: #eff5f6;
          font-size: 19px;
          color: var(--navy);
        }

        .modal h3 { font-family: 'Manrope'; font-size: 23px; margin: 0 0 13px; }
        .modal p { font-size: 13px; line-height: 1.9; color: var(--muted); }
        .modal .btn { margin-top: 12px; }

        .lightbox img {
          max-width: min(100%,1000px);
          max-height: 80vh;
          border-radius: 12px;
          object-fit: contain;
        }

        .lightbox button {
          position: absolute;
          top: 22px;
          right: 25px;
          background: white;
          color: var(--navy);
          border: 0;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          font-size: 23px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity .7s ease, transform .7s ease;
        }

        .reveal.visible { opacity: 1; transform: translateY(0); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalIn { from { transform: translateY(15px) scale(.97); opacity: 0; } to { transform: none; opacity: 1; } }

        @media(max-width: 1050px) {
          .nav-links { gap: 17px; }
          .nav-links a { font-size: 12px; }
          .hero-grid { gap: 35px; }
          .about-grid { gap: 45px; }
          .booking-grid { gap: 40px; }
          .footer-grid { gap: 25px; }
        }

        @media(max-width: 800px) {
          .container { width: min(100% - 36px,600px); }
          .topbar-right { display: none; }
          .navbar { height: 72px; }
          .menu-toggle { display: grid; place-items: center; }
          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            padding: 20px 25px 25px;
            background: white;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            border-bottom: 1px solid var(--border);
            box-shadow: 0 15px 25px rgba(16,43,70,.08);
          }

          .nav-links.open { display: flex; }
          .nav-links a { padding: 14px 0; border-bottom: 1px solid #f0f3f5; font-size: 14px; }
          .nav-cta { display: none; }

          .hero-grid { grid-template-columns: 1fr; padding: 65px 0 80px; gap: 45px; }
          .hero h1 { max-width: 570px; }
          .hero-visual { min-height: 430px; }
          .hero-image { inset: 0; width: 100%; }
          .floating-one { left: -5px; }
          .floating-two { right: -5px; }

          .stats-grid { grid-template-columns: repeat(2,1fr); row-gap: 25px; }
          .stat:nth-child(2) { border: 0; }
          .stat { justify-content: flex-start; padding-left: 15px; }

          section { padding: 75px 0; }
          .services-grid, .features-grid { grid-template-columns: repeat(2,1fr); }
          .about-grid, .booking-grid, .contacts-grid { grid-template-columns: 1fr; gap: 45px; }
          .about-images { max-width: 550px; width: 100%; }
          .about-copy { order: -1; }
          .booking-copy h2 { font-size: 37px; }
          .gallery-grid { grid-template-rows: 200px 200px; }
          .footer-grid { grid-template-columns: repeat(2,1fr); }
        }

        @media(max-width: 520px) {
          .container { width: calc(100% - 32px); }
          .topbar { font-size: 10px; }
          .topbar-left { gap: 12px; }
          .logo-mark { width: 39px; height: 39px; }
          .logo-name { font-size: 15px; }

          .hero { min-height: auto; }
          .hero-grid { padding: 55px 0 65px; }
          .hero h1 { font-size: 43px; letter-spacing: -2.2px; }
          .hero-desc { font-size: 14px; }
          .hero-trust { gap: 13px; }
          .trust-item { font-size: 10px; }
          .hero-visual { min-height: 320px; }
          .hero-image, .image-overlay { border-radius: 12px 70px 12px 12px; }
          .floating-card { padding: 11px 13px; }
          .floating-icon { width: 35px; height: 35px; font-size: 18px; }
          .floating-title { font-size: 10px; }
          .floating-sub { font-size: 9px; }
          .availability { padding: 11px 14px; right: -3px; }
          .availability strong { font-size: 19px; }

          .stats-grid { padding: 23px 0; gap: 22px 5px; }
          .stat { padding-left: 4px; gap: 9px; }
          .stat strong { font-size: 14px; }
          .stat small { font-size: 9px; }
          .stat-icon { font-size: 21px; }

          section { padding: 65px 0; }
          .section-heading { margin-bottom: 32px; }
          .section-heading h2 { font-size: 32px; letter-spacing: -1.2px; }
          .section-heading p { font-size: 13px; }

          .services-grid, .features-grid { grid-template-columns: 1fr; gap: 13px; }
          .service-card { min-height: auto; padding: 24px; }
          .service-icon { margin-bottom: 16px; }
          .feature { padding: 24px; }

          .about-images { min-height: 390px; }
          .about-main { height: 330px; width: 90%; }
          .about-secondary { height: 170px; width: 49%; border-width: 6px; }
          .about-number { padding: 13px 17px; bottom: 25px; }
          .about-copy h2 { font-size: 33px; }

          .banner { padding: 48px 0; }
          .banner-inner { flex-direction: column; align-items: flex-start; }
          .banner h2 { font-size: 29px; }

          .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 230px 170px 170px; gap: 10px; }
          .gallery-item:first-child { grid-column: 1/-1; grid-row: auto; }
          .gallery-caption { padding: 30px 12px 12px; }
          .gallery-caption strong { font-size: 12px; }
          .gallery-caption small { font-size: 9px; }
          .gallery-expand { opacity: 1; transform: none; }

          .booking-form { padding: 23px 18px; }
          .booking-form h3 { font-size: 21px; }
          .form-grid { grid-template-columns: 1fr; gap: 15px; }
          .field.full { grid-column: auto; }

          .map-placeholder { min-height: 330px; }
          .footer { padding-top: 50px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 35px 20px; }
          .footer-grid > div:first-child { grid-column: 1/-1; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .back-top { right: 15px; bottom: 15px; width: 41px; height: 41px; }
          .modal { padding: 28px 22px; }
        }

        @media(prefers-reduced-motion: reduce) {
          *, *:before, *:after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <div className="top-item">
              <span>◷</span>
              <span>Круглосуточно · 24/7</span>
            </div>
            <div className="top-item">
              <span>⌖</span>
              <span>Ташкент, Узбекистан</span>
            </div>
          </div>
          <div className="topbar-right">
            <span>Профессиональная стоматологическая помощь</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a className="logo" href="#home" aria-label="SUR'AT STOM главная">
            <div className="logo-mark">S</div>
            <div>
              <div className="logo-name">SUR'AT STOM</div>
              <div className="logo-sub">DENTAL CLINIC · 24/7</div>
            </div>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, link]) => (
              <a key={link} href={link} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>

          <button className="btn nav-cta" onClick={() => scrollTo("#booking")}>
            Записаться <span>↗</span>
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                Стоматология 24/7
              </div>

              <h1>
                Ваша улыбка — <span>наша забота.</span>
              </h1>

              <p className="hero-desc">
                Современная стоматология, профессиональный подход и
                внимательное отношение к каждому пациенту.
                Заботимся о здоровье вашей улыбки днём и ночью.
              </p>

              <div className="hero-actions">
                <button className="btn" onClick={() => scrollTo("#booking")}>
                  Записаться на приём <span>↗</span>
                </button>
                <button className="btn btn-outline" onClick={() => scrollTo("#services")}>
                  Наши услуги <span>→</span>
                </button>
              </div>

              <div className="hero-trust">
                {[
                  "Работаем 24/7",
                  "Современное оборудование",
                  "Индивидуальный подход"
                ].map(item => (
                  <div className="trust-item" key={item}>
                    <span className="trust-check">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90"
                alt="Современный интерьер стоматологической клиники"
                onError={e => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85";
                }}
              />
              <div className="image-overlay"></div>

              <div className="floating-card floating-one">
                <div className="floating-icon">♡</div>
                <div>
                  <div className="floating-title">Забота о вас</div>
                  <div className="floating-sub">Комфорт на каждом этапе</div>
                </div>
              </div>

              <div className="floating-card floating-two">
                <div className="floating-icon">✧</div>
                <div>
                  <div className="floating-title">Современный подход</div>
                  <div className="floating-sub">Технологии и внимание</div>
                </div>
              </div>

              <div className="availability">
                <div>
                  <strong>24/7</strong>
                  <small>МЫ РЯДОМ КРУГЛОСУТОЧНО</small>
                </div>
                <span style={{ color: "#45d2c5", fontSize: 24 }}>◷</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="container stats-grid">
            {[
              ["◷", "24 / 7", "Круглосуточная работа"],
              ["✧", "Modern", "Современный подход"],
              ["♡", "Care", "Забота о пациентах"],
              ["⌖", "Tashkent", "Узбекистан"]
            ].map(([icon, title, desc]) => (
              <div className="stat" key={title}>
                <div className="stat-icon">{icon}</div>
                <div>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-heading center reveal">
              <div className="section-label">НАШИ УСЛУГИ</div>
              <h2>
                Комплексная забота о <span>вашей улыбке</span>
              </h2>
              <p>
                Подбираем подход к каждому пациенту и предлагаем
                стоматологические решения с учётом индивидуальных потребностей.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="text-link"
                    onClick={() => setActiveService(service)}
                  >
                    Подробнее <span>→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="container about-grid">
            <div className="about-images reveal">
              <img
                className="about-main"
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85"
                alt="Стоматологический кабинет"
                loading="lazy"
                onError={e => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85";
                }}
              />
              <img
                className="about-secondary"
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=85"
                alt="Современная стоматология"
                loading="lazy"
              />
              <div className="about-number">
                <strong>24/7</strong>
                <small>ЗАБОТА БЕЗ ВЫХОДНЫХ</small>
              </div>
            </div>

            <div className="about-copy reveal">
              <div className="section-label">О НАШЕЙ КЛИНИКЕ</div>
              <h2>
                Современная стоматология с <span>заботой о каждом пациенте.</span>
              </h2>
              <p>
                SUR'AT STOM 24/7 — стоматологическая клиника в Ташкенте,
                где внимание к пациенту сочетается с современным подходом
                к стоматологическому лечению.
              </p>

              <div className="about-points">
                {[
                  ["✧", "Комфортная атмосфера", "Внимание к удобству пациента во время посещения."],
                  ["⌘", "Современные технологии", "Ориентир на актуальные методы диагностики и лечения."],
                  ["♡", "Индивидуальный подход", "Решения с учётом потребностей каждого пациента."],
                  ["◷", "Доступность 24/7", "Круглосуточный режим работы клиники."]
                ].map(([icon, title, desc]) => (
                  <div className="about-point" key={title}>
                    <div className="point-icon">{icon}</div>
                    <div>
                      <strong>{title}</strong>
                      <small>{desc}</small>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn btn-dark" onClick={() => scrollTo("#booking")}>
                Связаться с нами <span>↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="advantages" id="advantages">
          <div className="container">
            <div className="section-heading center reveal">
              <div className="section-label">ПОЧЕМУ SUR'AT STOM</div>
              <h2>Ваш комфорт — <span>наш приоритет.</span></h2>
              <p>
                Мы стремимся сделать посещение стоматолога понятным,
                комфортным и максимально удобным.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  className="feature reveal"
                  key={feature.title}
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <div className="banner">
          <div className="container banner-inner reveal">
            <div>
              <h2>Здоровая улыбка не ждёт.</h2>
              <p>
                Нужна стоматологическая помощь? Оставьте заявку
                и обсудите удобное время посещения с клиникой.
              </p>
            </div>
            <button className="btn" onClick={() => scrollTo("#booking")}>
              Записаться сейчас <span>↗</span>
            </button>
          </div>
        </div>

        {/* GALLERY */}
        <section className="gallery" id="gallery">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-label">НАША АТМОСФЕРА</div>
              <h2>Пространство, где <span>заботятся о вас.</span></h2>
              <p>
                Комфортная обстановка и современная стоматологическая среда
                для приятного посещения.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div
                  className="gallery-item reveal"
                  key={item.title}
                  onClick={() => setLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === "Enter") setLightbox(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={e => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  <div className="gallery-caption">
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                  </div>
                  <div className="gallery-expand">↗</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="booking" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy reveal">
              <div className="section-label">ЗАПИСЬ НА ПРИЁМ</div>
              <h2>
                Начните с <span>одного шага.</span>
              </h2>
              <p>
                Заполните небольшую форму, укажите удобную дату
                и интересующую услугу. Это демонстрационная форма:
                для реальной отправки заявок необходимо подключить
                телефон, Telegram или сервер.
              </p>

              <div className="booking-info">
                <div className="booking-info-item">
                  <div className="booking-info-icon">◷</div>
                  <div>
                    <strong>Круглосуточный режим</strong>
                    <small>24 часа в сутки, 7 дней в неделю</small>
                  </div>
                </div>

                <div className="booking-info-item">
                  <div className="booking-info-icon">♡</div>
                  <div>
                    <strong>Индивидуальный подход</strong>
                    <small>Внимание к каждому пациенту</small>
                  </div>
                </div>

                <div className="booking-info-item">
                  <div className="booking-info-icon">✧</div>
                  <div>
                    <strong>Удобная запись</strong>
                    <small>Выберите интересующую услугу</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-form reveal">
              {!submitted ? (
                <>
                  <h3>Записаться на приём</h3>
                  <p className="form-sub">
                    Заполните поля ниже для демонстрации заявки.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="field">
                        <label htmlFor="name">Ваше имя *</label>
                        <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Например, Азиз"
                          required
                          minLength={2}
                          maxLength={60}
                        />
                      </div>

                      <div className="field">
                        <label htmlFor="phone">Номер телефона *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+998 90 123 45 67"
                          pattern="[+0-9()\\-\\s]{9,20}"
                          title="Введите корректный номер телефона"
                          required
                        />
                      </div>

                      <div className="field full">
                        <label htmlFor="service">Выберите услугу *</label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Выберите направление</option>
                          {services.map(s => (
                            <option key={s.title} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field full">
                        <label htmlFor="date">Желаемая дата *</label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={new Date().toLocaleDateString("en-CA")}
                          value={form.date}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="field full">
                        <label htmlFor="comment">Комментарий</label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={form.comment}
                          onChange={handleChange}
                          placeholder="Расскажите, чем мы можем помочь..."
                          maxLength={500}
                        />
                      </div>
                    </div>

                    <button className="btn form-submit" type="submit">
                      Отправить заявку <span>↗</span>
                    </button>

                    <p className="form-note">
                      Демо-режим: данные не отправляются в клинику
                      и не сохраняются на сервере.
                    </p>
                  </form>
                </>
              ) : (
                <div className="success">
                  <div className="success-icon">✓</div>
                  <h3>Форма заполнена!</h3>
                  <p>
                    Это демонстрационная версия сайта.
                    Заявка не была отправлена в клинику.
                    Для реальной записи необходимо подключить
                    систему обработки заявок.
                  </p>
                  <button className="btn" onClick={() => setSubmitted(false)}>
                    Вернуться к форме
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="contacts" id="contacts">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-label">МЫ НА СВЯЗИ</div>
              <h2>Будем рады <span>вашему визиту.</span></h2>
              <p>
                Свяжитесь с SUR'AT STOM 24/7 или уточните расположение
                клиники перед посещением.
              </p>
            </div>

            <div className="contacts-grid">
              <div className="reveal">
                <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-card-icon">⌖</div>
                    <div>
                      <strong>Наше расположение</strong>
                      <p>Ташкент, Узбекистан<br />Точный адрес уточняется</p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">◷</div>
                    <div>
                      <strong>Режим работы</strong>
                      <p>Круглосуточно<br />24 часа · 7 дней в неделю</p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">☎</div>
                    <div>
                      <strong>Телефон</strong>
                      <p>Номер телефона необходимо добавить</p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">✉</div>
                    <div>
                      <strong>Социальные сети</strong>
                      <p>Следите за новостями и обновлениями клиники.</p>
                    </div>
                  </div>
                </div>

                <div className="socials">
                  <a
                    className="social"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >ig</a>
                  <a
                    className="social"
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                  >tg</a>
                </div>
              </div>

              <div className="map-placeholder reveal">
                <div className="map-center">
                  <div className="map-pin"><span>⌖</span></div>
                  <h3>SUR'AT STOM 24/7</h3>
                  <p>
                    Ташкент, Узбекистан<br />
                    Здесь будет расположена карта клиники.
                  </p>
                  <a
                    className="btn btn-dark"
                    href="https://www.google.com/maps/search/?api=1&query=SUR%27AT+STOM+24%2F7+Tashkent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Найти на карте ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="logo" href="#home">
                <div className="logo-mark">S</div>
                <div>
                  <div className="logo-name">SUR'AT STOM</div>
                  <div className="logo-sub">DENTAL CLINIC · 24/7</div>
                </div>
              </a>
              <p className="footer-about">
                Современная стоматология в Ташкенте.
                Профессиональный подход, внимание к деталям
                и забота о вашей улыбке круглосуточно.
              </p>
              <div className="socials">
                <a className="social" href="https://instagram.com/" target="_blank" rel="noreferrer">ig</a>
                <a className="social" href="https://t.me/" target="_blank" rel="noreferrer">tg</a>
              </div>
            </div>

            <div>
              <h4>Навигация</h4>
              <div className="footer-links">
                {navItems.map(([label, link]) => (
                  <a key={link} href={link}>{label}</a>
                ))}
              </div>
            </div>

            <div>
              <h4>Услуги</h4>
              <div className="footer-links">
                {services.slice(0, 6).map(s => (
                  <a key={s.title} href="#services">{s.title}</a>
                ))}
              </div>
            </div>

            <div>
              <h4>Контакты</h4>
              <div className="footer-links">
                <a href="#contacts">Ташкент, Узбекистан</a>
                <a href="#contacts">Телефон уточняется</a>
                <a href="#contacts">Режим работы: 24/7</a>
                <a href="#booking">Записаться на приём</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SUR'AT STOM 24/7. Все права защищены.</span>
            <span>Здоровье вашей улыбки — наша забота.</span>
          </div>
        </div>
      </footer>

      {/* SERVICE MODAL */}
      {activeService && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveService(null)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Закрыть"
            >×</button>

            <div className="service-icon">{activeService.icon}</div>
            <div className="section-label">НАШИ УСЛУГИ</div>
            <h3 id="service-modal-title">{activeService.title}</h3>
            <p>{activeService.detail}</p>
            <button
              className="btn"
              onClick={() => {
                setForm(prev => ({ ...prev, service: activeService.title }));
                setActiveService(null);
                scrollTo("#booking");
              }}
            >
              Записаться на приём ↗
            </button>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX */}
      {lightbox && (
        <div
          className="modal-backdrop lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Закрыть изображение"
          >×</button>
          <img
            src={lightbox.image}
            alt={lightbox.title}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* BACK TO TOP */}
      <button
        className="back-top"
        onClick={() => scrollTo("#home")}
        aria-label="Наверх"
        title="Наверх"
      >
        ↑
      </button>
    </div>
  );
}