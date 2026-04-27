import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: 800 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            fontSize: "0.875rem",
            color: "#737373",
            textDecoration: "none",
          }}
        >
          ← Volver al inicio
        </Link>

        <h1 className="legal-page__title">Aviso Legal</h1>
        <p
          className="legal-page__subtitle"
          style={{
            fontSize: "1.1rem",
            color: "#525252",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Declaración de Titularidad y Descargo de Responsabilidad del Portal
          ETER
        </p>
        <p className="legal-page__date">Última actualización: Abril 2026</p>

        <div className="legal-page__content">
          <h2>
            PRIMERA. Datos Identificativos y Naturaleza del Portal Digital
          </h2>
          <p>
            En estricto apego a las normativas de comercio electrónico y
            transparencia digital, se hace de conocimiento público que el
            entorno web, subdominios, interfaces públicas y la arquitectura de
            la plataforma de Software as a Service (SaaS) comercialmente
            conocida como "ETER", son de la titularidad exclusiva de su creador
            y desarrollador legítimo, en adelante "EL TITULAR".
          </p>
          <p>
            El acceso, navegación y uso del portal web público atribuye la
            condición de usuario visitante, implicando la aceptación plena,
            incondicional y sin reservas de todas y cada una de las
            disposiciones incluidas en este Aviso Legal desde el momento mismo
            en que se accede al sitio.
          </p>
          <p>
            La información contenida en las páginas públicas de ETER tiene una
            finalidad estrictamente informativa, corporativa y de exhibición
            comercial de los paquetes funcionales modulares, reservándose EL
            TITULAR el derecho inalienable de efectuar, en cualquier momento y
            sin necesidad de previo aviso, modificaciones, supresiones o
            actualizaciones en la presentación, configuración, especificaciones
            técnicas y contenidos del portal.
          </p>

          <h2>
            SEGUNDA. Protección Absoluta de Propiedad Intelectual e Industrial
          </h2>
          <p>
            Todos los elementos constitutivos del portal ETER y su ecosistema
            digital, incluyendo de manera enunciativa mas no limitativa, el
            diseño gráfico, interfaces de usuario (UI), experiencia de usuario
            (UX), logotipos, isotipos, nombres comerciales, marcas, tipografías,
            textos, esquemas comerciales, diagramas de flujo, así como la
            estructura, selección, ordenación y presentación de sus contenidos,
            constituyen bienes intangibles protegidos por las leyes de propiedad
            intelectual e industrial nacionales e internacionales, cuya
            titularidad y derechos de explotación patrimonial corresponden
            exclusivamente a EL TITULAR.
          </p>
          <p>
            Queda terminantemente prohibida la reproducción, distribución,
            comunicación pública, transformación, extracción, o cualquier otra
            modalidad de explotación, total o parcial, de los contenidos del
            portal, en cualquier soporte y por cualquier medio técnico, sin la
            autorización previa, expresa y por escrito de EL TITULAR.
          </p>
          <p>
            El acceso al portal web no otorga al visitante ni al Suscriptor
            derecho, licencia o expectativa de derecho alguna sobre las marcas o
            el contenido albergado.
          </p>

          <h2>
            TERCERA. Descargo de Responsabilidad y Exclusión de Garantías
            (Disclaimer)
          </h2>
          <p>
            La información pública, descripciones de módulos, proyecciones
            comerciales y ejemplos de uso (tales como simulaciones de carteras
            de crédito, puntos de venta o administración operativa) publicados
            en el portal de ETER se proporcionan bajo la premisa "tal cual" (as
            is), sin garantías de ningún tipo, expresas o implícitas.
          </p>
          <p>
            EL TITULAR declara de manera categórica que ETER es una empresa de
            desarrollo tecnológico e infraestructura de software, y bajo ninguna
            circunstancia se ostenta como institución financiera, despacho
            contable, entidad de crédito o consultoría jurídica. Por
            consiguiente, ninguna información contenida en el sitio web deberá
            interpretarse como asesoramiento legal, fiscal, contable o
            financiero.
          </p>
          <p>
            EL TITULAR no se hace responsable por las decisiones estratégicas,
            comerciales o de negocio que el visitante o Suscriptor tome
            basándose en la información pública del sitio, eximiéndose a ETER de
            cualquier tipo de responsabilidad por daños directos, indirectos,
            incidentales, consecuenciales, lucro cesante o pérdida de datos
            derivados de la interpretación, uso o imposibilidad de uso del
            portal web o de los servicios en él ofertados.
          </p>

          <h2>CUARTA. Política de Enlaces Externos y Servicios de Terceros</h2>
          <p>
            El portal web de ETER podrá contener enlaces (links), hipervínculos
            o integraciones (APIs) que dirijan a sitios web, plataformas de pago
            o infraestructuras gestionadas por terceros ajenos a EL TITULAR.
            Dichos enlaces se proporcionan de manera exclusiva para la
            conveniencia del usuario visitante o Suscriptor.
          </p>
          <p>
            EL TITULAR no ejerce ningún tipo de control preventivo ni correctivo
            sobre dichos sitios, sus contenidos, políticas de privacidad o
            medidas de seguridad, por lo que no asume responsabilidad
            subsidiaria, solidaria ni directa por los daños o perjuicios que
            pudieran derivarse del acceso, uso o confiabilidad de la
            información, servicios o productos ofertados en dichos portales de
            terceros, asumiendo el usuario el riesgo íntegro al abandonar el
            entorno controlado de ETER.
          </p>

          <h2>QUINTA. Competencia Territorial y Legislación Aplicable</h2>
          <p>
            Para la resolución de todas las controversias, litigios o cuestiones
            relacionadas con el uso del presente sitio web público, su
            contenido, o las actividades informativas en él desarrolladas, las
            partes se someten expresamente a la legislación aplicable en los
            Estados Unidos Mexicanos, siendo competentes para el conocimiento de
            dichos conflictos los juzgados y tribunales con sede en la ciudad de
            Victoria de Durango, Estado de Durango, renunciando expresamente el
            visitante, usuario o Suscriptor a cualquier otro fuero que por
            razones de su domicilio geográfico, presente o futuro, o por
            cualquier otra causa jurídica, pudiera corresponderle.
          </p>

          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: "#f5f5f5",
              borderRadius: "12px",
              borderLeft: "4px solid #6366f1",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#525252" }}>
              <strong>Contacto legal:</strong> Para consultas sobre este aviso
              legal, escriba a <strong>etermx00@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
