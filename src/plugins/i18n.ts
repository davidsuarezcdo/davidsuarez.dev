import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: {
    en: {
      now: "Now",
      years: "Years",
      language: "Language",
      title: {
        stats: "Stats",
        last_month: "Last month",
        about: "About me",
        profile: "Profile",
        skills: "Skills",
        courses: "Courses",
        projects: "Projects",
        contact: "Contact"
      },
      coursesTable: {
        career: "Career",
        course: "Course",
        diploma: "Diploma"
      },
      stats: {
        main_code: "Main language",
        time_coding: "Time coding",
        top_day_coding: "Top day coding"
      },
      aboutme: `I define myself by my enthusiasm for programming. At the age of 14, I began developing in a self-taught way by reading in forums, sites, etc. Over time, I improved my skills thanks to my job opportunities and courses online.`
    },
    es: {
      now: "Presente",
      language: "Idioma",
      title: {
        stats: "Estadisticas",
        last_month: "Último mes",
        about: "Acerca de mi",
        profile: "Perfil",
        skills: "Habilidades",
        courses: "Cursos",
        projects: "Proyectos",
        contact: "Contacto"
      },
      coursesTable: {
        career: "Carrera",
        course: "Curso",
        diploma: "Diploma"
      },
      stats: {
        main_code: "Lenguaje principal",
        time_coding: "Tiempo programando",
        top_day_coding: "Día donde más trabajo"
      },
      aboutme: `Me defino a mi mismo como un entusiasta por la programación. A la edad de 14 años, comencé a desarrollar de forma autodidacta leyendo en foros, sitios, etc. Con el tiempo he mejorado mis habilidades gracias a mis oportunidades laborales y cursos en línea.`
    }
  }
});
