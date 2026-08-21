import Image from "next/image";

const collage = {
  src: "/gallery/dogs-eating-collage.webp",
  alt: "Varios perros comiendo sus porciones de alimento BARF Pimpon",
  caption: "Cuatro perros disfrutando sus porciones",
};

const dogs = [
  {
    src: "/gallery/dog-eating-01.webp",
    alt: "Perro comiendo alimento BARF Pimpon",
  },
  {
    src: "/gallery/dog-eating-02.webp",
    alt: "Perro durante su comida con BARF Pimpon",
  },
  {
    src: "/gallery/dog-eating-03.webp",
    alt: "Perro disfrutando su porción de alimento",
  },
];

export default function DogsEating() {
  return (
    <section className="section dogs-eating" id="experiencia">
      <div className="container">
        <div className="dogs-eating__header">
          <p className="eyebrow">En su día a día</p>
          <h2>Hecho para disfrutar cada comida.</h2>
          <p className="lead">
            Fórmulas preparadas para integrarse fácilmente a la alimentación diaria de tu perro, disponibles en opciones crudas
            y cocidas.
          </p>
        </div>

        <div className="dogs-eating__grid">
          <figure className="dogs-eating__collage">
            <Image
              src={collage.src}
              alt={collage.alt}
              width={900}
              height={675}
              sizes="(min-width: 900px) 60vw, 90vw"
            />
            <figcaption>{collage.caption}</figcaption>
          </figure>

          <div className="dogs-eating__side">
            {dogs.map((d) => (
              <figure key={d.src} className="dogs-eating__item">
                <Image src={d.src} alt={d.alt} width={900} height={900} sizes="(min-width: 900px) 28vw, 45vw" />
              </figure>
            ))}
          </div>
        </div>

        <p className="dogs-eating__note">
          Fotografías de perros reales consumiendo el alimento. No se atribuyen resultados clínicos específicos a las imágenes.
        </p>
      </div>
    </section>
  );
}
