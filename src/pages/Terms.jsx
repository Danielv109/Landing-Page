import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
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

        <h1 className="legal-page__title">
          Contrato de Licenciamiento de Software como Servicio (SaaS)
        </h1>
        <p
          className="legal-page__subtitle"
          style={{
            fontSize: "1.1rem",
            color: "#525252",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Términos de Uso y Políticas Operativas de la Plataforma ETER
        </p>
        <p className="legal-page__date">Última actualización: Abril 2026</p>

        <div className="legal-page__content">
          <h2>PRIMERA. Objeto, Naturaleza del Acuerdo y Glosario Integrado</h2>
          <p>
            El presente instrumento jurídico tiene por objeto regular las
            condiciones de acceso, uso, licenciamiento y operatividad del
            entorno digital provisto por ETER, constituyendo un acuerdo
            vinculante entre la titular de los derechos patrimoniales del
            sistema, en lo sucesivo denominada como "ETER", y la persona física
            o moral que mediante la aceptación electrónica o uso continuo de la
            plataforma adquiere la calidad de usuario o cliente, en lo sucesivo
            denominado como el "Suscriptor" o "Tenant".
          </p>
          <p>
            Para los efectos de la correcta interpretación de este instrumento,
            las partes reconocen y aceptan que la plataforma opera bajo un
            esquema de Software as a Service (SaaS) estructurado sobre una
            arquitectura lógica multi-tenant, en la cual el Suscriptor recibe
            acceso temporal, revocable, oneroso y no exclusivo a una instancia
            aislada, entendiéndose por instancia al entorno virtual de
            procesamiento de datos que se ejecuta sobre un motor central o
            "Core" de infraestructura compartida que administra la
            autenticación, seguridad, auditoría y carga dinámica de componentes.
          </p>
          <p>
            Asimismo, las partes convienen que la comercialización y
            habilitación de funcionalidades se realiza de manera indivisible
            mediante agrupaciones lógicas predefinidas por ETER, denominadas
            paquetes funcionales, quedando estrictamente excluidas las
            solicitudes de desarticulación técnica o la contratación de módulos
            atómicos individuales que, a juicio exclusivo de ETER, pudieran
            comprometer la estabilidad, el control de calidad, el contrato de
            navegación versionado o las dependencias operativas del sistema
            central.
          </p>

          <h2>
            SEGUNDA. Titularidad Exclusiva y Reserva de Derechos de Propiedad
            Intelectual
          </h2>
          <p>
            El Suscriptor reconoce de manera expresa e irrevocable que la
            totalidad del ecosistema digital provisto, abarcando de manera
            enunciativa mas no limitativa, el código fuente, código objeto,
            algoritmos de carga, estructuras de bases de datos, diagramas
            lógicos, interfaces gráficas de usuario, APIs, interconexiones,
            metodologías de procesamiento y cualquier otro elemento inherente a
            la plataforma, constituyen propiedad intelectual e industrial
            exclusiva de ETER, protegida por la legislación nacional e
            internacional aplicable.
          </p>
          <p>
            Bajo ninguna circunstancia el presente acuerdo confiere al
            Suscriptor derechos de propiedad, transformación, ingeniería
            inversa, descompilación o explotación comercial sobre el software
            subyacente.
          </p>
          <p>
            Adicionalmente, queda pactado que cualquier solicitud de
            personalización, desarrollo a la medida, plan específico o creación
            de funcionalidades accesorias ("add-ons") requeridas y financiadas
            por el Suscriptor, se considerarán obras derivadas integradas al
            ecosistema general de ETER, reteniendo esta última la titularidad
            absoluta y perpetua de los derechos patrimoniales sobre dichos
            desarrollos, limitándose el derecho del Suscriptor a su utilización
            temporal mientras mantenga su suscripción activa y al corriente en
            sus obligaciones de pago.
          </p>

          <h2>
            TERCERA. Autonomía de Parametrización, Limitación de Responsabilidad
            y Alcance Técnico
          </h2>
          <p>
            La plataforma ETER se proporciona estrictamente como una
            infraestructura tecnológica de propósito general para la gestión y
            automatización de procesos de negocio, operando bajo un modelo de
            neutralidad de datos donde el Suscriptor asume el control absoluto
            sobre la parametrización de su instancia.
          </p>
          <p>
            En consecuencia, toda configuración lógica, introducción de
            variables, establecimiento de fórmulas operativas, determinación de
            factores de riesgo, cálculo de tasas, asignación de penalizaciones,
            estructuración de calendarios de pago y ejecución de reportes
            comerciales o financieros son de la entera, única y exclusiva
            responsabilidad del Suscriptor.
          </p>
          <p>
            ETER se deslinda de manera categórica de cualquier responsabilidad
            civil, mercantil, penal o administrativa derivada de la exactitud,
            legalidad o viabilidad financiera de las operaciones procesadas a
            través del sistema, reconociendo el Suscriptor que el software es
            una herramienta de soporte que no sustituye el juicio humano ni
            exime al Suscriptor de su obligación de cumplir con los marcos
            regulatorios aplicables a su sector, asumiendo este último la
            obligación de mantener a ETER en paz y a salvo de cualquier
            controversia, auditoría o reclamación de terceros derivada del uso
            de las funcionalidades del sistema.
          </p>
          <p>
            El sistema incorpora mecanismos de validación de permisos dinámicos
            que restringen operaciones de backend si no se acreditan los
            paquetes necesarios, siendo esta una medida de seguridad técnica que
            no implica supervisión comercial por parte de ETER.
          </p>

          <h2>
            CUARTA. Disponibilidad de Infraestructura y Límites de Indemnización
          </h2>
          <p>
            ETER desplegará los esfuerzos comercialmente razonables para
            mantener un nivel óptimo de disponibilidad en los servidores y el
            acceso a la instancia del Suscriptor; no obstante, el servicio se
            provee en el estado en que se encuentra ("as is") y según
            disponibilidad ("as available"), sin garantías expresas o implícitas
            de infalibilidad.
          </p>
          <p>
            ETER no asumirá responsabilidad alguna por interrupciones, latencia
            o pérdida temporal de acceso atribuible a mantenimientos
            programados, fallas en la red de telecomunicaciones del Suscriptor,
            actos de caso fortuito, fuerza mayor o caídas en los servicios de
            los proveedores de infraestructura en la nube de terceros.
          </p>
          <p>
            En el supuesto de que se determine judicial o extrajudicialmente una
            responsabilidad directa y comprobable imputable a ETER por fallas
            críticas en el sistema que impidan la operatividad total de la
            instancia, la responsabilidad económica máxima, acumulada y total de
            ETER frente al Suscriptor quedará limitada, de forma incondicional,
            al reembolso o bonificación del importe equivalente a una
            mensualidad del plan vigente contratado por el Suscriptor en el
            momento de la incidencia, renunciando el Suscriptor desde este
            momento a ejercitar cualquier acción en demanda de daños indirectos,
            lucro cesante, pérdida de oportunidades de negocio o daños
            punitivos.
          </p>

          <h2>QUINTA. Suspensión de Servicios y Seguridad Multi-Tenant</h2>
          <p>
            El Suscriptor es el depositario único de las credenciales de acceso
            administrativo de su instancia, asumiendo la responsabilidad
            integral por las actividades ejecutadas bajo sus cuentas y la
            correcta asignación de roles y permisos a sus colaboradores.
          </p>
          <p>
            ETER se reserva el derecho potestativo y unilateral de suspender el
            acceso a la plataforma, de manera temporal o definitiva, sin
            necesidad de declaración judicial previa ni responsabilidad alguna,
            en caso de detectar alteraciones a la seguridad del sistema, uso de
            bots no autorizados, impago de las cuotas de suscripción, o
            cualquier uso que a criterio de ETER contravenga la integridad del
            Core central, ponga en riesgo el aislamiento de datos de otros
            Tenants o viole las leyes aplicables.
          </p>

          <h2>SEXTA. Jurisdicción, Competencia y Ley Aplicable</h2>
          <p>
            Para la interpretación, ejecución, cumplimiento y resolución de
            cualquier controversia que emane del presente acuerdo, de la
            arquitectura del sistema, o del uso de los paquetes funcionales
            provistos, las partes convienen en someterse de manera expresa y
            categórica a la jurisdicción de las leyes sustantivas y adjetivas
            aplicables en el Estado de Durango, México, así como a la
            competencia exclusiva de los tribunales estatales y federales con
            sede en la ciudad de Victoria de Durango, Durango, renunciando
            expresamente el Suscriptor a cualquier otro fuero, jurisdicción o
            competencia que pudiera corresponderle en razón de su domicilio
            presente o futuro, o por cualquier otra causa legal.
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
              <strong>Contacto legal:</strong> Para consultas sobre este
              contrato, escriba a <strong>etermx00@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
