export const resume = {
    personalInfo: {
        name: "Lautaro Enrique Mir",
        title: "Cybersecurity & Network Systems Expert",
        location: "Barcelona, Spain",
        email: "lautaromir2@gmail.com",
        linkedin: "https://www.linkedin.com/in/lautaro-enrique-mir-9390b0309",
        summary:
            "Proactive and passionate Network Systems Administrator with a strong foundation in networks, systems, and a marked interest in cybersecurity. Certified Mikrotik MTCN. Actively seeking opportunities to apply knowledge in network configuration, system administration, and infrastructure protection.",
    },
    skills: {
        networking: [
            "Cisco & Mikrotik Routing/Switching",
            "TCP/IP, DNS, DHCP",
            "VLAN Segmentation",
            "Network Monitoring",
        ],
        security: [
            "Firewalls (pfSense)",
            "IDS/IPS (Snort)",
            "Identity Management (LDAP, AD)",
            "System Hardening",
            "Basic Pentesting",
        ],
        infrastructure: [
            "Linux Server Admin",
            "Windows Server Admin",
            "Virtualization (VMware, VirtualBox)",
            "Cloud Computing",
            "NAS Storage Implementation",
        ],
        development: ["SQL / MySQL", "Python (Basic)", "Bash Scripting"],
    },
    projects: [
        {
            title: "Secure Enterprise Infrastructure & Centralized Auth",
            role: "Lead Systems Architect",
            tech: ["OpenLDAP", "MariaDB", "Zabbix", "Telegram API", "TrueNAS", "Bash"],
            description: "Designed a fault-tolerant network architecture featuring centralized authentication via OpenLDAP with Roaming Profiles, ensuring user data portability across any workstation. Implemented automated backup pipelines to a dedicated NAS. Integrated a Zabbix monitoring ecosystem with real-time critical alerts pushed to Telegram, ensuring 99.9% uptime visibility.",
            challenges: ["Data Fragmentation", "Monitoring Blindness", "High Availability"],
            solutions: ["Unified Auth Layer", "Real-time Telegram Alerts", "RAID-Z Storage"]
        }
    ],
    experience: [
        {
            role: "Specialized Warehouse Worker",
            company: "Massimo Dutti",
            period: "Finalized",
            description:
                "Leadership in optimizing logistics processes using RFID technology. Effective collaboration in high-performance teams under pressure.",
        },
    ],
    education: [
        {
            degree: "Higher Degree in Network Systems Administration",
            institution: "IES El Calamot",
            period: "Current",
            details:
                "Key areas: Corporate Network Security, Ethical Hacking, Incident Management, SQL, OS Implementation, Advanced Virtualization, Cloud Computing.",
        },
        {
            degree: "Intermediate Degree in Microcomputer Systems and Networks",
            institution: "IES El Calamot",
            period: "Completed",
            details:
                "Final Project: Implementation of a secure network with firewall (pfSense), VLANs, and Active Directory.",
        },
    ],
    certifications: ["Mikrotik Certified Network Associate (MTCN)"],
    languages: [
        { lang: "Spanish", level: "Native" },
        { lang: "Catalan", level: "Native" },
        { lang: "English", level: "B1 (Technical Reading)" },
    ],
};
