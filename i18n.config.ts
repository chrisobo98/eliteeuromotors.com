export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    en: {
      home: {
        hero: {
          title: "Elite Euro Motors",
          description:
            "Where Tradition Meets Excellence",
          button: "Schedule an Appointment",
        },
        navbar: {
          appointment: "Set up Appointment",
          home: "Home",
          contact: "Contact",
          services: "Services",
          about: "About",
          careers: "Careers",
          blog: "Blog"
        },
        mystory: {
          journey: "A LONG JOURNEY",
          storyheader: "MY STORY",
          storytext:
            "A seasoned front-end software developer with a proven track record in both the corporate sphere and the startup ecosystem. With a passion for crafting user-centric solutions, I ensure that every project not only meets but exceeds expectations.",
          storyButton: "See Resume",
        },
        services: {
          subheader: "MY SERVICES",
          header: "PROFESSIONAL SERVICES",
          consultation: "Small Business Consultation",
          consultation_text:
            "Empowering small businesses to establish a robust online footprint.",
          softwaredev: "Website & Software Development",
          softwaredev_text:
            "From concept to creation, crafting websites tailored to your brand’s needs.",
          maintenance_and_support: "Maintenance & Training",
          maintenance_and_support_text:
            "Ensuring sustainability through comprehensive maintenance and hands-on training.",
          seo_marketing_ads: "Advanced SEO, Marketing, & Ads",
          seo_marketing_ads_text:
            "SEO-optimiziation, implementing targeted digital marketing campaigns, and creating impactful advertisements",
        },
        portfolio: {
          subheader: "PORTFOLIO",
          header: "Showcase of Excellence",
          portfolio_elite_header: "Elite Euro Motors",
          portfolio_elite_text:
            "Website Design, SEO, Marketing with a big emphasis on Email Marketing, Consulting, and overhaul of online presence.",
          portfolio_4star_header: "4 Star Customs",
          portfolio_4star_text:
            "Website design and implementation done for 4StarCustoms, a body shop in Ocoee, Florida.",
          button_text: "View Site",
        },
        contact: {
          header: "Contact Us",
          description: "Have a question about your vehicle? Need to schedule an appointment or get a quote? We're here to help! Fill out the contact form below, and one of our expert technicians will get back to you promptly. Whether you're experiencing issues with your car or just need routine maintenance, we're dedicated to providing top-notch service and ensuring your European vehicle runs smoothly.",
          name: "Your Name",
          name_header: "Name",
          email: "name@example.com",
          email_header: "Email Address",
          phone: "555-555-5555",
          phone_header: "Phone Number",
          vin: "1HGCM82633A123456",
          vin_header: "Vehicle VIN",
          make_model: "e.g., BMW 328i",
          make_model_header: "Vehicle Make & Model",
          issue_description: "Describe the issue you're experiencing...",
          issue_description_header: "Issue Description",
          service_request: "What service are you requesting?",
          service_request_header: "Service Request",
          other_details: "Leave additional details or questions...",
          other_details_header: "Additional Details",
          submit: "Submit"
        },          
        footer: {
          resources: "Resources",
          follow: "Follow Me",
          legal: "Legal",
          textarea:
            "2024, Elite Euro Motors™ Made with ❤️ in Orlando, Florida by Christopher Bermudez",
        },
      }
    },
    es: {
      home: {
        hero: {
          title: "Christopher Bermudez",
          subtitle1: "Desarrollo de Sitios Web",
          subtitle2: "Desarrollo de Programas",
          subtitle3: "Publicidad y Mercadeo",
          subtitle4: "Servicios de SEO",
          description:
            "Uniendo Diseño y Funcionalidad para el Éxito de su Negocio",
          button: "Descubra Cómo",
        },
        navbar: {
          appointment: "Set up Appointment",
          home: "Home",
          contact: "Contact",
          services: "Services",
          about: "About",
          careers: "Careers",
          blog: "Blog"
        },
        mystory: {
          journey: "UN VIAJE LARGO",
          storyheader: "MI HISTORIA",
          storytext:
            "Un desarrollador de software front-end experimentado con un historial comprobado tanto en el ámbito corporativo como en el ecosistema de empresas recientemente creadas. Con una pasión por crear soluciones centradas en el usuario, me aseguro de que cada proyecto no solo cumpla, sino que supere las expectativas.",
          storyButton: "Ver Resume",
        },
        services: {
          subheader: "MIS SERVICIOS",
          header: "SERVICIOS PROFESIONALES",
          consultation: "Consultoría para Empresas",
          consultation_text:
            "Empoderando a las pequeñas empresas para establecer una presencia en el internet robusta.",
          softwaredev: "Desarrollo de Sitios Web y Software",
          softwaredev_text:
            "Desde el concepto hasta la creación, diseñando sitios web a medida de las necesidades de tu marca.",
          maintenance_and_support: "Mantenimiento y Capacitación",
          maintenance_and_support_text:
            "Garantizando la sostenibilidad a través de un mantenimiento integral y capacitación práctica.",
          seo_marketing_ads: "SEO Avanzado, Mercadeo y Publicidad",
          seo_marketing_ads_text:
            "Estrategias de optimización en motores de búsqueda, mercadeo digital y publicidad efectiva.",
        },
        portfolio: {
          subheader: "PORTAFOLIO",
          header: "Muestra de Excelencia",
          portfolio_elite_header: "Elite Euro Motors",
          portfolio_elite_text:
            "Diseño de sitios web, SEO, marketing con gran énfasis en marketing por correo electrónico, consultoría y renovación de la presencia en línea.",
          portfolio_4star_header: "4 Star Customs",
          portfolio_4star_text:
            "Diseño e implementación de sitios web para 4StarCustoms, un taller de carrocería en Ocoee, Florida.",
          button_text: "Ver Sitio",
        },
        contact: {
          header: "Contáctanos",
          description: "¿Tienes alguna pregunta sobre tu vehículo? ¿Necesitas programar una cita o obtener una cotización? ¡Estamos aquí para ayudarte! Llena el formulario de contacto a continuación, y uno de nuestros técnicos expertos te responderá de inmediato.",
          name: "Tu Nombre",
          name_header: "Nombre",
          email: "nombre@ejemplo.com",
          email_header: "Dirección de Correo Electrónico",
          phone: "555-555-5555",
          phone_header: "Número de Teléfono",
          vin: "1HGCM82633A123456",
          vin_header: "VIN del Vehículo",
          make_model: "Ej., BMW 328i",
          make_model_header: "Marca y Modelo del Vehículo",
          issue_description: "Describe el problema que estás experimentando...",
          issue_description_header: "Descripción del Problema",
          service_request: "¿Qué servicio estás solicitando?",
          service_request_header: "Solicitud de Servicio",
          other_details: "Deja detalles o preguntas adicionales...",
          other_details_header: "Detalles Adicionales",
          submit: "Entregar"
        },        
        footer: {
          resources: "Recursos",
          follow: "Sígueme",
          legal: "Legal",
          textarea:
            "2024, Christopher Bermudez™. Hecho con ❤️ en Orlando, Florida",
        },
      }
    },
  },
}));
