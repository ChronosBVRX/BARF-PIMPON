import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container">
        <article className="prose">
          <h1>Aviso de privacidad</h1>
          <p>
            En {site.brandName} valoramos la confianza de quienes nos escriben.
            Este aviso explica, de forma sencilla, cómo tratamos la información
            que compartes con nosotros a través de WhatsApp y de este sitio
            web.
          </p>

          <h2>Datos que tratamos</h2>
          <p>
            Solo tratamos los datos que tú nos proporcionas voluntariamente al
            contactarnos: nombre, número de WhatsApp y la información que
            incluyas en tus mensajes sobre tu pedido o tu mascota. No
            recopilamos datos en segundo plano, ni instalamos rastreadores de
            anuncios en este sitio.
          </p>

          <h2>Para qué se utilizan</h2>
          <p>La información se utiliza únicamente para:</p>
          <ul>
            <li>Atender tus consultas y pedidos.</li>
            <li>Confirmar disponibilidad y costos.</li>
            <li>
              Coordinar tus entregas, en caso de que proceda el servicio a
              domicilio.
            </li>
          </ul>

          <h2>Con quién se comparte</h2>
          <p>
            No se vende ni se cede tu información a terceros. Solo podría
            revelarse cuando la ley lo exija a una autoridad competente.
          </p>

          <h2>Seguridad</h2>
          <p>
            Los mensajes se manejan de forma confidencial y se usan
            exclusivamente para la atención que nos solicitaste.
          </p>

          <h2>Derechos</h2>
          <p>
            Puedes solicitar el acceso, rectificación, cancelación u oposición
            al uso de tus datos escribiéndonos por WhatsApp al{" "}
            {site.whatsappDisplay}. También puedes pedir que eliminemos las
            conversaciones que hayas sostenido con nosotros.
          </p>

          <hr />

          <p>
            <em>
              Este aviso puede actualizarse conforme cambien las funciones del
              sitio. La versión vigente se publicará siempre en esta página.
            </em>
          </p>
        </article>
      </div>
    </main>
  );
}