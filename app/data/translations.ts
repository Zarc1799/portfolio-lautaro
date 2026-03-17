export const translations = {
    en: {
        nav: {
            identity: "LAUTARO MIR / SYSTEMS ARCHITECT",
            mission: "MISSION",
            arsenal: "ARSENAL",
            opsLog: "OPS LOG",
            openTerminal: "OPEN_TERMINAL"
        },
        systemStatus: {
            title: "SYSTEM STATUS",
            live: "LIVE",
            cpu: "CPU LOAD",
            ram: "RAM USAGE",
            net: "NET I/O",
            uptime: "UPTIME",
            threatLevel: "THREAT LEVEL",
            threatLow: "LOW",
        },
        networkDiagram: {
            title: "ARCHITECTURE_TOPOLOGY_V1.3",
            dragHint: "[DRAGGABLE_NODES_ACTIVE]",
            nodeDetails: "NODE_DETAILS"
        },
        hero: {
            role: "Enterprise Systems Architect",
            subtext: "Designing fault-tolerant networks and secure authentication systems.",
            cta: "Initialize Contact",
            secondaryCta: "View Arsenal",
        },
        personalInfo: {
            summary: "Network Systems Administrator & Systems Architect specialized in AI Automation and Custom Agents (n8n). Strong foundation in cybersecurity, Active Directory, and SQL Server. Expert in designing high-availability networks and implementing autonomously intelligent solutions for business efficiency.",
        },
        about: {
            title: "About Me",
            location: "Barcelona, Spain",
            contact: "Contact for info",
            linkedin: "LinkedIn Profile",
            json: {
                status: "Active",
                role: "Cybersecurity & Network Systems Expert",
                clearance: "Level 1",
                languages: ["Spanish (Native)", "Catalan (Native)", "English (B1)"],
            },
        },

        skills: {
            title: "Technical Arsenal",
            categories: {
                networking: "Networking",
                security: "Security",
                infrastructure: "Infrastructure",
                development: "Development",
            },
            // Keeping raw skills list in English as they are proper names usually
            networkingList: [
                "Cisco & Mikrotik Routing/Switching",
                "Active Directory & DNS/DHCP",
                "VLAN Segmentation",
                "Network Monitoring",
            ],
            securityList: [
                "Firewalls (pfSense)",
                "IDS/IPS (Snort)",
                "Identity Management (LDAP, AD)",
                "System Hardening",
                "Basic Pentesting",
            ],
            infrastructureList: [
                "Linux Server Admin",
                "Windows Server & SQL Server",
                "Virtualization (VMware, VirtualBox)",
                "Cloud Computing",
                "NAS Storage Implementation",
            ],
            developmentList: [
                "AI Agents & Automation (n8n)",
                "Python (Automation & AI Advanced)",
                "SQL / MySQL",
                "Blockchain & Tokenization"
            ],
        },
        experience: {
            title: "Operations Log",
            educationTitle: "Education",
            workTitle: "Work History",
            education: [
                {
                    degree: "Higher Degree in Network Systems Administration",
                    institution: "IES El Calamot",
                    period: "Current",
                    details: "Key areas: Corporate Network Security, Ethical Hacking, Incident Management, SQL, OS Implementation, Advanced Virtualization, Cloud Computing.",
                },
                {
                    degree: "Intermediate Degree in Microcomputer Systems and Networks",
                    institution: "IES El Calamot",
                    period: "Completed",
                    details: "Final Project: Implementation of a secure network with firewall (pfSense), VLANs, and Active Directory.",
                },
            ],
            work: [
                {
                    role: "IT Systems Technician",
                    company: "INAS Italia (Consulate Annex)",
                    period: "Completed",
                    description: "Provided comprehensive IT support and remote systems administration. Resolved complex hardware and software issues locally and implemented remote access solutions to ensure operational continuity for consulate-affiliated services.",
                },
                {
                    role: "Specialized Warehouse Worker",
                    company: "Massimo Dutti",
                    period: "Finalized",
                    description: "Leadership in optimizing logistics processes using RFID technology. Effective collaboration in high-performance teams under pressure.",
                },
            ],
        },
        contact: {
            title: "Initialize Connection",
            namePlaceholder: "Enter Identity",
            emailPlaceholder: "Secure Comms Channel",
            messagePlaceholder: "Mission Details...",
            send: "EXECUTE_SEND_MAIL.SH",
            sending: "TRANSMITTING...",
            sent: "TRANSMISSION COMPLETE",
            error: "TRANSMISSION FAILED",
            available: "Currently available for new opportunities. Initialize encrypted channel below.",
            secureVoice: "Secure Voice Line:",
        },
        terminal: {
            boot: [
                "Initializing kernel...",
                "Loading security modules...",
                "Mounting virtual file system...",
                "Starting interface...",
                "Access Granted.",
            ],
            help: "Type 'help' for available commands.",
            outputs: {
                help: [
                    "AVAILABLE COMMANDS",
                    "==================",
                    "whoami    - Display information about me",
                    "skills    - Show my technical skills",
                    "blockchain - Show blockchain expertise",
                    "status    - Show system metrics",
                    "ls        - List directory contents",
                    "cat [file] - Read file content",
                    "clear     - Clear the terminal",
                    "poweroff  - Shut down the system",
                    "exit      - Close terminal"
                ],
                whoami: [
                    "Lautaro Mir",
                    "Systems Architect based in Barcelona, España",
                    "Specialized in OpenLDAP, Zabbix, and High Availability Networks."
                ],
                skills: [
                    "SKILLS & EXPERTISE",
                    "==================",
                    "Infrastructure: OpenLDAP, Zabbix, Mikrotik",
                    "OS:             Linux (Advanced), Windows Server",
                    "Containers:     Docker, Kubernetes",
                    "Security:       Cybersecurity Best Practices, Auditing",
                    "",
                    "AI & Auto:      n8n, Custom Agents, LLM Integration"
                ],
                blockchain: [
                    "BLOCKCHAIN INTELLIGENCE",
                    "=======================",
                    "> Tokenization",
                    "  Real-world asset digitization strategies.",
                    "",
                    "> Smart Contracts",
                    "  Secure contract logic for automated transactions.",
                    "",
                    "> Decentralized Identity",
                    "  Self-sovereign identity solutions for workforce.",
                    "",
                    "> Enterprise DeFi",
                    "  Liquidity solutions for corporate treasury."
                ],
                status: [
                    "SYSTEM STATUS",
                    "==================",
                    "CPU Load:     12%",
                    "RAM Usage:    1.2GB",
                    "Uptime:       99.99%",
                    "Status:       All Systems Operational"
                ]
            }
        },
        github: {
            profile: "GitHub Profile",
        },
        projects: {
            title: "Major Deployments",
            badge: "ENTERPRISE GRADE",
            list: [
                {
                    title: "Zero-Trust Enterprise Infrastructure & Centralized Auth",
                    description: "Designed a fault-tolerant network architecture featuring centralized authentication via OpenLDAP with Roaming Profiles, ensuring user data portability across any workstation. Implemented automated backup pipelines to a dedicated NAS. Integrated a Zabbix monitoring ecosystem with real-time critical alerts pushed to Telegram, ensuring 99.9% uptime visibility.",
                    tech: ["OpenLDAP", "MariaDB", "Zabbix", "Telegram API", "TrueNAS", "Bash"]
                },
                {
                    title: "Autonomous Multi-Agent IT Orchestration Framework",
                    description: "Designed and programmed from scratch a distributed artificial intelligence framework capable of resolving incidents and planning infrastructure without human intervention. The system orchestrates a swarm of LLMs with specialized roles (Architect, SecOps, Developer) communicating asynchronously via message queues (mailboxes) and OS-level semaphores (locks) to prevent race conditions. Integrated with n8n automation flows, the system autonomously reads tickets, debates solutions in a broadcast channel, and modifies enterprise server environments safely, achieving an 80% reduction in Level 1 ticket resolution times.",
                    tech: ["Python (Concurrency)", "n8n", "LLM APIs (OpenAI/Claude)", "Linux IPC", "JSON Automation", "Bash"]
                }
            ]
        }
    },
    es: {
        nav: {
            identity: "Identidad",
            mission: "Misión",
            arsenal: "Arsenal",
            opsLog: "Registro Ops",
            openTerminal: "Abrir Terminal",
        },
        hero: {
            role: "Arquitecto de Sistemas Empresariales",
            subtext: "Diseñando redes tolerantes a fallos y sistemas de autenticación seguros.",
            cta: "Inicializar Contacto",
            secondaryCta: "Ver Arsenal",
        },
        personalInfo: {
            summary: "Administrador de Sistemas de Red y Arquitecte de Sistemas especializado en Automatización con IA y Agentes Personalizados (n8n). Sólida base en ciberseguridad, Active Directory y SQL Server. Experto en el diseño de redes de alta disponibilidad e implementación de soluciones autónomas inteligentes para la eficiencia empresarial.",
        },
        about: {
            title: "Sobre Mí",
            location: "Barcelona, España",
            contact: "Contactar para info",
            linkedin: "Perfil LinkedIn",
            json: {
                status: "Activo",
                role: "Experto en Ciberseguridad y Sistemas",
                clearance: "Nivel 1",
                languages: ["Español (Nativo)", "Catalán (Nativo)", "Inglés (B1)"],
            },
        },
        systemStatus: {
            title: "ESTADO DEL SISTEMA",
            live: "EN VIVO",
            cpu: "CARGA CPU",
            ram: "USO RAM",
            net: "E/S RED",
            uptime: "TIEMPO ACTIVO",
            threatLevel: "NIVEL AMENAZA",
            threatLow: "BAJO",
        },
        networkDiagram: {
            title: "TOPOLOGIA_ARQUITECTURA_V1.3",
            dragHint: "[NODOS_ARRASTRABLES_ACTIVOS]",
            nodeDetails: "DETALLES_NODO"
        },
        skills: {
            title: "Arsenal Técnico",
            categories: {
                networking: "Redes",
                security: "Seguridad",
                infrastructure: "Infraestructura",
                development: "Desarrollo",
            },
            networkingList: [
                "Enrutamiento/Conmutación Cisco y Mikrotik",
                "Active Directory y DNS/DHCP",
                "Segmentación VLAN",
                "Monitorización de Redes",
            ],
            securityList: [
                "Firewalls (pfSense)",
                "IDS/IPS (Snort)",
                "Gestión de Identidad (LDAP, AD)",
                "Bastionado de Sistemas",
                "Pentesting Básico",
            ],
            infrastructureList: [
                "Admin Servidores Linux",
                "Windows Server y SQL Server",
                "Virtualización (VMware, VirtualBox)",
                "Computación en la Nube",
                "Implementación Almacenamiento NAS",
            ],
            developmentList: [
                "Agentes IA y Automatización (n8n)",
                "Python (Automatización & IA Avanzada)",
                "SQL / MySQL",
                "Blockchain y Tokenización"
            ],
        },
        experience: {
            title: "Registro de Operaciones",
            educationTitle: "Educación",
            workTitle: "Historial Laboral",
            education: [
                {
                    degree: "Grado Superior en Administración de Sistemas Informáticos en Red",
                    institution: "IES El Calamot",
                    period: "Actual",
                    details: "Áreas clave: Seguridad en Redes Corporativas, Hacking Ético, Gestión de Incidentes, SQL, Implementación de SO, Virtualización Avanzada, Cloud Computing.",
                },
                {
                    degree: "Grado Medio en Sistemas Microinformáticos y Redes",
                    institution: "IES El Calamot",
                    period: "Completado",
                    details: "Proyecto Final: Implementación de una red segura con firewall (pfSense), VLANs y Active Directory.",
                },
            ],
            work: [
                {
                    role: "Técnico de Sistemas IT",
                    company: "INAS Italia (Anexo Consular)",
                    period: "Completado",
                    description: "Soporte TI integral y administración de sistemas en remoto. Resolución de incidencias críticas de hardware/software a nivel local e implementación de soluciones de acceso remoto seguras para garantizar la continuidad operativa de los servicios vinculados al consulado.",
                },
                {
                    role: "Operario de Almacén Especializado",
                    company: "Massimo Dutti",
                    period: "Finalizado",
                    description: "Liderazgo en la optimización de procesos logísticos utilizando tecnología RFID. Colaboración efectiva en equipos de alto rendimiento bajo presión.",
                },
            ],
        },
        contact: {
            title: "Inicializar Conexión",
            namePlaceholder: "Introduce Identidad",
            emailPlaceholder: "Canal de Comms Seguro",
            messagePlaceholder: "Detalles de la Misión...",
            send: "EJECUTAR_ENVIO_MAIL.SH",
            sending: "TRANSMITIENDO...",
            sent: "TRANSMISIÓN COMPLETA",
            error: "FALLO DE TRANSMISIÓN",
            available: "Actualmente disponible para nuevas oportunidades. Inicialice canal encriptado abajo.",
            secureVoice: "Línea de Voz Segura:",
        },
        terminal: {
            boot: [
                "Inicializando kernel...",
                "Cargando módulos de seguridad...",
                "Montando sistema de archivos virtual...",
                "Iniciando interfaz...",
                "Acceso Concedido.",
            ],
            help: "Escribe 'help' para comandos disponibles.",
            outputs: {
                help: [
                    "COMANDOS DISPONIBLES",
                    "==================",
                    "whoami    - Mostrar información sobre mí",
                    "skills    - Mostrar mis habilidades técnicas",
                    "blockchain - Mostrar experiencia en blockchain",
                    "status    - Mostrar métricas del sistema",
                    "ls        - Listar contenido del directorio",
                    "cat [fichero] - Leer contenido del fichero",
                    "clear     - Limpiar la terminal",
                    "poweroff  - Apagar el sistema",
                    "exit      - Cerrar terminal"
                ],
                whoami: [
                    "Lautaro Mir",
                    "Arquitecto de Sistemas basado en Barcelona, España",
                    "Especializado en OpenLDAP, Zabbix y Redes de Alta Disponibilidad."
                ],
                skills: [
                    "HABILIDADES Y EXPERIENCIA",
                    "==================",
                    "Infraestructura: OpenLDAP, Zabbix, Mikrotik",
                    "SO:             Linux (Avanzado), Windows Server",
                    "Contenedores:   Docker, Kubernetes",
                    "Seguridad:      Mejores Prácticas de Ciberseguridad, Auditoría",
                    "",
                    "IA y Auto:      n8n, Agentes Personalizados, Integración LLM"
                ],
                blockchain: [
                    "INTELIGENCIA BLOCKCHAIN",
                    "=======================",
                    "> Tokenización",
                    "  Estrategias de digitalización de activos del mundo real.",
                    "",
                    "> Smart Contracts",
                    "  Lógica de contratos seguros para transacciones automatizadas.",
                    "",
                    "> Identidad Descentralizada",
                    "  Soluciones de identidad soberana para la fuerza laboral.",
                    "",
                    "> DeFi Empresarial",
                    "  Soluciones de liquidez para tesorería corporativa."
                ],
                status: [
                    "ESTADO DEL SISTEMA",
                    "==================",
                    "Carga CPU:    12%",
                    "Uso RAM:      1.2GB",
                    "Uptime:       99.99%",
                    "Estado:       Todos los sistemas operativos"
                ]
            }
        },
        github: {
            profile: "Perfil de GitHub",
        },
        projects: {
            title: "Despliegues Mayores",
            badge: "GRADO EMPRESARIAL",
            list: [
                {
                    title: "Infraestructura Empresarial Zero-Trust y Autenticación Centralizada",
                    description: "Diseñé una arquitectura de red tolerante a fallos con autenticación centralizada vía OpenLDAP y Perfiles Móviles, asegurando la portabilidad de datos de usuario en cualquier estación. Implementé pipelines de backup automatizados a un NAS dedicado. Integré un ecosistema de monitorización Zabbix con alertas críticas en tiempo real a Telegram, asegurando visibilidad de uptime del 99.9%.",
                    tech: ["OpenLDAP", "MariaDB", "Zabbix", "Telegram API", "TrueNAS", "Bash"]
                },
                {
                    title: "Framework Autónomo de Orquestación IT Multi-Agente (A.M.A.S.)",
                    description: "Diseñé y programé desde cero un framework de inteligencia artificial distribuido habilitado para resolver incidencias y planificar infraestructura sin intervención humana. El sistema orquesta un enjambre de LLMs con roles especializados (Arquitecto, SecOps, Desarrollador) que se comunican de forma asíncrona mediante sistemas de colas de mensajes (mailboxes) y semáforos (locks) a nivel de sistema operativo para prevenir condiciones de carrera. Integrado con flujos de automación en n8n, el sistema es capaz de leer tickets, debatir soluciones y modificar entornos de servidores locales de forma autónoma, reduciendo un 80% los tiempos de resolución de tickets de Nivel 1.",
                    tech: ["Python (Concurrencia)", "n8n", "LLM APIs (OpenAI/Claude)", "Linux IPC", "JSON Automation", "Bash"]
                }
            ]
        }
    },
    ca: {
        nav: {
            identity: "Identitat",
            mission: "Missió",
            arsenal: "Arsenal",
            opsLog: "Registre Ops",
            openTerminal: "Obrir Terminal",
        },
        hero: {
            role: "Arquitecte de Sistemes Empresarials",
            subtext: "Dissenyant xarxes tolerants a fallades i sistemes d'autenticació segurs.",
            cta: "Inicialitzar Contacte",
            secondaryCta: "Veure Arsenal",
        },
        personalInfo: {
            summary: "Administrador de Sistemes de Xarxa i Arquitecte de Sistemes especialitzat en Automatització amb IA i Agents Personalitzats (n8n). Sòlida base en ciberseguretat, Active Directory i SQL Server. Expert en el disseny de xarxes d'alta disponibilitat i implementació de solucions autònomes intel·ligents per a l'eficiència empresarial.",
        },
        about: {
            title: "Sobre Mi",
            location: "Barcelona, Espanya",
            contact: "Contactar per info",
            linkedin: "Perfil LinkedIn",
            json: {
                status: "Actiu",
                role: "Expert en Ciberseguretat i Sistemes",
                clearance: "Nivell 1",
                languages: ["Espanyol (Natiu)", "Català (Natiu)", "Anglès (B1)"],
            },
        },
        systemStatus: {
            title: "ESTAT DEL SISTEMA",
            live: "EN VIU",
            cpu: "CÀRREGA CPU",
            ram: "ÚS RAM",
            net: "E/S XARXA",
            uptime: "TEMPS ACTIU",
            threatLevel: "NIVELL AMENAÇA",
            threatLow: "BAIX",
        },
        networkDiagram: {
            title: "TOPOLOGIA_ARQUITECTURA_V1.3",
            dragHint: "[NODES_ARROSSEGABLES_ACTIUS]",
            nodeDetails: "DETALLS_NODE"
        },
        skills: {
            title: "Arsenal Tècnic",
            categories: {
                networking: "Xarxes",
                security: "Seguretat",
                infrastructure: "Infraestructura",
                development: "Desenvolupament",
            },
            networkingList: [
                "Enrutament/Commutació Cisco i Mikrotik",
                "Active Directory i DNS/DHCP",
                "Segmentació VLAN",
                "Monitorització de Xarxes",
            ],
            securityList: [
                "Tallafocs (pfSense)",
                "IDS/IPS (Snort)",
                "Gestió d'Identitat (LDAP, AD)",
                "Bastiment de Sistemes",
                "Pentesting Bàsic",
            ],
            infrastructureList: [
                "Admin Servidors Linux",
                "Windows Server i SQL Server",
                "Virtualització (VMware, VirtualBox)",
                "Computació al Núvol",
                "Implementació Emmagatzematge NAS",
            ],
            developmentList: [
                "Agents IA i Automatització (n8n)",
                "Python (Automatització & IA Avançada)",
                "SQL / MySQL",
                "Blockchain i Tokenització"
            ],
        },
        experience: {
            title: "Registre d'Operacions",
            educationTitle: "Educació",
            workTitle: "Historial Laboral",
            education: [
                {
                    degree: "Grau Superior en Administració de Sistemes Informàtics en Xarxa",
                    institution: "IES El Calamot",
                    period: "Actual",
                    details: "Àrees clau: Seguretat en Xarxes Corporatives, Hacking Ètic, Gestió d'Incidents, SQL, Implementació de SO, Virtualització Avançada, Cloud Computing.",
                },
                {
                    degree: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
                    institution: "IES El Calamot",
                    period: "Completat",
                    details: "Projecte Final: Implementació d'una xarxa segura amb tallafocs (pfSense), VLANs i Active Directory.",
                },
            ],
            work: [
                {
                    role: "Tècnic de Sistemes IT",
                    company: "INAS Italia (Annex Consular)",
                    period: "Completat",
                    description: "Suport TI integral i administració de sistemes en remot. Resolució d'incidències crítiques de maquinari/programari a nivell local o implementació de solucions d'accés remot segures per garantir la continuïtat operativa dels serveis vinculats al consolat.",
                },
                {
                    role: "Operari de Magatzem Especialitzat",
                    company: "Massimo Dutti",
                    period: "Finalitzat",
                    description: "Lideratge en l'optimització de processos logístics utilitzant tecnologia RFID. Col·laboració efectiva en equipos d'alt rendiment sota pressió.",
                },
            ],
        },
        contact: {
            title: "Inicialitzar Connexió",
            namePlaceholder: "Introdueix Identitat",
            emailPlaceholder: "Canal de Comms Segur",
            messagePlaceholder: "Detalls de la Missió...",
            send: "EXECUTAR_ENVIAMENT_MAIL.SH",
            sending: "TRANSMETENT...",
            sent: "TRANSMISSIÓ COMPLETA",
            error: "ERRADA DE TRANSMISSIÓ",
            available: "Actualment disponible per a noves oportunitats. Inicialitzeu canal encriptat a sota.",
            secureVoice: "Línia de Veu Segura:",
        },
        terminal: {
            boot: [
                "Inicialitzant kernel...",
                "Carregant mòduls de seguretat...",
                "Muntant sistema de fitxers virtual...",
                "Iniciant interfície...",
                "Accés Concedit.",
            ],
            help: "Escriu 'help' per comandes disponibles.",
            outputs: {
                help: [
                    "COMANDES DISPONIBLES",
                    "==================",
                    "whoami    - Mostrar informació sobre mi",
                    "skills    - Mostrar les meves habilitats tècniques",
                    "blockchain - Mostrar experiència en blockchain",
                    "status    - Mostrar mètriques del sistema",
                    "ls        - Llistar contingut del directori",
                    "cat [fitxer] - Llegir contingut del fitxer",
                    "clear     - Netejar la terminal",
                    "poweroff  - Apagar el sistema",
                    "exit      - Tancar terminal"
                ],
                whoami: [
                    "Lautaro Mir",
                    "Arquitecte de Sistemes basat a Barcelona, Espanya",
                    "Especialitzat en OpenLDAP, Zabbix i Xarxes d'Alta Disponibilitat."
                ],
                skills: [
                    "HABILITATS I EXPERIÈNCIA",
                    "==================",
                    "Infraestructura: OpenLDAP, Zabbix, Mikrotik",
                    "SO:             Linux (Avançat), Windows Server",
                    "Contenidors:    Docker, Kubernetes",
                    "Seguretat:      Millors Pràctiques de Ciberseguretat, Auditoria",
                    "",
                    "IA i Auto:      n8n, Agents Personalitzats, Integració LLM"
                ],
                blockchain: [
                    "INTEL·LIGÈNCIA BLOCKCHAIN",
                    "=======================",
                    "> Tokenització",
                    "  Estratègies de digitalització d'actius del món real.",
                    "",
                    "> Smart Contracts",
                    "  Lògica de contractes segurs per a transacciones automatitzades.",
                    "",
                    "> Identitat Descentralitzada",
                    "  Solucions d'identitat sobirana per a la força laboral.",
                    "",
                    "> DeFi Empresarial",
                    "  Solucions de liquiditat per a tresoreria corporativa."
                ],
                status: [
                    "ESTAT DEL SISTEMA",
                    "==================",
                    "Càrrega CPU:    12%",
                    "Ús RAM:         1.2GB",
                    "Uptime:       99.99%",
                    "Estat:       Tots els sistemes operatius"
                ]
            }
        },
        github: {
            profile: "Perfil de GitHub",
        },
        projects: {
            title: "Desplegaments Majors",
            badge: "GRAU EMPRESARIAL",
            list: [
                {
                    title: "Infraestructura Empresarial Zero-Trust i Autenticació Centralitzada",
                    description: "Vaig dissenyar una arquitectura de xarxa tolerant a fallades amb autenticació centralitzada via OpenLDAP i Perfils Mòbils, assegurant la portabilitat de dades d'usuari a qualsevol estació. Vaig implementar pipelines de còpia de seguretat automatitzats a un NAS dedicat. Vaig integrar un ecosistema de monitoratge Zabbix amb alertes crítiques en temps real a Telegram, assegurant visibilitat d'uptime del 99.9%.",
                    tech: ["OpenLDAP", "MariaDB", "Zabbix", "Telegram API", "TrueNAS", "Bash"]
                },
                {
                    title: "Framework Autònom d'Orquestració IT Multi-Agent",
                    description: "Vaig dissenyar i programar des de zero un framework d'intel·ligència artificial distribuït habilitat per resoldre incidències i planificar infraestructura sense intervenció humana. El sistema orquestra un eixam de LLMs amb rols especialitzats (Arquitecte, SecOps, Desenvolupador) que es comuniquen de forma asíncrona mitjançant cues de missatges (mailboxes) i semàfors (locks) a nivell de sistema operatiu per prevenir condicions de carrera. Integrat amb fluxos d'automació en n8n, l'agent llegeix els tiquets, debat solucions i modifica entorns de servidors locals de forma autònoma, reduint un 80% els temps de resolució de tiquets de Nivell 1.",
                    tech: ["Python (Concurrència)", "n8n", "LLM APIs (OpenAI/Claude)", "Linux IPC", "JSON Automation", "Bash"]
                }
            ]
        }
    },
    zh: {
        nav: {
            identity: "LAUTARO MIR / 系统架构师",
            mission: "任务",
            arsenal: "武器库",
            opsLog: "操作日志",
            openTerminal: "打开终端"
        },
        systemStatus: {
            title: "系统状态",
            live: "实时",
            cpu: "CPU 负载",
            ram: "内存使用",
            net: "网络 I/O",
            uptime: "运行时间",
            threatLevel: "威胁等级",
            threatLow: "低",
        },
        networkDiagram: {
            title: "架构拓扑_V1.3",
            dragHint: "[可拖动节点_已激活]",
            nodeDetails: "节点详情"
        },
        hero: {
            role: "企业系统架构师",
            subtext: "设计容错网络和安全认证系统。",
            cta: "启动联系",
            secondaryCta: "查看技能",
        },
        personalInfo: {
            summary: "网络系统管理员和系统架构师，专精于AI自动化和自定义代理（n8n）。在网络安全、Active Directory和SQL Server方面拥有坚实基础。专家级设计高可用性网络并实施自主智能解决方案以提高业务效率。",
        },
        about: {
            title: "关于我",
            location: "巴塞罗那, 西班牙",
            contact: "联系获取信息",
            linkedin: "LinkedIn 个人资料",
            json: {
                status: "活跃",
                role: "网络安全与系统专家",
                clearance: "1级",
                languages: ["西班牙语 (母语)", "加泰罗尼亚语 (母语)", "英语 (B1)"],
            },
        },

        skills: {
            title: "技术军火库",
            categories: {
                networking: "网络",
                security: "安全",
                infrastructure: "基础设施",
                development: "开发",
            },
            networkingList: [
                "思科 & Mikrotik 路由/交换",
                "Active Directory & DNS/DHCP",
                "VLAN 分段",
                "网络监控",
            ],
            securityList: [
                "防火墙 (pfSense)",
                "入侵检测/防御 (Snort)",
                "身份管理 (LDAP, AD)",
                "系统加固",
                "基础渗透测试",
            ],
            infrastructureList: [
                "Linux 服务器管理",
                "Windows Server & SQL Server",
                "虚拟化 (VMware, VirtualBox)",
                "云计算",
                "NAS 存储实施",
            ],
            developmentList: [
                "AI 代理 & 自动化 (n8n)",
                "Python (高级自动化与AI)",
                "SQL / MySQL",
                "区块链 & 代币化"
            ],
        },
        experience: {
            title: "行动日志",
            educationTitle: "教育经历",
            workTitle: "工作经历",
            education: [
                {
                    degree: "网络系统管理高级学位",
                    institution: "IES El Calamot",
                    period: "当前",
                    details: "关键领域：企业网络安全、道德黑客、事件管理、SQL、操作系统实施、高级虚拟化、云计算。",
                },
                {
                    degree: "微机系统与网络中级学位",
                    institution: "IES El Calamot",
                    period: "已完成",
                    details: "最终项目：实施具有防火墙 (pfSense)、VLAN 和 Active Directory 的安全网络。",
                },
            ],
            work: [
                {
                    role: "IT 系统技术员",
                    company: "INAS Italia (领事馆附属)",
                    period: "已完成",
                    description: "提供全面的 IT 支持和远程系统管理。在本地解决复杂的硬件和软件问题，并实施远程访问解决方案，以确保与领事馆相关服务的运营连续性。",
                },
                {
                    role: "专业仓库操作员",
                    company: "Massimo Dutti",
                    period: "已结束",
                    description: "利用RFID技术领导优化物流流程。在高压下的高效团队协作。",
                },
            ],
        },
        contact: {
            title: "建立连接",
            namePlaceholder: "输入身份",
            emailPlaceholder: "安全通信频道",
            messagePlaceholder: "任务详情...",
            send: "执行_发送_邮件.SH",
            sending: "传输中...",
            sent: "传输完成",
            error: "传输失败",
            available: "目前可接受新机会。在下方初始化加密频道。",
            secureVoice: "安全语音线路:",
        },
        terminal: {
            boot: [
                "正在初始化内核...",
                "加载安全模块...",
                "挂载虚拟文件系统...",
                "启动界面...",
                "访问已授权。",
            ],
            help: "输入 'help' 查看可用命令。",
            outputs: {
                help: [
                    "可用命令",
                    "==================",
                    "whoami    - 显示关于我的信息",
                    "skills    - 显示我的技术技能",
                    "blockchain - 显示区块链专业知识",
                    "status    - 显示系统指标",
                    "ls        - 列出目录内容",
                    "cat [文件] - 读取文件内容",
                    "clear     - 清除终端",
                    "poweroff  - 关闭系统",
                    "exit      - 关闭终端"
                ],
                whoami: [
                    "Lautaro Mir",
                    "系统架构师，常驻西班牙巴塞罗那",
                    "专精于 OpenLDAP、Zabbix 和高可用性网络。"
                ],
                skills: [
                    "技能与专长",
                    "==================",
                    "基础设施:    OpenLDAP, Zabbix, Mikrotik",
                    "操作系统:    Linux (高级), Windows Server",
                    "容器技术:    Docker, Kubernetes",
                    "安全:        网络安全最佳实践, 审计",
                    "",
                    "AI & 自动化: n8n, 自定义代理, LLM 集成"
                ],
                blockchain: [
                    "区块链情报",
                    "=======================",
                    "> 代币化",
                    "  现实世界资产数字化策略。",
                    "",
                    "> 智能合约",
                    "  用于自动交易的安全合约逻辑。",
                    "",
                    "> 去中心化身份",
                    "  劳动力自主权身份解决方案。",
                    "",
                    "> 企业 DeFi",
                    "  企业资金的流动性解决方案。"
                ],
                status: [
                    "系统状态",
                    "==================",
                    "CPU 负载:     12%",
                    "RAM 使用:     1.2GB",
                    "运行时间:     99.99%",
                    "状态:         所有系统运行正常"
                ]
            }
        },
        github: {
            profile: "GitHub 个人资料",
        },
        projects: {
            title: "主要部署",
            badge: "企业级",
            list: [
                {
                    title: "零信任企业基础设施与集中认证",
                    description: "设计了一个具有通过 OpenLDAP 和漫游配置文件进行集中认证的容错网络架构，确保用户数据在任何工作站上的可移植性。实施了自动备份管道到专用 NAS。集成了 Zabbix 监控生态系统，将实时关键警报推送到 Telegram，确保 99.9% 的正常运行时间可见性。",
                    tech: ["OpenLDAP", "MariaDB", "Zabbix", "Telegram API", "TrueNAS", "Bash"]
                },
                {
                    title: "自主多智能体IT编排框架",
                    description: "从零开始设计并编程了一个分布式人工智能框架，能够在没有人工干预的情况下解决事件并规划基础设施。该系统编排了一群具有专门角色（架构师、安全运营、开发人员）的LLM，通过消息队列（mailboxes）和操作系统级信号量（locks）进行异步通信，以防止竞态条件。与n8n自动化工作流集成，系统可自主读取工单、讨论解决方案并安全地修改企业服务器环境，将一级工单解决时间缩短了80%。",
                    tech: ["Python (并发)", "n8n", "LLM APIs", "Linux IPC", "JSON 自动化", "Bash"]
                }
            ]
        }
    },
};

export type Language = "en" | "es" | "ca" | "zh";
