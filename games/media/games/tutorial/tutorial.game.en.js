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
        <p>El jugador observa el marcador y queda un minuto para el final del partido y pierden de seis puntos 60 – 54,\
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
		pero ahora se encuentra defendido. Teniendo como posibilidad hacer un <a href='mate_1'>mate </a> o  <a href='jugada2'>tirar de dos </a> </p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		
		}
        
    ),
	
	
	mate_1: new undum.SimpleSituation(
        "<h1>Decides hacer un mate</h1>\
		<img src='media/games/tutorial/mate.jpg' class='float_right'>\
		<p>Situados en el uno contra uno, alero y pivot rival, el jugador tiene\
		una desventaja ya que si finaliza con una entrada a canasta puede sufrir y\
		perder el balón con un tapón del pivot rival, con lo cuál, <a href='pensar_jugada'>piensa rápido. </a>\
		</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		
		}
        
    ),
	pensar_jugada: new undum.SimpleSituation(
        "<h1>El jugador piensa la jugada</h1>\
		<img src='media/games/tutorial/pensar_jugada.png' class='float_right'>\
		<p>El jugador al no tener opciones tiene que pensar y realiza un amago al defensa rival y le sale bien , con el amago realizado con éxito \
		aparecen huecos y lineas de pase , y el pivot de nuestro equipo la pide ya que se encuentra solo , el alero no duda y se la pasa</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
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
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
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
		este pierde y conseguimos que el partido finalize con nuestra victoria.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	entrada: new undum.SimpleSituation(
        "<h1>Entrada a canasta</h1>\
		<img src='media/games/tutorial/entrada_a_canasta.jpg' class='float_right'>\
		<p>Nuestro base una vez marcada jugada sorprende al rival con un veloz driblin sobrepasando la marca\
		y avanza solo a través de la pista, una vez situada a media cancha, el jugador debe pensar rápido en\
		la siguiente acción ya que el base rival está recuperando la defensa y puede probocar una <a href='falta_1'>falta </a>  o realizar <a href='buena_defensa_1'> una buena defensa  </a> .</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	final_mate: new undum.SimpleSituation(
        "<h1>Machaca el aro con un mate</h1>\
		<img src='media/games/tutorial/mate.jpg' class='float_right'>\
		<p>El pivot recibe el balón y ante la posibilidad de doblar al exterior de lanzar de 3 el escolta que está\
		abierta en la esquina, decide finalizar la jugada con un mate vistoso para el público consiguiendo meter aún\
		más en el partido al equipo y sumando dos puntos al marcador 60 – 56, que provoca un <a href='saque_fondo'> saque de fondo.</a>\
		Ahora toca una buena <a href='defensa'> defensa.</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	jugada2: new undum.SimpleSituation(
        "<h1>Jugada Dos</h1>\
		<img src='media/games/tutorial/tirodos.jpg' class='float_right'>\
		<p>Conseguimos que el balón no salga fuera y rápidamente nuestro jugador arma el tiro para conseguir así dos puntos o decide <a href='espera1'> esperarse</a> \
			a que el base recupere su posición y aprovechar que la defensa está mal colocada. Puede suceder dos cosas, e primer lugar si mete el tiro debrá <a href='saque_fondo'> sacar de fondo.</a>\
			y si la falla dentrá que realizar una <a href='defensa'> buena defensa.</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
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
		la jugada anotando de tres y consiguiendo asi la victoria para nuestro equipo.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	
	//LIBRE
	defensa: new undum.SimpleSituation(
        "<h1>Se necesita una Defensa</h1>\
		<img src='media/games/tutorial/defensa.jpg' class='float_right'>\
		<p>Después de anotar necesitamos una buena defensa, con lo cual el entrenador propones una presión arriba\
		e intentar robar la bola como sea, saca el equipo rival y la recibe el pivot ya que nuestra prioridad era\
		que no se la pasarán el base. Conseguido eso el alero le ataca el bote al pivot y de una mala coordinación\
		este pierde el balón consiguiendo así acabar el partido.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	
	//LIBRE
	tiros_libres: new undum.SimpleSituation(
        "<h1>Trabajas en una empresa</h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>Al disponer nosotros de menos tiempo , necesitabamos realizar un ataque rapido y decidimos realizar un ataque de triple , para ello nuestro pivot le da el balón al base \
			, acto seguido este realiza una entrada a canasta que acaba doblando a la esquina donde esta nuestro escolta abierto para poder finalizar \
			la jugada anotando y dejandonos en el marcador 1 por arriba.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	
	
	
	//LIBRE
	tira1: new undum.SimpleSituation(
        "<h1>Trabajas en una empresa</h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>El tiro consigue ir dentro y logran así dos puntos más que se acumulan en el marcador lo que provoca que consigan el esperado título \
		y también logre nuestro jugador el premio al máximo anotador de la liga universitaria</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	//LIBRE
	espera1: new undum.SimpleSituation(
        "<h1>Esperar</h1>\
		<img src='media/games/tutorial/tiro_libre.jpg' class='float_right'>\
		<p>Decide esperar y nuestro base se coloca para sacar un tiro de 3 sorprendiendo a la defensa , el base tira y en suspensión es defendido \
		por el ala-pivot que se encontraba en sus espaldas y por su gran envergadura consigue facilmente hacerle un tapón que provoca que pierdan \
		el partido y vuelva a perder el título tan esperado para la universidad</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("equipo", character.qualities.skill+20);
				system.setQuality("rival", character.qualities.stamina+50);
				system.setQuality("intensidad", character.qualities.luck+1);
				system.setQuality("puntos individuales", character.qualities.puntos+50);
				system.setQuality("tiempo", character.qualities.tiempo+50);
            }
		}
        
    ),
	
	
	
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
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
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 49;		//equipo
    character.qualities.stamina = 53;		//rival
    character.qualities.luck = 0;		//intensidad
    character.qualities.puntos = 14;	//Puntos individuales
	character.qualities.tiempo = 20;	//tiempo
    system.setCharacterText("<p>Aqui podemos ver el marcador , los puntos individuales de nuestro jugador y la intensidad, y el tiempo que queda</p>");
};
