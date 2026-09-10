(() => {
  'use strict';

  const STORAGE_KEY = 'sebastianclark-language';
  const SUPPORTED = new Set(['es', 'en']);
  const SPANISH_REGIONS = new Set([
    'MX','ES','AR','BO','CL','CO','CR','CU','DO','EC','SV','GT','GQ','HN','NI','PA','PY','PE','PR','UY','VE'
  ]);

  const en = {
    // Common navigation
    'nav.home': 'Home',
    'nav.apps': 'Apps',
    'nav.games': 'Games',
    'nav.services': 'Services',
    'nav.web': 'Web development',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.talk': "Let's talk",

    // Home / index
    'index.hero.title': 'Hi, I’m <strong>Sebastian Clark</strong>.<br><span class="headline-accent">I build apps and games that turn ideas into experiences.</span>',
    'index.hero.subtitle': 'I design and develop iPhone apps and games with personality, clear controls, and attention to detail. I also build websites and automations that give your business a stronger digital presence and useful tools.',
    'index.badge.iphone': 'iPhone apps',
    'index.badge.games': 'Games',
    'index.badge.design': 'Design & development',
    'index.badge.support': 'Direct support',
    'index.hero.cta': "Let's talk about your idea",
    'index.hero.projects': 'Explore my projects',
    'index.stat.1.label': 'My focus',
    'index.stat.1.value': 'Apps and games',
    'index.stat.1.note': 'Original products and custom projects, from the first idea through testing.',
    'index.stat.2.label': 'User experience',
    'index.stat.2.value': 'Every interaction matters',
    'index.stat.2.note': 'Clear screens and controls designed around what people actually want to do.',
    'index.stat.3.label': 'Development',
    'index.stat.3.value': 'Test and improve',
    'index.stat.3.note': 'Reviewable versions that help refine features, performance, and details.',
    'index.stat.4.label': 'Also for your business',
    'index.stat.4.value': 'Web and automation',
    'index.stat.4.note': 'Responsive websites and integrations that complete your digital presence.',
    'index.projects.title': 'Ideas you can already explore',
    'index.projects.lead': 'A travel app and a game currently taking shape. See what I’m building.',
    'index.spendly.status': 'App · Available on the App Store',
    'index.spendly.desc': 'Itineraries, expenses, and budgets in one place to organize every stage of your trip.',
    'index.spendly.cta': 'Discover Spendly Travel',
    'index.operator.status': 'Game · In development',
    'index.operator.desc': 'Top-down tactical action. Explore the project and join the TestFlight beta.',
    'index.operator.cta': 'Explore Operator Ops',
    'index.services.title': 'From your idea to an app or game',
    'index.services.lead': 'We define a focused first version and build from there.',
    'index.services.app.title': 'iPhone applications',
    'index.services.app.desc': 'Screen design, feature development, and preparation for testing and distribution. An experience designed for the people who will use your app.',
    'index.services.game.title': 'Game development',
    'index.services.game.desc': 'Prototypes, mechanics, controls, and interfaces. We test the gameplay experience and refine the scope before expanding the content.',
    'index.services.web.title': 'I also build your web presence',
    'index.services.web.desc': 'Presentation sites, business websites, and automations. Responsive design, clear structure, forms, and integrations that connect you with your customers.',
    'index.services.web.cta': 'View web services and pricing',
    'index.stack.title': 'What I use to build your project',
    'index.stack.lead': 'Swift and Xcode for iOS development; web technologies and Python for sites and integrations.',
    'index.stack.automation': 'Automations',
    'index.process.title': 'How do we work together?',
    'index.process.lead': 'A shared process: we define the scope, review progress, and test before launch.',
    'index.process.1.title': 'Tell me your idea',
    'index.process.1.desc': 'Tell me what you want to create, who it is for, and what it should do. We define the first version, timeline, and budget.',
    'index.process.2.title': 'Design and build',
    'index.process.2.desc': 'I design the experience and develop a version you can review. We share progress and refine details within the agreed scope.',
    'index.process.3.title': 'Testing and launch',
    'index.process.3.desc': 'We test the features and I prepare the delivery or distribution according to the project. Store publication remains subject to each platform’s review process.',
    'index.pricing.title': 'Make room for your next idea',
    'index.pricing.lead': 'Apps and games have different scopes. We start with the essential features and prepare a clear proposal.',
    'index.pricing.ios.badge': 'iOS apps',
    'index.pricing.app.title': 'iPhone app',
    'index.pricing.app.range': 'From $1,900 <span>MXN</span>',
    'index.pricing.app.desc': 'A simple application that turns your idea into a clear, professional iPhone experience.',
    'index.pricing.app.li1': '✓ Design and development for iPhone',
    'index.pricing.app.li2': '✓ Simple, clear features for your idea',
    'index.pricing.app.li3': '✓ App Store preparation and publication support',
    'index.pricing.app.li4': '✗ Complex features are quoted according to scope',
    'index.pricing.app.cta': 'I want to build my app',
    'index.pricing.game.badge': 'Games',
    'index.pricing.game.title': 'Your idea, in motion',
    'index.pricing.game.range': 'Custom quote',
    'index.pricing.game.desc': 'Scope depends on the mechanics, platforms, art, and online features your game needs.',
    'index.pricing.game.li1': '✓ Define a first playable version',
    'index.pricing.game.li2': '✓ Mechanics and controls development',
    'index.pricing.game.li3': '✓ Gameplay testing and refinement',
    'index.pricing.game.li4': '✓ Content and services agreed per project',
    'index.pricing.game.cta': "Let's talk about my game",
    'index.pricing.web.title': 'Web development, automation, and maintenance',
    'index.pricing.web.presentation.badge': 'Websites',
    'index.pricing.web.presentation.title': 'Presentation website',
    'index.pricing.web.presentation.range': 'From $2,000 <span>MXN</span>',
    'index.pricing.web.presentation.desc': 'A modern page that explains what you do, builds trust, and receives messages from interested customers.',
    'index.pricing.web.presentation.li1': '✓ Modern responsive design',
    'index.pricing.web.presentation.li2': '✓ Contact form',
    'index.pricing.web.presentation.li3': '✓ Clear sales-oriented structure',
    'index.pricing.web.presentation.li4': '✗ Domain and hosting not included',
    'index.pricing.web.presentation.cta': 'I want this option',
    'index.pricing.web.site.title': 'Complete website',
    'index.pricing.web.site.range': 'From $4,500 <span>MXN</span>',
    'index.pricing.web.site.desc': 'Several well-organized sections so your business looks professional: home, services, contact, and more.',
    'index.pricing.web.site.li1': '✓ 3 to 5 organized sections',
    'index.pricing.web.site.li2': '✓ Design adapted to your brand',
    'index.pricing.web.site.li3': '✓ Contact form',
    'index.pricing.web.site.li4': '✗ Domain and hosting not included',
    'index.pricing.web.site.cta': 'I want this option',
    'index.pricing.web.sales.title': 'Sales-focused website',
    'index.pricing.web.sales.range': 'From $6,500 <span>MXN</span>',
    'index.pricing.web.sales.desc': 'Designed strategically to turn visits into real customers, with structure and messaging focused on conversion.',
    'index.pricing.web.sales.li1': '✓ Strategic sales structure',
    'index.pricing.web.sales.li2': '✓ Effective calls to action',
    'index.pricing.web.sales.li3': '✓ Advanced commercial focus',
    'index.pricing.web.sales.li4': '✗ Domain and hosting not included',
    'index.pricing.web.sales.cta': 'I want this option',
    'index.pricing.web.auto.title': 'Task automation',
    'index.pricing.web.auto.range': 'From $500 <span>MXN</span>',
    'index.pricing.web.auto.desc': 'Smart forms, automated emails, and simple integrations so you do not have to handle everything manually.',
    'index.pricing.web.auto.li1': '✓ Automated forms',
    'index.pricing.web.auto.li2': '✓ Emails sent automatically',
    'index.pricing.web.auto.li3': '✗ External service fees not included',
    'index.pricing.web.auto.cta': 'I’m interested',
    'index.pricing.web.maintenance.title': 'Monthly maintenance',
    'index.pricing.web.maintenance.range': 'From $240 <span>MXN / month</span>',
    'index.pricing.web.maintenance.desc': 'Adjustments, small changes, and ongoing support so your website stays updated and working properly.',
    'index.pricing.web.maintenance.li1': '✓ Changes and adjustments included',
    'index.pricing.web.maintenance.li2': '✓ Direct support via WhatsApp',
    'index.pricing.web.maintenance.li3': '✓ Peace of mind that everything works',
    'index.pricing.web.maintenance.cta': 'I’m interested',
    'index.pricing.extra.title': 'Additional costs to keep in mind',
    'index.pricing.extra.p1': 'These are external services such as the domain (for example, www.example.com), security, and hosting, which you contract directly.',
    'index.pricing.extra.p2': 'I handle the setup for you; in other words, the configuration work is already included in the project price.',
    'index.pricing.extra.li1': '🌐 <strong>Web domain</strong> (your internet address, e.g. yourbusiness.com): from about $200 MXN per year depending on the extension.',
    'index.pricing.extra.li2': '🔒 <strong>Security and speed</strong> (Cloudflare): the basic version is free; advanced plans are optional.',
    'index.pricing.extra.li3': '🖥️ <strong>Hosting</strong> (where your website lives): it can be free or paid depending on the project.',
    'index.contact.title': 'Tell me your idea and I’ll get back to you',
    'index.contact.lead': 'An app, a game, or a web project? Tell me who it is for and what you would like to build.',
    'index.contact.direct': 'Direct contact',
    'index.contact.name': '<strong>Name:</strong> Sebastian Clark',
    'index.contact.phone': '<strong>Phone:</strong> <a href="tel:+526623255194">+52 662 325 5194</a>',
    'index.contact.email': '<strong>Email:</strong> <a href="mailto:cotizacion@sebastianclark.mx">cotizacion@sebastianclark.mx</a>',
    'index.contact.note': 'You can contact me through the form, by phone, or on WhatsApp. I’ll reply with a clear proposal.',
    'index.form.name': 'Name',
    'index.form.name.placeholder': 'Your full name',
    'index.form.email': 'Email',
    'index.form.email.placeholder': 'you@email.com',
    'index.form.phone': 'Phone (optional)',
    'index.form.phone.placeholder': 'Example: +52 662 000 0000',
    'index.form.service': 'Service of interest',
    'index.form.service.placeholder': 'Select an option',
    'index.form.service.app': 'iPhone app development',
    'index.form.service.game': 'Game development',
    'index.form.service.presentation': 'Presentation website',
    'index.form.service.site': 'Business website',
    'index.form.service.automation': 'Process automation',
    'index.form.service.consulting': 'Consulting',
    'index.form.message': 'Message',
    'index.form.message.placeholder': 'Tell me what you need and what you want to achieve',
    'index.form.submit': 'Send message',
    'index.footer': '© 2026 Sebastian Clark · Apps and games built with attention to detail. I also develop websites. · <a href="legal.html">Legal Notice</a> · <a href="app-privacy.html">App Privacy Notice</a>',

    // Apps page
    'apps.hero.title': 'Apps',
    'apps.hero.lead': 'Digital products built with the same attention to detail, clarity, and user experience.',
    'apps.status': 'Available on the App Store',
    'apps.spendly.desc': 'A free iPhone app for organizing trips and managing travel budgets in one place. Create itineraries, record and categorize expenses, review charts, and see clear trip summaries.',
    'apps.li1': 'Itineraries to organize every day of your trip.',
    'apps.li2': 'Expense tracking by category and travel budget.',
    'apps.li3': 'Built-in currency conversion.',
    'apps.li4': 'Pie charts and summaries to visualize progress.',
    'apps.li5': 'Free, with no subscriptions or in-app purchases.',
    'apps.li6': 'Does not collect personal data.',
    'apps.download': 'Download on the App Store',
    'apps.privacy': 'Privacy Notice',
    'apps.footer': '© 2026 Sebastian Clark · Websites and applications built with clarity. · <a href="legal.html">Legal Notice</a>',

    // Games page
    'games.hero.title': 'Games',
    'games.hero.lead': 'What’s next to play, created by Sebastian Clark.',
    'games.status': 'In development · TestFlight beta',
    'games.desc': 'Top-down tactical action. An evolving game where every movement matters. Try the beta and share feedback to help shape what comes next.',
    'games.feature1.title': 'Tactical action',
    'games.feature1.desc': 'Combat, strategy, and team decisions form the core of the experience.',
    'games.feature2.title': 'Player connectivity',
    'games.feature2.desc': 'Matchmaking through Apple Game Center, with voice chat planned for team play.',
    'games.note': 'Features and availability may change during testing. Optional real-money in-app purchases are planned and will be processed by Apple.',
    'games.testflight': 'Try it on TestFlight',
    'games.privacy': 'Operator Ops Privacy',
    'games.beta': 'Open the link to check requirements and available testing spots. Install TestFlight and follow Apple’s instructions to join.',
    'games.footer': '© 2026 Sebastian Clark · <a href="apps.html">Apps</a> · <a href="app-privacy.html#operator-ops">Operator Ops Privacy</a> · <a href="legal.html">Legal Notice</a>',

    // App privacy page
    'privacy.back': '← Back to apps',
    'privacy.title': 'Application Privacy Notice',
    'privacy.updated': 'Last updated: September 7, 2026',
    'privacy.summary.title': 'Plain-language summary',
    'privacy.summary.p1': 'Each application has different practices. Spendly Travel keeps trip data on the device. Operator Ops uses Apple services for beta testing and multiplayer; voice chat and future in-app purchases are planned. These services involve the data processing described below.',
    'privacy.summary.links': '<a href="#spendly-travel">Spendly Travel</a> · <a href="#operator-ops">Operator Ops</a>',
    'privacy.owner.title': 'Controller and contact',
    'privacy.owner.p1': 'The responsible party is <strong>Sebastian Clark Valenzuela</strong>. For questions or requests involving access, correction, deletion, or objection, write to <a href="mailto:cotizacion@sebastianclark.mx">cotizacion@sebastianclark.mx</a> and identify the application and your request. Do not send passwords or banking information.',
    'privacy.spendly.p1': 'An application for organizing trips, budgets, and expenses. It does not collect personal information or usage data for the developer. The information you enter remains on your device; Sebastian Clark does not receive it and cannot access it.',
    'privacy.spendly.p2': 'It does not include proprietary accounts, advertising, analytics, or tracking. It does not sell or share your data, and it does not request access to contacts, photos, audio, or location. It does not include subscriptions or in-app purchases.',
    'privacy.spendly.p3': 'You can delete local information through available app controls or by deleting the application. Spendly Travel does not create an account or a remote record of your trips that you would need to ask the developer to delete.',
    'privacy.operator.p1': 'A game in development distributed in beta through TestFlight. Its multiplayer integration is based primarily on Apple Game Center. Voice chat and real-money purchases are planned features; their description here does not mean they are available in every test build.',
    'privacy.game.title': 'Game and matchmaking data',
    'privacy.game.p1': 'To identify participants and organize sessions, the game uses the player identifier and display name provided by Game Center. It exchanges lobby information needed for gameplay, such as participants, teams, level, and readiness state. Progress, preferences, and inventory are stored on the device; information required for multiplayer features is communicated through Apple services and to participants in the session.',
    'privacy.game.p2': 'Apple processes account and game-activity information under its own privacy policy. The visibility of your profile and activity depends on your Game Center settings. Using Game Center does not mean Operator Ops automatically receives every type of data Apple may manage.',
    'privacy.voice.title': 'Planned voice chat',
    'privacy.voice.p1': 'When available, voice chat will require microphone permission. If you enable it, your voice will be transmitted to participants in the channel or match through the Apple integration. You can deny or revoke microphone permission in device settings. Do not share personal or sensitive information by voice: other players may hear it and could record it using their own means.',
    'privacy.voice.p2': 'Before this feature is enabled, this notice will be updated with the final audio-processing and retention practices, including any recording or moderation that may be implemented.',
    'privacy.purchase.title': 'Future in-app purchases',
    'privacy.purchase.p1': 'Optional real-money purchases are planned and will be processed by Apple through the App Store and StoreKit. The game will use product, transaction, and transaction-status information to validate purchases, deliver content, and recognize applicable entitlements. Prices and conditions will be shown before a purchase is confirmed.',
    'privacy.purchase.p2': 'The developer does not receive your full card number, security code, or Apple Account password. Apple manages payment information under its own policies. Purchases made in TestFlight are performed in a testing environment and are not equivalent to real purchases in the commercial release.',
    'privacy.testflight.title': 'TestFlight testing and diagnostics',
    'privacy.testflight.p1': 'Apple collects beta usage and crash information and shares it with the developer to improve the game. This may include the app and operating-system version, device model, sessions, and crash reports. We also receive feedback and screenshots you choose to submit.',
    'privacy.testflight.p2': 'If you join only through the public link, Apple does not show your name or email address to the developer as invitation data. Avoid including sensitive information in feedback or screenshots.',
    'privacy.noads.title': 'Data not requested and advertising',
    'privacy.noads.p1': 'Operator Ops does not require you to provide the developer with your Apple Account password or card information. Matchmaking does not require access to your contacts, photos, or precise location. Microphone permission will be related to voice chat, not matchmaking.',
    'privacy.noads.p2': 'Advertising is not planned at this stage. The data described here will not be used for targeted advertising or sold. If advertising or other services with different practices are added later, this notice will be updated before they are enabled.',
    'privacy.retention.title': 'Retention and controls',
    'privacy.retention.p1': 'Local data can be removed by deleting the application, but doing so does not delete Game Center, TestFlight, or purchase records retained by Apple. You can manage activity visibility and social options in Game Center settings and stop beta testing through TestFlight.',
    'privacy.retention.p2': 'Diagnostics and feedback received are used to investigate problems and improve the beta. Apple states that TestFlight feedback is retained for one year and may keep diagnostic and usage data until issues are resolved. To request access to or deletion of information received by the developer, use the contact information in this notice; data controlled by Apple can also be managed through <a href="https://privacy.apple.com/">Apple Data and Privacy</a>.',
    'privacy.minors.title': 'Minors and social features',
    'privacy.minors.p1': 'Apple age ratings and restrictions must be respected. Family organizers can manage multiplayer, social features, and purchases using parental controls on the device. Apple limits certain features, including voice chat, on child accounts.',
    'privacy.apple.title': 'Apple service privacy information',
    'privacy.apple.gc': '<a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center and Privacy</a>',
    'privacy.apple.tf': '<a href="https://www.apple.com/legal/privacy/data/en/test-flight/">TestFlight and Privacy</a>',
    'privacy.apple.store': '<a href="https://www.apple.com/legal/privacy/data/en/app-store/">App Store and Privacy</a>',
    'privacy.changes.title': 'Changes to this notice',
    'privacy.changes.p1': 'This notice will be updated when features or data practices change, together with the applicable App Store privacy information. New voice, purchase, or other service features will be documented before they are enabled.',
    'privacy.footer': '© 2026 Sebastian Clark · <a href="app-privacy.html">Application Privacy Notice</a>',

    // Legal page
    'legal.back': '← Back to home',
    'legal.title': 'Legal Notice',
    'legal.updated': 'Last updated: February 2026',
    'legal.privacy.title': '1. Privacy Notice',
    'legal.privacy.intro': 'In accordance with Mexico’s <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> and its regulations, Sebastian Clark, reachable at <a href="mailto:cotizacion@sebastianclark.mx">cotizacion@sebastianclark.mx</a>, is responsible for the processing of personal data that you provide through this website.',
    'legal.data.title': 'Data we collect',
    'legal.data.li1': 'Full name',
    'legal.data.li2': 'Email address',
    'legal.data.li3': 'Phone number (optional)',
    'legal.data.li4': 'Message and information about the service of interest',
    'legal.purpose.title': 'Purpose of processing',
    'legal.purpose.li1': 'Respond to your quote or contact request',
    'legal.purpose.li2': 'Send information related to requested services',
    'legal.purpose.li3': 'Follow up on contracted projects',
    'legal.transfer.title': 'Data transfers',
    'legal.transfer.p1': 'Your data <strong>will not be transferred to third parties</strong> without your consent, except in the cases provided for in Article 37 of the LFPDPPP.',
    'legal.third.title': 'Use of third-party services',
    'legal.third.p1': 'To send contact forms, this website may rely on technology providers acting on behalf of Sebastian Clark to process the information you provide and deliver the contact message. Those providers will process the data only for that purpose.',
    'legal.arco.title': 'ARCO rights',
    'legal.arco.p1': 'You have rights of <strong>Access, Rectification, Cancellation, or Objection (ARCO)</strong> regarding the processing of your personal data. To exercise them, send an email to <a href="mailto:cotizacion@sebastianclark.mx">cotizacion@sebastianclark.mx</a> with the subject “ARCO Rights”.',
    'legal.terms.title': '2. Terms and Conditions of Service',
    'legal.services.title': 'Services offered',
    'legal.services.p1': 'Sebastian Clark offers web design and development, process automation, and website maintenance services for individuals and businesses.',
    'legal.hiring.title': 'Hiring process',
    'legal.hiring.li1': 'The client requests a quote through the form or via WhatsApp.',
    'legal.hiring.li2': 'Scope, price, and delivery times are agreed in writing by email or WhatsApp.',
    'legal.hiring.li3': 'The project begins once the agreement is confirmed and the applicable deposit has been received.',
    'legal.payments.title': 'Payments',
    'legal.payments.li1': 'Published prices are estimates; the final price is quoted according to the project.',
    'legal.payments.li2': 'A 50% deposit is required to begin work.',
    'legal.payments.li3': 'The remaining balance is paid when the completed project is delivered.',
    'legal.payments.li4': 'Prices are expressed in Mexican pesos (MXN) and include design and development, but not domains or hosting.',
    'legal.delivery.title': 'Delivery and revisions',
    'legal.delivery.li1': 'Up to 2 rounds of revisions are included at no additional cost.',
    'legal.delivery.li2': 'Changes outside the agreed scope are quoted separately.',
    'legal.delivery.li3': 'Delivery times are specified in each quote.',
    'legal.approval.title': 'Approval of deliverables',
    'legal.approval.p1': 'Any progress or delivery that receives no comments within <strong>5 business days</strong> after it is sent will be considered approved. After that period without a response, the project may continue to the next stage or be considered completed, as applicable.',
    'legal.cancel.title': 'Cancellation or suspension',
    'legal.cancel.p1': 'If the client cancels the project after work has started, the deposit is non-refundable because planning, design, and development time has already been invested. If cancellation occurs at an advanced stage, work completed up to that point will be invoiced according to project progress.',
    'legal.ip.title': 'Intellectual property',
    'legal.ip.p1': 'Once the project has been paid in full, the client receives the right to use the delivered website for commercial and operational purposes. Sebastian Clark retains authorship of the development and reserves the right to display the project, in whole or in part, in a portfolio, social networks, or professional presentation materials unless otherwise agreed in writing.',
    'legal.liability.title': 'Limitation of liability',
    'legal.liability.p1': 'Sebastian Clark is not responsible for interruptions, failures, data loss, or business impacts caused by third-party services, including but not limited to hosting, domains, email providers, Cloudflare, payment gateways, external integrations, or any service outside his control. He is also not responsible for indirect damages, lost profits, or commercial losses resulting from the use or inability to use the website.',
    'legal.cookies.title': '3. Cookie Policy',
    'legal.cookies.p1': 'This website <strong>does not use first-party tracking or analytics cookies</strong>. However, external services such as EmailJS may use technical cookies required for operation. By using this site, you accept that technical use.',
    'legal.contact.title': '4. Contact',
    'legal.contact.p1': 'For questions related to this legal notice, you can contact us at:',
    'legal.contact.email': '<strong>Email:</strong> <a href="mailto:cotizacion@sebastianclark.mx">cotizacion@sebastianclark.mx</a>',
    'legal.contact.phone': '<strong>Phone:</strong> <a href="tel:+526623255194">+52 662 325 5194</a>',
    'legal.contact.site': '<strong>Website:</strong> <a href="https://sebastianclark.mx">sebastianclark.mx</a>',
    'legal.footer': '© 2026 Sebastian Clark · <a href="legal.html">Legal Notice</a>',

    // Dynamic form/UI messages
    'form.load_error': 'The message system could not be loaded. Please reload the page and try again.',
    'form.config_error': 'The contact form configuration needs to be reviewed.',
    'form.init_error': 'The message system could not be started. Please try again later.',
    'form.required': 'Please complete all required fields.',
    'form.email_invalid': 'Enter a valid email address.',
    'form.sending_button': 'Sending…',
    'form.sending': 'Sending your message…',
    'form.success': 'Done. Your message has been sent. I’ll get back to you soon.',
    'form.domain_error': 'The contact form is not authorized for this domain yet.',
    'form.send_error': 'Your message could not be sent. Please try again later.',
    'form.submit': 'Send message'
  };

  const esUi = {
    'form.load_error': 'No se pudo cargar el sistema de envío. Intenta recargar la página.',
    'form.config_error': 'Revisa la configuración del formulario de contacto.',
    'form.init_error': 'No se pudo iniciar el sistema de envío. Intenta de nuevo más tarde.',
    'form.required': 'Completa todos los campos obligatorios, por favor.',
    'form.email_invalid': 'Escribe un correo válido.',
    'form.sending_button': 'Enviando…',
    'form.sending': 'Enviando tu mensaje…',
    'form.success': '¡Listo! Tu mensaje ya fue enviado. Te responderé pronto.',
    'form.domain_error': 'El formulario de contacto aún no está autorizado para este dominio.',
    'form.send_error': 'No se pudo enviar tu mensaje. Intenta de nuevo más tarde.',
    'form.submit': 'Enviar mensaje'
  };

  const metadata = {
    index: {
      es: {
        title: 'Sebastian Clark | Apps y juegos',
        description: 'Desarrollo de apps para iPhone y juegos por Sebastian Clark. Conoce Spendly Travel y Operator Ops. También creo sitios web y automatizaciones para negocios.',
        ogTitle: 'Sebastian Clark | Apps y juegos',
        ogDescription: 'Creo apps y juegos que convierten ideas en experiencias.'
      },
      en: {
        title: 'Sebastian Clark | Apps and games',
        description: 'iPhone app and game development by Sebastian Clark. Discover Spendly Travel and Operator Ops. I also build websites and automations for businesses.',
        ogTitle: 'Sebastian Clark | Apps and games',
        ogDescription: 'I build apps and games that turn ideas into experiences.'
      }
    },
    apps: {
      es: {
        title: 'Aplicaciones | Sebastian Clark',
        description: 'Aplicaciones creadas por Sebastian Clark para iPhone y otros dispositivos.',
        ogTitle: 'Aplicaciones | Sebastian Clark',
        ogDescription: 'Conoce las aplicaciones creadas por Sebastian Clark.'
      },
      en: {
        title: 'Apps | Sebastian Clark',
        description: 'Applications created by Sebastian Clark for iPhone and other devices.',
        ogTitle: 'Apps | Sebastian Clark',
        ogDescription: 'Discover applications created by Sebastian Clark.'
      }
    },
    games: {
      es: {
        title: 'Juegos | Sebastian Clark',
        description: 'Descubre Operator Ops y participa en su beta pública mediante TestFlight.',
        ogTitle: 'Juegos | Sebastian Clark',
        ogDescription: 'Operator Ops: un adelanto del juego en desarrollo.'
      },
      en: {
        title: 'Games | Sebastian Clark',
        description: 'Discover Operator Ops and join its public beta through TestFlight.',
        ogTitle: 'Games | Sebastian Clark',
        ogDescription: 'Operator Ops: a preview of the game currently in development.'
      }
    },
    privacy: {
      es: {
        title: 'Aviso de privacidad de apps | Sebastian Clark',
        description: 'Aviso de privacidad de las aplicaciones creadas por Sebastian Clark.'
      },
      en: {
        title: 'App Privacy Notice | Sebastian Clark',
        description: 'Privacy notice for applications created by Sebastian Clark.'
      }
    },
    legal: {
      es: {
        title: 'Aviso Legal | Sebastian Clark',
        description: 'Aviso de privacidad, términos y condiciones de Sebastian Clark.'
      },
      en: {
        title: 'Legal Notice | Sebastian Clark',
        description: 'Privacy notice and terms and conditions for Sebastian Clark.'
      }
    }
  };

  let currentLanguage = 'es';
  const originalHtml = new WeakMap();
  const originalPlaceholder = new WeakMap();
  const originalAria = new WeakMap();

  function normalizeLanguage(value) {
    if (!value) return null;
    const lang = String(value).toLowerCase().split('-')[0];
    return SUPPORTED.has(lang) ? lang : null;
  }

  function extractRegion(locale) {
    if (!locale) return null;
    const parts = String(locale).replace('_', '-').split('-');
    const region = parts.find((part, index) => index > 0 && /^[A-Za-z]{2}$/.test(part));
    return region ? region.toUpperCase() : null;
  }

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = normalizeLanguage(params.get('lang'));
    if (fromUrl) {
      try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch (_) {}
      return fromUrl;
    }

    try {
      const stored = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
      if (stored) return stored;
    } catch (_) {}

    const locales = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || Intl.DateTimeFormat().resolvedOptions().locale];

    const primary = locales[0] || '';
    const primaryLanguage = normalizeLanguage(primary);
    if (primaryLanguage) return primaryLanguage;

    const region = extractRegion(primary) || extractRegion(Intl.DateTimeFormat().resolvedOptions().locale);
    return region && SPANISH_REGIONS.has(region) ? 'es' : 'en';
  }

  function updateMetadata(lang) {
    const page = document.body?.dataset?.page || 'index';
    const data = metadata[page]?.[lang];
    if (!data) return;

    document.title = data.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', data.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && data.ogTitle) ogTitle.setAttribute('content', data.ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && data.ogDescription) ogDescription.setAttribute('content', data.ogDescription);
  }

  function translateElements(lang) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      if (!originalHtml.has(element)) originalHtml.set(element, element.innerHTML);
      const key = element.dataset.i18n;
      if (lang === 'en' && en[key] != null) element.innerHTML = en[key];
      else element.innerHTML = originalHtml.get(element);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      if (!originalPlaceholder.has(element)) originalPlaceholder.set(element, element.getAttribute('placeholder') || '');
      const key = element.dataset.i18nPlaceholder;
      if (lang === 'en' && en[key] != null) element.setAttribute('placeholder', en[key]);
      else element.setAttribute('placeholder', originalPlaceholder.get(element));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      if (!originalAria.has(element)) originalAria.set(element, element.getAttribute('aria-label') || '');
      const key = element.dataset.i18nAriaLabel;
      if (lang === 'en' && en[key] != null) element.setAttribute('aria-label', en[key]);
      else element.setAttribute('aria-label', originalAria.get(element));
    });
  }

  function updateInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach((anchor) => {
      const raw = anchor.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return;

      let url;
      try { url = new URL(raw, window.location.href); } catch (_) { return; }
      if (url.origin !== window.location.origin) return;

      if (lang === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');

      anchor.setAttribute('href', url.pathname.replace(/^\//, '') + url.search + url.hash || '/');
    });
  }

  function updateWhatsApp(lang) {
    const link = document.querySelector('.whatsapp-float');
    if (!link) return;
    const text = lang === 'en'
      ? 'Hi Sebastian, I saw your website and I would like to know more.'
      : 'Hola Sebastian, vi tu página y me interesa saber más.';
    link.href = 'https://wa.me/526623255194?text=' + encodeURIComponent(text);
    link.setAttribute('aria-label', lang === 'en' ? 'Contact on WhatsApp' : 'Contactar por WhatsApp');
  }

  function createSwitcher() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks || navLinks.querySelector('.language-switcher')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Idioma / Language');

    ['es', 'en'].forEach((lang) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.language = lang;
      button.textContent = lang.toUpperCase();
      button.setAttribute('aria-label', lang === 'es' ? 'Español' : 'English');
      button.addEventListener('click', () => setLanguage(lang, true));
      wrapper.appendChild(button);
    });

    navLinks.appendChild(wrapper);
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('.language-switcher button').forEach((button) => {
      const active = button.dataset.language === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLanguage(lang, userInitiated = false) {
    const normalized = normalizeLanguage(lang) || 'es';
    currentLanguage = normalized;
    document.documentElement.lang = normalized;

    if (userInitiated) {
      try { localStorage.setItem(STORAGE_KEY, normalized); } catch (_) {}
      const url = new URL(window.location.href);
      if (normalized === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }

    translateElements(normalized);
    updateMetadata(normalized);
    updateSwitcher(normalized);
    updateInternalLinks(normalized);
    updateWhatsApp(normalized);

    document.dispatchEvent(new CustomEvent('site-language-change', { detail: { language: normalized } }));
  }

  function t(key) {
    if (currentLanguage === 'en') return en[key] ?? esUi[key] ?? key;
    return esUi[key] ?? key;
  }

  function init() {
    createSwitcher();
    setLanguage(detectLanguage(), false);
  }

  window.SiteI18n = {
    get language() { return currentLanguage; },
    setLanguage,
    t
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
