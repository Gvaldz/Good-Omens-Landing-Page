import { Component } from '@angular/core';
import { IUseason } from '../iuseason';

@Component({
  selector: 'app-seasons-card',
  templateUrl: './seasons-card.component.html',
  styleUrl: './seasons-card.component.css'
})
export class SeasonsCardComponent {

  season1: IUseason = {
    nombre: 'Temporada 1',
    descripcion: `
      <p>La primera temporada de Good Omens sigue la alianza improbable entre Aziraphale, un ángel algo quisquilloso, y Crowley, un demonio sarcástico y rebelde. Ambos han vivido en la Tierra durante milenios y han llegado a disfrutar de su vida entre los humanos. Sin embargo, su rutina se ve alterada cuando se dan cuenta de que el Apocalipsis está cerca, ya que el Anticristo ha nacido y está destinado a desatar el fin del mundo.</p>
      <p>Aziraphale y Crowley, que no están interesados en el Armagedón y la destrucción de la Tierra, deciden unir fuerzas para evitar que los planes divinos y diabólicos sigan adelante. A lo largo de seis episodios llenos de humor negro, ambos intentan localizar al joven Anticristo, que ha sido criado en una familia humana común y que aún no es consciente de sus poderes. Mientras tanto, una serie de personajes sobrenaturales, como ángeles, demonios y cazadores de brujas, también intervienen en los eventos.</p>      
      <p>La serie equilibra el tono apocalíptico con una narrativa ligera y cómica, explorando temas como el libre albedrío, la naturaleza del bien y del mal, y la eterna lucha entre el cielo y el infierno. Adaptada de la novela homónima de Neil Gaiman y Terry Pratchett, Good Omens ofrece una visión satírica y divertida del fin del mundo.</p>`,
    imagenUrl: 'Temporada_1.jpg'
  }
  
  season2: IUseason = {
    nombre: 'Temporada 2',
    descripcion: `
      <p>En la segunda temporada de Good Omens, la relación entre Aziraphale y Crowley se profundiza mientras continúan viviendo entre los humanos tras haber evitado el Apocalipsis. Ahora que el Armagedón ha sido cancelado (al menos por el momento), ambos disfrutan de la vida en la Tierra, pero las fuerzas celestiales e infernales siguen observando.</p>
      <p>La trama principal gira en torno a un misterioso ángel llamado Gabriel, quien aparece en la librería de Aziraphale sin recuerdos de quién es o por qué está en la Tierra. Aziraphale, intrigado por el enigma, decide protegerlo, a pesar de que esto atrae la atención no deseada del Cielo y el Infierno. Mientras tanto, Crowley, aunque inicialmente reticente, se involucra en el intento de descubrir el misterio detrás de Gabriel y en proteger a su viejo amigo (E intéres amoroso).</p>
      <p>A lo largo de la temporada, se exploran nuevas historias y aventuras que mezclan elementos de fantasía, misterio y humor como ya hemos visto en la temporada anterior. Los personajes secundarios, como ángeles, demonios y humanos, también juegan papeles importantes en el desarrollo de la trama, mientras se explora más el trasfondo de Aziraphale y Crowley y sus complejas relaciones con sus respectivos reinos.</p>`,
    imagenUrl: 'Temporada_2.jpg'
  }
  

}
