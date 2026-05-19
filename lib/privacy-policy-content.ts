export type PrivacyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type PrivacySection = {
  id: string
  title: string
  blocks: PrivacyBlock[]
}

const EMAIL = 'ateliercucinemoderne@outlook.it'

export const privacyPolicySections: PrivacySection[] = [
  {
    id: 'intro',
    title:
      'Informativa ex artt. 13-14 Reg. UE n. 2016/679 per il trattamento dei dati personali',
    blocks: [
      {
        type: 'p',
        text: 'Gentile navigatore, G.A. SRL con la presente, la informa che, ai sensi e per gli effetti degli articoli 13 e 14 del Regolamento Europeo n. 2016/679 GDPR, i dati acquisiti e/o da Lei forniti, saranno oggetto di trattamento nel rispetto delle normative sotto richiamate.',
      },
    ],
  },
  {
    id: 'ruoli',
    title: 'Ruoli',
    blocks: [
      {
        type: 'p',
        text: 'Il Titolare del Trattamento è: G.A. SRL, Via P. Togliatti, 2 Corsico 20094 MI',
      },
      { type: 'p', text: `Email: ${EMAIL}` },
    ],
  },
  {
    id: 'finalita',
    title: 'Finalità dei trattamenti obbligatori',
    blocks: [],
  },
  {
    id: 'live-chat',
    title: 'Trattamento dei dati personali per la fornitura del servizio di live chat',
    blocks: [
      {
        type: 'p',
        text: 'In alcune aree del nostro sito web offriamo un contatto e una consulenza tramite live chat. Con l’aiuto della live chat, può comunicare con uno dei nostri consulenti tramite messaggi di testo.',
      },
      {
        type: 'p',
        text: 'Quando accede e utilizza la Live Chat, il Suo browser trasmetterà automaticamente per motivi tecnici i seguenti dati all’inizio della sessione, che terremo separati da ogni altra informazione che ci trasmetterà:',
      },
      {
        type: 'ul',
        items: [
          'Data e ora dell’accesso',
          'Durata della visita sul nostro sito web',
          'Tipo di browser web inclusa la versione',
          'Sistema operativo utilizzato',
          'Quantità di dati inviati',
          'Tipo di evento',
          'Indirizzo IP',
        ],
      },
      {
        type: 'p',
        text: 'La base legale per questo trattamento dei dati è l’articolo 6, paragrafo 1, lettera f) del GDPR, e il nostro legittimo interesse è quello di garantire e mantenere il funzionamento e la sicurezza del nostro servizio, nonché di eliminare i malfunzionamenti. In questo contesto elaboriamo i dati senza identificare la persona specifica a cui essi si riferiscono, a scopo di analisi.',
      },
      {
        type: 'p',
        text: 'Nel caso in cui Lei ci fornisca dati personali aggiuntivi tramite live chat ciò avverrà su base volontaria. I testi inseriti dall’utente sotto forma di live chat verranno memorizzati per conto nostro sul server. La base giuridica applicabile per questo trattamento dei dati è l’articolo 6, paragrafo 1, lettera b) del GDPR.',
      },
    ],
  },
  {
    id: 'registrazione',
    title: 'Trattamento dei dati personali per la registrazione',
    blocks: [
      {
        type: 'p',
        text: 'Le informazioni obbligatorie richieste per la registrazione sono evidenziate nel rispettivo campo di input. Se non si forniscono tali informazioni obbligatorie, non si potrà procedere con la registrazione. Durante il processo di registrazione si ha la possibilità di fornire ulteriori informazioni su base volontaria, tali informazioni non sono obbligatorie e l’invio è a vostra discrezione.',
      },
      {
        type: 'p',
        text: 'I dati personali che fornirà durante la registrazione verranno utilizzati da noi per creare il Suo profilo e identificarla in seguito a ogni accesso.',
      },
      {
        type: 'p',
        text: 'La base giuridica applicabile per queste operazioni di trattamento dei dati è l’articolo 6, paragrafo 1, lettera b) del GDPR. Eseguiremo tutto il processo di trattamento dei dati descritto in questa sezione, in base al Suo consenso e/o per rispettare il nostro contratto stipulato con Lei e/o in base ai nostri interessi legittimi.',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Trattamento dei dati personali per finalità di e-commerce',
    blocks: [
      {
        type: 'p',
        text: 'I dati personali forniti dall’utente durante la finalizzazione dell’ordine saranno utilizzati per l’esecuzione e l’elaborazione dell’ordine e delle transazioni di pagamento effettuati tramite il negozio online. In caso di pagamento con carta di credito, verranno raccolti anche il numero della carta, la data di scadenza, il nome del titolare e il numero di verifica (CVC).',
      },
      {
        type: 'p',
        text: 'La base giuridica applicabile per queste operazioni di trattamento dei dati è l’articolo 6, paragrafo 1, lettera b) del GDPR. Al fine di elaborare le transazioni di pagamento, potremmo trasmettere i dati rilevanti al fornitore di servizi di riscossione da noi incaricato, che elaborerà questi dati per conto nostro e solo per l’elaborazione dei pagamenti. Conserveremo le informazioni relative a ciascun acquisto effettuato sul e-commerce per 10 anni, per adempiere ad obblighi di legge in materia fiscale e di conservazione dei documenti aziendali.',
      },
      {
        type: 'p',
        text: 'I dati personali contenuti nel Suo account saranno conservati fino a quando Lei non avrà deciso di chiudere il suo account.',
      },
    ],
  },
  {
    id: 'marketing',
    title:
      'Trattamento dei dati personali per comunicazioni commerciali e promozionali (marketing diretto)',
    blocks: [
      {
        type: 'p',
        text: "Previo specifico consenso facoltativo dell'interessato, i dati di contatto (e-mail, numero di telefono, SMS/messaggistica) possono essere utilizzati per:",
      },
      {
        type: 'ul',
        items: [
          'inviare comunicazioni promozionali, offerte commerciali, newsletter, aggiornamenti su prodotti e servizi G.A. SRL;',
          'effettuare contatti telefonici o via SMS/messaggistica a fini di marketing diretto.',
        ],
      },
      {
        type: 'p',
        text: "La base giuridica applicabile per queste operazioni di trattamento dei dati è il consenso dell'interessato ai sensi dell’articolo 6, paragrafo 1, lettera b) del GDPR. Tale consenso viene prestato tramite apposito flag facoltativo nel modulo di raccolta dati. Il consenso è revocabile in qualsiasi momento, senza pregiudizio per la liceità del trattamento effettuato prima della revoca, contattando il Titolare.",
      },
      {
        type: 'p',
        text: 'I dati trattati per tali finalità di commerciali e promozionali sono conservati fino alla revoca del consenso e, in ogni caso, per un periodo non superiore a 6 anni.',
      },
    ],
  },
  {
    id: 'modalita',
    title: 'Modalità di trattamento',
    blocks: [
      {
        type: 'p',
        text: 'Il trattamento consiste, ad esempio, in operazioni di raccolta, registrazione, organizzazione, conservazione, estrazione, consultazione, uso, comunicazione, cancellazione dei dati personali. Esso viene effettuato, per le finalità suddette, secondo i principi (ex art. 5 del GDPR n. 2016/679) di liceità, correttezza, trasparenza, minimizzazione dei dati ed esattezza. I dati sono trattati con modalità telefoniche, cartacee, informatiche e telematiche.',
      },
      {
        type: 'p',
        text: 'Il trattamento avviene mediante strumenti idonei, misure tecniche ed organizzative adeguate a garantire la sicurezza, l’integrità e la riservatezza, evitando in particolare il rischio di perdita, accesso non autorizzato, uso illecito, diffusione, nel rispetto di quanto previsto anche dall’art. 32 del GDPR 2016/679, ad opera dei soggetti e in ottemperanza alle previsioni di cui all’art. 29 del GDPR n. 2016/679 ed all’art. 2-quaterdecies del Codice Privacy.',
      },
    ],
  },
  {
    id: 'conferimento',
    title: 'Natura del conferimento dei dati e conseguenze del rifiuto di rispondere',
    blocks: [
      {
        type: 'p',
        text: 'Il conferimento dei dati per le finalità obbligatorie non richiede il consenso esplicito. Senza tali dati, non saremo in grado di fornire i nostri servizi. Il conferimento dei dati per altre finalità è facoltativo e richiede il Suo esplicito consenso. In caso di mancato consenso, non potrà ricevere newsletter, materiale informativo o comunicazioni commerciali riguardanti i servizi offerti dal Titolare o da aziende terze. Tuttavia, continuerà comunque ad avere accesso ai nostri servizi.',
      },
      {
        type: 'p',
        text: 'Trattiamo le sue informazioni personali solo quando esiste una base giuridica per tale trattamento. Le basi giuridiche includono:',
      },
      {
        type: 'ul',
        items: [
          'Il Suo consenso alle attività di trattamento in questione',
          'Il rispetto degli obblighi di legge che siamo tenuti a soddisfare',
          'L’esecuzione di norme dettate da leggi o regolamenti, o da contratti, accordi o altri strumenti giuridici',
          'Studi condotti da enti di ricerca, preferibilmente su informazioni personali anonimizzate',
          'L’esecuzione di un contratto e dei relativi adempimenti precontrattuali, se Lei è parte di tale contratto',
          'L’esercizio dei nostri diritti in giudizio, in procedimenti amministrativi o in arbitrati',
          'La difesa o la protezione dell’incolumità fisica Sua o di un terzo',
          'La tutela della salute, nel contesto di procedure messe in atto da entità o professionisti del settore sanitario',
          'Il nostro legittimo interesse, purché i Suoi diritti e le Sue libertà fondamentali non prevalgano su tali interessi',
          'La protezione del credito.',
        ],
      },
    ],
  },
  {
    id: 'accesso',
    title: 'Accesso ai dati',
    blocks: [
      {
        type: 'p',
        text: 'I Suoi dati potranno essere resi accessibili per le finalità di cui sotto:',
      },
      {
        type: 'ul',
        items: [
          'Ai dipendenti e collaboratori del Titolare nella loro qualità di incaricati del trattamento e/o amministratori di sistema;',
          'A società terze o altri soggetti (a titolo indicativo: studi professionali, consulenti, software house che forniscono i gestionali, istituti di credito, assicurazioni, ecc.) che svolgono attività in outsourcing per conto del Titolare, nella loro qualità di responsabili esterni del trattamento.',
        ],
      },
      {
        type: 'p',
        text: 'Tra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono: Strumenti di Tracciamento; Dati di Utilizzo; nome; email; sito web; identificatori univoci di dispositivi per la pubblicità (Google Advertiser ID o identificatore IDFA, per esempio); numero di Utenti; città; informazioni sul dispositivo; statistiche delle sessioni; informazioni sul browser; risposte alle domande; clic; eventi keypress; eventi relativi ai sensori di movimento; movimenti del mouse; posizione relativa allo scorrimento; eventi touch.',
      },
    ],
  },
  {
    id: 'comunicazione',
    title: 'Comunicazione dei dati',
    blocks: [
      {
        type: 'p',
        text: 'Il Titolare potrà comunicare i Suoi dati alla Pubblica Amministrazione, agli Organismi di Vigilanza e/o alle Autorità Giudiziarie, nonché a tutti gli altri soggetti ai quali la comunicazione sia obbligatoria o necessaria per legge. I Suoi dati non saranno diffusi.',
      },
    ],
  },
  {
    id: 'conservazione',
    title: 'Conservazione dei dati',
    blocks: [
      {
        type: 'p',
        text: 'Tutti i dati personali conferiti saranno trattati nel rispetto dei principi di liceità, correttezza, pertinenza e proporzionalità, esclusivamente con le modalità necessarie, anche informatiche e telematiche, per perseguire le finalità sopra descritte. I dati personali saranno conservati per un periodo di 6 anni successivi all’ultimo contatto avvenuto con l’interessato/a o fino a richiesta di cancellazione da parte dello stesso. In tal caso, potranno essere comunque conservati i dati correlati al legittimo interesse del titolare o necessari per l’adempimento di obblighi di legge.',
      },
      {
        type: 'p',
        text: 'Si evidenzia che i sistemi informativi impiegati per la gestione delle informazioni raccolte sono configurati, sin dall’origine, in modo da minimizzare l’utilizzo dei dati personali.',
      },
    ],
  },
  {
    id: 'diritti',
    title: 'Diritti dell’interessato',
    blocks: [
      {
        type: 'p',
        text: 'Nella sua qualità di interessato, ha i diritti di cui all’art. 15 ss ed art. 77 del GDPR, e precisamente i diritti di:',
      },
      {
        type: 'ul',
        items: [
          'Ottenere dal titolare del trattamento la conferma che sia o meno in corso un trattamento di dati personali che lo riguardano e, in tal caso, di ottenere l’accesso ai dati personali e alle informazioni previste dal regolamento (finalità, categorie, destinatari, periodo di conservazione, origine dei dati, processi decisionali automatizzati, ecc.);',
          'Ottenere la rettifica dei dati personali inesatti e l’integrazione di quelli incompleti;',
          'Ottenere la cancellazione dei dati personali nei casi previsti dal regolamento;',
          'Ottenere la limitazione del trattamento quando ricorrono le ipotesi previste dal regolamento;',
          'Ricevere in formato strutturato i dati personali e trasmetterli a un altro titolare (portabilità), ove applicabile;',
          'Opporsi al trattamento per motivi connessi alla situazione particolare, compreso il marketing diretto;',
          'Non essere sottoposto a decisioni basate unicamente su trattamento automatizzato, compresa la profilazione, che producano effetti giuridici significativi;',
          'Proporre reclamo a un’autorità di controllo ai sensi dell’art. 77.',
        ],
      },
    ],
  },
  {
    id: 'esercizio-diritti',
    title: 'Modalità di esercizio dei diritti',
    blocks: [
      {
        type: 'p',
        text: `Potrà in qualsiasi momento esercitare i diritti contattando il Titolare al seguente indirizzo e-mail: ${EMAIL}`,
      },
    ],
  },
  {
    id: 'responsabili',
    title: 'Responsabili esterni e incaricati',
    blocks: [
      {
        type: 'p',
        text: 'L’elenco aggiornato dei responsabili esterni e degli incaricati al trattamento è custodito presso la sede legale del Titolare del trattamento.',
      },
    ],
  },
  {
    id: 'modifiche',
    title: 'Modifica dell’attuale informativa',
    blocks: [
      {
        type: 'p',
        text: 'La presente informativa è stata redatta il giorno 05-05-2026 e potrebbe subire variazioni nel tempo anche in funzione delle integrazioni o modifiche legislative e regolamentari in materia. L’Interessato è invitato a consultare spesso questa pagina.',
      },
    ],
  },
]

export const PRIVACY_CONTACT_EMAIL = EMAIL
