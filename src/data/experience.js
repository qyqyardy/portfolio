export const experiences = [
  {
    id: 'tilaka',
    role: 'System Engineer Lead',
    company: 'Tilaka Nusa Teknologi',
    period: 'Sep 2025 — Present',
    icon: 'fa-star',
    isCurrent: true,
    details: [
      'Lead the design and operations of hybrid cloud infrastructure for a leading digital signature and identity verification platform, integrating Nutanix AHV/Prism, Nutanix Kubernetes clusters, and on-premises workloads.',
      'Spearhead migration projects from Proxmox/VMware to Nutanix, ensuring scalability, security, and high performance.',
      'Manage and mentor a small Infrastructure/SRE team responsible for HA cluster setup, capacity planning, and disaster recovery.',
      'Implement Infrastructure as Code (IaC) using Terraform and Ansible to automate provisioning of VMs, Kubernetes workloads, and secure networking for ISO/IEC 27001 compliance.',
      'Strengthen observability by integrating Prometheus, Grafana, Loki, and ELK Stack with Nutanix and Kubernetes for real-time monitoring, alerting, and auditing.',
      'Successfully executed core service migration with near-zero downtime, including live VM migration, VXLAN networking redesign, and Kubernetes rollout.',
      'Actively study and implement Public Key Infrastructure (PKI) components, including EJBCA for certificate lifecycle management.'
    ],
    tags: ['Nutanix', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'PKI/EJBCA']
  },
  {
    id: 'deltadata',
    role: 'IT Infrastructure Senior',
    company: 'Deltadata Mandiri',
    period: 'May 2025 — Sep 2025',
    icon: 'fa-server',
    details: [
      'Design, deploy, and maintain enterprise-grade VMware vSphere/ESXi clusters, ensuring high availability, scalability, and disaster recovery readiness.',
      'Lead server and storage infrastructure modernization, including VMware migrations, vCenter consolidation, and cluster performance tuning.',
      'Manage and optimize on-premise workloads while integrating with hybrid cloud solutions (GCP, Nutanix AHV/Prism, Kubernetes).',
      'Automate provisioning and configuration using Terraform and Ansible, reducing manual effort and improving operational efficiency.',
      'Enhance system observability with Prometheus, Grafana, ELK Stack, and VMware monitoring tools.'
    ],
    tags: ['VMware', 'GCP', 'Nutanix', 'Kubernetes', 'Terraform']
  },
  {
    id: 'apr',
    role: 'Sr. DevOps & Site Reliability Engineer',
    company: 'Asia Pelangi Remiten',
    period: 'Nov 2024 — May 2025',
    icon: 'fa-chart-line',
    details: [
      'Leading the design and implementation of a scalable and secure infrastructure architecture for a fintech remittance platform, built on GCP with Kubernetes and microservices.',
      'Managing a small SRE/Infra team, responsible for incident response, production stability, and IaC automation using Terraform and GitHub Actions.',
      'Driving observability improvements using Prometheus, Grafana, and Loki to ensure system performance, uptime SLAs, and proactive issue detection.',
      'Implementing GitOps-based CI/CD workflows to ensure consistent, automated delivery and rollback of services.',
      'Collaborating with backend, QA, and product teams to improve reliability and reduce lead time to deploy by 70%.',
      'Led the successful migration of core infrastructure from GCP to on-premise environment using Proxmox VE, optimizing cost and improving infrastructure control.'
    ],
    tags: ['GCP', 'Kubernetes', 'Proxmox', 'DevOps', 'GitOps']
  },
  {
    id: 'ift',
    role: 'Lead IT System Administrator',
    company: 'Indo Fin Tek',
    period: 'Apr 2021 — Nov 2024',
    icon: 'fa-shield-alt',
    details: [
      'Led cloud migration project to GCP with zero critical downtime.',
      'Implemented Terraform for infrastructure provisioning and improved scalability.',
      'Built monitoring and logging using Prometheus, Grafana, and ELK Stack.',
      'Automated CI/CD pipelines using GitLab CI, reducing deployment time by 95%.',
      'Ensured ISO 27001 compliance and acted as Head of ISMS for internal audits.',
      'Designed and maintained Kubernetes workloads, CI/CD automation, and observability stack.',
      'Reduced deployment downtime by 90% and improved service reliability.'
    ],
    tags: ['GCP', 'CI/CD', 'ISO 27001', 'ISMS', 'Kubernetes']
  },
  {
    id: 'trinusa',
    role: 'IT Infrastructure',
    company: 'Trinusa Travelindo',
    period: 'Nov 2019 — Apr 2021',
    icon: 'fa-network-wired',
    details: [
      'Managed Linux and Windows infrastructure across multi-site environments.',
      'Developed access control and asset management systems.',
      'Led network optimization initiatives and incident response routines.'
    ],
    tags: ['Infrastructure', 'Networking', 'Linux']
  },
  {
    id: 'gojek',
    role: 'IT Support Engineer',
    company: 'Aplikasi Karya Anak Bangsa',
    period: 'Dec 2017 — Nov 2019',
    icon: 'fa-headset',
    details: [
      'Provided Level 2/3 technical support for IT and networking operations across Southeast Asia.',
      'Maintained Linux servers, VOIP systems, and security infrastructure.',
      'Configured and deployed Unifi/Cisco/Fortinet devices for regional offices.'
    ],
    tags: ['IT Support', 'Networking', 'Linux']
  },
  {
    id: 'namasindo',
    role: 'IT Support Engineer',
    company: 'Namasindo Plas Abadi',
    period: 'Apr 2014 — Jun 2017',
    icon: 'fa-tools',
    details: [
      'Managed Oracle systems and Cisco-based networks.',
      'Delivered internal training and supported user productivity across teams.'
    ],
    tags: ['IT Support', 'Oracle', 'Cisco']
  },
  {
    id: 'cnooc',
    role: 'IT Support',
    company: 'China National Offshore Oil Corporation',
    period: 'Mar 2013 — Mar 2014',
    icon: 'fa-oil-can',
    details: [
      'First-line technical support and V-SAT network management.',
      'Contributed to infrastructure documentation and system rollout.'
    ],
    tags: ['IT Support', 'Oil & Gas', 'V-SAT']
  }
]

export const education = {
  degree: 'Diploma — Manajemen Informatika',
  school: 'Politeknik Negeri Lampung',
  period: '2009 — 2012'
}
