// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienzo</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>El jugador observa el marcador y queda un minuto para el final del partido y pierden de seis puntos 49 – 53,\
		ellos son los visitantes, nuestro jugador marca jugada y decide <a href='pasar'> pasarla\
        </a> a nuestro alero para intentar conseguir tres puntos\
		y acortar la distancia,  hacer una propia jugada e intentar <a href='entrada'> entrar a canasta</a> o realizar\
		un asombroso <a href='final_mate'> mate final</a>\
        </a>.</p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	pasar: new undum.SimpleSituation(
        "<h1>Decides pasarla al alero</h1>\
		<img src='media/games/tutorial/woodcut2.png' class='float_right'>\
		<p>El alero recibe el balón y se desentiende de la jugada, intenta un uno contra uno hacia su oponente intentando humillarlo,\
		este consigue rebasarlo y salta a la ayuda el pivot del equipo rival, nuestro jugador solo observa el aro como prioridad,\
		pero ahora se encuentra defendido. Teniendo como posibilidad hacer un <a href='mate_1'>mate </a> o  <a href='jugada2'>tirar de dos </a>.</p>",
		{
			enter: function(character, system, to) {
				system.setQuality("tiempo", character.qualities.tiempo-2);//Tiempo
            }
		
		}
        
    ),
	
	
	mate_1: new undum.SimpleSituation(
        "<h1>Decides hacer un mate</h1>\
		<img src='media/games/tutorial/mate.jpg' class='float_right'>\
		<p>Situados en el uno contra uno, alero y pivot rival, el jugador tiene\
		una desventaja ya que si finaliza con una entrada a canasta puede sufrir y\
		perder el balón con un tapón del pivot rival, con lo cuál, <a href='pensar_jugada'>piensa rápido.</a>\
		 Quedando el marcado 51-53. </p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+2);//Equipo 
				system.setQuality("luck", character.qualities.luck+1);//Intesidad
				system.setQuality("puntos", character.qualities.puntos+2);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-3);//Tiempo
            }
		
		}
        
    ),
	pensar_jugada: new undum.SimpleSituation(
        "<h1>El jugador piensa la jugada</h1>\
		<img src='media/games/tutorial/pensar_jugada.png' class='float_right'>\
		<p>El jugador al no tener opciones tiene que pensar y realiza un amago al defensa rival y le sale bien , con el amago realizado con éxito \
		aparecen huecos y lineas de pase , y el pivot de nuestro equipo la pide ya que se encuentra solo , el alero no duda y se la <a href='pasa_11'>pasa </a>\
		.</p>",
		{
			enter: function(character, system, to) { 
				system.setQuality("luck", character.qualities.luck+1);//Intesidad
				system.setQuality("tiempo", character.qualities.tiempo-2);//Tiempo
				
            }
		}
        
    ),
	
	pasa_11: new undum.SimpleSituation(
        "<h1>Jugada maestra</h1>\
		<img src='media/games/tutorial/pasa11.jpg' class='float_right'>\
		<p>Al pasarla al alero , nuestro jugador realiza un movimiento de ruptura y se queda solo en zona de 3 , nuestro alero se la pasa y nuestro jugador tira de 3 sobre la bocina\
		,consigue anotar y así dar la victoria al equipo quedando el marcador 54-53.Somos <a href='campeones'> campeones</a></p>",
		{
			enter: function(character, system, to) { 
				system.setQuality("skill", character.qualities.skill+3);//Equipo
				system.setQuality("puntos", character.qualities.puntos+3);//puntos in
				system.setQuality("tiempo", character.qualities.tiempo-3);//Tiempo
				
            }
		}
        
    ),
	
	falta_1: new undum.SimpleSituation(
        "<h1>Entrada a canasta</h1>\
		<img src='media/games/tutorial/falta.jpg' class='float_right'>\
		<p>La mejor opción que ve nuestro jugador es fintar con un tiro, a lo que responde la defensa rival\
		con un intento de tapón, esto es aprovechado por nuestro jugador para sacarle la falta y conseguir \
		así <a href='tiros_libres'> dos tiros libres </a> más una falta al jugador.</p>",
		{
			enter: function(character, system, to) { 
				system.setQuality("luck", character.qualities.luck+1);//Intesidad
				system.setQuality("tiempo", character.qualities.tiempo-3);//Tiempo
            }
		
		}
        
    ),
	
	//libre
	buena_defensa_1: new undum.SimpleSituation(
        "<h1>Realizar una buena defensa</h1>\
		<img src='media/games/tutorial/defensa.jpg' class='float_right'>\
		<p>Después de anotar necesitamos una buena defensa, con lo cual el entrenador propones una presión arriba\
		e intentar robar la bola como sea, saca el equipo rival y la recibe el pivot ya que nuestra prioridad era\
		que no se la pasarán el base. Conseguido eso el alero le ataca el bote al pivot y de una mala coordinación\
		este pierde y conseguimos quitarle el balón y salir a la<a href='contra'> contra</a>.</p>",
		{
			enter: function(character, system, to) { 
				system.setQuality("luck", character.qualities.luck+1);//Intesidad
				system.setQuality("tiempo", character.qualities.tiempo-4);//Tiempo
				
            }
		}
        
    ),
	
	contra: new undum.SimpleSituation(
        "<h1>Realizamos la contra </h1>\
		<img src='media/games/tutorial/contra.jpg' class='float_right'>\
		<p>Nuestro base sale con el balón hacia la canasta rival , el defensa rival lo sigue con mucha intensidad ya que podria ser la última jugada del partido\
			nuestro	base logra distraer al rival con la conducción y se la pasa a nuestro alero que mete desde la zona de 3 y logramos ganar el partido. Quedando el marcador 54-53.Somos <a href='campeones'> campeones</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+3);//Equipo
				system.setQuality("tiempo", character.qualities.tiempo-4);//Tiempo
            }
		}
        
    ),
	
	entrada: new undum.SimpleSituation(
        "<h1>Entrada a canasta</h1>\
		<img src='media/games/tutorial/entrada_a_canasta.jpg' class='float_right'>\
		<p>Nuestro base una vez marcada jugada sorprende al rival con un veloz driblin sobrepasando la marca\
		y avanza solo a través de la pista, una vez situada a media cancha, el jugador debe pensar rápido en\
		la siguiente acción ya que el base rival está recuperando la defensa y puede provocar una <a href='falta_1'>falta </a> \
		o realizar <a href='buena_defensa_1'> una buena defensa  </a> Quedando el marcador 51-53.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+2);//Equipo
				system.setQuality("puntos", character.qualities.puntos+2);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-2);//Tiempo
            }
		}
        
    ),
	
	final_mate: new undum.SimpleSituation(
        "<h1>Machaca el aro con un mate</h1>\
		<img src='media/games/tutorial/mate.jpg' class='float_right'>\
		<p>El pivot recibe el balón y ante la posibilidad de doblar al exterior de lanzar de 3 el escolta que está\
		abierta en la esquina, decide finalizar la jugada con un mate vistoso para el público consiguiendo meter aún\
		más en el partido al equipo y sumando dos puntos al marcador 51-53.\
		Ahora toca una buena <a href='defensa_11'> defensa.</a>.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+2);//Equipo 
				system.setQuality("luck", character.qualities.luck+1);//Intesidad
				system.setQuality("puntos", character.qualities.puntos+2);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-4);//Tiempo
            }
		}
        
    ),
	
	defensa_11: new undum.SimpleSituation(
        "<h1>Defendemos a muerte</h1>\
		<img src='media/games/tutorial/mediocampo.jpg' class='float_right'>\
		<p>Nuestro entrenador nos indica una jugada de defensa agresiva para poder robar el balón rápido y así ganar el partido. Esta defensa sale mal , ya que \
		su base es demasiado bueno , su base tira de triple y falla , el rebote le cae a nuestro jugador que mira el marcador , donde queda 1 segundo y decide \
		tirar desde el centro del campo sobre la bocina . Este tira y ............. TRIPLEEEEEEEEE. Nuestro equipo se hace con la victoria con un sorprendey asombroso triple.\
		Quedando el marcador 54-53.Somos <a href='campeones'>campeones</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+3);//Equipo 
				system.setQuality("puntos", character.qualities.puntos+3);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-6);//Tiempo
            }
		}
        
    ),
	
	jugada2: new undum.SimpleSituation(
        "<h1>Jugada Dos</h1>\
		<img src='media/games/tutorial/tirodos.jpg' class='float_right'>\
		<p>Conseguimos que el balón no salga fuera y rápidamente nuestro jugador arma el tiro para conseguir así dos puntos o decide <a href='espera1'> esperarse</a> \
			a que el base recupere su posición y aprovechar que la defensa está mal colocada. Puede suceder dos cosas, e primer lugar si mete el tiro debrá <a href='saque_fondo'> sacar de fondo.</a>\
			y si la falla dentrá que realizar una <a href='defensa'> buena defensa.</a>Quedando el marcador 51-53</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+2);//Equipo 
				system.setQuality("puntos", character.qualities.puntos+2);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-3);//Tiempo
            }
		}
        
    ),
	
	campeones: new undum.SimpleSituation(
        "<h1>CAMPEONEEESSSS</h1>\
		<img src='media/games/tutorial/campeones.jpg' class='float_right'>\
		<p>Acabamos levantando el trofeo con mucha ilusión ya que nos costó mucho esfuerzo , nuestros jugadores levantan el trofeo y nuestro jugador estrella \
		consigue su trofeo individual si sus puntos individuales superan los 16.</p>",
		{
			enter: function(character, system, to) {
				system.setQuality("trofeo1", 1);
				
				if ( character.qualities.puntos > 16 ) {
					system.setQuality("trofeo2", 1)
				}
				
            }
		}
        
    ),
	
	
	//LIBRE
	saque_fondo: new undum.SimpleSituation(
        "<h1>Saque de fondo</h1>\
		<img src='media/games/tutorial/saque_fondo.jpg' class='float_right'>\
		<p>Aquí nosotros disponemos de menos tiempo con lo cual necesitamos realizar un ataque rápido y decidimos\
		realizar un ataque de triple, para ello saca nuestro pivot y le da balón al base, acto seguido este realiza\
		una entrada a canasta que acaba doblando a la esquina donde esta nuestro escolta abierto para poder finalizar\
		la jugada anotando de tres y consiguiendo asi la victoria para nuestro equipo. Quedando el marcador 54-53.Somos <a href='campeones'> campeones</a> </p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+3);//Equipo
				system.setQuality("puntos", character.qualities.puntos+3);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-5);//Tiempo
            }
		}
        
    ),
	
	
	//LIBRE
	defensa: new undum.SimpleSituation(
        "<h1>Se necesita una Defensa</h1>\
		<img src='media/games/tutorial/defensa.jpg' class='float_right'>\
		<p>Después de anotar necesitamos una buena defensa, con lo cual el entrenador propone una presión arriba\
		e intentar robar la bola como sea, saca el equipo rival y la recibe el pivot ya que nuestra prioridad era\
		que no se la pasarán el base. Conseguido eso el alero le ataca el bote al pivot y de una mala coordinación\
		este pierde el balón consiguiendo así acabar el partido. Pero ellos han jugado demasiado bien con el tiempo y no logramos hacernos con la victoria.</p>",
		{
			enter: function(character, system, to) {
				system.setQuality("tiempo", character.qualities.tiempo-5);//Tiempo
				if ( character.qualities.puntos > 16 ) {
					system.setQuality("trofeo2", 1)
				}
            }
		}
        
    ),
	
	
	//LIBRE
	tiros_libres: new undum.SimpleSituation(
        "<h1>Tiros libres </h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>Logramos conseguir dos tiros libres y logramos meternos en el partido dos puntos por arriba , cuando nos damos cuenta el tiempo a finalizado y somos campeones , \
		nuestro jugador termina en el suelo llorando por meter los tiros libres decisivos. Quedando el mercador 55-53.Somos <a href='campeones'> campeones</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+4);//Equipo
				system.setQuality("puntos", character.qualities.puntos+4);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-5);//Tiempo
            }
		}
        
    ),
	
	
	
	
	//LIBRE
	tira1: new undum.SimpleSituation(
        "<h1>Trabajas en una empresa</h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>El tiro consigue ir dentro y logran así dos puntos más que se acumulan en el marcador lo que provoca que consigan el esperado título \
		y también logre nuestro jugador el premio al máximo anotador de la liga universitaria.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+2);//Equipo
				system.setQuality("puntos", character.qualities.puntos+2);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-2);//Tiempo
            }
		}
        
    ),
	
	//LIBRE
	espera1: new undum.SimpleSituation(
        "<h1>Esperar</h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>Decide esperar y nuestro base se coloca para sacar un tiro de 3 sorprendiendo a la defensa , el base tira y en suspensión es defendido \
		por el ala-pivot que se encontraba en sus espaldas y por su gran envergadura consigue facilmente hacerle un tapón que provoca que pierdan \
		el partido y vuelva a perder el título tan esperado para la universidad.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("skill", character.qualities.skill+3);//Equipo
				system.setQuality("puntos", character.qualities.puntos+3);//puntos ind
				system.setQuality("tiempo", character.qualities.tiempo-5);//Tiempo
				if ( character.qualities.puntos > 16 ) {
					system.setQuality("trofeo2", 1)
				}
            }
		}
        
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Equipo", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Rival", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Intensidad</span>",
        {priority:"0004", group:'stats'}
    ),
	puntos: new undum.IntegerQuality(
        "Puntos Ind", {priority:"0003", group:'stats'}
    ),
	tiempo: new undum.IntegerQuality(
        "Tiempo", {priority:"0005", group:'stats'}
    ),
	trofeo1: new undum.OnOffQuality("Trofeo Colectivo",{
	priority:"0001", 
	group:'vitrina',
	onDisplay:"&#10003;"
	}),
	trofeo2: new undum.OnOffQuality("Trofeo Individual",{
	priority:"0002", 
	group:'vitrina',
	onDisplay:"&#10003;"
	})
};


// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"}),
	vitrina: new undum.QualityGroup('Vitrina ', {priority:"0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 49;		//equipo
    character.qualities.stamina = 53;		//rival
    character.qualities.luck = 0;		//intensidad
    character.qualities.puntos = 12;	//Puntos individuales
	character.qualities.tiempo = 10;	//tiempo
	character.qualities.trofeo1 = 0;
	character.qualities.trofeo2 = 0;
    system.setCharacterText("<p>Aqui podemos ver el marcador , los puntos individuales de nuestro jugador y la intensidad, y el tiempo que queda</p>");
};