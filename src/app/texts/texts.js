const title = "Jeyis Trenzas y Peinados";
const slogan = "Arte en cada trenza, estilo en cada peinado.";
const email = "jeyistrenzas@example.com"; // Cambia este email al correcto
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = ""; // Cambia este número al correcto

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Jeyis Trenzas y Peinados, nuestra pasión es realzar la belleza natural de cada cliente a través de peinados únicos y creativos. Nos especializamos en trenzas y peinados que no solo reflejan las últimas tendencias, sino que también se adaptan a tu estilo personal. Cada diseño es realizado con dedicación y profesionalismo, garantizando que te sientas segura y hermosa en cualquier ocasión. Desde trenzas elaboradas hasta peinados sencillos, en Jeyis Trenzas y Peinados cuidamos cada detalle para ofrecerte un servicio de belleza de alta calidad. Ven y descubre cómo podemos transformar tu look y resaltar lo mejor de ti."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/JeyisTrenzasyPeinados",
        instagram: "https://www.instagram.com/jeyistrenzasypeinados",
        tiktok: "https://www.tiktok.com/@jeyistrenzasypeinados",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
