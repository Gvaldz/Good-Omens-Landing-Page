import { Component } from '@angular/core';
import { IUcharacter } from '../iucharacter';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  character_list: IUcharacter[] = [
    {
      nombre: 'Aziraphale',
      descripcion: 'Aziraphale intenta evitar el apocalipsis porque ha llegado a querer a los humanos y a disfrutar de su vida en la Tierra. Para empezar, aquí hay restaurantes. Además, no le resulta muy atractiva la idea de escuchar Sonrisas y Lágrimas durante toda la eternidad. Es el mejor amigo y el alma gemela (platónica y/o romántica) de Crowley.' 
    },
    {
      nombre: 'Crowley',
      descripcion: 'Anthony J. Crowley es un demonio y uno de los personajes principales de la serie de Amazon Buenos Presagios. Fue la serpiente que tentó a Eva en el Jardín del Edén, y por eso su forma humana también tiene ojos de serpiente, que suele tapar con gafas de sol de diseñador.' 
    },
    {
      nombre: 'Gabriel',
      descripcion: 'El trabajo de Gabriel es asegurarse de que el Armagedón comience a tiempo. Es guapo, viste con elegancia y está completamente seguro de que tiene razón... en todo.' 
    },
    {
      nombre: 'Beelzebub',
      descripcion: 'Se nos presenta como un personaje frío y serio, el cual nunca sonrie en todos sus momentos en camara, y puede que incluso sea algo manipulativo. Solo se le ve con una expresión que no es ni indiferencia ni enfado en la ejecución de Crowley al ver que se baña tan tranquilo en agua bendita.' 
    },
    {
      nombre: 'Muriel',
      descripcion: 'Muriel es un ángel de bajo rango. No se les llama para nada importante, salvo una vez cada doscientos años. Muriel es un Ángel grabador de grado 37 y no tiene ni idea de la Tierra.' 
    },
    {
      nombre: 'Adam',
      descripcion: 'Adam es el verdadero Anticristo e hijo de Satanás que fue extraviado al nacer gracias a una confusión del demonio Crowley y las Monjas Parlanchinas de St Beryls y en lugar de ser criado por la familia americana Dowling fue entregado a la familia Young y criado en Tadfield.' 
    },
    {
      nombre: 'Newton Pulsifer',
      descripcion: 'Newton es descendiente del Cazador de Brujas Pulsifer, que quemó en la hoguera a Agnes Nutter, antepasada de Anatema. Cuando era joven, intentó arreglar el ordenador familiar, pero accidentalmente dejó sin electricidad a todo el pueblo.' 
    },
    {
      nombre: 'Anathema Device',
      descripcion: 'Anathema se crió en América dedicando al menos una buena parte de su tiempo al estudio de su reliquia familiar: Las lindas y exactas profecías de Agnes Nutter, bruja.' 
    },
    {
      nombre: 'Guerra',
      descripcion: 'Guerra, fiel a su nombre, disfruta con la violencia y las armas, como demostró en «El Libro» cuando expresó su alegría por el fracaso del acuerdo de paz.' 
    },
    {
      nombre: 'Muerte',
      descripcion: 'La muerte es uno de los cuatro jinetes del Apocalipsis y se dice que es más antigua que el propio tiempo. En la novela, se dice que está en todo y que nada puede escapar a sus garras.' 
    },
    {
      nombre: 'Hambre',
      descripcion: 'También conocido como Dr. Raven Sable, es autor de D-Plan Dieting: Adelgaza Guapa.' 
    },
    {
      nombre: 'Contaminación',
      descripcion: 'La contaminación se muestra materialista y tiende a disfrutar de las cosas que le parecen bonitas. También disfruta con su trabajo, ya que ve la contaminación como algo encantador. ' 
    },
    {
      nombre: 'Sargento Cazador de Brujas Shadwell',
      descripcion: 'Shadwell es el último miembro del Ejército de los Cazadores de Brujas, aunque mantiene que hay otros miembros como el Sargento Botella de Leche, porque su imaginación se había agotado en ese momento cuando inventaba nombres. Vive en un bloque de apartamentos con Madame Tracy, a la que se refiere como Jezabel. Se mantiene muy distante de ella, aunque sigue preparándole la cena.' 
    },
    {
      nombre: 'Madame Tracy',
      descripcion: 'Madame Tracy vive en un piso frente al del sargento Shadwell. Trabaja tanto como médium celebrando sesiones de espiritismo como profesional de «cuidado íntimo y relajación».' 
    }
  ];

}
