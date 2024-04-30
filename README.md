# React + TypeScript + Vite


Semplice App E-commerce con React.ts

Sviluppare un'applicazione e-commerce in cui il cliente può aggiungere prodotti al carrello e completare l'acquisto. Utilizzando React.ts come linguaggio di programmazione, Sass per lo stile e Contentful per il contenuto.

Integrazione dei Prodotti:

I prodotti saranno integrati tramite l'API fakeapi.platzi.com. La navigazione dell'app includerà:

Home page
Pagina dei prodotti
Carrello
Pagina dei Prodotti:

La pagina dei prodotti visualizzerà una lista di prodotti presi dall'API, con un pulsante "Add to Cart" per ogni prodotto. Implementeremo un sistema di infinity scroll, load more o paginazione per gestire la visualizzazione dei prodotti. Durante il caricamento dei dati, sarà mostrato un componente di caricamento. Il layout sarà responsivo:

Su desktop: 4 prodotti per riga su tre colonne
Su tablet: 2 prodotti per riga su 6 colonne
Su mobile: 12 prodotti per riga su una colonna
Pagina del Carrello:

La pagina del carrello includerà un'icona del carrello che, al click, aprirà una sidebar per visualizzare il carrello. Ogni elemento nel carrello includerà l'immagine del prodotto, il nome e il prezzo. Sarà possibile gestire le quantità dei prodotti nel carrello e rimuovere prodotti. Selezionando la modalità di pagamento, sarà richiesto un indirizzo di spedizione.

Metodi di Pagamento:

I metodi di pagamento includeranno "alla consegna" e carta di credito. Se viene selezionata la carta di credito, verrà richiesto un form per le informazioni della carta. Se viene selezionato il pagamento alla consegna, verranno aggiunti 10 euro al totale dell'ordine.

Altre Funzionalità:

Implementare un sistema di registrazione con Local Storage per il login.
La lingua principale dell'app sarà l'inglese.
Implementare un possibile sistema di promozione: se nel carrello sono presenti almeno tre prodotti e il totale supera i 1000 euro, i due prodotti meno cari saranno gratuiti.
Aggiungere un'opzione per il dark mode.
Dopo il pagamento, reindirizzare alla pagina di ringraziamento.


*****
Nomenclatura Branch:

feature/ per l'aggiunta di nuove funzionalità:
Esempio: feature/TLGPE/12345/ per nuove aggiunte relative al progetto TLGPE e al ticket numero 12345.
bugfix/ per la risoluzione di bug:
Esempio: bugfix/TLGSUP/12345/ per correzioni di bug nel progetto TLGSUP e relative al ticket numero 12345.
Nomenclatura Commit:

Esempio: git commit -m "TLG-12345:BC:TT:Descrizione" dove:
TLG-12345: indica il numero del ticket.
BC: indica il codice del branch (feature o bugfix).
TT: indica il tipo di ticket (es. AGG per aggiunta, COR per correzione).
Descrizione: una breve descrizione del commit.
Questo schema organizzato rende più chiaro il tipo di lavoro svolto e semplifica la gestione del versionamento del codice.


