
1. crea pagina tasks sul modello microsoft to do quindi: 
-implementa sezione per scegliere la categoria e aggiungerne una nuova
-Filtra i task in base alla categoria
-Aggiungi possibilità di scegliere sfondo categoria -> 
la sidebar deve sparire, le icone devono comparire sulla search bar che
deve cambiare anche colore (lo stesso della sidebar). Al posto della side
deve comparire una side per le categorie.
La modifica della ui deve avvenire in base al path, vedere qui
https://bobbyhadz.com/blog/react-get-current-url
quindi quando è /tasks, applicare nuove classi.
idee: 
-inserire già le iconcine sulla search bar ma tenerle nascoste con display none. Quando il path è tasks, applicare display block e colorare
la search bar, dello stesso colore della navbar. La navbar deve sparire,
in tasks aggiungere componente per categorie e spostarlo con position
al posto della sidebar. Attenzione: togliere icona settings in sidebar perché c'è la stessa icona nella search bar e cambiare icona meteo sidebar perché è identica a quella per il dark mode della search bar . In generale migliorare icone sidebar perché fanno veramente cacà. 
2. Sui vari task aggiungere 1. numero di subtasks contenuti nel task 2. pulsante per eliminare task, cerchietto check sulla sinistra per completare, aggiungere sottolineatura al completamento + div completati in basso sotto alle liste . 3. Aggiungere possibilità di cambiare sfondo, quindi aggiungere in data, un nuovo array di oggetti customCategories dove c'è id categoria, nome categoria, url immagine, applicare logica immagini come microsoft todo 
3. Aggiungi sidebar destra per le subtasks, sempre sul modello microsoft




IN HOME, METTERE RIASSUNTO VARIE SEZIONI: DIV TASKS DA COMPLETARE ORDINTI PER PRIORITA', OROLOGIO IN TEMPO REALE, METEO, RIASSUNTO LIBRI DA LEGGERE 
**** IMPLEMENTA MODALE DALL'ALTO CON ERRORE LOGIN CONTENUTO IN const [error, setError] = useState(''); // Frase da aggiungere come modale che scende dall'alto per segnalare l'errore
*** IMPLEMENTA MODALE DALL'ALTO CON I VARI ERRORI DATI DAGLI ALERT IN SIGNUP 
*** Il signup è buggato, quando creo account devo cliccare due volte crea un account ed esce anche modale errore, sistemare la logica