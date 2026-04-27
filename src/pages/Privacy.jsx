import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
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

        <h1 className="legal-page__title">Aviso de Privacidad Integral</h1>
        <p
          className="legal-page__subtitle"
          style={{
            fontSize: "1.1rem",
            color: "#525252",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          De la Plataforma y Ecosistema Digital ETER
        </p>
        <p className="legal-page__date">Última actualización: Abril 2026</p>

        <div className="legal-page__content">
          <h2>
            PRIMERA. Identidad del Responsable y Alcance de la Figura Jurídica
          </h2>
          <p>
            La entidad titular de la plataforma tecnológica denominada ETER, en
            lo sucesivo "EL TITULAR", con domicilio para efectos de
            notificaciones en la ciudad de Victoria de Durango, Durango, México,
            manifiesta su estricto cumplimiento con el marco regulatorio en
            materia de protección de datos personales.
          </p>
          <p>
            Para los efectos de la operatividad del sistema SaaS modular y
            multi-tenant, se establece una distinción jurídica fundamental entre
            las figuras de tratamiento de datos: EL TITULAR actúa única y
            exclusivamente como Responsable respecto de los datos de contacto,
            identificación y facturación del cliente directo (el "Tenant");
            asimismo, EL TITULAR actúa bajo la figura legal de Encargado del
            tratamiento en los términos de la legislación aplicable respecto de
            toda aquella información y datos personales de terceros que el
            Tenant, de manera autónoma y discrecional, ingrese, procese,
            almacene o gestione a través de su instancia lógica aislada.
          </p>
          <p>
            En virtud de lo anterior, el Tenant reconoce ser el único
            Responsable del tratamiento frente a sus propios usuarios finales,
            obligándose a contar con sus propios instrumentos de privacidad y
            mecanismos de obtención de consentimiento, deslindando a ETER de
            cualquier reclamación derivada de la captación de información dentro
            del entorno virtual provisto.
          </p>

          <h2>
            SEGUNDA. Categorías de Datos Sujetos a Tratamiento y Finalidades
            Técnicas
          </h2>
          <p>
            Para la correcta ejecución de los paquetes funcionales y el
            mantenimiento del Core del sistema, EL TITULAR podrá recabar datos
            de identificación, contacto, datos fiscales, así como información
            técnica relativa a direcciones IP, protocolos de navegación.
          </p>
          <p>
            Las finalidades primarias del tratamiento incluyen la provisión de
            la infraestructura tecnológica, la validación dinámica de permisos,
            la ejecución de la lógica de negocio configurada por el Tenant, la
            gestión de actualizaciones de seguridad, el soporte técnico
            especializado y la prevención de vulnerabilidades en el entorno
            multi-tenant.
          </p>
          <p>
            De manera secundaria, la información podrá ser utilizada bajo
            procesos de disociación para fines estadísticos de optimización de
            algoritmos y mejora del contrato de navegación, garantizando siempre
            que los datos de negocio de un Tenant permanezcan en un estado de
            aislamiento lógico absoluto respecto de otras instancias presentes
            en el sistema.
          </p>

          <h2>
            TERCERA. Transferencias de Información y Proveedores de
            Infraestructura
          </h2>
          <p>
            El Suscriptor y los usuarios finales aceptan que, por la naturaleza
            técnica del modelo de Software as a Service, EL TITULAR podrá
            realizar transferencias de datos a terceros proveedores de servicios
            de infraestructura en la nube, procesamiento de servidores,
            almacenamiento masivo y servicios de ciberseguridad, nacionales o
            extranjeros, cuya intervención es estrictamente necesaria para la
            prestación del servicio.
          </p>
          <p>
            Estas transferencias no requieren del consentimiento expreso del
            titular de los datos en virtud de encontrarse en los supuestos de
            excepción previstos por la normativa vigente, al ser indispensables
            para dar cumplimiento a la relación jurídica derivada del
            licenciamiento.
          </p>
          <p>
            ETER se compromete a que dichos terceros mantengan estándares de
            seguridad equivalentes a los implementados en el Core del sistema,
            limitando el acceso a la información estrictamente a lo necesario
            para la operatividad técnica de la plataforma.
          </p>

          <h2>
            CUARTA. Mecanismos para el Ejercicio de Derechos ARCO y Revocación
          </h2>
          <p>
            Los titulares de los datos personales podrán ejercer sus derechos de
            Acceso, Rectificación, Cancelación u Oposición (Derechos ARCO), así
            como la revocación de su consentimiento, mediante el envío de una
            solicitud formal al departamento de seguridad de la información de
            ETER a través de los canales de soporte establecidos.
          </p>
          <p>
            No obstante, en aquellos casos donde ETER actúe como Encargado del
            tratamiento, cualquier solicitud de derechos ARCO recibida de un
            usuario final será canalizada directamente al Tenant correspondiente
            para su atención, en su calidad de Responsable de dicha información.
          </p>
          <p>
            El ejercicio de estos derechos estará sujeto a las limitaciones
            técnicas propias de la arquitectura del software y a las
            obligaciones legales de conservación de registros para fines de
            auditoría y cumplimiento normativo que imperen sobre ETER o el
            Tenant.
          </p>

          <h2>QUINTA. Seguridad de la Instancia y Medidas de Control</h2>
          <p>
            EL TITULAR ha implementado medidas de seguridad administrativas,
            técnicas y físicas, tales como encriptación de datos en tránsito y
            en reposo, protocolos de aislamiento de bases de datos y sistemas de
            detección de intrusiones, para proteger la integridad de la
            información.
          </p>
          <p>
            Sin embargo, se reitera que la seguridad del acceso inicial a la
            instancia es responsabilidad compartida, siendo el Tenant el único
            responsable de la gestión de roles, la fortaleza de las credenciales
            de sus usuarios y la configuración de los niveles de permisos
            dinámicos dentro de su panel administrativo.
          </p>
          <p>
            ETER no será responsable por brechas de seguridad derivadas de la
            negligencia, uso compartido de cuentas o falta de protocolos de
            seguridad interna por parte del personal del Tenant.
          </p>

          <h2>SEXTA. Modificaciones y Jurisdicción Competente</h2>
          <p>
            El presente Aviso de Privacidad podrá ser modificado unilateralmente
            por EL TITULAR en cualquier momento para adaptarse a nuevas
            disposiciones legales, mejoras tecnológicas o cambios en la
            arquitectura modular de ETER. Dichas actualizaciones serán
            notificadas a través de la interfaz de la plataforma o mediante los
            medios de contacto registrados por el Tenant.
          </p>
          <p>
            Para cualquier controversia relacionada con el tratamiento de datos
            o la interpretación de este documento, las partes se someten a la
            competencia de las leyes federales de los Estados Unidos Mexicanos y
            a los tribunales de la ciudad de Victoria de Durango, Durango,
            renunciando expresamente a cualquier otro fuero que por razón de su
            domicilio presente o futuro pudiere corresponderles.
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
              <strong>Contacto de privacidad:</strong> Para solicitudes ARCO o
              consultas sobre este aviso, escriba a{" "}
              <strong>etermx00@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
