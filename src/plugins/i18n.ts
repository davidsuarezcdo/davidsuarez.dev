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
        main_code: "My projects have been focused on {language}",
        time_coding: "This month I have spent a total of {hours} hours coding",
        top_day_coding: "With {hours} hours on average, my favorite day to coding has been {day}"
      },
      aboutme: `I define myself by my enthusiasm for programming. At the age of 14, I began developing in a self-taught way by reading in forums, sites, etc. Over time, I improved my skills thanks to my job opportunities and courses online.`,
      hours: "hour | hours",
      minutes: "minute | minutes"
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
        main_code: "Mis proyectos han estado enfocados en {language}",
        time_coding: "Este més he dedicado un total de {hours} horas programando",
        top_day_coding: "Con {hours} horas en promedio, mi día preferido para programar han sido los {day}"
      },
      aboutme: `Me defino a mi mismo como un entusiasta por la programación. A la edad de 14 años, comencé a desarrollar de forma autodidacta leyendo en foros, sitios, etc. Con el tiempo he mejorado mis habilidades gracias a mis oportunidades laborales y cursos en línea.`,
      hours: "hora | horas",
      minutes: "minuto | minutos"
    }
  }
});
