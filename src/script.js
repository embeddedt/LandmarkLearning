import interact from 'interactjs';
import Swal from 'sweetalert2';
import 'core-js/features/promise'
import 'core-js/features/object/values'
import regeneratorRuntime from "regenerator-runtime";
let availableImages = [
    { k: true, src: 'https://simple.wikipedia.org/wiki/Eiffel_Tower', i: 'eiffel.jpg', n: 'Eiffel Tower', d: `The Eiffel Tower is a landmark in Paris. It was built between 1887 and 1889 for the Exposition Universialle (World Fair). The Tower was the Exposition's main attraction. Initially, the people of Paris thought the tower looked ugly, but after they found out how it was used for communications and television broadcasts, no one wanted it to be dismantled.`},
    { k: true, src: 'https://simple.wikipedia.org/wiki/Buckingham_Palace', i: 'buckinghampalace.jpg', n: 'Buckingham Palace', d: 'Buckingham Palace is a palace in the City of Westminster, which is part of central London, England in the United Kingdom. It is the official residence where the British monarch lives and works.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Leaning_Tower_of_Pisa', i: 'pisa.jpg', n: 'Leaning Tower of Pisa', d: 'The Leaning Tower of Pisa is a building in Pisa, Italy. It is a bell tower. It is famous because it is not vertical. In 1990 the tower was leaning at 5.5 degrees and increasing. Construction was stopped for almost 100 years because the people of Pisa were often at war with Genoa, Lucca, and Florence.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Westminster_Abbey', i: 'westminster.jpg', n: 'Westminster Abbey', d: 'Westminster Abbey is a large and famous Anglican church in Westminster, London. It is the burial place of many kings and queens. Since it was built it has been the place where the coronations of Kings and Queens of England have been held. The present structure dates from 1245. The Abbey contains "the oldest door in Britain".'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Fjord', i: 'fjord.jpg', n: 'Norway Fjords', d: 'A fjord or fiord is a type of gulf. Fjords are narrow with steep sides, and are created by large masses of snow moving over land. Norway is known for having many fjords.' },
    // 5
    { k: true, src: 'https://simple.wikipedia.org/wiki/Great_Wall_of_China', i: 'wallchina.jpg', n: 'Great Wall of China', d: 'The Great Wall of China is an ancient wall in China. The wall is made of cement, rocks, bricks, and powdered dirt. It was built to protect the north of the empire of China from enemy attacks. It is the longest structure humans have ever built, being 21,000 km (13,000 mi) long. The most famous wall was built between 226–200 BC by the first Emperor of Imperial China, Qin Shai Hong, during the Qin Dynasty. Not much of this wall remains as people have been stealing from it. It was much farther north than the current wall.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Moscow_Kremlin', i: 'kremlin.jpg', n: 'Moscow Kremlin', d: 'The Moscow Kremlin is a fortress in the center of Moscow, where most of the government works. It is where the President of Russia lives. Generally, the Moscow Kremlin is referred to as simply "the Kremlin". It is on the left bank of the Moskva River and southwest of Red Square.'},
    { k: true, src: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza', i: 'giza.jpg', n: 'Great Pyramid of Giza', d: 'The Great Pyramid of Giza is a huge pyramid built by the Ancient Egyptians. It stands near Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain mostly intact. When it was built it was 146.5 metres (481 feet) tall, but erosion and other things have shortened it to 138.8 metres. When it was built, the pyramid was covered by white stones that formed a smooth outer surface, but most of them are gone now.'},
    { k: true, src: 'https://simple.wikipedia.org/wiki/Great_Sphinx', i: 'sphinx.jpg', n: 'Great Sphinx', d: 'The Great Sphinx is at Giza near Cairo in Egypt. It is a stone sculpture of a creature with a human head and a lion\'s body. The greatest monumental sculpture in the ancient world, its body is 200 feet (60m) long and 65 feet (20m) tall. Its face is 13 feet (4m) wide.'},
    { k: true, src: 'https://simple.wikipedia.org/wiki/Sydney_Opera_House', i: 'operahouse.jpg', n: 'Sydney Opera House', d: 'The Sydney Opera House is an opera house on the shores of Sydney Harbour, in Sydney, Australia. It is shaped like the sails of a boat. Many concerts and events take place there, with 2000 performances a year presented by Opera Australia, Australia\'s national opera company. It is a very popular tourist attraction.'},
    // 10
    { k: true, src: 'https://simple.wikipedia.org/wiki/Statue_of_Liberty', i: 'statueofliberty.jpg', n: 'Statue of Liberty', d: 'The Statue of Liberty (sometimes referred to as Lady Liberty) is a monument symbolising the United States. The statue is placed near the entrance to New York City Harbor. The statue commemorates the signing of the United States Declaration of Independence. It was given to the United States by the people of France in 1886, to represent the friendship between the two countries established during the American Revolution.'},
    { k: true, src: 'https://simple.wikipedia.org/wiki/Taj_Mahal', i: 'tajmahal.jpg', n: 'Taj Mahal', d: 'The Taj Mahal is a white tomb in India. It was built in the 16th century by a Mughal emperor in memory of his wife, Mumtaz Mahal.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Moai', i: 'moai.jpg', n: 'Moai', d: 'Moai are stone statues on Easter Island. Each moai is made out of one large stone, but some have an extra stone on top of the head. Most were made from the volcanic rock in the Rano Raraku area of the island. Moai are sometimes called "heads" but they do have shoulders, arms, and a body. When, why, and how they were made is still a mystery today.' },
    { k: false, src: 'https://simple.wikipedia.org/wiki/Machu_Picchu', i: 'machu.jpg', n: 'Machu Picchu', d: 'Machu Picchu is a 15th-century Inca city in Peru, in South America. When the Spanish invaded Peru, the Incas left Machu Picchu. Nobody knows for sure why they did that, but some think it was because of diseases from Europe. The city was left unfinished, most likely due to the Spanish invasion and/or a civil war.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Angkor_Wat', i: 'angkor.jpg', n: 'Angkor Wat', d: 'Angkor Wat is a temple complex at Angkor, Cambodia, built for the Hindu king Suryavarman II in the early 12th century as his state temple and capital city. It is the world\'s largest religious building.' },
    // 15
    { k: true, src: 'https://simple.wikipedia.org/wiki/Burj_Khalifa', i: 'burj.jpg', n: 'Burj Khalifa', d: 'The Burj Khalifa is a very tall skyscraper in Dubai, United Arab Emirates and is the tallest building ever built, at 828 metres (2,717 feet).' },
    { k: true,src: 'https://simple.wikipedia.org/wiki/Mount_Rushmore', i: 'rushmore.jpg', n: 'Mount Rushmore', d: 'Mount Rushmore is a famous mountain and memorial near Keystone, South Dakota in the United States. It has the heads of four of America\'s presidents carved on it: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln.', ff: 'Each president was originally to be depicted from head to waist, but lack of funding forced construction to end on October 31, 1941.' },
    { k: false, src: 'https://simple.wikipedia.org/wiki/Mont-Saint-Michel', i: 'montmichel.jpg', n: 'Mont-Saint-Michel', d: 'Le Mont-Saint-Michel is an island and commune in Normandy, France. It is located about one kilometre (0.6 miles) from the country\'s northwestern coast.', ff: 'The way in which the town is built is an example of how feudal society worked. At the top there is God, the abbey and monastery. Below this, there are the great halls, then stores and houses. At the bottom, outside the walls, there are the houses of fishermen and farmers.'},
    { k: true, src: 'https://simple.wikipedia.org/wiki/St._Basil%27s_Cathedral', i: 'basil.jpg', n: 'St. Basil\'s Cathedral', d: 'St. Basil\'s Cathedral, also known as the Cathedral of Intercession, is a very famous cathedral in Moscow, Russia. The cathedral is very magnificent. It has 8 distinctive onion-shaped towers. The building itself is made up of separate chapels.', ff: 'The cathedral has escaped destruction many times. Napoleon Bonaparte decided to take it to Paris, but such an undertaking would have been impossible. Instead, he ordered it to be demolished. Explosives were lit, but torrential rain suddenly started, extinguishing the fuses.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Acropolis_of_Athens', i: 'acropolis.jpg', n: 'The Acropolis', d: 'The Acropolis of Athens is the most famous acropolis. It is a large hill in the center of Athens, on which the Parthenon and other Greek buildings were built.'},
    // 20
    { k: true, src: 'https://simple.wikipedia.org/wiki/Golden_Gate_Bridge', i: 'goldengate.jpg', n: 'Golden Gate Bridge', d: 'The Golden Gate Bridge is a suspension bridge that crosses over the San Francisco Bay, going from San Francisco to Marin County, in the U.S. state of California. It was opened for use in 1937. When the bridge was finished, its length of 9,266 ft (2824 m) made it the longest bridge in the world. Now there are several bridges that are longer, but for many people, it is still one of the most beautiful bridges in the world.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Neuschwanstein_Castle', i: 'neusch.jpg', n: 'Neuschwanstein Castle', d: 'Neuschwanstein Castle actually means New Swan Stone Castle. It is a Romanesque palace that was made in the 19th century by King Ludwig II of Bavaria. The castle was intended as a home for the king, until he died in 1886. It was opened to the public shortly after his death.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Victoria_Falls', i: 'victoriafalls.jpg', n: 'Victoria Falls', d: 'Victoria Falls is a waterfall in south central Africa in the Zambezi River between southeast Zambia and northwest Zimbabwe. It is 108.3 m high and 1,703 m wide. The first British explorer to discover the falls was David Livingstone in November 1855, where he viewed it on what is now known as Livingstone Island. He named it after Queen Victoria. The Chitonga name for the Falls is Mosi-oa-Tunya. That word means "the smoke that thunders." They call it that because the Falls are very misty.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Western_Wall',  i: 'westernwall.jpg', n: 'Western Wall', d: 'The Western Wall, Wailing Wall or Kotel is an ancient wall in the Old City of Jerusalem on the western side of the Temple Mount. According to Jewish tradition this wall is a remnant of the Second Temple in Jerusalem. It is the most holy site for Jews.' },
    { k: false, src: 'https://simple.wikipedia.org/wiki/Giant%27s_Causeway', i: 'giantscauseway.jpg', n: 'Giant\'s Causeway', d: 'The Giant\'s Causeway is an area of about 40,000 interlocking basalt columns created as the result of a volcanic eruption. It is in County Antrim on the northeast coast of Northern Ireland.'},
    // 25
    { k: false, src: 'https://simple.wikipedia.org/wiki/St._Peter%27s_Basilica', i: 'basilica.jpg', n: 'St. Peter\'s Basilica', d: 'St. Peter\'s Basilica is a large church in the Vatican City, in Rome, Italy. In Catholic tradition, St. Peter\'s Basilica is believed to be the burial place of Saint Peter, who was one of the twelve apostles of Jesus.', ff: 'On January 1st, 1547, Michelangelo, who was already over 70, became the architect of St. Peter\'s. He is the main designer of the building as it stands today. Michelangelo died before the job was finished, but by that time, he had got the construction up to a point where other people could get it finished.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Alcatraz_Island', i: 'alcatraz.jpg', n: 'Alcatraz Island', d: 'Alcatraz Island (sometimes just called Alcatraz or The Rock) is a small island in San Francisco Bay in California. It was first a lighthouse, then a military fort, then a military prison, and finally a federal prison. Finally, in 1963, it became a museum.'},
    { k: false, src: 'https://en.wikipedia.org/wiki/St._John%27s,_Newfoundland_and_Labrador', i: 'jellybeanrow.jpg', n: 'Jelly Bean Row', d: 'St. John\'s is the capital and largest city of the Canadian province of Newfoundland and Labrador. Housing in St. John\'s is typically painted in bright colours, earning its downtown the nickname Jelly Bean Row.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Tower_of_London', i: 'toweroflondon.jpg', n: 'Tower of London', d: 'The Tower of London is an ancient Norman stone fortress in London, England. The Tower had many uses. Its main function was to protect Norman rule in the years after the conquest. It was a prison, and a place of execution. Today, the Crown Jewels are kept there. This is the collection of jewels owned by the British state, and sometimes worn by the monarch. There is also a museum of armour.'},
    { src: 'https://en.wikipedia.org/wiki/Notre-Dame_Basilica_(Montreal)', i: 'notredamebasilica.jpg', n: 'Notre-Dame Basilica (Montreal)', d: 'Notre-Dame Basilica is a basilica in the historic district of Old Montreal, in Montreal, Quebec, Canada. The interior of the church is amongst the most dramatic in the world and regarded as a masterpiece of Gothic Revival architecture. The vaults are coloured deep blue and decorated with golden stars, and the rest of the sanctuary is decorated in blues, azures, reds, purples, silver, and gold.'},
    // 30
    { k: false, src: 'https://simple.wikipedia.org/wiki/Christ_the_Redeemer_(statue)', i: 'redeemer.jpg', n: 'Christ the Redeemer', d: 'Christ the Redeemer is a statue of Jesus Christ in Rio de Janeiro, Brazil. Construction started in 1926 and took five years.', ff: 'During construction, workers balanced themselves on scaffolds with no safety equipment. It was risky work but during the entire construction period, no workers were killed. Many regarded that as a miracle.'},
    { k: false, src: 'https://simple.wikipedia.org/wiki/Mount_Fuji', i: 'fuji.jpg', n: 'Mount Fuji', d: 'Mount Fuji is the tallest mountain in Japan, at 3,776 metres (12,388 ft) high. It is also a volcano. Mount Fuji is a famous cultural icon of Japan, as a lot of people have painted it, taken photographs of it, or climbed it.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Colosseum', i: 'colosseum.jpg', n: 'The Colosseum', d: 'The Colosseum, originally known as the Flavian Amphitheatre, is a large amphitheatre in the city of Rome. The construction of the Colosseum started around 70–72 AD and was finished in 80 AD. The Colosseum is a symbol of the Roman Empire. It is one of Rome\'s most popular tourist attractions, even though it is now in ruins because of earthquakes.' },
    { k: true, src: 'https://simple.wikipedia.org/wiki/Niagara_Falls', i: 'niagara.jpg', n: 'Niagara Falls', d: 'Niagara Falls is the collective name of three big waterfalls on the Niagara River in eastern North America, on the border between the United States and Canada. The three waterfalls are: the Horseshoe Falls, sometimes called the Canadian Falls, the American Falls, and the smaller Bridal Veil Falls.'},
    { k: false, src: 'https://en.wikipedia.org/wiki/Ice_Hotel_(Quebec)', i: 'icehotel.jpg', n: 'Ice Hotel', d: 'The Ice Hotel near Quebec City, Quebec, Canada is the first and only true ice hotel in North America. It is built each December for an opening date in early January. It then has a three-month lifespan each year before being brought down in April. The hotel is made of 30,000 tons of snow and 500 tons of ice and the walls are up to four feet thick.', ff: 'The Hotel makes its own snow using a special mixture to adjust the humidity.'},
    // 35
    { k: false, src: 'https://simple.wikipedia.org/wiki/Milan_Cathedral', i: 'milan.jpg', n: 'Milan Cathedral', d: 'Milan Cathedral is the cathedral church of Milan found in Lombardy, northern Italy. Its construction was started in 1386 and was completed in 1965. The construction took 579 years. Capacity of the cathedral is 60000 people. It is one of the largest cathedrals in the world and the largest in Italy.'},
    { k: false, src: 'https://en.wikipedia.org/wiki/Hungarian_Parliament_Building', i: 'hungarianparliament.jpg', n: 'Hungarian Parliament', d: 'The Hungarian Parliament Building, also known as the Parliament of Budapest after its location, is the seat of the National Assembly of Hungary, a notable landmark of Hungary, and a popular tourist destination in Budapest. It is situated on Kossuth Square in the Pest side of the city, on the eastern bank of the Danube river. It has been the largest building in Hungary since its completion.'},
    { k: true, src: 'https://en.wikipedia.org/wiki/Notre-Dame_de_Paris', i: 'notredameparis.jpg', n: 'Notre-Dame Cathedral (Paris)', d: 'Notre-Dame de Paris, referred to simply as Notre-Dame, is a medieval Catholic cathedral in Paris. It is considered to be one of the finest examples of French Gothic architecture. Approximately 12 million people visit Notre-Dame annually, making it the most visited monument in Paris.', ff: 'While undergoing renovation and restoration, the roof of Notre-Dame caught fire on the evening of 15 April 2019. Burning for around 15 hours, the cathedral sustained serious damage, including the destruction of the flèche (the timber spirelet over the crossing) and most of the lead-covered wooden roof above the stone vaulted ceiling.'},
    { k: true, src: 'https://simple.wikipedia.org/wiki/Mus%C3%A9e_du_Louvre', i: 'louvre.jpg', n: 'The Louvre', d: 'The Louvre is a museum in Paris that has millions of visitors every year because of its art collection. It is the most popular art museum in the world. The most famous picture in the Louvre is the Mona Lisa by Leonardo da Vinci.' },
    { k: false, src: 'https://en.wikipedia.org/wiki/Burj_Al_Arab', i: 'burjalarab.jpg', n: 'Burj Al Arab', d: 'Not to be mistaken with the Burj Khalifa, the Burj Al Arab is a luxurious 5 star hotel located in the city of Dubai, United Arab Emirates. It is the seventh tallest hotel in the world, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It also has a helipad near the roof.'}
];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const requestedLevel = getParameterByName("level").toUpperCase();
if(requestedLevel.charAt(0) == 'L')
    availableImages = availableImages.filter(e => e.k);
else if(requestedLevel.charAt(0) == 'M')
    availableImages = availableImages.filter(e => !e.k);
else
    console.warn(`Unknown or no level specified ('${requestedLevel}'), showing all landmarks as options.`);

window.onload = async function() {
    const inputOptions = {};
    availableImages.forEach((item, index) => inputOptions[index] = item.n);
    const { value: chosenIndex } = await Swal.fire({
        title: 'Choose a landmark',
        input: 'select',
        inputOptions,
        inputPlaceholder: 'Select a landmark',
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value) => {
            if(value.trim().length == 0)
                return 'You need to choose a landmark.';
        }
    });
    let { value: level } = await Swal.fire({
        title: 'Choose a puzzle level',
        input: 'select',
        inputOptions: {
            0: 'Easy',
            1: 'Medium',
            2: 'Hard'
        },
        allowOutsideClick: false,
        showCancelButton: false
    });
    level = parseInt(level);
    document.body.classList.add("choices-made");
    const backgroundImage = "sprites/" + availableImages[parseInt(chosenIndex)].i;

    const puzzleBackground = document.getElementById("puzzle-background");
    puzzleBackground.src = backgroundImage;

    const rows = 2 + (level);
    const cols = 3 + (level);

    const cardContainerRelWidth = 80;

    const cardRendering = false;

    let gameNowFinished = false;

    var referenceCard = null;

    var lastFloatedIndex = 3;

    var droppedCardSet = new Set();

    var cardContainer = document.querySelector("#card-container");
    var sidebar = document.querySelector("#sidebar");

    function injectCss(css) {
        var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
        } else {
        style.appendChild(document.createTextNode(css));
        }
    }

    /* Determine what the sidebar's width is (also the width of one card chunk) */

    const sideBarWidthChunk = (1/(cols+1))*100;

    const containerWidthChunk = 100-sideBarWidthChunk;

    injectCss(`#card-container > img { max-width: ${containerWidthChunk}vw; } #sidebar { width: ${sideBarWidthChunk}vw; }, #card-container { width: ${containerWidthChunk}vw; }`);

    const bkImgObj = new Image()
    bkImgObj.onload = function() {
        /**
         * Shuffles array in place.
         * @param {Array} a items An array containing the items.
         */
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        const cardHolders = {};

        const sidebarCardTemplate = (keyname, i, j) => `<div class="draggable-wrapper">
            <div class="card">
                Key Of<br/>
                <span class="keyname">${keyname}</span>
                <div class="card-backface"><img src="${backgroundImage}"/></div>
            </div>
        </div>`;
        function createCardAsChildOf(parent, keyname, i, j) {
            const wrapper = document.createElement('div');
            wrapper.classList.add("draggable-wrapper");
            parent.appendChild(wrapper);
            const card = document.createElement('div');
            card.classList.add('card');
            wrapper.appendChild(card);
            card.appendChild(document.createTextNode(`Key Of`));
            card.appendChild(document.createElement('br'));
            const keyel = document.createElement('span');
            keyel.classList.add('keyname');
            keyel.textContent = keyname;
            card.appendChild(keyel);
            const backface = document.createElement('div');
            backface.classList.add('card-backface');
            card.appendChild(backface);
            const img = document.createElement('img');
            img.src = backgroundImage;
            backface.appendChild(img);
            return wrapper;
        }
        var tmpWrapper = document.createElement('div');
        const sidebarCardContainer = sidebar.firstElementChild;

        let sideCards = [];
        let teleportedCards = [];
        for(var i = 0; i < rows; i++) {
            for(var j = 0; j < cols; j++) {
                const element = createCardAsChildOf(tmpWrapper, String.fromCharCode('A'.charCodeAt(0) + i), i, j);
                element.setAttribute("data-matching-row", i);
                element.setAttribute("data-matching-col", j);
                
                sideCards.push(element);
            }
        }

        sideCards = shuffle(sideCards);
        sideCards.forEach(card => sidebarCardContainer.appendChild(card));

        cardContainer = cardContainer.querySelector("div");
        let realCardContainer = cardContainer.parentNode;
        let cardRenderers = {};
        function renderCard(info) {
            if(info.lastGroup)
                info.context.svg.removeChild(info.lastGroup);
            info.lastGroup = info.context.openGroup();
            info.stave.draw();
            var formatter = new VF.Formatter().joinVoices([info.voice]).format([info.voice], 100);
            info.voice.draw(info.context, info.stave);
            info.context.closeGroup();
        }
        for(var i = 0; i < rows; i++) {
            const row = document.createElement("div");
            row.classList.add("card-row");
            cardContainer.appendChild(row);
            for(var j = 0; j < cols; j++) {
                const cardHolder = document.createElement("div");
                cardHolder.classList.add("card");
                cardHolder.setAttribute("data-row", i);
                cardHolder.setAttribute("data-col", j);
                cardHolders[i + '-' + j] = cardHolder
                if(i == 0 && j == 0)
                    referenceCard = cardHolder;
                row.appendChild(cardHolder);
                if(cardRendering) {
                    var renderer = new VF.Renderer(cardHolder, VF.Renderer.Backends.SVG);

                    var context = renderer.getContext();
                    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

                    // Create a stave of width 400 at position 10, 40 on the canvas.
                    var stave = new VF.Stave(0, 40, 100);

                    // Add a clef and time signature.
                    stave.addClef("treble");
                    // Connect it to the rendering context and draw!
                    stave.setContext(context);
                    
                    var notes = [
                        // A quarter-note C.
                        new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4"], duration: "q" }),
                    ];
                    
                    // Create a voice in 4/4 and add above notes
                    var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
                    voice.addTickables(notes);
                    
                    cardRenderers[i + '-' + j] = { renderer, stave, context, lastGroup: null, notes, voice }
                }
                /*renderCard(cardRenderers[i + '-' + j])*/
            }
        }
        const gameFinishedContainerBaseTransform = "translate(-50vw, 50vh) translate(50%, -50%)";
        function checkIfGameFinished() {
            if(gameNowFinished)
                return;
            let cardWasWrong = null;
            
            droppedCardSet.forEach(card => {
                if(!(card.getAttribute("data-matching-row") == card.getAttribute("data-holder-row") && card.getAttribute("data-matching-col") == card.getAttribute("data-holder-col"))) {
                    cardWasWrong = true;
                    card.classList.add("card-wrong");
                }
            });
            if(!cardWasWrong) {
                const body = document.querySelector(".body");
                if(!body.classList.contains("game-finished")) {
                    document.querySelector(".body").classList.add("game-finished");
                    
                    realCardContainer.style.transform = gameFinishedContainerBaseTransform;
                    setTimeout(() => {
                        resizeItems();
                        setTimeout(() => {
                            Swal.fire({
                                title: 'Good job!',
                                html: availableImages[chosenIndex].d + ` <a target="_blank" href="${availableImages[chosenIndex].src}">Source</a>`,
                                onRender: popupdom => {
                                    if(typeof availableImages[chosenIndex].ff == 'undefined')
                                        return;
                                    const validMessage = document.createElement("div");
                                    validMessage.classList.add("swal2-validation-message");
                                    validMessage.classList.add("swal2-funfact-message");
                                    validMessage.innerHTML = "Fun fact:&nbsp;" + availableImages[chosenIndex].ff;
                                    popupdom.querySelector(".swal2-content").appendChild(validMessage);
                                },
                                icon: 'success',
                                onClose: function() {
                                    document.getElementById("play-again").style.display = 'inline-block';
                                }
                            });
                        }, 500);
                    }, 500);
                    gameNowFinished = true;
                    /* Teleport the cards into the container for animating */

                    droppedCardSet.forEach(card => {
                        const i = card.getAttribute("data-holder-row");
                        const j = card.getAttribute("data-holder-col");
                        const holder = cardHolders[i + '-' + j];
                        const realCard = card.querySelector(".card");
                        realCard.setAttribute("data-matching-row", i);
                        realCard.setAttribute("data-matching-col", j);
                        teleportedCards.push(realCard);
                        holder.parentNode.replaceChild(realCard, holder);
                        card.parentNode.removeChild(card);
                        card.setAttribute("class", "card");
                    });
                }
            } else {
                Swal.fire('Oops', 'It looks like some of those puzzle pieces are in the wrong place.', 'error');
            }
        }
        let firstGrow = false;
        function resizeItems() {
            const offsetWidth = referenceCard.offsetWidth;
            const offsetHeight = referenceCard.offsetHeight;
            const wpx = offsetWidth + "px";
            const hpx = offsetHeight + "px";
            const puzzleBackgroundWidth = puzzleBackground.clientWidth;
            const puzzleBackgroundHeight = puzzleBackground.clientHeight;
            const targetArray = gameNowFinished ? teleportedCards : sideCards;

            targetArray.forEach((card, index) => {
                const i = parseInt(card.getAttribute("data-matching-row"));
                const j = parseInt(card.getAttribute("data-matching-col"));
                if(!gameNowFinished) {
                    card.style.width = wpx;
                    card.style.height = hpx;
                }
                const img = card.querySelector("img");
                const xTransform = (puzzleBackgroundWidth/cols)*j;
                const yTransform = (puzzleBackgroundHeight/rows)*i;
                img.style.transform = `translate(${-xTransform}px, ${-yTransform}px) translate(-4px, -4px)`;
                img.style.width = puzzleBackgroundWidth + 'px';
                img.style.height = puzzleBackgroundHeight + 'px';
            });
            Object.values(cardRenderers).forEach(info => {
                info.renderer.resize(offsetWidth - 8, offsetHeight - 8);
                info.stave.setWidth(offsetWidth - 8);
                info.stave.setY(0); //(offsetHeight / 2) - (70 / 2));
                if(cardRendering)
                    renderCard(info);
            });
            if(gameNowFinished) {
                const ratio = Math.max(realCardContainer.clientWidth / document.body.clientWidth, realCardContainer.clientHeight / document.body.clientHeight);
                realCardContainer.style.transform = gameFinishedContainerBaseTransform + ` scale(${1 / ratio})`;
                if(!firstGrow) {
                    firstGrow = true;
                    setTimeout(() => realCardContainer.style.transition = 'none', 500);
                }
            }
        }

        function moveCard(target, x, y) {
            
            // translate the element
            target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)'

        
            // update the posiion attributes
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
        }
        function dragStartListener(event) {
            var target = event.target
            
            const { top: y, left: x } = target.getBoundingClientRect()
            
            if(target.getAttribute("data-floated") != true) {
                const duplicate = target.cloneNode(false)
                duplicate.style.visibility = 'hidden'
                duplicate.style.transition = 'height 1s ease'
                duplicate.style.width = '0px'
                window.requestAnimationFrame(() => duplicate.style.height = '0px');
                target.parentNode.insertBefore(duplicate, target)
                target.setAttribute("data-floated", "true")
                target.style.zIndex = lastFloatedIndex++
            }
            target.style.position = 'fixed'
            target.style.top = '0px'
            target.style.left = '0px'
            target.classList.remove("card-dropped")
            target.classList.remove("card-wrong")
            moveCard(target, x, y)
        }
        function dragEndListener(event) {
            var target = event.target
        }

        function dragMoveListener (event) {
            var target = event.target
            // keep the dragged position in the data-x/data-y attributes
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            droppedCardSet.delete(target)
            moveCard(target, x, y)
        }

        interact("#sidebar .draggable-wrapper").draggable({
            autoScroll: true,
            listeners: {
                // call this function on every dragmove event
                start: dragStartListener,
                move: dragMoveListener,
                end: dragEndListener
            }
        }).on('down', (event) => {
            var target = event.currentTarget
            target.classList.add("card-clicked");
            target.classList.add("card-appear-floating")
        }).on('up', (event) => {
            var target = event.currentTarget
            target.classList.remove("card-clicked");
            target.classList.remove("card-appear-floating")
        });

        interact('#card-container .card').dropzone({
            // only accept elements matching this CSS selector
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
        
            // listen for drop related events:
            checker: function (dragEvent,         // related dragmove or dragend
                event,             // Touch, Pointer or Mouse Event
                dropped,           // bool default checker result
                dropzone,          // dropzone Interactable
                dropElement,       // dropzone element
                draggable,         // draggable Interactable
                draggableElement) {// draggable element
                if(!dropped)
                    return false;
                let existingCard = false;
                droppedCardSet.forEach(card => {
                    if(existingCard)
                        return;
                    if(card.getAttribute("data-holder-row") == dropElement.getAttribute("data-row") && card.getAttribute("data-holder-col") == dropElement.getAttribute("data-col")) {
                        existingCard = true;
                    }
                });
                return !existingCard;
            },
            ondrop: function (event) {
                const { top: y, left: x } = event.target.getBoundingClientRect()
                moveCard(event.relatedTarget, x, y)
                event.relatedTarget.classList.add("card-dropped")
                event.relatedTarget.setAttribute("data-holder-col", event.target.getAttribute("data-col"))
                event.relatedTarget.setAttribute("data-holder-row", event.target.getAttribute("data-row"))
                droppedCardSet.add(event.relatedTarget);
                if(droppedCardSet.size == (rows*cols))
                    setTimeout(() => checkIfGameFinished(), 0);
                
            },
            ondragleave: function (event) {
                event.relatedTarget.removeAttribute("data-holder-col")
                event.relatedTarget.removeAttribute("data-holder-row")
                droppedCardSet.delete(event.relatedTarget);
            }
        })

        window.onresize = function() {
            droppedCardSet.forEach(card => {
                const row = parseInt(card.getAttribute("data-holder-row"))
                const col = parseInt(card.getAttribute("data-holder-col"))
                const holder = cardHolders[row + '-' + col]
                const { top: y, left: x } = holder.getBoundingClientRect()
                moveCard(card, x, y)
            });
        }

        resizeItems();
        window.addEventListener("resize", resizeItems);
    }
    bkImgObj.src = backgroundImage
}

